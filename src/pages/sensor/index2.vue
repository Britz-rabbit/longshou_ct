<template>
    <div class=''>
        <dv-full-screen-container ref="appRef">
            <topMenu></topMenu>
            <div class="container">
                <!-- 上方筛选框 -->
                <div class="bar" style="position:relative;">
                    <el-button type="success" size="mini" @click="changeData('all')">全部设备</el-button>
                    <el-badge :value="sensorDangerNum" class="item">
                        <el-button type="danger" size="mini" @click="changeData('danger')">异常设备</el-button>
                    </el-badge>

                    <!-- 时间选择器 -->
                    <div v-show="!current_historyFlag" style="position: relative;left: 40px;" class="">
                        <el-date-picker v-model="dateValue" type="daterange" align="right" value-format="timestamp"
                            unlink-panels range-separator="至" start-placeholder="查询起始" end-placeholder="查询终止"
                            :picker-options="pickerOptions">
                        </el-date-picker>
                    </div>
                    <el-button type="warning" size="mini" @click="changeData('history')"
                        style="margin-left: 50px;position: relative;z-index: 9;">确定查询</el-button>

                </div>

                <!-- 列表，作为组件需要将数据传入 -->
                <div class="border">
                    <!-- <list v-show="current_historyFlag" :data="robotTableDate"></list> -->
                    <list :data="robotTableDate"></list>

                </div>

                <!-- 底部分页器 -->
                <div class="" style="display: flex;justify-content: flex-end;margin-right: 26px;">
                    <el-pagination @current-change="changePage" background :current-page.sync="currentPage"
                        :page-size="100" layout="prev, pager, next" :total="1000">
                    </el-pagination>
                </div>
            </div>
        </dv-full-screen-container>
    </div>
</template>

<script>
import list from './components/list.vue'
export default {
    name: '',
    data() {
        return {
            //tabs的激活页占位符
            activeName: 'first',
            //传感器数据列表
            robotTableDate: [],
            //当前的传感器异常且未确认的数量数量
            sensorDangerNum: 0,
            //历史查询与实时数据的标识符，默认显示实时数据
            // current_historyFlag: false,
            //与服务器交互的查询日期，以时间戳形式。下标0是起始事件，下标1是截至时间
            dateValue: '',
            //日期选择器的快速选择选项
            pickerOptions: {
                shortcuts: [{
                    text: '近一周数据',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '近一月数据',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最半年数据',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            //分页器的当前页面
            currentPage: 1,
        }
    },
    props: {
    },
    components: {
        list
    },
    computed: {

    },
    mounted() {
        this.changeData('all')
    },
    methods: {
    //对多选按钮的回调处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //点击改变列表数据的回调
    changeData(type) {
      switch (type) {
        //当前的全部数据
        case 'all':
          //this.current_historyFlag=true
          this.robotTableDate = this.$store.state.sensorInfo
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        //当前的异常数据
        case 'danger':
          //this.current_historyFlag=true
          this.robotTableDate = this.$store.state.sensorInfo.filter((item) => item.isDanger)
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        //历史查询数据
        case 'history':
          //this.current_historyFlag=true
          console.log(this.filterTime(this.dateValue[0]));
          console.log(this.filterTime(this.dateValue[1]));
          break;
        default:
          break;
      }
    },
    //时间戳转化为年月日
    filterTime(time) {
      const date = new Date(time)
      const Y = date.getFullYear()
      const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const D = date.getDate()
      return `${Y}-${M}-${D}`
    }


  },
}
</script>

<style lang='less' scoped>
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
  //position: relative;
}

span {
  color: #ffffff;
}

.con {
  width: 100%;
  border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

.bar {
  width: 100%;
  height: 60px;
  margin: 12px;
  padding-top: 26px;
  display: flex;
  // justify-content: center;
  align-items: center;

  .el-button {
    margin-left: 26px;
    height: 38px;
    font-size: 18px;
  }
}
</style>

<style lang="less">
//修改分页器背景
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #114388 !important;
  color: #409EFF;
}
</style>