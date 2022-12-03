<template>
  <div class="">
    <div id="homeWater" class="border" style="width:10vw;height:10vh;"></div>
  </div>
</template>
  
  <script>
import * as echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      per1: "0.5",
    };
  },
  props: {},
  components: {},
  computed: {},
  mounted() {
    let chart = echarts.init(document.getElementById("homeWater"));
    let option = {
      series: [
        {
          type: "liquidFill",
          radius: "78%",
          center: ["50%", "50%"],
          color: ["#10B9FF", "#10B9FF", "#10B9FF"], //水波
          data: [this.per1, this.per1, this.per1], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: "transparent",
          },
          label: {
            normal: {
              textStyle: {
                fontSize: 30,
              },
            },
          },
          outline: {
            show: true,
            itemStyle: {
              borderColor: "#10B9FF",
              borderWidth: 2,
            },
            borderDistance: 3,
          },
        },
        {
          name: "外层细环",
          type: "pie",
          radius: ["83%", "84.5%"],
          center: ["50%", "50%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
            },
          },
          data: [
            {
              value: 100,
              itemStyle: {
                normal: {
                  color: "#1569BB",
                },
              },
            },
          ],
        },
        {
          name: "外层粗环",
          type: "pie",
          radius: ["82%", "86.5%"], //使得细环位于粗环中间
          center: ["50%", "50%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
            },
          },
          data: [
            {
              value: 50,
              itemStyle: {
                normal: {
                  color: "#34E0D1",
                },
              },
            },
            {
              value: 50,
              itemStyle: {
                normal: {
                  color: "transparent",
                },
              },
            },
          ],
        },
      ],
    };

    chart.setOption(option);
  },
  methods: {},
};
</script>
  
<style lang='less' scoped >
.border{
  border: 1px solid red;
}
</style>