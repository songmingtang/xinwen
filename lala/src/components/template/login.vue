
<template>
    <div class="lzk_login">
        <video id="video" muted="muted" autoplay="autoplay" loop="loop">
        			请升级您的浏览器版本
        			<source type="video/mp4" src='http://pic.qiantucdn.com/58pic/shipin/19/95/51/19955124.mp4'>
        </video>
        <Card class="lzk_logindl">
              <div>
                <form>
                  <p style="text-indent:2px;margin-bottom:20px;font-size:20px;">用户登陆</p>
                  <p class="lzk_logp"><Input class="lzk_input" placeholder="用户名" icon="person" type="text" v-model="user"></Input></p>
                  <p class="lzk_logp"><Input class="lzk_input" placeholder="密码" icon="ios-flower" type="password" v-model="pass"></Input></p>
                  <p class="lzk_logp" style="margin-top:15px;"><Button type="info" @click="onSubmit()" style="margin-right:12px;">登陆</Button><a class="lzk_a" href="javascript:;"><router-link to="/Registered">还没注册? 去注册</router-link></a></p>
                </form>
              </div>
        </Card>
        <Alert style="width:350px;margin:0 auto;" v-show="async">
             <template slot="desc">{{aleet}}</template>
        </Alert>
    </div>


</template>
<script>
    export default {
        data (){
            return {
                user:'',
                pass:''
                ,aleet:'错误提示'
                ,async:false
            }
        },
        methods:{
            onSubmit:function(){
                if(this.user == '' || this.pass == ''){
                    this.async = true;
                    this.aleet = '输入不能为空';
                }else{
                  this.$http.post('http://192.168.43.202:8005/supermarke/login',{
                    uname:this.user
                    ,pwd:this.pass
                  },{emulateJSON:true}).then(function(reqs){
                        if(reqs.body.flag == 1){
                            this.async = true;
                            this.aleet = '哈哈';
                            console.log(reqs.body.result[0])
                            sessionStorage.id = reqs.body.result[0].id;
                            sessionStorage.email = reqs.body.result[0].email;
                            sessionStorage.img = reqs.body.result[0].img;
                            if(sessionStorage.img == null){
                            	sessionStorage.img = '1493797361694.jpg';
                            }
                            sessionStorage.nicheng = reqs.body.result[0].nicheng;
                            sessionStorage.uname = reqs.body.result[0].uname;
                            this.$router.push({path:'/Homepage'});
                        }else if(reqs.body.flag == 3){
                            this.async = true;
                            this.aleet = '账号或密码输入错误';
                        }else{
                            this.async = true;
                            this.aleet = '登陆失败';
                        }
                  })
                }
            }
        }
    }
</script>
<style scoped>
.lzk_login{
  width:100vx;
  height:100vh;
  overflow:hidden;
  position:relative;
}
#video{
  min-width:102%;
  min-height:102%;
  position:absolute;
  left:0;
  top:0;
  z-index:-1;
}
.lzk_logindl{
  position:absolute;
  left:50%;
  top:50%;
  width:400px;
  margin:-150px 0 0 -215px;
  opacity:.6;
  padding:0px 20px 20px 20px;
  transition:all 0.5s;
}
.lzk_logindl:hover{
  opacity:1;
}
.lzk_logp{
  font: normal normal 12px '微软雅黑';
  line-height:45px;
}
.lzk_a{
  float:right;
  margin:10px 20px 0 0;
}
.lzk_input{
  line-height:30px;
}
</style>