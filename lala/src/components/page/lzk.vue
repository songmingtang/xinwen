 <style>
  .lzk_edio{
    height:360px;
  }
  .lzk_xw{
    margin:20px 0px;
  }
 </style>
 <template>
    <div>
        <p class="lzk_xw">新闻标题：</p>
        <p class="lzk_xw"><Input type="text" v-model="biaoti" placeholder="标题" style="width:300px"></Input></p>
        <p class="lzk_xw">新闻类型：</p>
        <p class="lzk_xw">
            <Select v-model="leixing" clearable style="width:300px">
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
        </p>
        <div class="lzk_edio">
          <quill-editor
          rel="myTextEditor"
          v-model="quill"
          style="height:280px;"></quill-editor>
        </div>
        <p class="lzk_xw"><Button type="info" @click="pushNews()">发布新闻</Button></p>
    </div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
    export default {
        data: function(){
            return {
                quill:'',
                cityList: [
                    {
                        value: '生活趣事',
                        label: '生活趣事'
                    },
                    {
                        value: '技术分享',
                        label: '技术分享'
                    }
                ],
                leixing: '',
                biaoti:''
            }
        },
        components: {
            quillEditor                                     // 声明组件quillEditor
        },
        mounted:function(){

        },
        methods:{
            pushNews:function(){
                 if(this.quill == "" || this.leixing == "" || this.biaoti == ""){
                        alert('输入不能为空')
                 }else{
                     this.$http.post('http://192.168.43.202:8005/supermarke/tianjia',{
                        img:sessionStorage.img,
                        nicheng:sessionStorage.nicheng,
                        uid:sessionStorage.id,
                        biaoti:this.biaoti,
                        neirong:this.quill,
                        fabushijian:new Date().getTime(),
                        leixing:this.leixing
                     },{emulateJSON:true}).then(function(reqs){
                        if(reqs.body.flag == 1){
                        	alert('成功')
                        	this.$router.push({
									path: '/setup'
							})
                        }else{
                        	alert('失败')
                        }
                     })
                 }
            }

        }
    }
</script>
