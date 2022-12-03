import home from '@/pages/home'
import login from '@/pages/login'
export default [
    //登陆界面，用于展示或默认进入
    {
        path:'/login',
        meta:{
            title:'登陆界面',
            index:0
        },
        // component: () => import('../pages/login/index')
       component:login
    },
     {
        path:'/',
        redirect:'/login'
    },
    //首页，用于展示或重定向
    {
        path:'/home',
        meta:{
            title:'首页',
            index:0
        },
         component: () => import('../pages/home/index')
       //component:home
    },

    {
        path: '*',//匹配未定义的路由
        redirect: 'home'//重定向到首页
    },
     //控制中心
     {
        path:'/control',
        meta:{
            title:'控制中心',
            index:1
        },
        component: () => import('../pages/control/index')
        //component:control
    },
    //警报处理
    {
        path:'/warning',
        meta:{
            title:'警报处理',
            index:2
        },
        component:()=>import('../pages/warning/index'),
    },
    //传感系统
    {
        path:'/sensor',
        meta:{
            title:'传感系统',
            index:3
        },
        component:()=>import('../pages/sensor/index')
    },
     //数据分析
     {
        path:'/analyze',
        meta:{
            title:'数据分析',
            index:5
        },
        component:()=>import('../pages/analyze/index')
    },
    //测试用页面，上线后清除
    {
        path:'/test',
        component:()=>import('../pages/test')
    }
]