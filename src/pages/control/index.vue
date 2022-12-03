<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class='flex container'>
      <div class="s1 ">
        <dv-border-box-10>
          <div class="icons ">
            <i class="iconfont icon-jiqiren"></i>
            <i class="iconfont icon-dengguang"></i>
            <i class="iconfont icon-connection"></i>
          </div>
          <div class="img">
            <!-- <ws v-show="main_viceFlag"></ws> -->
            <img v-show="main_viceFlag" :src="rgb_msg" style="width:100%;height:100%" />
            <IR_video v-show="!main_viceFlag"></IR_video>
          </div>
        </dv-border-box-10>
      </div>

      <div class="s2 session">
        <titleBar :title="'控制面板'"></titleBar>
        <div class="con con1">
          <!-- <ctlPanel></ctlPanel> -->
          <div class='ctlPanelCon'>
            <!-- 图标矩阵，图取自element UI -->
            <div class="iconRect">
              <div v-for="(item, index) in iconList" class="iconCon ani1" @mouseenter="addAni" @mouseleave="removeAni"
                @click="sendMsg('funLib', 1, 0, item.title)">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="con flex con2" id="controlVideo">
          <div class="chose " @click="main_viceFlag = true" :class="main_viceFlag ? 'chosed' : ''">
            <!-- <ws></ws> -->
            <img :src="rgb_msg" style="width:100%;height:100%" />
          </div>
          <div class="chose " @click="main_viceFlag = false" :class="!main_viceFlag ? 'chosed' : ''">
            <IR_video></IR_video>
          </div>
        </div>
        <span style="position:absolute;margin-left:30x;font-size: 36px;color: antiquewhite;">{{robotSpeed}}m/s &nbsp;&nbsp;&nbsp;{{robotPosition}}m</span>
        
        <!-- 按钮区域 -->
        <div class="con con3 flex">
          <div class="panel ">
            <!-- 左侧控制 -->
            <div class="title">
              <span>机器人控制</span>
            </div>
            <div class="line line1 ">
              <div @click="sendMsg('robot', 3, 0, '机器人加速')" class="btn pluse"></div>
            </div>
            <div class="line line2 ">
              <div @click="sendMsg('robot', 2, 0, '机器人后退')" class="btn left"></div>
              <div @click="sendMsg('robot', 5, 0, '机器人停止')" class="btn pause"></div>
              <div @click="sendMsg('robot', 1, 0, '机器人前进')" class="btn right"></div>
            </div>
            <div class="line line1 ">
              <div @click="sendMsg('robot', 4, 0, '机器人减速')" class="btn min"></div>
            </div>
          </div>

          <!-- 右侧控制 -->
          <div class="panel ">
            <div class="title">
              <span>舵机控制</span>
            </div>
            <div class="line1" style="width:100%;height:100%;position: relative;">
              <!-- 左侧舵机亮度 -->
              <div class="light" style="left:14%;top: 36%;">
                <div @click="sendMsg('steer', 5, 'plus', '左侧亮度增加')">亮度+</div>
                <div @click="sendMsg('steer', 6, 'min', '左侧亮度增加')">亮度-</div>
              </div>
              <!-- 右侧舵机亮度 -->
              <div class="light" style="right:12%;top: 36%;">
                <div @click="sendMsg('steer', 7, 'plus', '右侧亮度增加')">亮度+</div>
                <div @click="sendMsg('steer', 8, 'min', '右侧亮度增加')">亮度-</div>
              </div>

              <!-- 控制两侧舵机翻转 -->
              <div class="steer">
                <div @click="sendMsg('steer', 1, 0, '左侧舵机向上')" class="btn up"></div>
                <div @click="sendMsg('steer', 2, 0, '左侧舵机向下')" class="btn down"></div>
              </div>
              <div class="steer">
                <div @click="sendMsg('steer', 3, 0, '右侧舵机向上')" class="btn up"></div>
                <div @click="sendMsg('steer', 4, 0, '右侧舵机向下')" class="btn down"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </dv-full-screen-container>
</template>

