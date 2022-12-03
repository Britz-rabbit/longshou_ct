<template>
    <div>
        <video class="robot-video" ref="player" muted autoplay></video>
    </div>
  </template>
  <script>
  import flvjs from "flv.js";
  export default {
    data () {
        return {
          id: "1",
          //需求：每次重新加载后channels后面在101 102 103之间随机切换，且下一次值必定发生变化，与上一次不同，可以101 102 103顺序切换
          rtsp: "rtsp://admin:qwe,asd.@192.168.2.243:554/Streaming/channels/101",
            player: null
        }
    },
    mounted () {
        if (flvjs.isSupported()) {
            let video = this.$refs.player;
            if (video) {
                this.player = flvjs.createPlayer({
                    type: "flv",
                    isLive: true,
                    url: `ws://192.168.2.103:8888/rtsp/${this.id}/?url=${this.rtsp}`
                });
                this.player.attachMediaElement(video);
                try {
                    this.player.load();
                    this.player.play();
                } catch (error) {
                    console.log(error);
                    this.player.play()
                };
            }
            // if (video) {
            //     this.player = flvjs.createPlayer({
            //         type: "flv",
            //         url: `/static/test.flv`
            //     });
            //     this.player.attachMediaElement(video);
            //     try {
            //         this.player.load();
            //         this.player.play();
            //     } catch (error) {
            //         console.log(error);
            //     };
            // }
        }
    },
    beforeDestroy () {
        this.player.destory();
    }
  }
  </script>
  <style>
    .robot-video {
       width: 100%;
       height: 100%;
    }
  </style>
  