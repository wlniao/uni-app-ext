import Router from 'vue-router'
import AppHome from '../pages/home.vue'
import UserUcenter from '../pages/user/ucenter.vue'

const routes = []
routes.push({path: '/', component: AppHome })
routes.push({path: '/home', component: AppHome })
routes.push({path: '/user/ucenter', component: UserUcenter })

const redirects = routes.concat([])
for(var i = 1; i < redirects.length; i++) {
	routes.push({path: '/pages' + redirects[i].path, redirect: redirects[i].path })
}

const router = new Router({mode: 'history', routes: routes })
export default router
