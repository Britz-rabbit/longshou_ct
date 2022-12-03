/* <img src="@/assets/img/logo2.png" width="50%;height:100%;">
<div class="connect con con1-1">
  <span>连接状态</span>
  <!-- 成功或失败状态，因定位需要，未使用v-else -->
  <i v-if="isConnect" class="success iconfont icon-connection"></i>
  <span v-if="isConnect" class="success">已连接</span>

  <i v-if="!isConnect" class="error iconfont icon-disconnect"></i>
  <span v-if="!isConnect" class="error">未连接</span>
</div> */


// .con1-1 {
//     position: relative;
//     font-size: 18px;

//     span:first-of-type {
//       position: absolute;
//       left: 8px;
//       top: 8px;
//     }

//     .icon-connection,
//     .icon-disconnect {
//       position: absolute;
//       left: 28%;
//       top: 16%;
//       font-size: 46px;
//     }

//     span:last-of-type {
//       position: absolute;
//       bottom: 8px;
//       right: 8px;
//     }
//   }