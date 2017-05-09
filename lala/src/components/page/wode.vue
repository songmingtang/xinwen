<style scoped>
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
	
	.xiugai {
		width: 100%;
		
		
	}
	
	.xinxi {
		width: 400px;
		margin: 0 auto;
		background: #f5f7f9;
		overflow: hidden;
		padding: 10px 0;
		
	}
	
	
	.touxiang {
		width: 100px;
		height: 100px;
		margin: 0 150px;
		margin-top: 10px;
	}
	
	.touxiang img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid #ccc;
	}
	
	.juti {
		width: 100%;
	}
	.juti input{
		border-radius:5px;
		outline:none;
		font-size:14px;
		padding:5px 10px;
		margin-left:30px;
		width:300px;
	}
	
	.juti li:nth-child(2),
	.juti li:nth-child(3),
	.juti li:nth-child(4),
	.juti li:nth-child(5) {
		list-style: none;
		margin-top: 20px;
		color: orange;
		font-size: 16px;
		margin-left:20px;
	}
	
	.juti li:nth-child(1) {
		margin-top: 50px;
		color: orange;
		font-size: 16px;
		list-style: none;
		margin-left: 20px;
	}
	
	.juti li:nth-child(1) a {
		margin-left: 100px;
		color: #C6C6C6;
	}
	
	.touxiang li {
		list-style: none;
		width: 100%;
		height: 30px;
		position: relative;
	}
	
	.touxiang li input {
		display: inline-block;
		color: orange;
		margin-left: 20px;
		margin-top: 5px;
	}
	
	.touxiang li button {
		display: inline-block;
		position: absolute;
		bottom: 0;
		right: -160px;
	}
</style>
<template>
	<div class="xiugai">
		<div class="xinxi">
			<div class="touxiang">
				<img v-bind:src="lzk_img" alt="" id="ImgSrc" />
				<li>
					<input type="file" id="avatar" />
					
				</li>
			</div>

			<div class="juti">
				<li>账号 :<br />
					<input type="text" v-model="uname" disabled id="name"></input>
				</li>
				<li>昵称 : <br />
					<input type="text" v-model="nichen" placeholder="请输入..." id="nicheng"></input>
				</li>

				<li>密码 : <br />
					<input type="password" v-model="pwd" placeholder="请输入..." id="pwd"></input>
				</li>
				<li>邮箱 : <br />
					<input type="email" v-model="email" placeholder="请输入..." id="email"></input>
				</li>

				<li>
					<Button type="primary" @click="updata()" style="width:100px;margin-left:30px;">确定</Button>
				</li>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				nichen: sessionStorage.nicheng,
				lzk_img: "http://192.168.43.202:8005/images/"+sessionStorage.img,
				email: sessionStorage.email,
				pwd: '123456',
				id: sessionStorage.id,
				uname:sessionStorage.uname
			}
		},
		mounted:function(){
			
		},
		methods: {
			info() {
				this.$Message.info('修改成功！！');
			},
			updata: function() {
				var files = $('#avatar').prop('files');
				var data = new FormData();
				data.append('avatar', files[0]);
				$.ajax({
					url: 'http://192.168.43.202:8005/supermarke/tupian',
					type: 'post',
					data: data,
					cache: false,
					processData: false,
					contentType: false,
					success: function(e) {
						console.log(e)
						$('#ImgSrc').attr("src", 'http://192.168.43.202:8005/images/' + e.fname);
						sessionStorage.img = 'http://192.168.43.202:8005/images/' + e.fname;
						$.ajax({
							url: "http://192.168.43.202:8005/supermarke/xg",
							type: 'post',
							data: {
								nicheng: $('#nicheng').val(),
								pwd: $('#pwd').val(),
								img: e.fname,
								email:$('#email').val(),
								id:sessionStorage.id
							},
							success: function(data) {
								console.log(data)
								if(data.flag == 1) {
									alert("修改成功")
								} 
							},
							error: function(e) {
								alert('失败啦！！！！')
							}

						})
					},
					error: function() {
						console.log("错误")
					}
				});
			}

		}

	}
</script>