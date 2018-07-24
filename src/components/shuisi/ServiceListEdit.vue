<template>
    <div class="box">
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
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">维修服务</el-breadcrumb-item>
                        <el-breadcrumb-item>维修列表</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">修改维修服务</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <div class="bottom">
                        <div class="title">
                            <el-form ref="form" :model="form" label-width="120px">
                                <el-row style="width: 500px;">
                                    <el-form-item label="商品名称:">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="价格:">
                                        <el-input v-model="form.money1"></el-input>
                                    </el-form-item>
                                    <el-form-item label="折扣价:">
                                        <el-input v-model="form.money2"></el-input>
                                    </el-form-item>
                                    <el-form-item label="商品运费:">
                                        <textarea id="" cols="30" rows="10" v-model="form.desc" class="details"></textarea>
                                    </el-form-item>
                                </el-row>
                            </el-form>
                        </div>
                    </div>
                    <div style="padding-left:15%">
                        <el-button type="primary" round class="green">发布维修</el-button>
                        <el-button type="danger" round class="red">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceListEdit",
        data() {
            return {
                form: {
                    name: '水管维修',
                    money1: '30',
                    money2: '120',
                    desc: '水管维修服务',
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .main-content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .main-content .item {
        width: 100%;
        height: 50px;
    }

    .main-content .item .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
    }
    .main-content .red {
        height: 35px;
        background: #FD5E4E;
        border: none;
        box-shadow: 0 0 8px #FD5E4E;
    }
    .main-content .green {
        height: 33px;
        background: #37DF73;
        border: none;
        box-shadow: 0 0 8px #37DF73;
        padding-top: 10px;
    }
    .title .details {
        width: 600px;
        height: 116px;
        outline: none;
        resize: none;
        border-radius: 5px;
        background: #f3faff;
        border: 2px solid #e5eff8;
    }

</style>