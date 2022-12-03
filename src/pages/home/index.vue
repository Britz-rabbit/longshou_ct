<template>
  <dv-full-screen-container ref="appRef">
    <!-- <dv-loading v-show="isLoading">加载中</dv-loading> -->
    <topMenu></topMenu>
    <div class="container flex">
      <!-- 左侧区域-->
      <div class="session s1">
        <dv-border-box-12>
          <titleBar :title="'实时数据检测'"></titleBar>
          <!-- logo及电量 -->
          <div class="con con1 " style="height: 15%;padding-top: 1%;">
            <div class="" style="width: 36%;height: 100%;">
              <!-- logo -->
              <div style="height:50%;width:100%" class="">
                <img src="@/assets/img/logo1.png" style="width:100%;height:70%;margin-top: 10px;">
              </div>
              <div style="height:50%;width:100%;" class="">
                <!-- <div class="connect con con1-1">
                  <i v-if="isConnect" class="success iconfont icon-connection"></i>
                  <span v-if="isConnect" class="success">已连接</span>
                  <i v-if="!isConnect" class="error iconfont icon-disconnect"></i>
                  <span v-if="!isConnect" class="error">未连接</span>
                </div> -->
                <!-- 连接状态 -->
                <div style="width: 100%;height:66px;font-size: 26px;line-height: 60px;" class="">
                  <i v-if="isConnect" class="success iconfont icon-connection" style="font-size: 36px;"></i>
                  <span v-if="isConnect" class="success"> 已连接</span>
                  <i v-if="!isConnect" class="error iconfont icon-disconnect" style="font-size: 36px;"></i>
                  <span v-if="!isConnect" class="error"> 未连接</span>
                </div>
              </div>
            </div>
            <!-- 电池电量 -->
            <div class="" style="width: 64%;height: 80%;margin-top: 5%;">
              <dv-percent-pond :config="powerConfig" style="width:90%;height:74%;margin: 6% auto;" />
            </div>
          </div>
          <!-- 机器人位置及速度 -->
          <div class="con con5 " style="height:12%;">
            <div><span>机器人当前速度</span><span>{{robotSpeed}}m/s</span></div>
            <div><span>机器人当前位置</span><span>{{robotPosition}}m</span></div>
          </div>
          <!-- 皮带视图 -->
          <div class="con gallery" style="height: 20%;margin-top: 5%;">
            <dv-border-box-10>
              <span @click="changePage('/warning')"
                style="position:absolute;right:10px;top:10px;cursor:pointer;padding: 4px;color:skyblue;font-size:18px;border: 3px solid #103F9E;border-radius: 6px;">巡检报警</span>
              <!-- 机器人位置埋点 -->
              <div class="dot d0 " :class="{ robot: currentDot === 'd0' }"></div>
              <div class="dot d1 " :class="{ robot: currentDot === 'd1' }"></div>
              <div class="dot d2  " :class="{ robot: currentDot === 'd2' }"></div>
              <div class="dot d3 " :class="{ robot: currentDot === 'd3' }"></div>
              <div class="dot d4 " :class="{ robot: currentDot === 'd4' }"></div>
              <div class="dot d5 " :class="{ robot: currentDot === 'd5' }"></div>
              <div class="dot d6 " :class="{ robot: currentDot === 'd6' }"></div>
              <div class="dot d7 " :class="{ robot: currentDot === 'd7' }"></div>
              <div class="dot d8 " :class="{ robot: currentDot === 'd8' }"></div>
              <div class="dot d9 " :class="{ robot: currentDot === 'd9' }"></div>
              <div class="dot d10 " :class="{ robot: currentDot === 'd10' }"></div>
              <div class="dot d11 " :class="{ robot: currentDot === 'd11' }"></div>
              <div class="dot d12 " :class="{ robot: currentDot === 'd12' }"></div>
              <div class="dot d13 " :class="{ robot: currentDot === 'd13' }"></div>
              <div class="dot d14 " :class="{ robot: currentDot === 'd14' }"></div>
              <div class="dot d15 " :class="{ robot: currentDot === 'd15' }"></div>
              <div class="dot d16 " :class="{ robot: currentDot === 'd16' }"></div>
              <div class="dot d17 " :class="{ robot: currentDot === 'd17' }"></div>
              <div class="dot d18 " :class="{ robot: currentDot === 'd18' }"></div>
              <div class="dot d19 " :class="{ robot: currentDot === 'd19' }"></div>
              <div class="dot d20 " :class="{ robot: currentDot === 'd20' }"></div>
              <div class="dot d21 " :class="{ robot: currentDot === 'd21' }"></div>
              <div class="dot d22 " :class="{ robot: currentDot === 'd22' }"></div>
              <div class="dot d23 " :class="{ robot: currentDot === 'd23' }"></div>
              <div class="dot d24 " :class="{ robot: currentDot === 'd24' }"></div>
              <div class="dot d25 " :class="{ robot: currentDot === 'd25' }"></div>

              <!-- 主要设备的预设埋点 -->
              <el-tooltip>
                <div slot="content"><span style="font-size:14px">撕裂检测设备</span></div>
                <div @click="changePage('/warning')" class="deviceDot break success"></div>
              </el-tooltip>
              <el-tooltip content="多功能检测设备">
                <div slot="content"><span style="font-size:14px">多功能检测设备</span></div>
                <div @click="changePage('/warning')" class="deviceDot mult success"></div>
              </el-tooltip>
              <!-- <div @click="changePage()" class="deviceDot d3"></div> -->
              <!-- 机器人位置的预设埋点 -->
              <!-- <div class="robotDot r1"></div>
              <div class="robotDot r2"></div> -->
              <img :src="imgSrc" style="width: 94%;height:50%;margin: 13% 3%;">
              <!-- <img :src="imgSrc" style="width: 94%;height:40%;margin: 16% 3%;"> -->
            </dv-border-box-10>
          </div>
          <!-- 温湿度及氧气 -->
          <div class="con con3 " style="height:25%;margin-top: 2%;">

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>红外温度</span>
                <span>72°C</span>
              </div>
              <div class="success">
                <span>正常</span>
              </div>
            </div>

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>环境温度</span>
                <span>36°C</span>
              </div>
              <div class="success">
                <span>正常</span>
              </div>
            </div>

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>环境湿度</span>
                <span>44%</span>
              </div>
              <div class="error">
                <span>异常</span>
              </div>
            </div>

            <div class="con3Item" @click="changePage('/sensor')">
              <div>
                <span>氧气浓度</span>
                <span>36%</span>
              </div>
              <div class="success ">
                <span>正常</span>
              </div>
            </div>

            <!-- <dv-water-level-pond :config="waterConfig" style="width:6vw;height:6vw;margin-left: 2vw;" /> -->


          </div>
          <!-- 烟感显示 -->
          <div class="con con4 " style="height:20%;">
            <!-- <dv-capsule-chart :config="PMconfig" style="width:100%;height:100%" /> -->
            <homeBar></homeBar>
          </div>

        </dv-border-box-12>

      </div>

      <!-- 中间及右侧区域 -->
      <div class="session s2 flex">
        <!-- 中间区域 -->
        <div class="session s2-1 flex">

          <titleBar :title="'主视频窗口'"></titleBar>
          <!--主视频 -->
          <div class="session s2-1-1 " style="width:100%;height:70%;overflow: hidden;">
            <!-- <ws v-show="!main_viceFlag"></ws> -->
            <img v-show="!main_viceFlag" :src="rgb_msg" style="width:100%;height:100%" />
            <IR_video v-show="main_viceFlag"></IR_video>
          </div>
          <!-- 中间底部图表 -->
          <div class="flex " style="height: 30%; width: 100%">
            <div class="session s2-1-2 ">
              <!-- 异常状态及巡检完成率 -->
              <homePie1></homePie1>
              <homePie2></homePie2>
            </div>
            <div class="session s2-1-3 ">
              <!-- 电机信息轮播表 -->
              <dv-border-box-6>
                <dv-scroll-board :config="ListConfig1" style="width:96%;height:92%;margin: 0 auto;padding-top: 2%;" />
              </dv-border-box-6>

            </div>
          </div>


        </div>

        <!-- 右侧区域 -->
        <div class="session s2-2">
          <dv-border-box-12>
            <titleBar :title="'副视频窗口'"></titleBar>
            <!-- 副视频 -->
            <div class="con s2-2-1 " @click="main_viceFlag = !main_viceFlag" style="height:35%;padding-top: 3%;">
              <!-- <ws v-show="main_viceFlag"></ws> -->
              <img v-show="main_viceFlag" :src="rgb_msg" style="width:100%;height:100%" />
              <IR_video v-show="!main_viceFlag"></IR_video>
            </div>
            <!-- 机器人控制 -->
            <div class="s2-2-2 " style="height:29%;">
              <!-- 模型和在线状态 -->
              <div class="" style="width:100%;height:35%;display: flex;justify-content: space-around;">
                <div class="img ">
                  <!-- <img :src="modelSrc"> -->
                  <img src="@/assets/img/home/model.gif" alt="" srcset="">
                </div>
                <div class="robotStatus " style="height:80%;width:55%;margin-top: 1.6vh;">
                  <dv-border-box-12>
                    <span class="">
                      快速控制
                    </span>
                  </dv-border-box-12>
                </div>
              </div>
              <!-- 启动停止按钮 -->
              <div class="btnCon " style="display:flex;justify-content:space-around;align-items:center">
                <div class="btn "></div>
                <div class="btn "></div>
              </div>
              <!-- 机器人巡航 -->
            </div>
            <div class="con s2-2-3 flex " style="height:29%;">
              <span style="width:100%;text-align: center;font-size: 26px;" class=""> 巡检模式 </span>
              <div class="ItemCon ">
                <div class="insItem"><span>自动巡检</span>
                  <el-tooltip>
                    <div slot="content">
                      <span style="font-size:14px">
                        机器人将以匀速进行往返巡检，直至电量耗尽则自动回程充电</span>
                    </div>
                    <div class="" @click="changeMode(1)"><img :class="inspectionMode === 1 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>

                </div>
                <div class="insItem"><span>快速巡检</span>
                  <el-tooltip>
                    <div slot="content"><span style="font-size:14px">
                        机器人将以较快的速度巡检一圈，便于快速检测工区情况</span></div>
                    <div class="" @click="changeMode(2)"><img :class="inspectionMode === 2 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>
                </div>
                <div class="insItem"><span>预设巡检</span>
                  <el-tooltip>
                    <div slot="content"><span style="font-size:14px">
                        机器人按照预设的时间段和速度巡检。</span></div>
                    <div class="" @click="changeMode(3)"><img :class="inspectionMode === 3 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>
                </div>
              </div>
            </div>

            <!-- 预设巡检的设定对话框 -->
            <el-dialog title="预设巡检" top="25vh" :modal="false" :visible.sync="isPlaningPatrol">
              <!-- 巡检表头：时间选择器，巡检速度，巡检次数-->
              <div style="display:flex;justify-content: space-between;margin:10px auto;width: 90%;">
                <el-time-picker v-model="planingPatrolInfo.startTime" :picker-options="{
                  selectableRange: '00:00:00 - 23:59:59'
                }" placeholder="巡检起始时间" value-format="timestamp">
                </el-time-picker>

                <div style="height:10px"></div>
                <el-select width="100" v-model="planingPatrolInfo.type" placeholder="请选择巡检方案">
                  <el-option v-for="item in dislogPotions.typeOpt" :key="item.value" :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>

                <div style="height:10px"></div>
                <el-select v-model="planingPatrolInfo.times" placeholder="请选择巡检次数">
                  <el-option label="巡检一次" value="1"></el-option>
                  <el-option label="巡检两次" value="2"></el-option>
                  <el-option label="巡检三次" value="3"></el-option>
                </el-select>
              </div>


              <!-- 预设点位 -->
              <el-form :model="planingPatrolInfo.plans.points" ref="pointsForm" label-width="100px">
                <el-form-item v-for="(point, index) in planingPatrolInfo.plans.points" :label="'点位' + index"
                  :key="point.position" :rules="{
                    required: true, message: '点位信息不能为空', trigger: 'blur'
                  }">
                  <el-input placeholder="速度" style="width: 40%;margin-left:10px;" type="number"
                    oninput="if(value>1.5)value=1.5;if(value<0.2)value=0.2" step="0.1" v-model="point.speed">
                    <template slot="append">m/s</template>
                  </el-input>

                  <el-input placeholder="位置" style="width: 40%;margin-left:10px;" type="number"
                    oninput="if(value>1200)value=1200;if(value<0)value=0" step="1" v-model="point.location">
                    <template slot="append">m</template>
                  </el-input>

                  <el-input placeholder="偏航" style="width: 40%;margin-left:10px;margin-top: 10px;" type="number"
                    oninput="if(value>360)value=360;if(value<0)value=0" step="1" v-model="point.yaw">
                    <template slot="append">°</template>
                  </el-input>

                  <el-input placeholder="俯仰" style="width: 40%;margin-left:10px;margin-top: 10px;" type="number"
                    oninput="if(value>194)value=194;if(value<95)value=95" step="1" v-model="point.pitch">
                    <template slot="append">°</template>
                  </el-input>

                  <el-button style="margin-left:10px;" type="danger" @click.prevent="removePoint(point)">删除</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button @click="addPoint">新增点位</el-button>

                </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer" style="margin-bottom:90px;position: relative;">
                <el-button style="position: absolute; right: 30%;" @click="isPlaningPatrol = false">取 消</el-button>
                <el-button style="position: absolute; left: 30%;" type="primary" @click="isPlaningPatrol = false">设 定
                </el-button>
              </div>
            </el-dialog>

          </dv-border-box-12>

        </div>
      </div>
    </div>
  </dv-full-screen-container>

