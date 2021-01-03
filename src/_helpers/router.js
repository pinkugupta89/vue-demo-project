import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HelloWorld.vue'
import LoginView from '../components/auth/LoginComponent.vue';
import { TokenService } from '../_services'

Vue.use(Router)


const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isPublic = true;//to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = false;//to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

 
  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})


export default router;