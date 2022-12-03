<template>
  <el-table :data="data" ref="table" style="width: 100%;" highlight-current-row @click="">
    <!-- 可以手动填入width给colum，不设置的话会自动调节，但是切换路由后会产生宽度塌陷问题 -->
    <el-table-column prop="date1" label="日期" width="300">
    </el-table-column>
    <el-table-column prop="data2" label="负责人员" width="500">
    </el-table-column>
    <el-table-column prop="address" label="数据3" width="230">
    </el-table-column>
  </el-table>
</template>
  
<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    handleClick(item){
      console.log('你要赣深嚜',item);
    },
  },
  props:{
    data:{
      type:Array,
      default:function(){
        return  [{
        date1: '2016-05-02',
        data2: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date1: '2016-05-04',
        data2: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date1: '2016-05-01',
        data2: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date1: '2016-05-03',
        data2: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
      }
    }
  },
  mounted(){
    //console.log('收到的数据',this.$props.tableData);
  }
}
</script>

<style lang='less' scoped>
@import '@/assets/css/common.less';
.el-table {
  color: #4EACE7;
  background-color: transparent !important;

  //表行
  tr {
    background-color: #34E0D110 !important;
  }

  //选中行
  .current-row {
    background-color: rgba(120, 178, 218, 0.3) !important;
  }

  //鼠标触发行
  .hover-row {
    background-color: #4EACE720 !important;
  }

  // 表头
  th {
    background-color: transparent !important;
  }

  //表格列
  td {
    background-color: transparent !important;
  }
}
</style>