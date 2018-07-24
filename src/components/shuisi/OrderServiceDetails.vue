<template>
    <div class="box">
        <!--侧边栏-->
        <div class="aside">
            <div class="logo"></div>
            <ul class="aside-list">
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order">维修服务订单</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderList">商品订单</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderIssue">纠纷列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderTake">发货单列表</router-link>
                </li>
                <li>
                    <div class="col-box"></div>
                    <router-link to="/order/OrderTake">缺货登记</router-link>
                </li>
            </ul>
        </div>
        <!--主内容-->
        <div class="main-content">
            <div style="width: 1064px;margin: auto">
                <div class="biaoti">
                    <el-breadcrumb separator="·">
                        <el-breadcrumb-item :to="{ path: '/' }">订单管理</el-breadcrumb-item>
                        <el-breadcrumb-item>维修服务订单</el-breadcrumb-item>
                        <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">查看详情</span></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="item">
                    <el-steps :active="4" align-center style="margin-bottom: 20px">
                        <el-step title="提交订单" description="2018-03-20 12:00:02"></el-step>
                        <el-step title="支付定金" description="2018-03-20 12:00:02"></el-step>
                        <el-step title="维修完成" description="2018-03-20 12:00:02"></el-step>
                        <el-step title="支付尾款" description="2018-03-20 12:00:02"></el-step>
                        <el-step title="评价"></el-step>
                    </el-steps>
                    <div class="bottom">
                        <div class="bottom_top">
                            <div class="col-box"></div>
                            <span style="color:#30a3fe;">基本</span>信息
                        </div>
                        <div class="title">
                            <el-table :data="tableData" style="width: 100%;font-size: 14px">
                                <el-table-column prop="id" label="订单号" width="180"></el-table-column>
                                <el-table-column prop="name" label="购货人" width="150"></el-table-column>
                                <el-table-column prop="way" label="支付方式"></el-table-column>
                                <el-table-column prop="data1" label="下单时间"></el-table-column>
                                <el-table-column prop="data2" label="付款时间"></el-table-column>
                                <el-table-column prop="type" label="订单状态"></el-table-column>
                                <el-table-column prop="data3" label="服务时间"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom_top">
                            <div class="col-box"></div>
                            <span style="color:#30a3fe;">收货人</span>信息
                            <i class="el-icon-edit"></i>
                            <el-button type="primary" round class="blue">保存</el-button>
                        </div>
                        <div class="title">
                            <el-table :data="tableData1" style="width: 100%;">
                                <el-table-column prop="name" label="收货人" width="100"></el-table-column>
                                <el-table-column prop="number" label="手机号"></el-table-column>
                                <el-table-column prop="address" label="收货地址" width="250"></el-table-column>
                                <el-table-column prop="zip" label="邮政编码"></el-table-column>
                                <el-table-column prop="email" label="电子邮件" width="180"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom_top">
                            <div class="col-box"></div>
                            <span style="color:#30a3fe;">其他</span>信息
                            <i class="el-icon-edit"></i>
                            <el-button type="primary" round class="blue">保存</el-button>
                        </div>
                        <div class="title">
                            <el-table :data="tableData2" style="width: 100%;">
                                <el-table-column prop="name" label="发票抬头:(个人普通发票)" width="200"></el-table-column>
                                <el-table-column prop="content" label="发票内容"></el-table-column>
                                <el-table-column prop="shibiema" label="识别码"></el-table-column>
                                <el-table-column prop="deal" label="缺货处理" width="200"></el-table-column>
                                <el-table-column prop="sellMessage" label="卖家留言"></el-table-column>
                                <el-table-column prop="maiMessage" label="买家留言"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom_top">
                            <div class="col-box"></div>
                            <span style="color:#30a3fe;">商品</span>信息
                        </div>
                        <div class="title">
                            <el-table :data="tableData3" style="width: 100%;">
                                <el-table-column label="商品名称【品牌】" width="180">
                                    <template slot-scope="scope">
                                        <div style="display: flex;">
                                            <div class="shangpinbg"></div>
                                            <span style="margin-left:10px;line-height: 50px">{{scope.row.name}}</span>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name1" label="店铺名称" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="number" label="货号" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="money1" label="价格" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="count" label="数量" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="stock" label="库存" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="xiaoji" label="小计" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="money2" label="合计" show-overflow-tooltip></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom_top">
                            <div class="col-box"></div>
                            <span style="color:#30a3fe;">费用</span>信息
                        </div>
                        <div class="title">
                            <el-table :data="tableData4" style="width: 100%;">
                                <el-table-column prop="money1" label="商品总金额 "></el-table-column>
                                <el-table-column prop="money2" label="定金"></el-table-column>
                                <el-table-column prop="money3" label="维修服务费用"></el-table-column>
                                <el-table-column prop="money4" label="商品费用"></el-table-column>
                                <el-table-column prop="money5" label="折扣"></el-table-column>
                                <el-table-column prop="jinbi" label="使用金币"></el-table-column>
                                <el-table-column prop="coupon" label="使用优惠券"></el-table-column>
                                <el-table-column prop="money6" label="订单总金额"></el-table-column>
                                <el-table-column prop="money7" label="应付总金额"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="title">
                            <el-table :data="tableData5" style="width: 100%;">
                                <el-table-column prop="name" label="操作者"></el-table-column>
                                <el-table-column prop="data" label="操作时间"></el-table-column>
                                <el-table-column prop="zhuangtai1" label="订单状态"></el-table-column>
                                <el-table-column prop="zhuangtai2" label="付款状态"></el-table-column>
                                <el-table-column prop="zhuangtai3" label="发货状态"></el-table-column>
                                <el-table-column prop="beizhu" label="备注"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
            name: "OrderServiceDetails",
        data() {
            return {
                tableData: [{
                    id: '2018052916056086818',
                    data1: '2018-05-02 18:00',
                    data2: '2016-05-02 18:00',
                    data3: '2016-05-02 18:00',
                    way: '在线支付',
                    name: '522836190',
                    type: '代评价',
                }],
                tableData1: [{
                    name: '李先生',
                    number: '13112345678',
                    address: '山西省太原市龙城大街163号',
                    zip: '040000',
                    email: '16548923@163.com'
                }],
                tableData2: [{
                    name: '个人',
                    content: '不开发票',
                    shibiema: '无',
                    deal: '待所有货款补齐后发货',
                    sellMessage: '无',
                    maiMessage: '无'
                }],
                tableData3: [{
                    name: '羽绒服清洗',
                    name1:'兰亭小铺',
                    number: 'E49834029',
                    money1: '30.00',
                    count: '30',
                    stock: '3000',
                    xiaoji: '145.00',
                    active: '发货单已生成',
                    money2: '145.00'
                }],
                tableData4: [{
                    money1: '900.00',
                    money2: '-0.00',
                    money3:'',
                    money4:'',
                    money5:'',
                    jinbi: '0个',
                    coupon: '-0.00',
                    money6: '900.00',
                    money7: '900.00',
                }],
                tableData5: [{
                    name: 'ADMIN',
                    data: '2018-05-02 18:00',
                    zhuangtai1: '已分单',
                    zhuangtai2: '已付款',
                    zhuangtai3: '收货确认',
                    beizhu: ''
                }, {
                    name: 'ADMIN',
                    data: '2018-05-02 18:00',
                    zhuangtai1: '已确认',
                    zhuangtai2: '已付款',
                    zhuangtai3: '已发货',
                    beizhu: ''
                }, {
                    name: 'ADMIN',
                    data: '2018-05-02 18:00',
                    zhuangtai1: '已分单',
                    zhuangtai2: '已付款',
                    zhuangtai3: '发货中',
                    beizhu: ''
                }],
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
        width:100%;
        height: 50px;
    }

    .main-content .item .bottom {
        width: 100%;
    }

    .bottom .title {
        width: 100%;
        margin-top: 10px;
        line-height: 46px;
        font-size: 12px;
        padding-left: 22px;
        padding-bottom: 20px;

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

    .bottom .title .shangpinbg {
        width: 56px;
        height: 56px;
        background: #BBDFF6;
        border-radius: 3px;
    }

    .bottom .blue {
        float: right;
        font-size: 10px;
        width: 60px;
        margin-top: 5px;
        height: 25px;
        padding-top: 4px;
        padding-left: 17px;
        background: #30B5FE;
        border: none;
        box-shadow: 0 0 8px #30B5FE;
    }

    .bottom .bottom_top {
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 18px;
        font-weight: bolder
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


</style>