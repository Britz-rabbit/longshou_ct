<template>
  <dv-full-screen-container ref="appRef">
    <div class='loginCon'>

      <!-- 登录框 -->
      <div class="login">
        <!-- 左侧动图区域 -->
        <div class="left">
          <img src="@/assets/img/login.gif" style="height:100%;width:100%">
        </div>
        <!-- 右侧列表区域 -->
        <div class="right">
          <h1>量子智能登录</h1>
          <div class="inputs">
            <el-form :model="userForm" status-icon ref="loginForm" label-width="100px" class="ruleForm">
              <el-form-item label="用户名" prop="user" :rules="[
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ]">
                <el-input type="text" prefix-icon="el-icon-user" v-model="userForm.user" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" :rules="[
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]">
                <el-input type="password" prefix-icon="el-icon-lock" v-model="userForm.password" autocomplete="off">
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="confirm" v-loading.fullscreen.lock="isLoading" element-loading-text="正在验证信息"
            element-loading-background="rgba(255, 255, 255,0.6)" @click="login('loginForm')">
            <span>登</span>
            <span>录</span>
          </div>
        </div>
      </div>

      <!-- 背景墙 -->
      <div class="background">

      </div>
    </div>
  </dv-full-screen-container>

</template>

<script>


export default {
  data() {
    return {
      //输入框内的用户名和密码
      userForm: {
        user: '',
        password: ''
      },
      //数据库中的用户名占位符
      userList: [],
      //是否加载中
      isLoading: false,
      //要提示的信息
      loginMsg: '用户名或密码错误'
    }
  },
  mounted() {
    this.userList = this.$store.state.userInfo
    //console.log(this.userList);
  },
  methods: {
    login(formName) {
      //模拟时间:200-600
      let loadTime = Math.random() * 400 + 200
      this.isLoading = true

      //登录表单预验证
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message.error('请输入用户名和密码');
          return
        }
      });

      for (let i in this.userList) {
        if (this.userList[i].user === this.userForm.user && this.userList[i].password === this.userForm.password) {
          this.loginMsg = '登陆成功！'
          break
        }
      }

      //处理异步的加载动画
      function timeout(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, false);
        });
      }

      timeout(loadTime).then((value) => {
        this.isLoading = value
        if (this.loginMsg === '登陆成功！') {
          this.$message({
            message: '登陆成功',
            type: 'success'
          });
          this.$router.push('./home')
        } else {
          this.$message.error(this.loginMsg);
        }
      });

    }



  }
}
</script>

<style lang='less' scoped >
.loginCon {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  //border: 1px solid transparent;
  position: relative;
  background: url('@/assets/img/loginBackground.png') no-repeat;
  background-size: cover;
}

.border {
  border: 1px solid red;
}

.login {
  width: 62%;
  height: 50%;
  //border: 1px solid red;
  position: absolute;
  z-index: 9;
  left: 18%;
  top: 20%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 6px 1px rgb(104, 102, 102);
  background-color: #ffffff;
  display: flex;

  .left {
    height: 100%;
    width: 50%;
    display: flex;
  }

  .right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    //background-color: aqua;
    h1 {
      color: #05A2EC;
    }

    .inputs {
      width: 100%;
      height: 60%;
      //border: 1px solid red;

      .ruleForm {
        width: 86%;
        height: 60%;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

    }

    .confirm {
      width: 205px;
      height: 42px;
      margin-top: 3px;
      border-radius: 6px;
      border: 1px solid rgb(126, 121, 121);
      //box-shadow: 0 0 2px 1px rgb(197, 194, 194);
      box-shadow: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: all 0.2s;
      background-color: #1669DB;
      color: #fff;

      &:hover {
        cursor: pointer;
        margin-top: 1px;
        //box-shadow: none;
        box-shadow: 0 0 2px 1px rgb(197, 194, 194);
      }

      span {
        text-align: center;
        font-size: 16px;
        font-weight: 100;
      }
    }

  }
}

// .background {
//   //color: rgba(255, 255, 255,0.6);
//   width: 200%;
//   height: 90%;
//   background-color: #04a5f0;
//   // background: url('@/assets/img/loginBackground.jpg') no-repeat;
//   //background-size: cover;
//   transform: rotate(45deg);
// }
</style>