import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['../components/template/login.vue'], resolve)
    }
    ,
    {
      path: '/Registered',
      name: 'Registered',
      component: resolve => require(['../components/template/registered.vue'], resolve)
    }
    ,
    {
      path: '/Homepage',
      name: 'Homepage',
      component: resolve => require(['../components/template/homepage.vue'], resolve),
      children:[
	        {
	            path: '/',
	            name:'news',
	            component: resolve => require(['../components/page/news.vue'], resolve)
	        }
          ,
          {
              path: '/setup',
              name:'setup',
              component: resolve => require(['../components/page/setup.vue'], resolve)
          }
          ,

           {
              path: '/wode',
              name:'wode',
              component: resolve => require(['../components/page/wode.vue'], resolve)
          },

	        {
	          path: '/lzk',
	            name:'lzk',
	          component: resolve => require(['../components/page/lzk.vue'], resolve)
	        },

	        {
	          path: '/myfabu',
	            name:'myfabu',
	          component: resolve => require(['../components/page/myfabu.vue'], resolve)
	        }

	    ]
    }
  ]
})
