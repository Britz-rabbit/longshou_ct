<template>
    <div class='container'>
        <div class="info flex">
            <div class="infos" style="margin-left: 10%;margin-top: 10%;">
                <div class="flex">
                    <span>当前电量:</span>
                    <dv-percent-pond ref="battery" :config="config1" style="width:5vw;height:5vh;margin: auto;" />
                </div>
                <div class="flex" style="margin-top:2vh ;">
                    <span>连接状态：</span>
                    <div v-if="isConnect" class="robot" style="margin: auto;">
                        <i class="iconfont icon-connection"></i>
                        <span>已连接</span>
                    </div>
                    <div v-else class="error" style="margin: auto;">
                        <i class="iconfont icon-disconnect"></i>
                        <span>未连接</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            //电池的配置项
            config1: {
                value: 50,
                lineDash: [14, 3],
                colors: ['#01c4f9', '#c135ff'],
                textColor: '#ffffff'
            },
            dumpEnergy:50,
            //连接状态
            isConnect: true
        }
    },
    props:['value','connect'],
    components: {

    },
    computed: {

    },
    mounted() {
       setInterval(() => {
        this.getBatteryInfo()
       }, 3000);


    },
    methods: {
    getBatteryInfo() {
      let batteryInfo = this.$store.state.batteryInfo
      let dumpEnergy=(batteryInfo.cap_t/batteryInfo.cap_r)*100
      this.dumpEnergy=dumpEnergy
      //console.log('计算出来的电量',this.dumpEnergy);
      this.config1.value=dumpEnergy
      //适用于dataV的神秘代码   
      this.config1 = {...this.config1}
    },
    },
}
</script>

<style lang='less' scoped >
@import '@/assets/css/common.less';

span {
    color: #ffffff;
    font-size:1.3rem;
    white-space: no-warp;
}

.robot {

    i,
    span {
        color: rgb(50, 221, 164);
    }
}

.error {

    i,
    span {
        color: rgb(236, 14, 14);
    }
}

.infos {
    display: flex;
    flex-direction: column;
    width: 12vw;

    i {
        font-size: 1.8rem;
    }
}
</style>