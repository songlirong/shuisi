import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/shuisi/index'
import service from '../components/shuisi/service'
import shop from '../components/shuisi/shop'
import goods from '../components/shuisi/goods'
import order from '../components/shuisi/order'
import data from '../components/shuisi/data'
import account from '../components/shuisi/account'
import ServiceList from '../components/shuisi/service/ServiceList'
import ServiceEvaluate from '../components/shuisi/service/ServiceEvaluate'
import ServiceListAdd from '../components/shuisi/ServiceListAdd'
import ServiceListEdit from '../components/shuisi/ServiceListEdit'
import GoodsAssess from '../components/shuisi/goods/GoodsAssess'
import GoodsList from '../components/shuisi/goods/GoodsList'
import GoodsManage from '../components/shuisi/goods/GoodsManage'
import GoodsAdd1 from '../components/shuisi/GoodsAdd1'
import GoodsAdd2 from '../components/shuisi/GoodsAdd2'
import GoodsAdd3 from '../components/shuisi/GoodsAdd3'
import GoodsDetails from '../components/shuisi/GoodsDetails'
import OrderIssue from '../components/shuisi/order/OrderIssue'
import OrderList from '../components/shuisi/order/OrderList'
import OrderTake from '../components/shuisi/order/OrderTake'
import OrderLack from '../components/shuisi/order/OrderLack'
import OrderDetails from '../components/shuisi/OrderDetails'
import OrderService from '../components/shuisi/order/OrderService'
import OrderTakeDetails from '../components/shuisi/OrderTakeDetails'
import OrderLackDetails from '../components/shuisi/OrderLackDetails'
import OrderListDetails from '../components/shuisi/OrderListDetails'
import OrderServiceDetails from '../components/shuisi/OrderServiceDetails'
import ShopActivity from '../components/shuisi/shop/ShopActivity'
import ShopConsult from '../components/shuisi/shop/ShopConsult'
import ShopCoupon from '../components/shuisi/shop/ShopCoupon'
import ShopPicture from '../components/shuisi/shop/ShopPicture'
import ShopMessage from '../components/shuisi/shop/ShopMessage'
import ShopActivityAdd from '../components/shuisi/ShopActivityAdd'
import ShopActivityEdit from '../components/shuisi/ShopActivityEdit'
import ShopCouponAdd from '../components/shuisi/ShopCouponAdd'
import ShopCouponEdit from '../components/shuisi/ShopCouponEdit'
import AccountBill from '../components/shuisi/account/AccountBill'
import AccountMoney from '../components/shuisi/account/AccountMoney'
import AccountMoney1 from '../components/shuisi/AccountMoney1'
import ShiMing from '../components/shuisi/account/ShiMing'
import DataSale from '../components/shuisi/data/DataSale'
import DataOrder from '../components/shuisi/data/DataOrder'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
        },
        {
            path: '/service',
            name: 'service',
            component: service,
            children: [
                {
                    path: '/',
                    component: ServiceList
                },
                {
                    path: '/service/ServiceEvaluate',
                    component: ServiceEvaluate
                }]
        },
        {
            path: '/ServiceListAdd',
            name: 'ServiceListAdd',
            component: ServiceListAdd,
        },
        {
            path: '/ServiceListEdit',
            name: 'ServiceListEdit',
            component:ServiceListEdit,
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods,
            children: [
                {
                    path: '/',
                    component: GoodsList
                },
                {
                    path: '/goods/GoodsManage',
                    component: GoodsManage
                },
                {
                    path: '/goods/GoodsAssess',
                    component: GoodsAssess
                }
            ]
        },
        {
            path: '/GoodsAdd1',
            name: 'GoodsAdd1',
            component: GoodsAdd1

        },
        {
            path: '/GoodsAdd2',
            name: 'GoodsAdd2',
            component: GoodsAdd2
        },
        {
            path: '/GoodsAdd3',
            name: 'GoodsAdd3',
            component: GoodsAdd3
        },
        {
            path: '/GoodsDetails',
            name: 'GoodsDetails',
            component: GoodsDetails
        },
        {
            path: '/AccountMoney1',
            name: 'AccountMoney1',
            component: AccountMoney1

        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
            children: [
                {
                    path: '/',
                    component: ShopMessage
                },
                {
                    path: '/shop/ShopPicture',
                    component: ShopPicture
                },
                {
                    path: '/shop/ShopActivity',
                    component: ShopActivity
                },
                {
                    path: '/shop/ShopCoupon',
                    component: ShopCoupon
                },
                {
                    path: '/shop/ShopConsult',
                    component: ShopConsult
                },
            ]
        },{
            path: '/ShopActivityAdd',
            name: 'ShopActivityAdd',
            component: ShopActivityAdd

        },
        {
            path: '/ShopActivityEdit',
            name: 'ShopActivityEdit',
            component: ShopActivityEdit

        },{
            path: '/ShopCouponEdit',
            name: 'ShopCouponEdit',
            component: ShopCouponEdit

        },{
            path: '/ShopCouponAdd',
            name: 'ShopCouponAdd',
            component: ShopCouponAdd

        },
        {
            path: '/order',
            name: 'order',
            component: order,
            children: [
                {
                    path: '/',
                    component: OrderService
                }, {
                    path: '/order/OrderList',
                    component: OrderList
                }, {
                    path: '/order/OrderIssue',
                    component: OrderIssue
                }, {
                    path: '/order/OrderTake',
                    component: OrderTake
                },{
                    path: '/order/OrderLack',
                    component: OrderLack
                }]
        }, {
            path: '/OrderDetails',
            name: 'OrderDetails',
            component: OrderDetails

        }, {
            path: '/OrderTakeDetails',
            name: 'OrderTakeDetails',
            component: OrderTakeDetails

        },{
            path: '/OrderLackDetails',
            name: 'OrderLackDetails',
            component: OrderLackDetails

        }, {
            path: '/OrderListDetails',
            name: 'OrderListDetails',
            component: OrderListDetails
        },{
            path: '/OrderServiceDetails',
            name: 'OrderServiceDetails',
            component: OrderServiceDetails
        }, {
            path: '/account',
            name: 'account',
            component: account,
            children: [
                {
                    path: '/',
                    component: ShiMing
                },
                {
                    path: '/account/AccountBill',
                    component: AccountBill
                },
                {
                    path: '/account/AccountMoney',
                    component: AccountMoney
                },
            ]
        },
        {
            path: '/data',
            name: 'data',
            component: data,
            children: [
                {
                    path: '/',
                    component: DataOrder
                },
                {
                    path: '/data/DataSale',
                    component: DataSale
                }
            ]
        }
    ]
})