</template>

<script>
import drawMixin from "@/utils/drawMixin";
import homePie1 from './charts/homePie1.vue'
import homePie2 from "./charts/homePie2.vue";
import homeBar from './charts/homeBar.vue'

// import homeBar2 from './charts/homeBar2.vue'
// import ws from './components/ws.vue'
export default {
  mixins: [drawMixin],
  name: "",
  data() {
    return {
      //廊道背景
      imgSrc: require('@/assets/img/chongtian.gif'),
      //是否加载
      isLoading: true,
      //廊道背景切换的interval
      timer1: null,
      //连接状态
      isConnect: this.$bus.isConnect,
      //电池进度图配置
      powerConfig: {
        value: this.$store.state.robotInfo.battPower || 0,
        colors: ['#01c4f9', '#c135ff'],
        lineDash: [48, 4],
        borderRadius: 8,
        // formatter:'{value}%'
        formatter: '电量：{value}%'
      },
      //氧气浓度水球图配置 
      // waterConfig: {
      //   data: [55],
      //   shape: 'round',
      //   waveHeight: 16
      // },
      //气体柱状图配置
      PMconfig: {
        data: [
          {
            name: "pm1",
            value: 67,
          },
          {
            name: "pm2.5",
            value: 67,
          },
          {
            name: "PM10",
            value: 55,
          },
        ],
        unit: "um/m³",
        showValue: true,
        colors: ["#dadd3d", "#eeda26", "#d3cf00", "#dbc714", "#aaa816"],
      },
      //轮播表配置
      ListConfig1: {
        data: [
          ["一号转速", "R/S", "正常"],
          ["一号电流", "5A", "正常"],
          ['一号温度', '66°C', '正常'],
          ["二号转速", "R/S", "正常"],
          ["二号电流", "5A", "正常"],
          ['二号温度', '66°C', '正常'],
        ],
        // oddRowBGC:'#1F505F',
        // evenRowBGC:'#2C7189'
      },
      //左侧列表的数据整合
      infoField: [
        { key: '红外测温', value: '70°C' },
        { key: '环境温度', value: '35°C' },
      ],
      //气体信息
      gasInfo: {},
      //机器人位置信息
      positionInfo: {},
      //数据刷新的定时器占位符
      timer: null,
      //主副视频的播放次序占位符
      main_viceFlag: true,
      //当前巡检模式的占位符
      inspectionMode: 0,
      //机器人当前位置(测试用)
      robotPosition: (this.$store.state.robotInfo.currentPosition) || 0,
      robotSpeed:(this.$store.state.robotInfo.currentSpeed)|| 0,
      //机器人视频
      rgb_msg: "",
      //预设巡检的对话框标识符
      isPlaningPatrol: false,
      //几个基础的速度选择
      dislogPotions: {
        typeOpt: [
          {
            value: '1',
            label: '预设方案1'
          }, {
            value: '2',
            label: '预设方案2'
          }, {
            value: '3',
            label: '预设方案3'
          }, {
            value: '4',
            label: '预设方案4'
          }
        ],

      },
      //预设巡检的信息
      planingPatrolInfo: {
        startTime: '',//巡检初始时间
        times: "",//巡检次数
        type: '',//机器人的巡检方案
        // 当前预设的方案配置
        plans: { // index 1,2,3表示预设方案，4表示临时方案
          index: 4,
          //该方案的具体点位
          points: [
            {
              speed: '',
              location: '',
              yaw: '',
              pitch: ''
            }
          ]
        }
      },
      //实时刷新图标配置的定时器
      refreshTimer:null
    };
  },
  props: {},
  components: {
    homePie1, homePie2, homeBar,
  },
  computed: {
    //当前显示的第几个点
    currentDot() {
      return 'd' + Math.floor(this.position / 38.4)
    }
  },

  beforeMount() {
    //渲染视频窗口并自动播放
    this.mainVideoPlayer = this.$video(this.$refs.mainVideo, {
      autoplay: true,
    })
  },
  mounted() {
    //获取近七天日期
    let recentDays = this.getRecentlyDays(7);
    this.days = recentDays;
    
    //改变机器人的位置信息
    this.positionTimer = setInterval(() => {
      if (this.position >= 1200) this.position = 0
      else this.position += 20
      //console.log(this.currentDot);
    }, 1000);
    //获取视频
    this.initWebCameraWs()
    //给机器人位置埋点
    // let points=document.getElementsByClassName('dot')
    // let distance=58/23//每个点之间的间隔：单位%
    // for (let i = 0; i < points.length; i++) {
    //   // points[i].style.left=(i+1)*distance+'%'
    //   // points[i].style.top='45%'
    //   console.log(points[i]);
    // }
    // console.log(points);

    //根据最新收到的信息来刷新图表
    this.refreshTimer=setInterval(() => {
      //电量图
      this.powerConfig.value=this.$store.state.robotInfo.battPower || 0
      this.powerConfig={...this.powerConfig}

      //位置速度
      this.robotPosition=(this.$store.state.robotInfo.currentPosition) || 0
      this.robotSpeed=(this.$store.state.robotInfo.currentSpeed) || 0


    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.modelTimer1)
    clearInterval(this.timer1)
    clearInterval(this.positionTimer)
    this.cameraWsClose();
    //清除定时器
    clearInterval(this.refreshTimer)
  },
  methods: {
    //用于获取近几天的信息
    getRecentlyDays(days) {
      let myDate = new Date(); //获取今天日期
      myDate.setDate(myDate.getDate() - days);
      let dateArray = [];
      let dateTemp;
      let flag = 1;
      for (var i = 0; i < days; i++) {
        let month = 0;
        if (myDate.getMonth() + 1 < 10) {
          month = "0" + (myDate.getMonth() + 1);
        } else {
          month = myDate.getMonth() + 1;
        }
        let day = 0;
        if (myDate.getDate() < 10) {
          day = "0" + myDate.getDate();
        } else {
          day = myDate.getDate();
        }
        dateTemp = month + "-" + day;
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
      }
      return dateArray;
    },

    //获取电量信息
    getBatteryInfo() {
      let batteryInfo = this.$store.state.batteryInfo;
      let dumpEnergy = (batteryInfo.cap_t / batteryInfo.cap_r) * 100;
      this.batterInfo.dumpEnergy = dumpEnergy;
      //console.log(typeof dumpEnergy);
    },
    //获取气体信息
    getGasInfo() {
      //console.log(this.$store.state.gasInfo);
      this.gasInfo = this.$store.state.gasInfo;
    },
    //获取机器人位置信息
    getPositionInfo() {
      this.positionInfo = this.state.positionInfo;
    },
    //更改巡检模式
    changeMode(type) {
      //alert(`更改为第${type}种巡检类型`)
      if (this.inspectionMode === type) this.inspectionMode = 0
      else this.inspectionMode = type
      if (this.inspectionMode === 3) this.isPlaningPatrol = true
    },
    //快速跳转页面
    changePage(page) {
      this.$router.push(`${page}`)
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
      //发生error后，等半秒自动重连
    },
    cameraWsOnmessage(e) {
      this.rgb_msg = "data:image/jpeg;base64," + e.data;
    },
    cameraWsClose() {
      console.log("cameraWs connection closed");
      this.cameraWs.close();
    },
    //巡检点位的相关设置
    resetPoints() {
      this.planingPatrolInfo.plans.points = []
      this.$refs[pointsForm].resetFields();
    },
    removePoint(item) {
      var index = this.planingPatrolInfo.plans.points.indexOf(item)
      if (index !== -1) {
        this.planingPatrolInfo.plans.points.splice(index, 1)
      }
    },
    addPoint() {
      this.planingPatrolInfo.plans.points.push({
        speed: '',
        location: '',
        yaw: '',
        pitch: ''
      });
    }

    //

  },
};
</script>

<style lang='less' scoped >
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/background.png');
  background-size: cover;
  //border: 1px solid red;
}

