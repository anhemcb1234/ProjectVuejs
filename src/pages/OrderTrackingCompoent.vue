<template>
<div class="container mx-auto ">
    <article class="card p-10">
        <header class="card-header"> My Orders / Tracking </header>
        <div class="card-body">
            <article class="card">
                <h6>Order ID: {{users.id}}</h6>
                <div class="card-body grid grid-cols-3 gap-2">
                    <div class="col"> <strong>Estimated Delivery time:</strong> <br>{{users.created_at}} </div>
                    <div class="col"> <strong>Shipping BY:</strong> <br> {{users.name}}, | <i class="fa fa-phone"></i> {{users.phone}} </div>
                    <div class="col"> <strong>Status:</strong> <br> {{processing[to - 1]}} </div>
                </div>
            </article>
            <div class="track flex">
                <div @change="check()" class="step" :class="to-1 >= 0 ? 'active' : 'none'"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Pending</span> </div>
                <div @change="check()" class="step" :class="to-1 >= 1 ? 'active' : 'none'"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> Processing</span> </div>
                <div @change="check()" class="step" :class="to-1 >= 2 ? 'active' : 'none'"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> Sent </span> </div>
                <div @change="check()" class="step" :class="to-1 >= 3 ? 'active' : 'none'"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Received</span> </div>
                <div @change="check()" class="step" :class="to-1 >= 4 ? 'active' : 'none'"> <span class="icon"> <i class="fa-solid fa-ban"></i> </span> <span class="text">Cancel order</span> </div>
            </div>
            <hr>
            <div class="row grid grid-cols-1 gap-2">
                <div class="w-full p-5" v-for="(itemCart, itemCartIndex) in this.order.data[this.id].products" :key="itemCartIndex">
                    <h2>Tên sản phẩm {{itemCart.name}}</h2>
                    <p>Giá sản phầm {{itemCart.price}}</p>
                </div>
            </div>

            <hr><button class="mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> <a href="/" class="text-black" data-abc="true">Back to orders</a></button>
        </div>
    </article>
</div>
</template>

<script>
import {
    userServices
} from '@/services/userServices'
export default {
    data() {
        return {
            user: {},
            users: {},
            order: {},
            processing: ['Pending', 'Processing', 'Sent', 'Received', 'Cancel order'],
            to: 0,
            detail: {},
            id: 0,
        }
    },
    methods: {
        async getOrder() {
            const reps = await userServices.getOrders();
            this.order = reps.data
            this.to = reps.data.data[0].status
            this.users = this.order.data[this.id]
        },
        async getUser() {
            const reps = await userServices.getUser();
            this.user = reps.data
        },
        async test() {
            const reps = await userServices.getOrderDetail();
            this.detail = reps.data
        }
    },
    mounted() {
        const id = localStorage.getItem('id');
        this.id = id
        setTimeout(() => {
            this.getOrder()
            this.getUser()
            this.test()
        }, 100)
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body {
    background-color: #eeeeee;
    font-family: 'Open Sans', serif
}

.container {
    margin-top: 50px;
    margin-bottom: 50px
}

.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.10rem
}

.card-header:first-child {
    border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1)
}

.track {
    position: relative;
    background-color: #ddd;
    height: 7px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    margin-top: 50px
}

.track .step {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 25%;
    margin-top: -18px;
    text-align: center;
    position: relative
}

.track .step.active:before {
    background: #FF5722
}

.track .step::before {
    height: 7px;
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: 18px
}

.cancel {
    background-color: #000000;
    color: #fff
}

.track .step.active .icon {
    background: #ee5435;
    color: #fff
}

.track .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: relative;
    border-radius: 100%;
    background: #ddd
}

.track .step.active .text {
    font-weight: 400;
    color: #000
}

.track .text {
    display: block;
    margin-top: 7px
}

.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.itemside .aside {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.img-sm {
    width: 80px;
    height: 80px;
    padding: 7px
}

ul.row,
ul.row-sm {
    list-style: 'none';
    padding: 0
}

.itemside .info {
    padding-left: 15px;
    padding-right: 7px
}

.itemside .title {
    display: block;
    margin-bottom: 5px;
    color: #212529
}

p {
    margin-top: 0;
    margin-bottom: 1rem
}

.btn-warning {
    color: #ffffff;
    background-color: #ee5435;
    border-color: #ee5435;
    border-radius: 1px
}

.btn-warning:hover {
    color: #ffffff;
    background-color: #ff2b00;
    border-color: #ff2b00;
    border-radius: 1px
}
</style>
