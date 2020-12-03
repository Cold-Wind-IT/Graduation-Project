<template>
  <div>
    <!-- 主要功能 -->
    <div class="base-btn-area d-flex">
      <div v-for="(btn, index) in btns" :key="index">
        <div :class="btn.style" @click="handle(btn.name)">
          <img :src="btn.icon" />
          <p>{{ btn.text }}</p>
        </div>
      </div>
    </div>
    <!-- 其他功能 -->
    <div class="other-btn-area d-flex"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns: [
        {
          name: "query",
          text: "图书查询",
          style: "btn-query bg-color-DarkOrange",
          icon: require("../../assets/button/图书查询.png"),
        },
        {
          name: "borrow",
          text: "图书借阅",
          style: "btn-borrow bg-color-LightYellow",
          icon: require("../../assets/button/图书借阅.png"),
        },
        {
          name: "return",
          text: "图书归还",
          style: "btn-return bg-color-DoderBlue",
          icon: require("../../assets/button/图书归还.png"),
        },
        {
          name: "navigation",
          text: "馆内导航",
          style: "btn-navigation bg-color-PaleGreen",
          icon: require("../../assets/button/导航.png"),
        },
      ],
    };
  },
  methods: {
    handle(item) {
      console.log(item);
      this.$router.push("/" + item);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-btn-area {
  width: 835px;
  height: 380px;
  margin-left: 95px;
  padding-top: 60px;
  text-align: center;
  p {
    margin-top: 10px;
    font-size: 26px;
    color: #ffffff;
  }
  .btn-query {
    width: 198px;
    height: 370px;
    border-radius: 10px;
    img {
      margin-top: 80px;
      width: 120px;
      height: 120px;
    }
  }
  .btn-borrow {
    height: 183px;
    width: 410px;
    border-radius: 10px;
    margin-left: 10px;
    img {
      margin-top: 20px;
      width: 96px;
      height: 96px;
    }
  }
  .btn-return {
    position: absolute;
    top: 338px;
    left: 293px;
    height: 183px;
    width: 410px;
    border-radius: 10px;
    margin-left: 10px;
    img {
      margin-top: 20px;
      width: 96px;
      height: 96px;
    }
  }
  .btn-navigation {
    width: 198px;
    height: 370px;
    border-radius: 10px;
    margin-left: 10px;
    img {
      margin-top: 80px;
      width: 120px;
      height: 120px;
    }
  }
}
/**  盒子背景颜色 */
//   深橙色
.bg-color-DarkOrange {
  background: linear-gradient(
    180deg,
    rgba(254, 114, 68, 1) 0%,
    rgba(255, 144, 49, 1) 100%
  );
  box-shadow: 0px 2px 5px 0px rgba(244, 118, 26, 0.4);
}
//浅黄
.bg-color-LightYellow {
  background: linear-gradient(
    360deg,
    rgba(253, 182, 91, 1) 0%,
    rgba(250, 149, 50, 1) 100%
  );
  box-shadow: 0px 2px 5px 0px rgba(243, 140, 39, 0.4);
}
//道奇蓝
.bg-color-DoderBlue {
  background: linear-gradient(
    360deg,
    rgba(71, 183, 241, 1) 0%,
    rgba(14, 110, 223, 1) 100%
  );
  box-shadow: 0px 2px 5px 0px rgba(78, 156, 239, 0.4);
}
//浅绿色
.bg-color-PaleGreen {
  background: linear-gradient(
    360deg,
    rgba(87, 221, 146, 1) 0%,
    rgba(30, 192, 174, 1) 100%
  );
  box-shadow: 0px 2px 5px 0px rgba(30, 192, 174, 0.4);
}
</style>
