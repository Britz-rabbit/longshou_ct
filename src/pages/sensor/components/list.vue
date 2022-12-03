<template>
  <div class=''>
    <!-- 机器人传感列表数据 -->
    <div class="listCon" style="width: 100%;padding-bottom: -24px;height: 100%;">
      <el-table :data="data" height="80vh" highlight-current-row>
        <!-- <el-table-column type="selection" width="80">
          </el-table-column> -->
        <el-table-column type="index" label="序号" width="80"> </el-table-column>
        <el-table-column prop="name" label="传感器名称"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="position" label="传感位置"> </el-table-column>
        <el-table-column prop="value" label="传感数值">
        </el-table-column>
        <el-table-column prop="isDanger" label="传感器状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.isDanger" type="danger">异常</el-tag>
            <el-tag v-else type="success">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isConfirm" label="确认状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isConfirm" :disabled="!scope.row.isDanger" active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="详细信息">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      //监视窗口，改变列表高度
      tableheight: null
    }
  },
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  components: {

  },
  computed: {

  },
  //mounted() {
  // this.tableheight = window.innerHeight - 100
  // window.onresize = () => {
  //   this.tableheight = window.innerHeight - 100;
  //   console.log(this.tableheight);

  // };

  //挂载window.onresize事件(动态设置table高度)

  // },

  mounted() {
    //挂载window.onresize事件(动态设置table高度)
    let _this = this;
    window.onresize = () => {
      if (_this.resizeFlag) {
        clearTimeout(_this.resizeFlag);
      }
      _this.resizeFlag = setTimeout(() => {
        _this.getTableHeight();
        _this.resizeFlag = null;
      }, 100);
    };
  },

  created(){
    this.getTableHeight()
  },

  methods: {
    //计算table高度(动态设置table高度)
    getTableHeight() {
      let tableH = 600; //距离页面下方的高度
      let tableHeightDetil = window.innerHeight - tableH;
      if (tableHeightDetil <= 300) {
        this.tableHeight = 300;
      } else {
        this.tableHeight = window.innerHeight - tableH;
      }
    },

  },
}
</script>

<style lang='less'>
//表底部的边框
.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 2px dotted rgb(114, 110, 110);

}

.el-table {
  //color: #4EACE7;
  color: #ffffff;
  background-color: transparent !important;
  //font-size: 14px;

  .cell {
    color: aliceblue;
    font-size: 17px;
    background-color: transparent !important;
  }

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
    background-color: rgba(120, 178, 218, 0.3) !important;
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