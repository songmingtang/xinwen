<style scoped>
	.lzk_xianqin {
		position: relative;
	}
	
	.lzk_nichen {
		height: 40px;
		clear: both;
		padding-left: 30px;
	}
	
	.lzk_nichen img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		float: left;
		display: inline;
		border: 1px solid #ccc;
	}
	
	.lzk_nichen span {
		display: inline-block;
		height: 40px;
		line-height: 40px;
		font-size: 15px;
		color: black;
		margin-left: 20px;
	}
	
	.lzk_neiron {
		padding: 50px 20px;
		-background: red;
	}
	
	h1 {
		line-height: 50px;
	}
	
	#lzk_append pre {
		background: #ccc;
	}
	
	#lzk_append p {
		line-height: 30px;
		text-indent: 20px;
	}
	
	.lzk_textarea {
		display: block;
		width: 100%;
		outline: none;
		font-size: 14px;
		text-indent: 5px;
		border-color: #ccc;
		margin-bottom: 20px;
	}
	
	.lzk_pinlunxq {
		width: 100%;
		margin-bottom: 20px;
	}
	
	.lzk_pinlunxq li {
		position: relative;
		height: 80px;
		background: #f4fcf0;
		border-bottom: 1px solid #ccc;
	}
	
	.lzk_pinlunxq li div img {
		position: absolute;
		left: 20px;
		top: 10px;
		width: 30px;
		height: 30px;
	}
	
	.lzk_pinlunxq li div span {
		display: block;
		width: 100%;
		line-height: 50px;
		text-indent: 70px;
		font-size: 14px;
	}
	
	.lzk_pinlunxq li div p {
		text-indent: 70px;
	}
	
	.lzk_pinlunxq li div i {
		position: absolute;
		right: 20px;
		bottom: 10px;
		font-style: normal;
	}
	
	.lzk_pinlun {
		margin-top: 20px;
	}
</style>
<template>
	<div class="lzk_xianqin">
		<div style="margin:20px 0 20px 0;">
			<Breadcrumb>
				<Breadcrumb-item href="javascript:;">新闻列表</Breadcrumb-item>
				<Breadcrumb-item>新闻详情</Breadcrumb-item>
			</Breadcrumb>
		</div>
		<div class="lzk_nichen"><img v-bind:src="lzk_img" alt="" /><span>{{lzk_list.nicheng}}</span></div>
		<div class="lzk_neiron">
			<h1>{{lzk_list.biaoti}}</h1>
			<div id="lzk_append">

			</div>
			<div class="lzk_pinlun">
				<p style="background:#ccc;padding:10px 0px;text-indent:10px;">回复</p>
				<ul class="lzk_pinlunxq">
					<li style="text-align:center;line-height:60px;" v-if="lzk_asyn">
						暂无回复
					</li>
					<li v-for="item in lzk_connList">
						<div>
							<img v-bind:src="lzk_img+item.img" alt="" />
							<span>{{item.nicheng}}</span>
						</div>
						<div>
							<p>{{item.neirong}}</p>
							<i>{{item.shijian | time}}</i>
						</div>
					</li>
				</ul>
			</div>
			<div class="lzk_pinlun">
				<p style="background:#ccc;padding:10px 0px;text-indent:10px;">添加回复</p>
				<textarea class="lzk_textarea" name="r_content" rows="8" v-model="lzk_area"></textarea>
				<Button type="info" @click="pushlist">评论</Button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				lzk_list: {},
				lzk_area: '',
				lzk_connList: [],
				lzk_id: this.$route.query.num,
				lzk_asyn: true,
				lzk_img: "http://192.168.43.202:8005/images/"
			}
		},
		mounted: function() {
			this.creaView();
			this.commentist();
		},
		methods: {
			creaView: function() {
				this.$http.get('http://192.168.43.202:8005/supermarke/xiangqing?id=' + this.lzk_id).then(function(reqs) {

					this.lzk_list = reqs.body;
			
					var lzk_append = this.lzk_list.neirong;
					$('#lzk_append').append(lzk_append);
					$('#lzk_append ul li').css('line-height', '30px').css('font-size', '15px').css('text-indent', '30px');
					$('#lzk_append pre').css('line-height', '30px').css('background', '#f6f6f6').css('padding-left', '30px');
				})
			},
			pushlist: function() {
				this.$http.post('http://192.168.43.202:8005/supermarke/pinglun', {
					nicheng: sessionStorage.nicheng,
					neirong: this.lzk_area,
					shijian: (new Date()).getTime(),
					uid: this.lzk_id,
					img: sessionStorage.img
				}).then(function(reqs) {
					if(reqs.body.flag == 1) {
						this.commentist();
						this.lzk_area = '';
					} else {
						alert('失败')
					}
				}, function() {
					alert('失败')
				})
			},
			commentist: function() {
				this.$http.get('http://192.168.43.202:8005/supermarke/pinglun?id=' + this.lzk_id).then(function(reqs) {
					if(reqs.body.length === 0) return
					this.lzk_connList = reqs.body;
					this.lzk_asyn = false;
					this.lzk_connList.reverse();
				}, function() {

				})
			}

		},
		filters: {
			time: function(value) {

				//				return new Date(parseInt(value) / 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
				function add0(m) {
					return m < 10 ? '0' + m : m
				}
				var time = new Date(parseInt(value));
				var y = time.getFullYear();
				var m = time.getMonth() + 1;
				var d = time.getDate();

				return y + '/' + add0(m) + '/' + add0(d);
			}
		}
	}
</script>