<template>
    <div class=''>
        <div id="analyzeRadar" style="width:400px;height:200px"></div>
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
        let datas = [
            { value: 20, name: '比率1', rate: '20%' },
            { value: 10, name: '比率2', rate: '10%' },
            { value: 22, name: '比率3', rate: '22%' },
            { value: 11, name: '比率4', rate: '11%' },
            { value: 13, name: '比率5', rate: '13%' },
        ];

        datas=datas.sort((a,b)=>a.value-b.value)

        let datap = [];
        let colorList = ['#3399ff', '#85c285', '#ffc266', '#ff8585', '#c299ff',];
        let color = colorList.splice(0, datas.length);
        for (let i = 0; i < datas.length; i++) {
            datap.push({
                value: datas[i].value,
                //name: 'rosetemp' + i,
            });
            color.push('transparent');
        }
        datap = datas.concat(datap);

        let option = {
            backgroundColor: "",
            legend: {
                bottom: '25%',
                left: '1%',
                orient: 'vertical',
                data: datas,
                icon: 'circle',
                itemWith: 8,
                itemHeight: 8,
                itemGap: 10,
                // padding: [5, 10, 5, 0],
                // formatter(name) {
                //     const item = datas.filter((item) => item.name === name)[0];
                //     return `{name|${name}}{value| ${parseInt(item.value).toLocaleString()}}${item.rate}`;
                // },
                textStyle: {
                    rich: {
                        name: {
                            color: '#595959',
                            fontSize: 24,
                            width: 150,
                        },
                        value: {
                            color: '#595959',
                            fontSize: 24,
                            width: 120,
                        },
                    }, 
                },
            },
            title: {
                text: '',
                top: '47%',
                textAlign: 'center',
                left: '49.5%',
                textStyle: {
                    color: '#262626',
                    fontSize: 22,
                    fontWeight: '400',
                },
            },
            color: color,
            series: [
                //大背景
                // {
                //     name: 'Nightingale Chart',
                //     type: 'pie',
                //     radius: [40, 200],
                //     center: ['50%', '50%'],
                //     roseType: 'radius',
                //     silent: true,
                //     startAngle: 180,
                //     legendHoverLink: false,
                //     itemStyle: {
                //         borderRadius: 0,
                //     },
                //     label: {
                //         show: false,
                //     },
                //     emphasis: {
                //         label: {
                //             show: false,
                //         },
                //     },
                //     color: ['#f6f8fe', '#ffffff'],
                //     data: [
                //         { value: 10, name: 'r' },
                //         { value: 10, name: 'ro' },
                //     ],
                // },
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [20, 190],
                    center: ['50%', '86%'],
                    roseType: 'radius',
                    startAngle: 180,
                    minAngle:90,
                    legendHoverLink: false,
                    itemStyle: {
                        borderRadius: 1,
                        borderColor: '#fff',
                        borderWidth: 0,
                        fontSize:22
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        color: '#fff',
                        formatter(params) {
                            return params.data.rate;
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                    data: datap,
                },
            ],
        };

        let myChart = echarts.init(document.getElementById('analyzeRadar'))
        myChart.setOption(option)

    },
    methods: {

    },
}
</script>

<style lang='less' scoped >

</style>