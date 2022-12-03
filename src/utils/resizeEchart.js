//注意：该方法需要对echarts实例使用，需要将init的对象存储到myChart变量中。在设置完echarts后将该函数使用一下即可
//尝试解决图表响应式问题
export default function(){
  if (window.onresize) {
  window.onresize = function () {
      //console.log(123);
      myChart.resize()
  }
} else {
  window.addEventListener('resize', function () {
      //console.log(321);
      myChart.resize()
  })
}
}
 