<style scoped>
	.layout-copy {
		text-align: center;
		color: #9ea7b4;
		font-size: 20px;
	}
	
	#shouye {
		width: 100%;
		padding: 20px 0;
	}
	
	.liebaio {
		overflow: hidden;
		padding-top: 20px;
		position: relative;
	}
	
	.liebiao li {
		padding: 8px;
		background: #fff;
		margin: 10px 60px;
		position: relative;
		border: 1px solid #CDCDCD;
		border-radius: 5px;
	}
	
	.liebiao li:hover {
		box-shadow: inset 2px 2px 2px 2px #ECECEC;
	}
	
	.liebiao p {
		padding: 10px 0;
	}
	
	.liebiao li p:nth-child(5) {
		padding: 0;
		height: 28px;
	}
	
	.liebiao li p:nth-child(5) span {
		display: inline-block;
		width: 24%;
		height: 28px;
		line-height: 28px;
		border-right: 1px solid #C7C7C7;
		text-align: center;
		flex: left;
	}
	
	.liebiao .xinxi .nicheng {
		display: inline-block;
		position: absolute;
		left: 60px;
		top: 10px;
		font-size: 18px;
		color: orange;
	}
	.liebiao .img{
		width:40px;
		height:40px;
		
		position:absolute;
		top:10px;
		left:10px;
		
	}
	.liebiao .img img{
		width:100%;
		height:100%;
		border-radius:50%;
	}
	.liebiao a{
		margin-left:70px;
	}
	
	.liebiao h2 {
		width: 250px;
		height: 30px;
		font-size: 15px;
		line-height: 30px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		
	}
	
	.liebiao p {
		position: absolute;
		bottom: 0px;
		right: 80px;
		overflow: hidden;
	}
	
	.liebiao span {
		float: right;
		display: inline-block;
		position: absolute;
		top: 27%;
		right: 20px;
		font-size: 20px;
		cursor: pointer;
	}
	
	.sousuo {
		width: 100%;
		background: lightgoldenrodyellow;
		padding: 15px 60px;
		overflow: auto;
	}
	
	.fabiao {
		width: 88.4%;
		margin: 0 60px;
		background: lightcyan;
		padding: 10px;
		display: block;
	}
	
	.fabiao li {
		width: 850px;
		padding: 15px 5px;
	}
	
	.fabiao li:nth-child(1) span {
		float: left;
		color: cornflowerblue;
		font-size: 15px;
	}
	
	.fabiao li:nth-child(1) em {
		float: right;
	}
	
	.fabiao textarea {
		width: 850px;
		height: 80px;
		overflow: hidden;
		outline: none;
	}
	
	.fabiao li:last-child a {
		color: #000;
		font-size: 15px;
		margin-left: 15px;
	}
	
	.fabiao li:last-child a Icon {
		margin-right: 5px;
	}
	
	.fabiao li:last-child a:first-child {
		margin: 0;
	}
	
	.fabiao li:last-child Button {
		float: right;
		opacity: .6;
		background: orange;
		width: 80px;
	}
	
	.clear {
		clear: both;
	}
	
	.box {
		width: 100%;
		height: 100%;
		background: rgba(5, 205, 0, .2);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
	}
	
	.pinglun {
		width: 600px;
		height: 200px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -300px;
		margin-top: -100px;
		z-index: 66;
	}
	
	.pinglun .cuo {
		float: right;
		font-size: 15px;
		margin: 10px 15px 0 0;
	}
	
	.pinglun .cuo:hover {
		color: orange;
		transform: rotate(180deg);
		transition: 1s;
	}
	
	.pinglun .neirong {
		float: left;
		width: 100%;
	}
	
	.pinglun .neirong textarea {
		width: 90%;
		padding: 5px;
		margin: 15px;
		margin-left: 25px;
		outline: none;
	}
	
	.pinglun .neirong Button {
		width: 88px;
		opacity: .3;
		margin-left: 480px;
	}
	
	.box .shouchang {
		width: 400px;
		height: 240px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -200px;
		margin-top: -120px;
		z-index: 66;
	}
	
	.fenye {
		width: 100%;
		text-align: center;
		margin: 0 auto;
		margin-top: 40px;
		position: relative;
	}
	
	.fenye p {
		float: left;
		position: absolute;
		top: 5px;
		left: 250px;
		font-size: 18px;
	}
	
	.fenye p span {
		margin: 0 10px;
		color: orange;
	}
	
	.jushu {
		float: left;
	}
