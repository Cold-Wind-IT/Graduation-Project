<template>
  <div class="d-flex flex-align-center department-search-container">
    <!-- <p class="sign-out-box" @click="operation(1)" v-if="isShow">
      <img src="../../assets/search/back@2x.png" />
      <span>退出搜索</span>
    </p> -->
    <p class="search-input-box">
      <input
        :style="{ width: width + 'px' }"
        type="text"
        v-model="searchVal"
        :placeholder="placeholder"
        @click="isKeyboard = !isKeyboard"
        readonly="readonly"
      />
      <img
        class="clean-btn"
        src="../../assets/search/clean@2x.png"
        v-if="isShow"
        @click="operation(1)"
      />
    </p>
    <p class="search-tips" @click="operation(2)">
      {{ searchText ? searchText : "搜索" }}
    </p>

    <!-- 键盘 -->
    <all-lock
      @keyboardNum="keyboardNum"
      :otherList="otherList"
      :imageShow="imageShow"
      v-show="isKeyboard"
    ></all-lock>
  </div>
</template>

<script>
import AllLock from "@/components/keyboard/allLock";
import axios from "axios";
export default {
  components: {
    AllLock,
  },
  props: ["placeholder", "searchText", "width"],
  data() {
    return {
      searchVal: "",
      isKeyboard: false,
      isShow: false,
      imageShow: true,
      otherList: [
        {
          list: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        },
        {
          list: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        },
        {
          list: ["Z", "X", "C", "V", "B", "N", "M", ""],
        },
      ],
    };
  },
  methods: {
    /**
     *  操作
     * @type  1  为退出   2 为  搜索
     *
     */
    operation(type) {
      if (type === 2 && !this.searchVal) return;
      const obj = { searchVal: this.searchVal, type: type };
      axios
        .get("http://localhost:8081/findByQuery/" + this.searchVal)
        .then((res) => {
          console.log(res);
        });
    },

    /**
     *  @val  键盘数字
     */
    keyboardNum(val) {
      if (val) {
        this.searchVal += val;
      } else {
        this.searchVal = this.searchVal.substring(0, this.searchVal.length - 1);
      }
    },
  },
  watch: {
    searchVal(val) {
      if (val) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.department-search-container {
  margin: 2px 0 2px 0;
  p {
    margin: 0;
  }
  .sign-out-box {
    img {
      width: 32px;
      height: 32px;
      vertical-align: bottom;
    }
    span {
      color: #2398eb;
      font-size: 26px;
      margin-left: 8px;
    }
  }
  .search-input-box {
    position: relative;
    .clean-btn {
      position: absolute;
      width: 32px;
      height: 32px;
      right: 19px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      width: 524px;
      height: 54px;
      line-height: 54px;
      background: #efefef;
      border-radius: 4px;
      font-size: 26px;
      padding-left: 16px;
      background: #ffffff;
      border-radius: 4px;
      border: 2px solid #4ab4ff;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #7d95b1;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #7d95b1;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #7d95b1;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #7d95b1;
    }
  }
  .search-tips {
    margin-left: 12px;
    width: 160px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    background: rgba(74, 180, 255, 1);
    border-radius: 4px;
    color: #ffffff;
    font-size: 26px;
  }
}
</style>
