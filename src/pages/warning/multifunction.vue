<template>
  <div class='multCon '>
    <!-- 左侧区域 -->
    <div class="left " style="width:50%;height:100%;">
      <dv-border-box-8>
        <div class="infoBar ">
          <div class="info1 ">
            <span class="">今日已进料 <span class="num">11</span> 小时</span>
          </div>
          <div class="info2 ">
            <span>已累计进料 <span class="num">608</span> 吨</span>
          </div>
        </div>

        <div class="" style="width:100%;height:75%">
          <warningLine2></warningLine2>
        </div>
      </dv-border-box-8>
    </div>
    <!-- 右侧区域 -->
    <div class="right" style="width:50%;height:100%;">
      <dv-border-box-8>
        <!-- 上方模型刨面图 -->
        <div class="img " style="width:100%;height:60%">
          <!-- 多功能的 -->
          <div v-show="isMuti">
            <img src="@/assets/img/warning/multi.gif" width="100%;height:100%">
          </div>
          <!-- 撕裂的 -->
          <div v-show="!isMuti">
            <img src="@/assets/img/warning/break.gif" width="100%;height:100%">
          </div>
        </div>
        <!-- 下方标题与切换 -->
        <div class="title "> 
        <span v-show="isMuti">异 物 检 测</span>
        <span v-show="!isMuti">撕 裂 检 测</span>
        <i class="el-icon-refresh " @click="isMuti=!isMuti"></i>
        </div>
        <!-- 检测信息表格 -->
        <div class="list">
          <div>当前状态：<span class="success">正常</span></div>
          <div>检测时间：<span>2022-11-8 &nbsp;&nbsp;11:20</span></div>
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import warningLine2 from './charts/warningLine2.vue';
export default {
  name: '',
  data() {
    return {
      isMuti:true,
    }
  },
  props: {
  },
  components: {
    warningLine2
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped >
.multCon {
  width: 100%;
  height: 100%;
  display: flex;
}

.border {
  border: 1px solid red;
}

span {
  color: #ffffff;
  text-align: center;
}

.left {
  .infoBar {
    padding-top: 5%;
    height: 20%;
    display: flex;
    //flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .num {
      color: aquamarine;
      font-size: 32px;
    }

    div {
      width: 45%;
      height: 48%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background: url('@/assets/img/comm/bracket.png') no-repeat;
      background-size: cover;
      span{
        height: 60px;
        width: 100%;
      }
    }
  }
}

.right{
 
  .title{
    width: 40%;
    height: 30px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 22px;
    span{
      color: #0ADBFA;
    }
    
    .el-icon-refresh{
    color: #7FE4A7;
    cursor: pointer;
    transition: all 0.3s linear;
    font-size: 28px;
    &:hover{
      transform: rotate(90deg);
    }
    &:active{
      color: rgb(173, 119, 48);
    }
    
  }
  }

  .list{
    color: #ffffff;
    .success{
      color:#7FE4A7;
    }
    .danger{
      color: red;
    }
    div{
      width: 80%;
      margin: 0 auto;
      height: 40px;
      margin-top: 16px;
      font-size: 22px;
    }
  }
  
}
</style>