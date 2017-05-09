<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        line-height:30px;
        text-align:center;
        font-size:20px;
        color:pink;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 200px;
        height: inherit;
        float:right;
        margin-right:15px;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 550px;
        margin: 15px;

       /* overflow: hidden;*/

        margin-bottom:0px;
        overflow: hidden;

        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .ivu-menu-vertical.ivu-menu-light:after{
      background:#fff;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" active-name="1">
            <div class="layout-logo">New Day</div>
            <div class="layout-assistant">
                <div style="width:150px;height:60px;float:right;">
                  <span style="width:30px;height:30px;background:red;float:left;display:inline;border-radius:50%;margin:15px 10px 0 15px;overflow:hidden;border-radius:50%;"><img style="width:100%;height:100%;float:left;" v-bind:src=lzk_img></span>
                  <span style="float:left;width:90px;height:30px;overflow:hidden;line-height:30px;margin-top:15px;">{{lzk_nicheng}}</span>
                </div>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']" style="min-height:550px;">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                新闻中心
                            </template>
                            
                            <router-link to="/setup"><Menu-item name="1-1">新闻列表</Menu-item></router-link>
                            <router-link to="/myfabu"><Menu-item name="1-2">我的新闻</Menu-item></router-link>
                         
                        </Submenu>
                        <!--<Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>-->
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                我的
                            </template>
                            <router-link to="/lzk"><Menu-item name="3-1">发布新闻</Menu-item></router-link>
                            <router-link to="/wode"><Menu-item name="3-2">个人设置</Menu-item></router-link>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19" style="border-left:1px solid #ccc;">
                    <div class="layout-content-main" style="min-height:550px;background:#fff;">
                        <transition name="move" mode="out-in"><router-view></router-view></transition>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            &copy 2017 mi si  L C S
        </div>
    </div>
</template>
<script>
    export default {
        data (){
          return {
			lzk_uname:'',
			lzk_nicheng:'',
			lzk_img:''
          }
        },
        mounted:function(){
        	if(sessionStorage.img == 'null'){
        		this.lzk_img = "/static/img/001.a7367c7.jpg";
        		sessionStorage.img = "/static/img/001.a7367c7.jpg";
        	}else{
        		this.lzk_img = 'http://192.168.43.202:8005/images/'+sessionStorage.img;
        	}
          	
          	this.lzk_nicheng = sessionStorage.nicheng;
        }
    }
</script>