<script>
// import ws from './components/ws.vue'
// import ctlPanel from './components/ctlPanel.vue'
export default {
  name: '',
  data() {
    return {
      //主副视频的播放次序占位符
      main_viceFlag: true,
      //控制按钮的图标列表
      iconList: [
        { icon: 'iconfont icon-back', title: '全程巡航' },
        { icon: 'iconfont icon-chongdian', title: '回程充电' },
        { icon: 'iconfont icon-xiala', title: '语音播报' },
        { icon: 'iconfont icon-dengguang', title: '左舵机灯' },
        { icon: 'iconfont icon-zhongzhi-', title: '故障复位' },
        { icon: 'iconfont icon-dengpao', title: '右舵机灯' },
        { icon: 'iconfont icon-jiaoju', title: '焦距回零' },
        { icon: 'iconfont icon-jujiao', title: '自动聚焦' },
        { icon: 'iconfont icon-jietu', title: '快速截图' },
      ],
      //机器人视频
      rgb_msg: "",
      //机器人当前位置(测试用)
      robotPosition: (this.$store.state.robotInfo.currentPosition) / 1000 || 0,
      robotSpeed: this.$store.state.robotInfo.currentSpeed || 0,
      //data refresh flage timer
      refreshTimer:null
    }
  },
  props: {
  },
  components: {

  },
  computed: {

  },
  beforeCreate() {
    if (this.cameraWs) this.cameraWs = null
  },

  beforeMount() {


  },
  mounted() {
    this.initPageWS()
    this.initWebCameraWs()

    this.refreshTimer=setInterval(() => {
      this.robotPosition=this.$store.state.robotInfo.currentPosition || 0
      this.robotSpeed=this.$store.state.robotInfo.currentSpeed || 0
    }, 300);
  },
  beforeDestroy() {
    this.websocketclose();

    clearInterval(this.refreshTimer)
  },
  methods: {
    //pageWs的一系列方法
    initPageWS() {
      //pageWs的建立
      const url = 'ws://192.168.2.38:31000';
      this.pageWs = new WebSocket(url);
      this.pageWs.onopen = this.websocketonopen;
      this.pageWs.onerror = this.websocketonerror;
      this.pageWs.onmessage = this.websocketonmessage;
      this.pageWs.onclose = this.websocketclose;

    },
    PageWSonopen() {
      console.log("pageWs与cameraWs连接成功");

    },
    PageWSonerror(e) {
      console.log(e);
    },
    PageWSonmessage(e) {
      //alert(e.data)
    },
    PageWSclose() {
      console.log("pageWs关闭");
      this.pageWs.close();
    },

    //视频的一系列ws方法
    initWebCameraWs() {
      const wsuri = 'ws://192.168.2.228:40001';
      //创建一个ws实例，并将对应状态的ws处理都写好集中
      this.cameraWs = new WebSocket(wsuri);
      this.cameraWs.onopen = this.cameraWsOnopen;
      this.cameraWs.onerror = this.cameraWsOnerror;
      this.cameraWs.onmessage = this.cameraWsOnmessage;
      this.cameraWs.onclose = this.cameraWsClose;
    },
    cameraWsOnopen() {
      console.log("cameraWs连接成功");
    },
    cameraWsOnerror(e) {
      console.log(e);
    },
    cameraWsOnmessage(e) {
      this.rgb_msg = "data:image/jpeg;base64," + e.data;
    },
    cameraWsClose() {
      console.log("cameraWs connection closed");
      this.cameraWs.close();
    },


    //处理功能发送
    sendMsg(type, action, light, message) {
      let paras = JSON.stringify({ type, action, light, message })
      console.log(paras);
      this.pageWs.send(paras)
    },

    //鼠标进入添加动画类名
    addAni(e) {
      //console.log(e.currentTarget.style);
      e.currentTarget.className = 'iconCon ani2'
    },
    //鼠标离开移除动画类名
    removeAni(e) {
      e.currentTarget.className = 'iconCon ani1'
    },




  },
  beforeDestroy() {
    console.log(this.pageWs);
    this.websocketclose()
  }
}
</script>

<style lang='less' scoped >
@import '@/assets/css/common.less';


.border {
  border: 1px solid red;
}

// .session {
//   border: 1px solid yellow;
// }


#dv-full-screen-container {
  background: url('@/assets/img/background.png');
  background-size: cover;
}

.con {
  width: 100%;
  //border: 1px solid red;
}

img {
  width: 100%;
  height: 100%;
}

.s1 {
  height: 100%;
  width: 70%;
  background-color: rgba(6, 80, 109, 0.2);
  border-radius: 4%;
  margin-top: 1vh;
  overflow: hidden;



  .dv-border-box-10 {
    position: relative;
    overflow: hidden;
    padding-bottom: 1vh;

    .icons {
      position: relative;
      z-index: 10;
      width: 18%;
      height: 8%;
      left: 3vw;
      top: 4vh;
      display: flex;
      justify-content: space-around;

      i {
        font-size: 28px;
        color: #32CE84;
      }
    }

    .img {
      width: 96%;
      height: 96%;
      border-radius: 4%;
      position: absolute;
      z-index: 9;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      overflow: hidden;
    }
  }

}

