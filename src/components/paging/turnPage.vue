<template>
  <div class="turn-pages-container">
    <div
      class="page-btn prev-btn"
      :class="[currentPage === 1 ? 'no-active' : 'active']"
      @click="turnPage(1)"
    >
      <span :class="[currentPage === 1 ? 'no-active' : 'active']"></span>
    </div>
    <div
      class="page-btn next-btn"
      :class="[currentPage === totalPages ? 'no-active' : 'active']"
      @click="turnPage(2)"
    >
      <span
        :class="[currentPage === totalPages ? 'no-active' : 'active']"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: () => 0,
    },
    totalPages: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     *
     *  params  1 为上一页  2  为下一页
     *
     */
    turnPage(params) {
      if (params === 1) {
        if (this.currentPage === 1) return;
        this.$emit("turnPage", params);
      } else {
        if (this.currentPage === this.totalPages) return;
        this.$emit("turnPage", params);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.turn-pages-container {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  // top: 50%;
  // transform: translateY(-50%);
  .page-btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 34px;
    &.prev-btn {
      span {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-radius: 4px;
        &.no-active {
          border-bottom: 18px solid #c5c8ca;
        }
        &.active {
          border-bottom: 18px solid #52b7ff;
        }
      }
    }
    &.next-btn {
      span {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-radius: 4px;
        &.no-active {
          border-top: 18px solid #c5c8ca;
        }
        &.active {
          border-top: 18px solid #52b7ff;
        }
      }
    }
    &.no-active {
      border: 2px solid #c5c8ca;
    }
    &.active {
      border: 2px solid #52b7ff;
    }
  }
}
</style>
