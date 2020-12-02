<template>
  <div class="footer d-flex flex-justify-content-between">
    <div class="footer-logo-box d-flex flex-align-center">
      <img class="footer-logo" src="../../../assets/logo.png" />
    </div>
    <div class="equipment-and-current-date">
      <div class="current-time">{{ footerData.nowTime }}</div>
      <p class="equipment-date">
        <span class="equipment-number">设备号：0001 </span>
        <span class="current-date">{{ footerData.nowDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["footerData"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  height: 70px !important;
  width: 100%;
  background: white;
  padding: 0 20px 0 16px !important;
  p {
    margin: 0;
  }
  .footer-logo-box {
    img {
      width: 405px;
      height: 70px;
    }
  }
  .equipment-and-current-date {
    color: #778390;
    text-align: right;
    .current-time {
      height: 28px;
      font-size: 28px;
      margin: 5px 0 9px 0;
    }
    .equipment-date {
      //margin-bottom: 8px;
      .equipment-number {
        font-size: 14px;
      }
      .current-date {
        height: 20px;
        font-size: 20px;
        margin-left: 14px;
      }
    }
  }
}
</style>
