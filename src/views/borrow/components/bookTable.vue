<template>
  <div
    :style="'height:' + tableHeight + 'px'"
    class="cost-slot-container text-text1"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tableHeight: {
      type: Number,
      default: () => 440,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.cost-slot-container {
  margin: 0 60px;
  border: 1px solid #e0e0e0;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
  .list-header {
    height: 40px;
    p {
      margin: 0;
      height: 100%;
      line-height: 40px;
      text-align: center;
    }
  }
  .list-content {
    background: #ffffff;
    height: 40px;
    p {
      margin: 0;
      height: 100%;
      line-height: 40px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
  }
  li {
    line-height: 40px;
  }
  button {
    border: 0;
    font-size: 18px;
  }
  .have-book {
    background-color: #52b7ff;
    color: #fff;
  }
  .no-book {
    background-color: #c5c8ca;
  }
}
</style>
