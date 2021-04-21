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
            ref="username"
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
              ref="password"
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
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
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
          username: 'admin',
          password: 'admin'
        },
        loginRules:{
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',  //控制密码是否显示
        capsTooltip: false,    //大写提示是否显示
        loading: false,
        redirect: undefined,
        otherQuery: {}
      };
    },
    mounted() {
      if(this.loginForm.username === ''){
        this.$refs.username.focus()
      }else if (this.loginForm.password === ''){
        this.$refs.password.focus()
      }
    },
    methods: {
      showPwd(){
        this.passwordType = this.passwordType === "password" ? "text" : "password" 
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
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
      },
      handleLogin(){
        this.$refs.loginForm.validate(valid => {
          if(valid){
            this.loading = true
            this.$store.dispatch('user/login',this.loginForm)
              .then(()=>{
                console.log(this.redirect,this.otherQuery);
                //this.$router.push('/home')
               this.$router.push({ path:this.redirect || '/', query:this.otherQuery })
                this.loading = false
              }).catch(() => {
                this.loading = false
              })
          }else{
            console.log('error submit!');
            return false
          }
        })
      },
      getOtherQuery(query){
        return Object.keys(query).reduce((acc,cur) => {
          if(cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        },{})
      }
    },
    watch: {
      $route: {
        handler: function(route){
          const query = route.query
          if(query){
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true
      }
    }
};
</script>
  
<style lang="less">
  .login-page{
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
