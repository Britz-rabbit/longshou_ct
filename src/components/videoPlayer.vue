<template>
    <div>
      <video ref="videoPlayer" class="video-js">
        <source src="options.src">
      </video>
    </div>
  </template>
  
  <script> 
  export default {
    name: 'VideoPlayer',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        player: null
      }
    },
    mounted() {
      this.player = this.$video(this.$refs.videoPlayer, this.options, () => {
        this.player.log('onPlayerReady', this);
      });
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }
  </script>