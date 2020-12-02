<template>
  <div class="all-lock-container" :class="[{'put-away-keyboard' : !isKeyboardOpen},{'pack-up':!show}]">
    <div class="d-flex flex-justify-content flex-align-center image" v-show="imageShow">
       <img  @click="packUp()"   v-show="packUpShow" src="../../assets/img/pack-up.png" />
       <img  @click="spread()"   v-show="spreadShow" src="../../assets/img/spread.png" />
    </div>
    <div
      class="d-flex flex-justify-content"
      :class="{'margin-top' : index !==0}"
      v-for="(item,index) in (otherList ? otherList : list)"
      :key="index"
    >
      <div
        class="lock d-flex flex-align-center flex-justify-content"
        :class="[{'margin-left' : i !==0},{'character': /^[0-9]+.?[0-9]*$/.test(subItem)},{'put-lock': subItem == '收起键盘' || subItem == '展开键盘'},{'clean-font-size' : subItem == '清空'}]"
        v-for="(subItem,i) in item.list"
        :key="i"
        @click="entry(subItem,index,i)"
      >
        <div class="d-flex flex-column put-open-keyboard-text" v-if="subItem == '收起键盘' || subItem === '展开键盘'">
          <p>{{subItem.substring(0,2)}}</p>
          <p> {{subItem.substring(2,4)}}</p>
        </div>
        <img v-else-if="!subItem" src="../../assets/img/del-lock@2x.png" />
        <span v-else :class="{'clean-val':subItem == '清空'}" >{{subItem}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["otherList","imageShow"],

  data() {
    return {
      list: [
        {
          list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "收起键盘"],
        },
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
      isKeyboardOpen: true,
      show:true,
      packUpShow:true,
      spreadShow:false,
    };
  },
  methods: {
    entry(subItem, index, i) {
      if (subItem === "收起键盘" || subItem === "展开键盘") {
        if (this.list[index].list[i] == "收起键盘") {
          this.list[index].list[i] = "展开键盘";
        } else {
          this.list[index].list[i] = "收起键盘";
        }
        this.$forceUpdate();
        this.isKeyboardOpen = !this.isKeyboardOpen;
      } else {
        this.$emit("keyboardNum", subItem);
      }
    },
    packUp(){
     this.$forceUpdate();
     this.show=!this.show;
     this.packUpShow=!this.packUpShow;
     this.spreadShow=!this.spreadShow;
    },
    spread(){
    this.$forceUpdate(); 
    this.show=!this.show;
    this.packUpShow=!this.packUpShow;
    this.spreadShow=!this.spreadShow;
    }

  },
};
</script>

<style lang="scss" scoped>
.all-lock-container {
  width: 1024px;
  height: 340px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(151, 151, 151, 1);
  padding: 20px 78px 12px 78px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 88;
  .image{
    width: 788px;
    height: 44px;
    margin: 0px 77px 15px 39px;
    background: #000000;
    border-radius: 6px;
    opacity: 0.7;
  }
  &.pack-up{
    height: 73px;
    overflow: hidden;
  }
  &.put-away-keyboard {
    height: 95px;
    overflow: hidden;
  }
  .margin-top {
    margin-top: 12px;
  }
  .lock {
    width: 68px;
    height: 68px;
    line-height: 68px;
    text-align: center;
    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #52B7FF;
    color: #273037;
    font-size: 24px;
    font-weight: 500;
    font-family: PingFangSC-Medium, PingFang SC;
    &.margin-left {
      margin-left: 12px;
    }
    &.character {
      font-size: 30px;
    }
    &.clean-font-size {
      font-size: 24px;
    }
    &.put-lock {
      font-size: 20px;
      line-height: inherit;
      span {
        position: relative;
        top: 8px;
      }
    }
    .clean-val {
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2398EB;
    }
    .put-open-keyboard-text {
      line-height: 20px;
       p {
        margin: 0;
      }
    }
    img {
      width: 48px;
      height: 48px;
      vertical-align: text-top;
    }
  }
}
</style>
