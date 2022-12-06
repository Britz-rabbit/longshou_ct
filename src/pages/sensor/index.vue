<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class="container">
      <dv-border-box-10>
        <!-- 第一部分 -->
        <div class=" bar" style="width: 100%;height:6%;position: relative;">
          <el-button type="success" size="mini" @click="changeData('all')">全部设备</el-button>
          <el-badge :value="sensorDangerNum" class="item">
            <el-button type="danger" size="mini" @click="changeData('danger')">异常设备</el-button>
          </el-badge>
          <!-- 时间选择器 -->
          <div style="position: relative;left: 20px;" class="">
            <el-date-picker v-model="dateValue" type="daterange" align="right" value-format="timestamp" unlink-panels
              range-separator="至" start-placeholder="查询起始" end-placeholder="查询终止" :picker-options="pickerOptions">
            </el-date-picker>
          </div>
          <el-button type="warning" size="mini" @click="changeData('history')"
            style="margin-left: 30px;position: relative;z-index: 9;">确定查询
          </el-button>
          <el-button type="success" size="mini" @click="changeData('generate')"
            style="margin-left: 10px;position: relative;z-index: 9;">生成报表
          </el-button>
        </div>
        <!-- 第二部分 -->
        <div class="" style="width: 100%;height:86%">
          <list :data="robotTableData" @showSensorDetail="showSensorDetail"></list>
        </div>
        <!-- 第三部分 -->
        <div class="" style="width: 98%;height:10%;display: flex;justify-content: flex-end;margin-right: 2%;">
          <el-pagination @current-change="changePage" background :current-page.sync="currentPage" :page-size="15"
            layout="prev, pager, next" :total="$store.state.sensorInfo.length + 1">
          </el-pagination>
        </div>

        <el-dialog title="详细抓拍" :modal="false" center :visible.sync="dialogVisible" width="50%">
          <img :src="gallaryImg" alt="" style="width: 100%;height:100%;">
        </el-dialog>

      </dv-border-box-10>
    </div>
  </dv-full-screen-container>
</template>

<script>
import list from './components/list.vue'
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      //tabs的激活页占位符
      activeName: 'first',
      //传感器数据列表
      robotTableData: [],
      //当前的传感器异常且未确认的数量数量
      sensorDangerNum: 0,
      //历史查询与实时数据的标识符，默认显示实时数据
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
      //对应页数的数据，每页15个数据
      currentTableData: null,
      //查看详细信息的对话框
      gallaryImg: require("../../assets/img/wrong.jpeg"),
      //对话框是否显示
      dialogVisible:false
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
    this.changePage()
  },
  methods: {
    //点击改变列表数据的回调
    changeData(type) {
      switch (type) {
        //当前的全部数据
        case 'all':
          this.robotTableData = this.$store.state.sensorInfo
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        //当前的异常数据
        case 'danger':
          this.robotTableData = this.$store.state.sensorInfo.filter((item) => item.isDanger)
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        //历史查询数据
        case 'history':
          console.log(this.filterTime(this.dateValue[0]));
          console.log(this.filterTime(this.dateValue[1]));
          // 测试http跨域
          axios.post('/api/UserInfoQuery/UserInfo', { "userid": 0, "username": "admin333", "password": "qwe123", "usertype": 0 }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        //根据查询的数据生成报表
        case 'generate':
          this.$message({
            type: 'success',
            message: '生成报表成功!'
          });
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
    },
    //修改分页器当前页，并显示对应页数的数据
    changePage() {
      //先将整个数据分成15个一份的二位数组，再取对应的数据。实际上线后不必如此
      this.robotTableData = this.divideArr(this.$store.state.sensorInfo, 15)[this.currentPage - 1]
    },
    //将数组分割成num个一份的二维数组
    divideArr(arr, num) {
      var newArr = []//分割后的二维数组
      var Flag = 0//分割前数组元素的计数符
      for (let i = 0; i < Math.ceil(arr.length / num); i++) {
        let temArr = []//临时存贮的小数组
        for (let j = 0; j < num; j++) {
          if (!arr[Flag]) break
          temArr.push(arr[Flag])
          Flag++
        }
        newArr.push(temArr)
      }
      console.log(newArr);
      return newArr
    },

    //在对话框内显示子组件list传过来的信息
    showSensorDetail(row){
      console.log('父组件收到数据',row);
      this.dialogVisible=true
    }
  },
  watch: {

  }
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
  background: url('@/assets/img/background.png');
  background-size: cover;
  //border: 1px solid red;
}

.bar {
  width: 100%;
  height: 60px;
  padding-top: 26px;
  display: flex;
  // justify-content: center;
  align-items: center;

  .el-button {
    margin-left: 10px;
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