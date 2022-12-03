<template>
    <div class=''>
        <div id="analyzeChartCom" style="width:60vw;height:92vh"></div>
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
        let myChart = echarts.init(document.getElementById('analyzeChartCom'))
        let option = {
            backgroundColor: "",
            color: ['#ffd285', '#ff733f', '#ec4863'],

            title: [{
                text: '龙首工区数据报表',
                left: '1%',
                top: '6%',
                textStyle: {
                    color: '#fff'
                }
            }, {
                text: '综合数据环图',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff'
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['数据内容1', '数据内容2', '数据内容3']
            },
            grid: {
                left: '1%',
                right: '35%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#FF4500'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'value'
            },
            series: [{
                name: '数据内容1',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [90, 50, 39, 50, 120, 82, 80]
            }, {
                name: '数据内容2',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70]
            }, {
                name: '数据内容3',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [290, 200, 20, 132, 15, 200, 90]
            },
            {
                type: 'pie',
                center: ['83%', '33%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 335,
                    name: '用户来源分析',
                    itemStyle: {
                        normal: {
                            color: '#ffd285'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#ffd285',
                                fontSize: 20

                            }
                        }
                    }
                }, {
                    value: 180,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#87CEFA'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ffd285',
                            },
                            formatter: '\n手机号注册'
                        }
                    }
                }]
            },


            {
                type: 'pie',
                center: ['83%', '72%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 435,
                    name: '用户来源分析',
                    itemStyle: {
                        normal: {
                            color: '#ff733f'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#ff733f',
                                fontSize: 20

                            }
                        }
                    }
                }, {
                    value: 100,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#87CEFA'


                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#FF4500',
                            },
                            formatter: '\n三方快捷登陆'
                        }
                    }
                }]
            }]
        }
        myChart.setOption(option)
    },
    methods: {

    },
}
</script>

<style lang='less' scoped >

</style>