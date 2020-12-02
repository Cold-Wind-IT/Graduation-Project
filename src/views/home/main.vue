<template>
  <div class="main">
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 中部内容 -->
    <div class="content"></div>
    <!-- 尾部 -->
    <v-footer :footerData="footer"></v-footer>
  </div>
</template>

<script>
import VHeader from "./components/header";
import VFooter from "./components/footer";
export default {
  components: {
    VHeader,
    VFooter,
  },
  data() {
    return {
      timer: "", // 定义一个定时器的变量

      control: false,
      countdown: 60,
      secondInterval: null,

      footer: {
        nowTime: null, // 存放时分秒变量
        nowDate: null, // 存放年月日变量
      },
    };
  },
  created() {
    this.timer = setInterval(this.getTime, 1000);
  },
  methods: {
    getTime() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      this.month = check(month);
      this.day = check(day);
      this.hour = check(hour);
      this.minute = check(minute);
      this.second = check(second);
      function check(i) {
        const num = i < 10 ? "0" + i : i;
        return num;
      }
      this.footer.nowDate = year + "." + this.month + "." + this.day;
      this.footer.nowTime = this.hour + ":" + this.minute + ":" + this.second;
    },
  },
};
</script>

<style lang="scss" scope>
.main {
  width: 1024px !important;
  height: 768px !important;
  .content {
    height: 608px;
  }
}
</style>
