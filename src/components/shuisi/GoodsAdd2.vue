<template>
    <div class="box">
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods">商品列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods/GoodsManage">分类管理</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/goods/GoodsAssess">用户评价</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin:0 auto">
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <router-link to="/goods">商品列表</router-link>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">添加商品</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <ul class="top">
                            <li class="btn1">
                                <span class="btn">选择商品分类</span>
                            </li>

                            <li class="btn2">
                                <span class="btn">填写商品信息</span>
                            </li>
                    </ul>
                    <div class="bottom">
                        <el-form ref="form" :model="form" label-width="100px">
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder">
                                <div class="col-box"></div>
                                基本信息
                            </div>
                            <div class="title">
                                <span style="font-size: 16px">商品分类：</span>
                                <el-breadcrumb separator="/" style="display: inline-block">
                                    <el-breadcrumb-item>洗衣</el-breadcrumb-item>
                                    <el-breadcrumb-item>羽绒服清洗</el-breadcrumb-item>
                                </el-breadcrumb>
                                <i class="el-icon-edit"></i>
                                <div class="neirong">
                                    <el-form-item label="商品货号：">
                                        <el-input v-model="form.id" class="inputbox"></el-input>
                                        <div class="tishi">商家货号是指商家管理商品的编号，买家不可见，最多可输入20个字符，支持输入中文、英文、字母、_、/和小数点</div>
                                    </el-form-item>
                                    <el-form-item label="商品名称：">
                                        <el-input v-model="form.name" class="inputbox"></el-input>
                                        <div class="tishi">商品标题名称长度至少1个字符，最长150个汉字</div>
                                    </el-form-item>
                                    <el-form-item label="商品简单描述：">
                                        <template>
                                            <textarea id="" cols="30" rows="10" v-model="form.desc"
                                                      class="details"></textarea>
                                        </template>
                                    </el-form-item>
                                    <el-form-item label="价格：">
                                        <el-input v-model="form.money" class="inputbox"></el-input>
                                        <div class="tishi">
                                            价格必须是在0.01-99999999之间的数字，且不能高于市场价，此价格为商品实际销售价格，如果商品存在规格，该价格显示最低价格
                                        </div>
                                    </el-form-item>
                                    <el-form-item label="折扣价：">
                                        <el-input v-model="form.zhekou" class="inputbox"></el-input>
                                    </el-form-item>
                                    <el-form-item label="库存量：">
                                        <el-input v-model="form.count" class="inputbox"></el-input>
                                        <div class="tishi">
                                            库存数量必须为0.01-999999999之间的数字，若启用了库存配置，则系统自动计算商品数量，此处无需卖家填写
                                        </div>
                                    </el-form-item>
                                    <el-form-item label="库存预警：">
                                        <el-input v-model="form.warn" class="inputbox"></el-input>
                                        <div class="tishi">
                                            设置最低库存预警值，0为不预警
                                        </div>
                                    </el-form-item>
                                    <el-form-item label="上传商品图片：" style="height: 80px;overflow: hidden">
                                        <input type="file">
                                    </el-form-item>
                                    <el-form-item label="商品运费：">
                                        <el-radio>按固定运费</el-radio>
                                        <div>
                                            自定义
                                            <el-input v-model="form.money1" class="inputbox"></el-input>
                                        </div>

                                    </el-form-item>
                                </div>
                            </div>
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder;margin-top: 15px">
                                <div class="col-box"></div>
                                基本信息
                            </div>
                            <div class="message">
                                <div><span style="color: #a4adb5">基本要求：</span>手机详情总体大小：图片+文字不超过20张，文字不超过5000字&nbsp&nbsp&nbsp&nbsp<span
                                        style="color:#3bacfe;">建议:</span>所有图片都是本宝贝相关的图片
                                </div>
                                <div><span style="color: #a4adb5">图片大小：</span>1.建议使用宽度480-620像素，高度小于等于960像素的图片。&nbsp&nbsp2.格式为：JPG/PNG/GIF
                                </div>
                                <div><span
                                        style="margin-left:70px;color:#3bacfe;">举例：可以上传宽度为480，高度为960像素，格式为JPG的图片。</span>
                                </div>
                                <div><span style="color: #a4adb5">文字要求：</span>每次插入文字不超过500字，标点、特殊字符按一个字算。2.请手动输入文字，不要复制粘贴网页上的文字，防止出现乱码。3.以下特殊字符“＜”“＞”“、”“/”会被替换为空。
                                </div>
                                <div><span style="margin-left:70px;color:#3bacfe;">建议:</span>不要添加太多的文字，这样看起来更清晰。
                                </div>
                                <div style="width:100%;margin-left: 70px;margin-top:15px;">
                                    <router-link to=""></router-link>
                                    <div @click="open" class="shangchuan"></div>
                                </div>
                                <el-form-item label="文字描述：">
                                    <el-input v-model="form.countent" class="inputbox"></el-input>
                                </el-form-item>
                            </div>
                            <div style="width: 328px;height: 42px;line-height: 42px;font-size: 18px;font-weight: bolder;margin-top: 15px">
                                <div class="col-box"></div>
                                其他信息
                            </div>
                            <div class="message" style="border:none;height: 320px">
                                <el-form-item label="商品重量：">
                                    <el-input v-model="form.key" class="inputbox"></el-input><span>kg</span>
                                    <div class="tishi">
                                        商品关键词请用空格分隔
                                    </div>
                                </el-form-item>
                                <el-form-item label="是否免运费：">
                                    <el-switch
                                            v-model="value1"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item label="上架：">
                                    <el-switch
                                            v-model="value2"
                                            active-color="#13ce66"
                                            inactive-color="#ff4949">
                                    </el-switch>
                                </el-form-item>
                                <el-form-item label="关键词：">
                                    <el-input v-model="form.key" class="inputbox"></el-input>
                                    <div class="tishi">
                                        商品关键词请用空格分隔
                                    </div>
                                </el-form-item>
                            </div>
                        </el-form>
                        <router-link to="/GoodsAdd1">
                            <el-button type="primary" round style="margin-right: 20px" class="blue">上一步，选择商品分类
                            </el-button>
                        </router-link>
                            <el-button type="primary" round class="blue">完成，发布商品</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsAdd2",
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    desc: '',
                    money: '',
                    zhekou: '',
                    count: '',
                    warn: '',
                    countent: '',
                    key: ''
                },
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false,
                value1: '',
                value2: ''
            }
        },
        methods: {}
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

    .main-content .item .top {
        width: 65%;
        height: 39px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #000;
        line-height: 39px;
    }

    .main-content .item .top .btn1 {
        background: url("../../assets/img/add1.png") no-repeat center center/100% auto;
        color: white;
    }

    .main-content .item .top .btn2 {
        background: url("../../assets/img/add5.png") no-repeat center center/100% auto;
        color: white;
    }

  /*  .main-content .item .top .btn3 {
        background: url("../../assets/img/add3.png") no-repeat center center/100% auto;
    }*/

    .top li {
        width: 333px;
        height: 100%;
        text-align: center;
    }

    .main-content .item .bottom {
        width: 100%;
        margin-top: 20px;
    }

    .bottom .title {
        width: 100%;
        margin-top: 10px;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        border-bottom: 1px solid #eee;
    }

    .bottom .col-box {
        width: 12px;
        height: 7px;
        border-radius: 5px;
        margin-top: 17px;
        margin-left: 10px;
        margin-right: 7px;
        background-color: #37e06f;
    }

    .bottom .title .neirong {
        width: 100%;
        padding-left: 25px;
    }

    .inputbox {
        width: 272px;
    }

    .tishi {
        font-size: 12px;
        color: #999;
    }

    .bottom .message {
        width: 100%;
        height: 570px;
        padding-left: 25px;
        box-sizing: border-box;
        line-height: 28px;
        font-size: 12px;
        border-bottom: 1px solid #eee;
    }

    .bottom .message .shangchuan {
        width: 218px;
        height: 312px;
        background: #bbdff6;
        background: url("../../assets/img/shangchuan.png") no-repeat center center/100% auto;
    }

    .el-icon-edit {
        margin-left: 10px;
        font-size: 24px;
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #3bacfe;
        line-height: 30px;
        box-shadow: 0 3px 8px #48A1FF;
    }

    .main-content .blue {
        height: 30px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 5px #30B5FE;
        margin-left: 20px;
        padding-top: 8px;
    }

    .title .details {
        width: 500px;
        height: 100px;
        outline: none;
        resize: none;
        border-radius: 5px;
        background: #f3faff;
        border: 2px solid #e5eff8;
    }

</style>