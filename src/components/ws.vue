<template>
    <img :src="rgb_msg" style="width:100%;height:100%" />
</template>

<script>
export default {
    name: "rgb_ws",
    data() {
        return {
            rgb_msg: ""
        }
    },
    beforeCreate(){
        if(this.cameraWs) this.cameraWs=null
    },
    created() {
        this.initWebSocket()
    },
    beforeDestroy() {
        this.websocketclose();
    },
    destroyed() {

    },
    methods: {
        initWebSocket() {
            const wsuri = 'ws://192.168.2.228:40001';
            this.cameraWs = new WebSocket(wsuri);
            this.cameraWs.onopen = this.websocketonopen;
            this.cameraWs.onerror = this.websocketonerror;
            this.cameraWs.onmessage = this.websocketonmessage;
            this.cameraWs.onclose = this.websocketclose;
        },
        websocketonopen() {
            console.log("cameraWs连接成功");
        },
        websocketonerror(e) {
            console.log(e);
            //发生error后，等半秒自动重连
            setTimeout(() => {
                this.websocketonopen()
            }, 500);

        },
        websocketonmessage(e) {
            this.rgb_msg = "data:image/jpeg;base64," + e.data;
        },
        websocketclose() {
            console.log("cameraWs connection closed");
            this.cameraWs.close();
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
