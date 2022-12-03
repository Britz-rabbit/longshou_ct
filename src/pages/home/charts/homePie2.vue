<template>
    <div class=''>
        <div id="homePie2" style="width:320px;height:320px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: '',
    data() {
        return {
            val:96,
            timer:null,
            myChart :null
        }
    },
    props: {
    },
    components: {

    },
    computed: {

    },

    mounted() {
       this.myChart = echarts.init(document.getElementById('homePie2'))
       this.timer= setInterval(() => {
            this.val= Math.floor(Math.random()*10+90) 
            this.changeVal()
        }, 1000);


    },
    beforeDestroy(){
        clearInterval(this.timer)
    },
    methods: {
        changeVal() {
            const outBg = 'rgba(32, 46, 92,1)'; // 外圈背景
            var percent = this.val;//百分数
            let option = {
                backgroundColor: '',
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                },
                series: [

                    // 内层圆环
                    {
                        "name": ' ',
                        "type": 'pie',
                        "radius": ['55%', '54%'],
                        "avoidLabelOverlap": false, // 是否启用防止标签重叠策略
                        "startAngle": 225,
                        "hoverAnimation": false,
                        "legendHoverLink": false,
                        // "label": {
                        //     "normal": {
                        //         "show": false,
                        //         "position": 'center'
                        //     },
                        //     "emphasis": {
                        //         "show": true,
                        //         "textStyle": {
                        //             "fontSize": '30',
                        //             "fontWeight": 'bold'
                        //         }
                        //     }
                        // },
                        "labelLine": {
                            "normal": {
                                "show": false
                            }
                        },

                        "data": [{
                            "value": 25,
                            "name": '1',
                            itemStyle: {
                                borderWidth: 0,
                                color: 'rgba(1, 168, 233, 1)'
                            }
                        }],
                        label: {
                            show: true,
                            rich: {
                                a: {
                                    color: '#ffffff',
                                    fontSize: 22,
                                    fontWeight: '700',
                                    padding: [0, 0, -330, -150],
                                },
                            },
                            formatter: function (val) {
                                //console.log(val);
                                if (val.dataIndex === 0) {
                                    return '{a|正常运行设备}';
                                }

                            },
                        },


                    },

                    // 外层数据圆环
                    {
                        "name": '',
                        "type": 'pie',
                        "radius": ['50%', '68%'],
                        "avoidLabelOverlap": false,
                        "startAngle": 315,
                        "color": ['transparent', "red", "transparent"],
                        "hoverAnimation": false,
                        "legendHoverLink": false,
                        "clockwise": false, // 饼图的扇区是否是顺时针排布。
                        "itemStyle": {
                            "normal": {
                                "borderColor": "transparent",
                                "borderWidth": "20"
                            },
                            "emphasis": {
                                "borderColor": "transparent",
                                "borderWidth": "20"
                            }
                        },
                        "z": 10,
                        "label": {
                            "normal": {
                                "show": false,
                                "position": 'center'
                            }
                        },

                        "labelLine": {
                            "normal": {
                                "show": false
                            }
                        },
                        "data": [{ // 无占比
                            "value": (100 - percent) * 270 / 360,
                            "label": {
                                normal: {
                                    formatter: percent + '%',
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'normal',
                                        color: '#ffffff'
                                    }
                                }
                            },
                            "name": ''
                        }, { // 占比圆环高亮
                            "value": 1,
                            "name": '',
                            itemStyle: {
                                color: 'rgb(1,223,243)'
                            }
                        }, { // 占比
                            "value": 100 - (100 - percent) * 270 / 360,
                            "name": '',
                            itemStyle: {
                                color: { // 外层圆环底色
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0.75, // 设置成1下面也会显示
                                        color: 'rgba(71, 123, 242,0)' // 0% 处的颜色
                                    }, {
                                        offset: 0,
                                        color: 'rgba(71, 123, 242,1)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }]
                    },
                    // 内部实心圆
                    {
                        type: 'pie',
                        radius: '83%',
                        center: ['50%', '50%'],
                        z: 1,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.RadialGradient(.5, .5, .4, [{
                                    offset: 0,
                                    // color: 'rgb(25,46,106)',
                                    color: 'rgba(31,60,146,0)',

                                },
                                {
                                    offset: .5,
                                    color: '#385AB1'
                                },
                                {
                                    offset: .7,
                                    color: 'rgba(3,16,53, 1)'
                                },
                                {
                                    offset: 1,
                                    // color: 'rgb(3,16,53)'
                                    color: 'rgba(3,16,53, 1)'
                                }], false),
                                // label: {
                                //     show: false
                                // },


                                labelLine: {
                                    show: false
                                }
                            },

                        },
                        hoverAnimation: false,
                        label: {
                            show: false,
                        },
                        tooltip: {
                            show: false
                        },
                        data: [100],

                    }
                ]
            };
 

            //var myChart = echarts.init(document.getElementById('homePie2'))
            let myChart =this.myChart

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
        }
    },
}
</script>

<style lang='less' scoped >
.test {
    color: rgb(231, 70, 97);
}
</style>