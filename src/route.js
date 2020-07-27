import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/home.vue";
import a from "./pages/a.vue";
import b from "./pages/b.vue";
import c from "./pages/c.vue";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
// 一级，二级


var router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: '/home', name: 'Home', component: Home,
            children: [
                {
                    path: '/', name: 'a', component: a,
                },
                {
                    path: '/a', name: 'a', component: a,
                },
                {
                    path: '/b', name: 'b', component: b,
                },
                {
                    path: '/c', name: 'c', component: c,
                },

            ]
        },


    ]
})
export default router;