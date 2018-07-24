<template>
    <div>
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/service">维修服务列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/service/ServiceEvaluate">服务评价</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin:0 auto;">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "service"
    }
</script>

<style scoped>

</style>