<template>
  <div class=''>
    <div>Hello World</div>
    <button id="save-btn">保存</button>
    <div style="width:500px;height:500px;position: relative;" >
      <div id="screenshot" >
        <img src="@/assets/img/BG.png" style="width:100%;height:100%">
      <!-- <IR_video></IR_video> -->
      </div>
      
    </div>

    <button @click="sendMsg">发送请求</button>
  </div>
</template>

<script>
import Html2canvas from "html2canvas";
import axios from 'axios'
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
  },
  components: {

  },
  computed: {

  },
  mounted() {
    // 渲染图片
    function Render(src, width, height, cb) {
      const img = new Image();
      img.src = src;
      img.width = width;
      img.height = height;
      img.crossOrigin = ""; // 图像跨域时配置
      cb && cb(img);
    }

    // 下载图片
    function Download(url, name) {
      const target = document.createElement("a");
      target.href = url;
      target.download = name;
      const event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      target.dispatchEvent(event);
    }


    const btn = document.getElementById("save-btn");
    btn.addEventListener("click", () => {
      const screenshot = document.getElementById("screenshot");
      // allowTaint: true, // 不能与useCORS共用
      const opts = {
        logging: false,
        scale: 1,
        useCORS: true,
        width: screenshot.clientWidth,
        height: screenshot.clientHeight,
        scrollY: 0,
        scrollX: 0,
      };
      Html2canvas(screenshot, opts).then(res => {
        const { height, width } = res;
       //console.log(height, width );
       document.body.appendChild(res);
        const base64 = res.toDataURL("image/png", 1);
        Render(base64, width, height, img => {
        document.body.appendChild(img);
          Download(base64, "screenshot.png");
        });
      }, err => alert("截图失败，请重新尝试"));
    });
  },
  methods: {
    sendMsg() {
      // axios.get({
      //   url: 'http://192.168.2.91:18800/UserInfoQuery/zmm',
      //   headers: {
      //     "Content-Type": "application/octet-stream",
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // }).then(function (response) {
      //   // 处理成功情况
      //   console.log(response);
      // })
      //   .catch(function (error) {
      //     // 处理错误情况
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // 总是会执行
      //   });

      axios.get('http://192.168.2.91:18800/UserInfoQuery/zmm')
        .then(function (response) {
          // 处理成功情况
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
    }
  },
}
</script>

<style lang='less' scoped >

</style>