<template>
  <div>
    <div class='flex middle'>
  
      <div class="border-box-content">
        <!-- 上方区域 -->        
        <div class="top  flex middle">
            <div class="spanCon">
          <span class="s1">{{t1}}</span>
          <span class="s2">{{t2}}</span>
          <span class="s3">{{t3}}</span>  
            </div>
          
          <!-- 气体显示-旋转圆圈 -->
          <div class="cir cirL ">
          </div>
          <div class="cir cirM ">
          </div>
          <div class="cir cirR ">
          </div>
        </div>
      </div>
  
  </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    t1:{
        type:String,
        default:'数据1 正常'
    },
    t2:{
        type:String,
        default:'数据2 正常'
    },
    t3:{
        type:String,
        default:'数据3 正常'
    }
   
  },
  components: {

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
.top {
  min-width: 20vw;
  margin: auto;
  position: relative;

  .cirL {
    width: 6vw;
    height: 6vw;
    background: url('@/assets/img/home/cirRight.png') no-repeat;
    background-size: contain;
    animation: cir 3s linear infinite;
  }

  .cirM {
    width: 8vw;
    height: 8vw;
    background: url('@/assets/img/home/cirCenter.png') no-repeat;
    background-size: contain;
    animation: cir 8s linear infinite;
  }

  .cirR {
    width: 6vw;
    height: 6vw;
    background: url('@/assets/img/home/cirLeft.png') no-repeat;
    background-size: contain;
    animation: cir 7s linear infinite;
  }

  .spanCon{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  span {
    display: block;
    font-size: 0.8vw;
    position: relative;
    color: #ffffff;
    z-index: 9;
    width: 3vw;
  }
  .s1{
    left: 8%;
    top: 34%;
  }
  .s2{
    left: 42%;
    top: 6%;
  }
  .s3{
    left: 78%;
    bottom: 20%;
  }
}
</style>