.s2 {
  height: 100%;
  width: 26%;
  background-color: rgba(6, 80, 109, 0.2);
  background-color: #00296B60;

  .con1 {
    height: 35%;

    .flex {
      display: flex;
    }

    // 上方功能矩阵的组件容器
    .ctlPanelCon {
      width: 100%;
      height: 100%;
      min-width: 240px;
      box-sizing: border-box;
      background-color: transparent;
      display: flex;
      flex-direction: column;
    }

    //上方图标矩阵区域
    .iconRect {
      display: flex;
      width: 80%;
      height: 90%;
      flex-wrap: wrap;
      margin: auto;
    }

    .iconCon {
      display: flex;
      background-color: #27519D;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      height: 30%;
      border: 2px solid #1C8AD2;
      border-radius: 8px;
      box-sizing: border-box;
      margin: 0.2vw;
      color: #4FABFD;

      i {
        text-align: center;
        font-size: 36px;
        //color: rgb(8, 61, 50);
        margin-top: 8px;
      }

      span {
        font-size: 22px;
      }

      &:hover {
        cursor: pointer;
      }

      &:active {
        color: rgb(16, 209, 209);

        i {
          color: rgb(16, 209, 209);
        }
      }

    }

    //图标的移入动画效果
    .ani1 {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid #f8f8f8;
        border-radius: 8px;
        animation: clippath 5s infinite linear;
      }
    }

    .ani2 {
      position: relative;
      transform: scale(1.06);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 4px solid #f8f8f8;
        border-radius: 8px;
        animation: clippath 5s infinite linear;
      }
    }

    @keyframes clippath {

      0%,
      100% {
        clip-path: inset(0 0 95% 0);
      }

      25% {
        clip-path: inset(0 95% 0 0);
      }

      50% {
        clip-path: inset(95% 0 0 0);
      }

      75% {
        clip-path: inset(0 0 0 95%);
      }
    }
  }

  .con2 {
    height: 25%;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;


    .chose {
      width: 48%;
      height: 86%;
      border: 1px #C0C0C0 solid;
    }

    .chosed {
      border: #32CE84 1px solid;
    }

  }

  .con3 {
    height: 35%;

    .title {
      display: flex;
      width: 80%;
      height: 5vh;
      line-height: 5vh;
      color: #ffffff;
      margin: 0 auto;
      text-align: center;
      background: url('@/assets/img/comm/bracket.png') no-repeat;
      background-size: contain;
      justify-content: center;
      align-items: center;


      span {
        color: #32CE84;
        font-size: 20px;
      }
    }

    .panel {
      width: 50%;
      height: 80%;
      margin: auto 0;


      .btn {
        width: 3vw;
        height: 3vw;
        border: 1px solid blue;
        border-radius: 50%;
      }

      .line {
        width: 100%;
        height: 33%;
        display: flex;
        align-items: center;
      }

      .line1 {
        justify-content: space-around;
        position: relative;
        display: flex;

        .light {
          position: absolute;
          width: 60px;
          height: 80px;
          //border: 1px solid red;
          right: 10%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          div {
            width: 100%;
            height: 30%;
            //border: 1px solid yellow;
            color: #4FABFD;
            border-radius: 6px;
            text-align: center;
            background-color: #27519D;
            cursor: pointer;
            padding-bottom: 2px;
            transition: all 0.3s;

            &:active {
              color: rgb(16, 209, 209)
            }

            &:hover {
              width: 108%;
              height: 34%;
            }

          }
        }

        .steer {
          margin-top: 6%;
          width: 40%;
          height: 90%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
      }

      .line2 {
        justify-content: space-around;
      }

      .btn {
        box-sizing: border-box;

        &:active {
          border: #93b939 0.2vw solid;
        }
      }

      .up {
        background: url('@/assets/img/ctlBtn/up.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/up@active.png');
          background-size: contain;
        }
      }


      .down {
        background: url('@/assets/img/ctlBtn/down.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/down@active.png');
          background-size: contain;
        }
      }

      .left {
        background: url('@/assets/img/ctlBtn/left.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/left@active.png');
          background-size: contain;
        }
      }

      .right {
        background: url('@/assets/img/ctlBtn/right.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/right@active.png');
          background-size: contain;
        }
      }

      .pluse {
        background: url('@/assets/img/ctlBtn/pluse.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/pluse@active.png');
          background-size: contain;
        }
      }

      .min {
        background: url('@/assets/img/ctlBtn/min.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/min@active.png');
          background-size: contain;
        }
      }

      .pause {
        background: url('@/assets/img/ctlBtn/pause.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/pause@active.png');
          background-size: contain;
        }
      }


    }
  }
}
</style>
