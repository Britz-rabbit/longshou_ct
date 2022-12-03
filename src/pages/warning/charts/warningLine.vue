<template>
    <div class=''>
        <div id="warningLine" style="width:50vw;height: 60vh;"></div>
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
        let myChart = echarts.init(document.getElementById('warningLine'))
        var xData = ['设备名称1', '设备名称2', '设备名称3', '设备名称4', '设备名称5', '设备名称6']
        var lineData = [100, 100, 100, 100, 100, 100]
        var lastYearData = [52, 80, 62, 94, 55, 65];//左侧正常设备数据
        var thisYearData = [5, 8, 3, 9, 6, 6];//右侧异常设备数据
        var timeLineData = [1];
        let legend = ['正常设备', '异常设备'];
        var background = ""; //背景 
        let textColor = "#fff";
        let lineColor = "rgba(255,255,255,0.2)";
        let colors = [{
            borderColor: "rgb(57, 204, 57)",
            start: "green",
            end: "green"
        },
        {
            borderColor: "red",
            start: "red",
            end: "darkred"
        },
        ];
        let borderData = [];
        let scale = 2;
        borderData = xData.map(item => {
            return scale;
        });
        var option = {
            baseOption: {
                backgroundColor: background,
                timeline: {
                    show: false,
                    top: 0,
                    data: []
                },
                legend: {
                    top: '5%',
                    right: '5%',
                    itemWidth: 20,
                    itemHeight: 5,
                    // itemGap: 343,
                    icon: 'horizontal',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    data: legend
                },
                grid: [{
                    show: false,
                    left: '5%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%'
                }, {
                    show: false,
                    left: '51%',
                    top: '10%',
                    bottom: '8%',
                    width: '0%'
                }, {
                    show: false,
                    right: '2%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%'
                }],
                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        color: textColor
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: lineColor
                        }
                    },
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        color: textColor
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: lineColor
                        }
                    },
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: lineColor
                        }
                    },

                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: xData
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        padding: [30, 0, 0, 0],
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20
                        },
                        align: "center"

                    },
                    data: xData.map(function (value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: lineColor
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: xData
                }],
                series: []
            },
            options: []
        }

        option.baseOption.timeline.data.push(timeLineData[0])
        option.options.push({
            series: [{
                name: "正常设备",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[0].start
                        },
                        {
                            offset: 1,
                            color: colors[0].end
                        }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: true,
                    }
                },
                data: lastYearData,
                animationEasing: "elasticOut"
            },
            {
                name: "正常设备",
                type: "bar",
                barWidth: 25,
                stack: "1",
                itemStyle: {
                    normal: {
                        color: colors[0].borderColor

                    }
                },
                data: borderData
            },
            {
                name: "异常设备",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[1].start
                        },
                        {
                            offset: 1,
                            color: colors[1].end
                        }
                        ]),
                    }
                },
                label: {
                    normal: {
                        show: true,
                    }
                },
                data: thisYearData,
                animationEasing: "elasticOut"
            },
            {
                name: "异常设备",
                type: "bar",
                xAxisIndex: 2,
                yAxisIndex: 2,
                barWidth: 25,
                stack: "2",
                itemStyle: {
                    normal: {
                        color: colors[1].borderColor

                    }
                },
                data: borderData
            },
            ]
        });

        myChart.setOption(option)

        //尝试解决图表响应式问题
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
    color: rgb(57, 204, 57);
}
</style>