</style>
<template>

	<div id="shouye">

		<div class="sousuo">

			<Button type="success"  @click="jishu()" style="float:left;margin-right:10px;">技术分享</Button>
			<Button type="success"  @click="mianshi()" style="float:left;">生活趣事</Button>
           
			
			<Button type="primary" icon="ios-search" @click="search()" style="float:right;margin-left:20px">搜索</Button>
			<Input v-model="value" placeholder="热门搜索..." style="width:300px;float:right;"></Input>
		</div>

		<ul class="liebiao">
			<li v-for="(i,$index) in arr" @click="dian(i.id)">
                <div class="img">
                	<img v-bind:src="lzk_image+i.img" alt="" />
                </div>
				<a class="nicheng">{{i.nicheng}}</a>

				<h2 style="margin-left:70px;">{{i.biaoti}}</h2>

				<p style="margin-left:70px;">发布时间：{{i.fabushijian | time}}</p>
				<span @click="del(i.id)">x</span>

			</li>

		</ul>
		

	</div>

</template>
<script>
	export default {
		data() {
			return {

				value: '',
				arr: [],
				page: 1,
				zong: '',
				zongtiao: 1,
				meiyetiao: 1,
				vue:'vue',
				vue1:'代码',
				lzk_image:"http://192.168.43.202:8005/images/"
			}
		},
		methods: {
			//			获取列表
			json: function(page) {
				this.$http.get('http://192.168.43.202:8005/supermarke/shou?id=17').then(function(e) {
					console.log(e.body)
					this.arr = e.body
					this.zong = e.body.totalPage
					this.zongtiao = e.body.total
					this.meiyetiao = e.body.pageSize
					
				})
			},
			// 点击查看详情
			dian: function(id) {
								this.$router.push({
									path: '/homepage/',
									query: {
										num: id
									}
								})
			},
			//  删除
			del: function(id) {

				this.$http.get('http://192.168.43.202:8005/supermarke/shanchu?id=' + id).then(function(e) {
					
					if(e.body.flag = 1) {
						alert('已删除')
					} else {
						alert('删除失败')
					}
					this.$http.get('http://192.168.43.202:8005/supermarke/fenye?pageNum=' + this.page).then(function(e) {
						
						this.arr = e.body.list
						this.zong = e.body.totalPage
						this.zongtiao = e.body.total
						this.meiyetiao = e.body.pageSize
					
					})

				})
			},
			//搜索
			search: function() {
			
				this.$http.get('http://192.168.43.202:8005/supermarke/sousuo?biaoti=' + this.value).then(function(e) {
					
					this.arr = e.body
				

					
				})
			},
			//技术分享
			jishu: function() {
			
				this.$http.get('http://192.168.43.202:8005/supermarke/sousuo?biaoti=' + this.vue).then(function(e) {
					
					this.arr = e.body
				

					
				})
			},
//			生活趣事
			mianshi: function() {
			
				this.$http.get('http://192.168.43.202:8005/supermarke/sousuo?biaoti=' + this.vue1).then(function(e) {
					
					this.arr = e.body
				

					
				})
			}
		

		},

		mounted: function() {
			this.json()
		},
//		时间过滤器
		filters: {
			time: function(value) {

				function add0(m) {
					return m < 10 ? '0' + m : m
				}
				var time = new Date(parseInt(value));
				var y = time.getFullYear();
				var m = time.getMonth() + 1;
				var d = time.getDate();

				return y + '.' + add0(m) + '.' + add0(d);
			}
		}

	}
</script>