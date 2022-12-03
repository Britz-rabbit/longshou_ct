<template>
    <div class=''>
        <div id="homeBar" style="width:19vw;height:20vh"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
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
        let myChart = echarts.init(document.getElementById('homeBar'))
        var colorArray = [
            {
                top: '#08BEF9', //黄
                bottom: 'rgba(11,42,84,.3)'
            }, {
                top: '#3D98FB', //绿
                bottom: 'rgba(11,42,84, 0.3)'
            },
            {
                top: '#6A75FC', //蓝
                bottom: 'rgba(11,42,84,.3)'
            }
        ];
        let option = {
            backgroundColor: '',
            title: [
                {
                    show: true,
                    text: '烟雾传感',
                    left: '150',
                    textStyle: {
                        color: '#ffffff',
                        align: 'center',
                        verticalAlign: 'middle',
                    }
                },],
            tooltip: {
                show: true,
                formatter: "{b}：{c}obs/m"
            },
            grid: {
                left: '5%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },

            xAxis: {
                type: 'value',
                show: false,
                position: 'top',
                axisTick: {
                    show: false,

                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                    },
                },
                splitLine: {
                    show: false
                },
            },
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false,
                    alignWithLabel: false,
                    length: 5,

                },
                "splitLine": { //网格线
                    "show": false
                },
                inverse: 'true', //排序
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ffffff',

                    },
                },
                axisLabel: {
                    fontSize: '16',
                },
                data: ['烟雾传感1', '烟雾传感2', '烟雾传感3',]
            }

            ],
            series: [{
                name: '能耗值',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        textStyle: {
                            fontSize: 16,
                            color: '#ffffff' //color of value
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: function (params) {
                            let num = colorArray.length;
                            return {
                                type: 'linear',
                                colorStops: [{
                                    offset: 1,
                                    color: colorArray[params.dataIndex % num].top
                                },],
                                //globalCoord: false
                            }
                        },
                        barBorderRadius: 70,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                //变化数据
                data: [90, 132, 89,]
            }

            ]
        };
        myChart.setOption(option)
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
// #homeBar{
//     border: 1px solid red;
// }
</style>