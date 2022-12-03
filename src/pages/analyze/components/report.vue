<template>
  <div class="report session ">
    <!-- 报表部分 -->
    <dv-border-box-7>
      <!-- 标题 -->
      <div class="con title" style="height:5%;display: flex;flex-direction: column;">
        <span>龙首矿区数据报表</span>
        <span style="font-size:16px">LONGSHOUKUANGQU</span>
      </div>
      <!-- 上方图表文字 -->
      <div class="con reportTop" style="height:20%;">
        <div class="" style="height: 70%;width: 50%;">
          <span>所 选 日 期 <span style="margin:0px;padding:0px;font-size:36px"></span></span>
          <span>所 选 期 间 总 巡 检<span class="success"
              style="margin:0px;padding:0px;font-size:36px">&nbsp;1000&nbsp;</span>次</span>
          <span>发 现 异 常<span class="success" style="margin:0px;padding:0px;font-size:36px">&nbsp;50&nbsp;</span>次</span>
          <span>已 处 理 异 常<span class="success"
              style="margin:0px;padding:0px;font-size:36px">&nbsp;50&nbsp;</span>次</span>
        </div>
        <div class="" style="height: 100%;width: 50%;">
          <analyzeRadarVue></analyzeRadarVue>
        </div>
      </div>
      <!-- 中间展示区域 -->
      <div class="con reportMiddle" style="height:50%;width: 100%;margin: 0 auto;">
        <!-- 机器人区域 -->
        <div class="item">
 
          <div class="icon">
            <div class="img">
              <img src="@/assets/img/analyze/robot.png" style="width: 100%;height:100%">
            </div>
            <span>机器人</span>
          </div>

          <div class="infoCon">
            <div><span>巡检次数：106次</span> <span>总巡检长度：16802m</span></div>
            <div><span>每日巡检次数：3.6次</span> <span>每日巡检距离：4026m</span></div>
            <div><span>内容：XXX</span> <span>内容：XXX</span></div>
          </div>
        </div>
        <!-- 多功能撕裂设备区域 -->
        <div class="item">
          <div class="icon">
            <div class="img">
              <img src="@/assets/img/analyze/device.png" style="width: 100%;height:100%">
            </div>
            <span>多功能及撕裂检测</span>
          </div>
          <div class="infoCon">
            <div><span>检测异物次数：36次</span> <span>已处理：36次</span></div>
            <div><span>检测撕裂次数：24次</span> <span>已处理：24次</span></div>
            <div><span>阶段累计料量：13604吨</span> <span>平均日进料：1943吨</span></div>
          </div>
        </div>
        <!-- 传感器区域 -->
        <div class="item">
          <div class="icon">
            <div class="img">
              <img src="@/assets/img/analyze/sensor.png" style="width: 100%;height:100%">
            </div>
            <span>传感器</span>
          </div>
          <div class="infoCon">
            <div><span>平均设备运行：98%</span> <span>内容：XXX</span></div>
            <div><span>：XXX</span> <span>内容：XXX</span></div>
            <div><span>内容：XXX</span> <span>内容：XXX</span></div>
          </div>
        </div>
      </div>
      <!-- 下方落款 -->
      <div class="con inscribe " style="height:13%;">
        <span>打印日期：<span class="success">2022-11-02</span></span>
        <span>工区地点：<span class="success">提升工区西2区</span></span>
        <span class="sign">&nbsp;&nbsp;&nbsp;&nbsp;负责人签字 ：</span>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import analyzeRadarVue from '../charts/analyzeRadar.vue';
export default {
  name: '',
  props: {
    //选中的报表起始和结束日期
    stratTime: 0,
    endTime: 0
  },
  components: {
    analyzeRadarVue
  },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  // 组件方法
  methods: {

  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  beforeCreate() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeDestroy() {
  },
}
</script> 

<style lang='less' scoped>
.report {
  width: 100%;
  height: 100%;
  // background-color: #00296B96;
  background-color: #e7e7e798;

  .con {
    height: 16%;
  }

  span {
    color: #ffffff;
    color: black;
  }

  .title {
    font-size: 22px;
    text-align: center;
    padding-top: 4px;
  }

  //上方文字报表
  .reportTop {
    display: flex;
    align-items: center;

    .success {
      color: #2cb395;
    }

    div:first-of-type {
      height: 60%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        width: 100%;
        height: 20%;
        padding-left: 40px;
        text-align: start;
        font-size: 24px;
        font-weight: 100;
      }
    }

    div:last-of-type {
      height: 100%;
      width: 60%;
    }



  }

  //中间三个框
  .reportMiddle {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;

    .item {
      width: 100%;
      height: 33%;
      display: flex;
      flex-direction: column;

      //border: 1px solid red;

      .icon {
        display: flex;
        align-items: center;
        width: 100%;
        height: 20%;
        position: relative;

        //border:1px solid red;
        .img {
          width: 40px;
          height: 40px;
          margin: 10px auto;
          transform: translateX(-60px);
        }

        span {
          position: absolute;
          left: 50%;
          font-size: 24px;
        }
      }

      .infoCon {
        width: 100%;
        height: 70%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        //border: 1px solid rgb(45, 151, 72);

        div {
          display: flex;
          width: 80%;
          margin: 0 auto;
          height: 46px;
          line-height: 46px;
          justify-content: space-around;
          background-color: #3588a7;

          &:nth-last-of-type(2n){
            background-color: #6396aa;
          }
        }

        //div:nth-of-type(2n){
        //background-color: #cabfbf;
        //}

      }
    }
  }

  //下方落款
  .inscribe {
    display: flex;
    margin-top: 28px;
    width: 60%;
    height: 100%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    .success {
      color: #2cb395;
    }

    span {
      color: black;
      font-size: 22px;
    }

    .sign{
      position: absolute;
      right: 10%;
    }



  }
}
</style>
