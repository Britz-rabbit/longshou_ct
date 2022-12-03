<template>
    <div style="width:100%;height:100%;">
        <video ref="IR_video" class="video-js vjs-default-skin-js">
            <source src="https://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8">
        </video>
    </div>
</template>
  
<script>
export default {
    name: 'IR_video',
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = this.$video(this.$refs.IR_video,{
            autoplay:true,
            fluid:true,
            controls:false,
            muted:true
        }, () => {
            this.player.log('准备播放', this);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose();
        }
    }
}
</script>