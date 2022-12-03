<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class='container flex ' style="justify-content: space-around;overflow: visible;position: relative;">
      <!-- <div class="AnalyzeL">

      </div> -->

      <!-- 报表部分，连接打印功能，请勿随意修改样式，包括位置。要在旁边增添元素全用绝对定位 -->
      <div class="reportCon" id="screenshot" style="width: 840px;height:1188px;overflow: visible;margin: 0 auto;">
        <reportVue></reportVue>
      </div>
      <el-button type="success" size="mini" @click="saveReport" id="sava-btn" style="height: 30px;z-index: 9;">保存</el-button>
      <!-- <analyzeRadarVue></analyzeRadarVue> -->

      <!-- <div class="AnalyzeR">

      </div> -->
    </div>
  </dv-full-screen-container>

</template>

<script>
//引入模块
import analyzeRadarVue from './charts/analyzeRadar.vue';
import reportVue from './components/report.vue';

//引入包
import Html2canvas from 'html2canvas';
import JsPDF from 'jspdf'
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
  },
  components: {
    reportVue, analyzeRadarVue
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    //点击将页面变成pdf并下载
    saveReport() {
      const screenshot = document.getElementById("screenshot");
      // allowTaint: true, // 不能与useCORS共用
      const opts = {
        logging: false,
        scale: 2,
        useCORS: true,
        width: screenshot.clientWidth - 42,
        height: screenshot.clientWidth * 1.41429 - 24,//a4纸张比例
        scrollY: -66,
        scrollX: -502,
      };
      Html2canvas(screenshot, opts).then(res => {
        //生成canvas并产生beta64
        const { height, width } = res;
        document.body.appendChild(res);
        const base64 = res.toDataURL('image/jpeg', 2);
        const PDF = new JsPDF('', 'px', [width, height]);
        // 生成pdf
        PDF.addImage(base64, 'JPEG', 0, 0, width, height);
        
        //保存
        let time = this.getTime()
        PDF.save(`提升工区报表${time}` + '.pdf');
      }, err => alert("截图失败，请重新尝试"));
    },
    //获取当前时间
    getTime() {
      let d = new Date()
      let days = (d.getMonth() + 1) + '月' + (d.getDate() + '日 ')
      //let hours = d.getHours() + ':' + (d.getMinutes())+':'+(d.getSeconds())
      let hours = d.getHours() + ':' + (d.getMinutes())
      return days
    },

  },
}
</script>

<style lang='less' scoped >
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

.con {
  width: 100%;
  //border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/background.png');
  background-size: cover;
  //border: 1px solid red;
}

.AnalyzeL{
  position: absolute;
  height: 100%;
  width: 24%;
  left: 20px;
  border: 1px solid red;
}

.AnalyzeR{
 position: absolute;
 height: 100%;
 width: 24%;
 border: 1px solid red;
 right: 20px;

}
</style>