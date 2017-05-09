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
  margin:-200px 0 0 -215px;
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
.lzk-input{
width:310px;line-height:30px;
}
</style>
<template>
    <div class="lzk_login">
        <video id="video" muted="muted" autoplay="autoplay" loop="loop">
              请升级您的浏览器版本
              <source type="video/mp4" src='http://pic.qiantucdn.com/58pic/shipin/19/95/51/19955124.mp4'>
        </video>
        <Card class="lzk_logindl">
              <div>
                <form>
                  <p class="lzk_logp" style="margin-bottom:20px;font-size:20px;text-indent:2px;">注册</Input></p>
                  <p class="lzk_logp">
                  	<Input type="text" v-model="user" class="lzk-input" icon="person" placeholder="用户名" ></Input>
                  </p>
                  <p class="lzk_logp">
                  	<Input type="password" v-model="pass" class="lzk-input" icon="ios-flower" placeholder="密码"></Input>
                  </p>
                  <p class="lzk_logp">
                  	<Input type="text" v-model="email" class="lzk-input" icon="ios-email" placeholder="邮箱"></Input>
                  </p>
                  <p class="lzk_logp">
                  	<Input type="text" v-model="nichen" class="lzk-input" icon="ios-paw" placeholder="昵称"></Input>
                  </p>
                  <p class="lzk_logp" style="margin-top:15px;">
                  	<Button type="info" style="margin-right:12px;" @click="onSubmit()">注册</Button>
                  	<a class="lzk_a" href="javascript:;"><router-link to="/">以注册? 去登陆</router-link></a>
                  </p>
                </form>
							</div>
        </Card>
        
    </div>

</template>
<script>
    export default {
        data (){
            return {
               user:'',
               pass:'',
               email:'',
               nichen:'',
               myreg:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, 
               myuse:/^[\u4e00-\u9fa5]+$/,
            }
        },
        methods:{
            onSubmit:function(){
              if(this.user == '' || this.pass == '' || this.email == '' || this.nichen == '')
              {
                  alert('失败');
              }
              else if(!this.myreg.test(this.email))
              {
              	alert('请输入有效的Email')
              }
              else if(this.myuse.test(this.user))
              {
              	alert('用户名不可以为中文')
              }
              else
              {
                  this.$http.post('http://192.168.43.202:8005/supermarke/register',{
                      uname:this.user,
                      pwd:this.pass,
                      email:this.email,
                      nicheng:this.nichen
                  },{emulateJSON:true}).then(function(reqs){
                       
                       this.user = '';
				               this.pass = '';
				               this.email = '';
				               this.nichen = '';
				               if(reqs.body.flag == 1){
				               		alert('成功')
				               }
                  })
              }
            },
        }
        
    }

</script>