.container {
  height: 94vh;
  margin-top: 2vh;
  overflow: hidden;
  justify-content: space-around;
  white-space: no-warp;
}

.rotate {
  animation: cir 2s linear infinite;
}

.success {
  color: #32ce84;

  span {
    color: #32ce84 !important;
  }
}

.error {
  color: red;

  span {
    color: red !important;
  }
}

span {
  color: #ffffff;
}

.con {
  //border: 1px solid red;
  width: 94%;
  margin: 0 auto;
  display: flex;
}

.s1 {
  width: 400px;
  background-color: transparent;
  background-color: #00296B60;
  padding-bottom: 1vh;

  //电池样式设置
  /deep/ .dv-percent-pond text {
    font-weight: 100;
    font-size: 32px;
  }

  //皮带视图
  .gallery {

    .success {
      background-color: #32ce8480;
    }

    .error {
      background-color: red;
    }

    .robot {
      background-color: orange;
      display: flex !important;
    }

    .dot {
      position: absolute;
      // border: #a89f9f 1px solid;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      //display: none;


      &:hover {
        cursor: pointer;
      }

      //animation: shade 1.4s infinite;
    }

    //定义每个之间的距离
    @distance:(54/25);

    //机器人轨迹埋点
    .d0 {
      top: 45%;
      left: 16%+ @distance*0%;
    }
    .d1 {
      top: 45%;
      left: 16%+ @distance*1%;
    }

    .d2 {
      top: 45%;
      left: 16% + @distance*2%;
    }

    .d3 {
      top: 45%;
      left:16% + @distance*3%;
    }

    .d4 {
      top: 45%;
      left: 26% + @distance*4%;
    }

    .d5 {
      top: 45%;
      left: 16% + @distance*5%;
    }

    .d6 {
      top: 45%;
      left: 16% + @distance*6%;
    }

    .d7 {
      top: 45%;
      left: 16% + @distance*7%;
    }

    .d8 {
      top: 45%;
      left: 16% + @distance*8%;
    }

    .d9 {
      top: 45%;
      left: 16% + @distance*9%;
    }

    .d10 {
      top: 45%;
      left: 16% + @distance*10%;
    }

    .d11 {
      top: 45%;
      left: 16% + @distance*11%;
    }

    .d12 {
      top: 45%;
      left: 16% + @distance*12%;
    }

    .d13 {
      top: 45%;
      left: 16% + @distance*13%;
    }

    .d14 {
      top: 45%;
      left: 16% + @distance*14%;
    }

    .d15 {
      top: 45%;
      left: 16% + @distance*15%;
    }

    .d16 {
      top: 45%;
      left: 16% + @distance*16%;
    }

    .d17 {
      top: 45%;
      left: 16% + @distance*17%;
    }

    .d18 {
      top: 45%;
      left: 16% + @distance*18%;
    }

    .d19 {
      top: 45%;
      left: 16% + @distance*19%;
    }

    .d20 {
      top: 45%;
      left: 16% + @distance*20%;
    }

    .d21 {
      top: 45%;
      left: 16% + @distance*21%;
    }

    .d22 {
      top: 43%;
      left: 16% + @distance*22%;
    }

    .d23 {
      top: 40%;
      left: 16% + @distance*23%;
    }

    .d24 {
      top: 36%;
      left: 16% + @distance*24%;
    }

    .d25 {
      top: 32%;
      left: 16% + @distance*25%;
      // border: 1px solid red;
    }



    //机器人和设备的通用样式
    .deviceDot,
    .robotDot {
      position: absolute;
      //border: #a89f9f 1px solid;
      border-radius: 50%;
      width: 18px;
      height: 18px;

      &:hover {
        cursor: pointer;
      }

      animation: shade 1.4s infinite;
    }

    //先给设施设备定位
    .break {
      //撕裂
      left: 260px;
      bottom: 46%;
    }

    .mult {
      //多功能
      left: 290px;
      bottom: 46%;
    }

  }

  //温湿度及氧气
  .con3 {
    justify-content: space-start;
    align-items: center;
    flex-wrap: wrap;

    .success {
      background-color: #32ce8460;
    }

    .error {
      background-color: red;
    }

    .con3Item {
      width: 38%;
      height: 30%;
      border-radius: 10px;
      margin-left: 14px;
      margin-right: 26px;
      display: flex;
      justify-content: space-between;
      border: 1px double #32ce8460;
      background: url('@/assets/img/home/glassBox.png') no-repeat;
      cursor: pointer;

      background-size: cover;

      div:first-of-type {
        width: 52%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: visible;

        span:first-of-type {
          text-align: left;
          margin-left: 10%;
          //text-decoration: underline;
        }

        span:last-of-type {
          font-size: 26px;
          text-align: right;
          font-weight: 700;
          margin-left: 90%;
          //text-decoration: underline;
        }
      }

      div:last-of-type {
        width: 70px;
        height: 70px;
        margin-right: -20%;
        //border: 1px solid red;
        overflow: visible;
        border-radius: 50% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('@/assets/img/home/cirLeft.png') no-repeat;
        background-size: cover;
        animation: cir 5s infinite linear;

        span {
          color: #ffffff;
          //color: #32ce84;
          animation: cir 5s infinite reverse linear;
        }

      }

    }
  }

  .con5 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      display: flex;
      margin: 0 auto;
      width: 90%;
      height: 42px;
      margin-top: 8px;
      padding: 0 10px;
      line-height: 40px;
      justify-content: space-between;
      background: url('@/assets/img/home/homeBar.png') no-repeat;
      background-size: cover;

      // span:nth-child(2){
      //   background: url('@/assets/img/home/glassBox.png');
      //   background-size: contain;
      // }
    }

    span {
      font-size: 22px;
    }
  }


}

