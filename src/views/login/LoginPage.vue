<template>
  <div class="login-page">
    <div class="login-form">
      <el-form 
        :model="loginForm" 
        :rules="loginRules" 
        ref="loginForm" >
        <div class="title-container">
          <h3 class="title">图书管理后台系统</h3>
        </div>
        <!-- 用户名 -->
        <el-form-item prop="username" class="form-item">
          <span class="svg-container">
            <i class="el-icon-user"></i>
          </span>
          <el-input 
            type="text" 
            placeholder="请输入用户名"
            v-model="loginForm.username" 
            autocomplete="on" 
            @focus="inputFocus"
            @blur="inputBlur"/>
        </el-form-item>
        <!-- 密码 -->
        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password" class="form-item">
            <span class="svg-container">
              <i class="el-icon-lock"></i>
            </span>
            <el-input 
              placeholder="请输入密码"
              :type="passwordType" 
              v-model="loginForm.password" 
              autocomplete="on"
              @keyup.native="checkCapsLock"
              @focus="inputFocus"
              @blur="inputBlur"/>
            <span class="show-pwd" @click="showPwd">
              <i class="el-icon-view" />
            </span>
          </el-form-item>
        </el-tooltip>
        <el-button type="primary" style="width:100%;margin-bottom:30px;">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name:'LoginPage',
    components:{

    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户名！'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 4) {
          callback(new Error('密码不能小于4位！'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules:{
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',  //控制密码是否显示
        capsTooltip: false,    //大写提示是否显示
      };
    },
    methods: {
      showPwd(){
        this.passwordType = this.passwordType === "password" ? "text" : "password" 
      },
      checkCapsLock(e){
        const { key } = e
        this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
      },
      inputFocus(event){
        const formItem = event.target.parentNode.parentNode.parentNode
        formItem.classList.add("form-focus")
      },
      inputBlur(event){
        const formItem = event.target.parentNode.parentNode.parentNode
        formItem.classList.remove("form-focus")
      }
    }
};
</script>
  
<style lang="less">
  .el-form-item{
    border: 1px solid rgba(255,255,255, .1);
    .el-form-item__content{
      height: 48px;
      line-height: 40px;
      .el-input{
        width: 85%;
        height: 48px;
        input{
          background: transparent;
          border: 0;
          color: #fff;
          height: 48px;
        }
        input::-webkit-input-placeholder {
          color: #909399;
        }
      }
    }
    
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>

<style lang="less" scoped>
  .login-page{
    width: 100%;
    min-height: 100%;
    background-color: #2d3a4b;
    .login-form{
      margin: 0 auto;
      padding: 160px 35px 0;
      width: 520px;
      .form-item{
        &:hover{
          border: 1px solid #909399;
        }
      }
      .form-focus{
        border: 1px solid #909399;
        border-radius: 5px;
      }
      .title-container {
        position: relative;
        .title {
          font-size: 26px;
          color: #fff;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
      }
      .svg-container{
        display: inline-block;
        padding-left: 15px;
        margin-top: 2px;
        font-size: 20px;
        color: #979797;
      }
      .show-pwd{
        display: inline-block;
        padding-left: 8px;
        margin-top: 2px;
        font-size: 20px;
        color: #C0C4CC;
        cursor: pointer;
        &:hover{
          color: #909399;
        }
      }
    }
  }
</style>
