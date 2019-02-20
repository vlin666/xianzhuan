·<template>
    <div class="login">
        <div class="loginTop">
            <h1>闲转<br><i>闲置换钱</i></h1>
            <router-link tag="span" :to="{path: '/home'}">X</router-link>
        </div>
        <div class="login-wrap" v-show="showLogin">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button type="submit" @click="jump">登录</button>
          <div class="toregister">
            <span class="newregister" @click="ToRegister">注册新账号</span>
            <router-link tag="span" :to="{path: '/home'}">找回密码</router-link>
          </div>
        </div>
           <div class="register-wrap" v-show="showRegister">

            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <input type="password" placeholder="请确认密码" v-model="newPassword">
            <button type="submit">注册</button>
            <div class="others">
            <span class="otherSpan"><input type="checkbox">我已阅读并同意：</span><br>
            <div class="agreement">
            <router-link tag="span" :to="{path: '/home'}">《闲转服务条款协议》</router-link>
            <router-link tag="span" :to="{path: '/home'}">《闲转隐私权政策》</router-link>
            </div>
            </div>

            <span class="toLogin" @click="ToLogin">去登录 ></span>

        </div>
    </div>
</template>


<script>

export default {
    data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: '',
            }
        },
        methods:{
                ToRegister(){
                this.showRegister = true;
                this.showLogin = false
                },
                ToLogin(){
                    this.showRegister = false;
                    this.showLogin = true
                },
                jump(){
                  let index = this.$route.query.index;
                  if(index === 3){
                    this.$router.push('/message');
                  }else if(index === 4)
                    this.$router.push('/mine');
                }
        }
}
</script>


<style lang="scss" scoped>
    .login{
        width:100%;
        height:100%;
        height:6.66rem;
        background: url('../../../static/images/back.png');
        position: relative;
        bottom: 0;
        .imgBack{
            position:fixed;
            top:0;

            z-index:-1;
        }
        .loginTop{
            width:100%;
            height:2rem;
            position:fixed;
            color:black;
            display: block;
            h1{
                font-weight: bold;
                float: left;
                color:rgba(255, 255, 255, 0.911);
                margin-top:0.6rem;
                margin-left:0.2rem;
                font-size: 0.48rem;

              font-family: Georgia, serif;
              i{
                  font-size: 0.1rem;
                  border-top: 0.01rem solid rgba(224, 222, 222, 0.705);
                  margin-top:0.19rem;
                  margin-left:0.1rem;
                  padding-top:0.08rem;
                  position:fixed;
                  top:1rem;
                  letter-spacing:0.08rem;
                  color: rgba(22, 13, 13, 0.6);
              }
            }
            span{
                float:right;
                position: fixed;
                top:0.51rem;
                right:0.3rem;
                color:rgba(182, 179, 179, 0.952);
                font-size: 0.28rem;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

            }
        }
         .login-wrap{text-align:center;position:fixed;top:1.8rem;left:0.3rem;
                            input{display:block;background:rgba(253, 250, 250, 0.774); outline:none;  border:0px; width:3.1rem; height:0.42rem;border-radius:0.08rem; line-height:0.42rem; margin:0 auto; margin-bottom:0.1rem; outline:none; border:0.01rem solid #888; padding:10px; box-sizing:border-box;}
                            p{color:red}
                            button{display:block; width:3.1rem; height:0.42rem; line-height: 0.42rem; margin:0.32rem auto;border-radius:0.08rem; border:none; background-color:gold; color:black; font-size:16px; margin-bottom:5px;letter-spacing:0.12rem;}
                            span{cursor:pointer}
                            span:hover{color:#41b883}
                            .toregister{
                                color:rgba(250, 249, 249, 0.973);
                                font-size:0.16rem;
                                margin-top:0.32rem;
                                margin-left:2.1rem;
                            .newregister{
                                position:fixed;
                                left:0.5rem;
                                bottom:2.66rem;
                                }
                            }
         }
          .register-wrap{text-align:center;position:fixed;top:1.8rem;left:0.3rem;
                            input{display:block;background:rgba(253, 250, 250, 0.774); padding-left:0.8rem; outline:none; border-radius:0.08rem; border:0px;border:none;width:3.1rem; height:0.42rem; line-height:0.42rem; margin:0 auto; margin-bottom: 0.1rem; outline:none; border:0.01rem solid #888; padding:10px; box-sizing:border-box;};
                            p{color:red};
                            button{display:block; width:3.1rem; height:0.42rem; line-height:0.42rem; margin:0.32rem auto; border:none; background-color:gold;border-radius:0.08rem; color:black; font-size:16px; margin-bottom:5px; letter-spacing:0.12rem;};
                            span{cursor:pointer};
                            span:hover{color:#41b883};
                             .toLogin{
                                   width:1.2rem;
                                   height:0.2rem;
                                   position:fixed;
                                   bottom:1.28rem;
                                   right:0.1rem;
                                   color:white;
                                   font-size: 0.2rem;
                               }
                            .others{
                                width:100%;
                                height:0.5rem;
                                font-size:0.12rem;
                                color:black;
                               .agreement{
                                   display:block;
                                   float:left;
                                   color:rgba(32, 158, 241, 0.959);
                                   margin-left:0.4rem;
                                   margin-top:0.06rem;
                               }

                                .otherSpan{
                                    width:1.8rem;
                                    height:0.2rem;
                                    display: block;
                                    float: left;
                                    color:rgb(253, 242, 229);
                                    font-size:0.14rem;
                                    margin-top:0.08rem;


                                input{
                                    float:left;
                                    width:0.16rem;
                                    height:0.16rem;
                                    margin-left:0.37rem;
                                    margin-top:0.02rem;
                                    border:none;

                                }}
                            }
          }
    }
</style>