.s2 {
  justify-content: space-between;
  width: 1486px;
  background-color: transparent;
  padding-bottom: 1vh;

  img {
    width: 100%;
    height: 100%;
  }

  //中间区域
  .s2-1 {
    width: 1068px;
    height: 100%;
    flex-direction: column;
    background-color: rgba(6, 80, 109, 0.2);
    background-color: #00296B60;

    //background-color: transparent;

    //底部区域
    .s2-1-2 {
      height: 100%;
      width: 60%;
      display: flex;

    }

    .s2-1-3 {
      height: 100%;
      width: 40%;
    }
  }

  //右侧区域
  .s2-2 {
    width: 400px;
    height: 100%;
    //background-color: rgba(6, 80, 109, 0.2);
    background-color: transparent;
    background-color: #00296B60;

    .s2-2-2 {
      position: relative;

      .img {
        width: 20%;
      }

      .robotStatus {
        position: relative;

        span {
          width: 100%;
          height: 46%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          font-size: 32px;
          text-align: center;
          padding-bottom: 8px;
        }
      }

      .btnCon {
        width: 90%;
        margin: 0 auto;
        margin-top: 3vh;

        .btn {
          width: 5vw;
          height: 5vw;
          border-radius: 50%;

          &:first-of-type {
            background: url('@/assets/img/home/run.png');
            background-size: cover;

            &:active {
              background: url('@/assets/img/home/run@active.png');
              background-size: cover;
            }
          }

          &:last-of-type {
            background: url('@/assets/img/home/stop.png');
            background-size: cover;

            &:active {
              background: url('@/assets/img/home/stop@active.png');
              background-size: cover;
            }
          }
        }


      }
    }

    .s2-2-3 {
      flex-direction: column;
      align-items: center;

      .ItemCon {
        width: 86%;
        height: 80%;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: space-between;
        //background: url('@/assets/img/home/inspectionBcg.jpg') no-repeat;
        background: url('@/assets/img/home/inspectionBcg.png') no-repeat;
        background-size: cover;

        .insItem {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: space-around;
          font-size: 20px;

          //按钮部分
          div {
            width: 51px;
            height: 28px;
            overflow: hidden;
            border-radius: 12px;

            position: relative;

            &:hover {
              cursor: pointer;
            }

            img {
              width: 80px;
              height: 28px;
              transition: left 0.18s ease-in;
              position: absolute;
              //transform: translate(0px);
              left: 0
            }

            //激活的样式
            .active {
              left: -30px;
              //transform: translate(-40px);
            }
          }
        }
      }
    }

  }
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
