<template>
  <div class="d-flex flex-wrap num-lock-container">
    <p class="lock" v-for="(item,index) in data" :key="index" @click="entry(item)">
      <span v-if="item" :class="{'clean-val':item == '清除'}">{{item}}</span>
      <img v-else src="../../assets/img/del-lock@2x.png" />
    </p>
  </div>
</template>

<script>
export default {
  props:["data"],
  data() {
    return {
    };
  },
  methods: {
     entry(item) {
      this.$emit("entry",item)
     } 
  },
};
</script>

<style lang="scss" scoped>
.num-lock-container {
  p {
    margin: 0;
  }
  .lock {
    width: 68px;
    height: 68px;
    border-radius: 38px;
    border: 1px solid #52B7FF;
    text-align: center;
    font-size: 36px;
    color: #273037;
    margin-left: 12px;
    margin-bottom: 12px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    .clean-val {
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #2398EB;
    }
    img {
      width: 48px;
      height: 48px;
      // vertical-align: text-bottom;
    }
  }
}
</style>
