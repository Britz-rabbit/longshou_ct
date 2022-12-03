<template>
    <div class=''>
        <div id="homeBar2" style="width: 21vw;height:28vh;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import resize from '@/utils/resizeEchart'
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
        let myChart = echarts.init(document.getElementById('homeBar2'));
        let option = {
            backgroundColor: '',
            title: [
                {
                    show: true,
                    text: '设备异常情况',
                    left:'130',
                    textStyle:{
                        color:'#ffffff',
                        fontSize:22,
                        align:'center',
                        verticalAlign:'middle',
                    }
                },],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            //legend: {},
            grid: {
                left: '5%',
                right: '4%',
                top:'16%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel:{
                    fontSize: '12', 
                    color:'#ffffff'
                },
            },
            yAxis: {
                type: 'category',
                data: ['设备类型4', '设备类型3', '设备类型2', '设备类型1'],
                axisLabel:{
                    fontSize: '16', 
                    color:'#ffffff'
                },
            },
            series: [
                {
                    name: '异常设备',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [6, 3, 6, 2],
                    itemStyle: {
                        color: 'red',
                        shadowColor: '#91cc75',
                        borderType: 'dashed',
                        opacity: 0.5
                    },
                    
                },
                {
                    name: '正常设备',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [12, 32, 11, 31],
                    itemStyle: {
                        color: '#32ce84',
                        shadowColor: '#91cc75',
                        borderType: 'dashed',
                        opacity: 0.5
                    }
                },
            ]
        };
        option && myChart.setOption(option);
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
    },
    methods: {

    },
}
</script>

<style lang='less' scoped >
.test{
color: #6d6666;
}
</style>