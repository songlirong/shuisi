<template>
    <div>
        <div class="content">
            <div class="biaoti">
                <el-breadcrumb separator="·">
                    <el-breadcrumb-item :to="{ path: '/' }">订单管理</el-breadcrumb-item>
                    <el-breadcrumb-item><span style="color: #30d366;font-weight: bolder">缺货登记</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <ul class="shuaixuan">
                <li>
                    <el-input v-model="input1" placeholder="请输入商品编号" style="width: 180px"></el-input>
                </li>
                <li>
                    <el-input v-model="input2" placeholder="请输入商品关键字" style="width: 200px"></el-input>
                </li>
                <li>
                    <div class="sousuo"></div>
                </li>
            </ul>
            <div class="item">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部订单（2）" name="first">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @row-click="handleSelectionChange"
                                @selection-change="selsChange">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column
                                    label="编号"
                                    width="80" show-overflow-tooltip>
                                <template slot-scope="scope">{{ scope.row.id }}</template>
                            </el-table-column>
                            <el-table-column prop="fuze" label="负责人" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="number" label="联系电话" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="name" label="缺货商品名" width="250" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="picture"></div>
                                    <div class="contents">
                                        <div>货号：{{ scope.row.id}}</div>
                                        <div>{{ scope.row.name}}</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="count" label="数量"  show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="data" label="登记时间" width="150" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="zhuangtai" label="状态" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="operation" label="操作" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <el-button @click="open2(scope.$index, tableData)" type="text" size="small">
                                        <i class="el-icon-delete"></i>
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div style="position: relative;">
                            <div style="width:180px;position:absolute;right:0;bottom: 50px;display: flex;justify-content: space-between">
                                <div style="display: flex">
                                    <div class="dian"></div>
                                    总计<span style="color:#3db0ff;font-weight: bolder">206</span>记录
                                </div>
                                <div style="display: flex">
                                    <div class="dian" style="background: #29c99a"></div>
                                    分<span style="font-weight:bolder;color:#29c99a;">82</span>页
                                </div>
                            </div>
                            <div style="margin-top: 40px">
                                <el-button @click="toggleSelection(tableData)">全选</el-button>
                                <el-button type="danger" round @click="delGroup" class="red">批量删除</el-button>
                            </div>
                        </div>
                        <div style="width: 100%;position: relative">
                            <div style="font-size:12px;position: absolute;bottom:0;right:0;display: flex;justify-content: space-between">
                                <div class="button_left">首页</div>
                                <el-pagination
                                        layout="prev, pager, next"
                                        :total="50">
                                </el-pagination>
                                <div class="button_right">末页</div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待支付（1）" name="second">待支付（1）</el-tab-pane>
                    <el-tab-pane label="待取件（1）" name="third">待取件（1）</el-tab-pane>
                    <el-tab-pane label="待评价（1）" name="fourth">待评价（1）</el-tab-pane>
                    <el-tab-pane label="已完成（1）" name="fifth">已完成 （1）</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderLack",
        data() {
            return {
                sels: [],
                activeName: 'first',
                input1: '',
                input2: '',
                options1: [{
                    value1: '选项1',
                    label: '1'
                }, {
                    value1: '选项2',
                    label: '2'
                }, {
                    value1: '选项3',
                    label: '3'
                }],
                value1: '',
                options2: [{
                    value2: '选项1',
                    label: '4'
                }, {
                    value2: '选项2',
                    label: '5'
                }, {
                    value2: '选项3',
                    label: '6'
                }],
                value2: '',
                tableData: [{
                    id: 'DSV0002',
                    fuze:'张三',
                    number:'13012345678',
                    name: '羽绒服清洗',
                    money: '655.00',
                    count:'0',
                    zhuangtai:'正在采购',
                    data: '2018-06-01 18:25',
                    operation: ''
                }, {
                    id: 'DSV0002',
                    fuze:'张三',
                    number:'13012345678',
                    name: '羽绒服清洗',
                    money: '655.00',
                    count:'0',
                    zhuangtai:'正在采购',
                    data: '2018-06-01 18:25',
                    operation: ''
                }],
                multipleSelection: []
            }
        },

        methods: {
            toggleSelection(rows) {
                this.$refs.multipleTable.clearSelection();
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                })
            },
            selsChange(sels) {
                this.sels = sels
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleClick(tab, event){
                console.log(tab, event);
            },
            //批量删除
            delGroup() {
                var ids = this.sels.map(item => item.id).join();
            },
            handleClick1(row) {
                console.log(row);
            },
            open2(index, rows) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    rows.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }

    }
</script>

<style scoped>

    .content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 8px;
    }

    .content .biaoti {
        height: 52px;
        font-size: 12px;
        line-height: 52px;
        font-weight: bolder;
    }

    .content .shuaixuan {
        height: 46px;
        width: 500px;
        display: flex;
        justify-content: space-between;
        line-height: 46px;
    }

    .sousuo {
        margin-top: 5px;
        width: 40px;
        height: 40px;
        background: url("../../../assets/img/sousuo.png") no-repeat center center/100% auto;
    }

    .content .item {
        width: 100%;

    }
    .item .picture {
        width: 56px;
        height: 56px;
        background: url("../../../assets/img/sousuo.png") no-repeat center center/100% auto;
        border-radius: 3px;
        display: inline-block;
    }

    .item .contents {
        width: 150px;
        height: 40px;
        margin-left: 10px;
        margin-top:7px;
        float: right;
        font-size: 14px;
        line-height: 20px;
    }
    .content .red{
        height: 35px;
        background: #FD5E4E;
        border:none;
        box-shadow:0 0 8px #FD5E4E;
    }



</style>