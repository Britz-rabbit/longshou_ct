<template>
  <div class='bar flex '>
    <span class="">{{title}}</span>
    <!-- <dv-decoration-4 :reverse="true"  style="width:60%;height:0.2vh;" /> -->
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
    title:{
        type:String,
        require:false,
        default:'请输入标题'
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
@import '@/assets/css/common.less';
.bar{
    width: 100%;
    height: 2.8vh;
    align-items: center;
    background: url('@/assets/img/comm/classfiyTag3.png');
    background-size: cover;
    border-radius: 0.6vw;
    
}
span{
    padding-left: 1.2vw;
    font-size: 18px;
    color: aliceblue; 
}
</style>