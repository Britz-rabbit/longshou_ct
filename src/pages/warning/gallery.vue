<template>
  <div class='galleryCon'>
    <!-- 左上角设备信息 -->
    <div class="DeviceCon ">

      <div v-for="(item, index) in 20" class="devItem"></div>
      <div class="devItem"></div>
    </div>
    <!-- 右上角信息框 -->
    <div class="infoBlock">
      <div v-show="choseDeviceInfo.name">
        <div class="con" style="height:25%;">
          <span>设备名称：{{ choseDeviceInfo.name }}</span>
        </div>
        <div class="con" style="height:25%;">
          <span>设备位置：{{ choseDeviceInfo.position }}m</span>
        </div>
        <div class="con" style="height:25%;">
          <span>显示数值：{{ choseDeviceInfo.num }}</span>
        </div>
        <div class="con" style="height:25%;">
          <span v-if="choseDeviceInfo.isErr">当前状态：<span class="error">异常</span></span>
          <span v-else>当前状态：<span class="success">正常</span></span>
        </div>
      </div>
    </div>
    <!-- 每个位置的小点，不使用遍历是因为要单独便利 -->
    <el-tooltip :content="deviceInfoList[0].name">
      <div class="device d1" @click="choseDevice(0)" :class="deviceInfoList[0].isErr ? 'err' : 'suc'">
      </div>
    </el-tooltip>
    <el-tooltip :content="deviceInfoList[1].name">
      <div class="device d2" @click="choseDevice(1)" :class="deviceInfoList[1].isErr ? 'err' : 'suc'"></div>
    </el-tooltip>
    <el-tooltip :content="deviceInfoList[2].name">
      <div class="device d3" @click="choseDevice(2)" :class="deviceInfoList[2].isErr ? 'err' : 'suc'"></div>
    </el-tooltip>
    <img :src="imgSrc" alt="" srcset="">
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      //廊道背景
      imgSrc: require('@/assets/img/warning/tc.gif'),
      //定时器占位符
      timer1: null,
      //廊道设施设备信息列表的占位符
      deviceInfoList: [
        { name: '警报器1号', position: 12, num: 32, isErr: false },
        { name: '警报器2号', position: 34, num: 46, isErr: false },
        { name: '警报器3号', position: 62, num: 74, isErr: true },
      ],
      //当前选中的元素信息
      choseDeviceInfo: {}
    }
  },
  props: {
  },
  components: {

  },
  computed: {

  },

  mounted() {
   
  },
  beforeDestroy() {
    clearInterval(this.timer1)
  },
  methods: {
    choseDevice(index) {
      this.choseDeviceInfo = this.deviceInfoList[index]
    },
  },
}
</script>

<style lang='less' scoped >
.galleryCon {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    position: none;
    margin-top: 36vh;
    width: 100%;
    height: auto;
  }

}

.border {
  border: 1px solid red;
}

.con {
  width: 100%;
  font-size: 22px;

  span {
    color: #01FDF9;
    font-size: 22px;
    line-height: 4vw;
    padding-left: 1.6vw;
  }

  //用于显示文字的异常状态
  .success {
    color: green;
  }

  .error {
    color: red;
  }
}

//左上角信息设备
.DeviceCon {
  position: absolute;
  width: 70%;
  height: 57%;
  display: flex;
  flex-wrap: wrap;
  white-space: wrap;
  align-self: flex-start;
  //background-color: #0B326940;
  //border: 1px solid rgb(63, 63, 214);

  .devItem {
    width: 120px;
    height: 50px;
    //border: red 1px solid;
    margin: 6px 6px;
    background: url('@/assets/img/warning/barBG.png') no-repeat;
    background-size: cover;

    &:hover {
      cursor: pointer;
    }
  }
}

//右上角的设备信息显示栏
.infoBlock {
  position: absolute;
  width: 14vw;
  height: 32vh;
  right: 0;
  top: 0;
  border: 1px solid rgb(63, 63, 214);
  background-color: #385a8330;
}


//用于显示设备小点的异常状态
.err {
  background-color: red;
  box-shadow: 0 0 3px 3px red;
}

.suc {
  background-color: green;
  box-shadow: 0 0 3px 3px green;
}

//代表设备的小点，需要被定位
.device {
  position: absolute;
  border: #a89f9f 1px solid;
  border-radius: 50%;
  width: 1.2vw;
  height: 1.2vw;

  &:hover {
    cursor: pointer;
  }

  animation: shade 1.4s infinite;
}

.d1 {
  bottom: 150px;
  left: 50px;
}

.d2 {
  bottom: 125px;
  left: 320px;
}

.d3 {
  bottom: 90px;
  left: 520px;
}

//背景闪烁的动画
@keyframes shade {
  from {
    opacity: 1;
  }

  50% {
    //background-color: transparent;
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
</style>