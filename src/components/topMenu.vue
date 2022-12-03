<template>
    <div class='topMenuCon '>
        <div class="time  flex">
            <span>{{ time }}</span>
        </div>

        <div class="flex menuCon " style="margin: 0 auto;width: 86%;">
            <!-- 菜单栏左半部分 -->
            <div class="menu menuL flex ">
                <div v-for="(item, index) in menuList1" class="menuItem itemL " @click="changePage(item)">
                    <!-- <i :class="item.icon" class="iconfont"></i> -->
                    <span>{{ item.title }}</span>

                </div>
            </div>
            <!-- 中间logo区域 -->
            <div class="logo flex ">
                充填工区智能巡检管理系统
            </div>
            <!-- 菜单右半部分 -->
            <div class="menu menuR flex ">
                <div v-for="(item, index) in menuList2" class="menuItem itemR " @click="changePage(item)">
                    <!-- <i :class="item.icon" class="iconfont"></i> -->
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </div>

        <!-- 右侧退出登录 -->
        <div class="login flex">

            <div class="user flex">
                <i class="iconfont icon-user"></i>
                <span>admin</span>
                <i class="iconfont icon-denglu" @click="logOut"></i>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            time: '',
            menuList1: [
                { icon: 'icon-home', title: '首页', path: '/home' },
                { icon: 'icon-view_d', title: '数字孪生' },
                { icon: 'icon-kongzhi', title: '控制中心', path: '/control' },
            ],
            menuList2: [
                { icon: 'icon-jingbao', title: '巡检警报', path: '/warning' },
                { icon: 'icon-zu', title: '传感系统', path: '/sensor' },
                { icon: 'icon-shujufenxi', title: '数据分析', path: '/analyze' }
            ]
        }
    },
    props: {
    },
    components: {

    },
    computed: {

    },
    mounted() {
        setInterval(() => {
            this.time = this.getTime()
        }, 1000);
    },
    methods: {
        //获取当前时间
        getTime() {
            let d = new Date()
            let days = (d.getMonth() + 1) + '月' + (d.getDate() + '日 ')
            //let hours = d.getHours() + ':' + (d.getMinutes())+':'+(d.getSeconds())
            let hours = d.getHours() + ':' + (d.getMinutes())
            return days + ' ' + hours
        },
        //进行路由跳转，外加节流
        changePage(item) {
            this._.throttle(() => {
                if (item.path === this.$route.fullPath) return
                if (!item.path) { window.open('http://39.105.146.47:8777') }
                //console.log('节流成功了');
                this.$router.push(item.path)
            }, 100)()

        },
        //退出登录
        logOut() {
            //alert('退出登录')
            this.$confirm('是否退出登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '成功退出!'
                });
                this.$router.push('./login')
            }).catch(() => {
                //   this.$message({
                //     type: 'info',
                //     message: '已取消'
                //   });          
            });
        }

    },
}
</script>

<style lang='less' scoped >
@import '@/assets/css/common.less';

.topMenuCon {
    height: 5vh;
    position: relative;
    width: 100%;
    display: flex;
    white-space: nowrap;
    //border: 1px soild red;
}

.time {
    font-size: 20px;
    white-space: nowrap;
    color: #ffffff;
    align-items: center;
    background: url('@/assets/img/topMenu/time.png') no-repeat;
    background-size: cover;
    width: 8vw;
    height: 70%;
}

.menuCon {
    justify-content: center;
    position: relative;
}

.logo {
    height: 260px;
    line-height: 40px;
    width: 40%;
    text-align: center;
    background: url('@/assets/img/topMenu/title.png') no-repeat;
    background: url('@/assets/img/topMenu/titlenew.png') no-repeat;
    background-size: contain;
    //border: 1px solid red;
    display: flex;
    justify-content: center;
    // align-items: flex-start;
    z-index: 9;
    color: #CDF0FF;
    font-size: 46px;
    font-family: '南构倩黑', '楷体', '黑体', '微软雅黑';

}

.menu {
    margin: 0 auto;
    display: flex;
    height: 100%;
    width: 25%;
    font-size: 20px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
    position: relative;

    .menuItem {
        transition: all 0.2s linear;
        width: 33.3%;
        height: 100%;
        color: #ffffff;
        bottom: 1vh;
        position: relative;

        span {
            position: relative;
            display: block;
            top: 30%;
        }

        &:hover {
            cursor: pointer;
            padding-bottom: 0.8vh;


        }

        &:active {
            cursor: pointer;

            span {
                margin-bottom: 0.8vh;
            }

            padding-bottom: 0.8vh;
        }

        .iconfont {
            font-size: 22px;
            color: aqua;
        }

    }

    .itemL {
        transform: skew(30deg, 0);

        span {
            transform: skew(-26deg, 0);
        }

        background: url('@/assets/img/topMenu/unChoseR.png') no-repeat;
        background-size: cover;

        :active {
            background: url('@/assets/img/topMenu/choseR.png') no-repeat;
        }
    }

    .itemR {
        transform: skew(-30deg, 0);

        span {
            transform: skew(26deg, 0);
        }

        background: url('@/assets/img/topMenu/unChoseR.png') no-repeat;
        background-size: cover;

        :active {
            background: url('@/assets/img/topMenu/choseR.png') no-repeat;
        }
    }

}

.login {
    height: 100%;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    margin-right: 0.4vw;

    .user {
        margin-left: 2vh;
        color: #08ADE5;
        white-space: nowrap;

        i {
            font-size: 28px;
        }

        align-items: center;

        &:hover {
            cursor: pointer;

            // color: #CDF0FF;
            .icon-denglu {
                color: #ffffff;
            }
        }


    }
}
</style>