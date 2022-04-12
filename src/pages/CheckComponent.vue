<template>
<div class="container mx-auto grid  grid-rows-1 grid-cols-2">
    <div>
        <ProductCheckComponent></ProductCheckComponent>
    </div>
    <div>
        <form class="w-full p-10 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50" @submit.prevent="makeOrder" method="" action="">
            <h4 class="text-3xl text-center text-gray-700 mb-5">Payment information</h4>
            <div class="p-10 rounded-md shadow-md bg-white">
                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Full Name</label>
                    <input v-model="name" name="name" type="text" placeholder="Full Name" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" />
                </div>
                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Phone Number</label>
                    <input v-model="phoneNumber" name="phoneNumber" placeholder="Phone Number" type="text" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest" />
                </div>
                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Address</label>
                    <input v-model="address" name="address" type="text" placeholder="Address" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest" />
                </div>
                <div class="mb-6">
                    <label class="block mb-3 text-gray-600" for="">Note</label>
                    <input v-model="note" name="note" placeholder="Note" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest" />
                </div>
                <div>
                    <button class="w-full text-center px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold">
                        Confirm payment
                    </button>
                </div>
            </div>
        </form>
        <button @click="logOut()" class="w-full text-center px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold">Log out</button>
    </div>
</div>
</template>

<script>
import {
    userServices
} from '@/services/userServices'
import ProductCheckComponent from './ProductCheckComponent'
export default {
    name: "Payment",
    data() {
        return {
            sub_total: '',
            totalProduct: '',
            tax: 0.8,
            note: '',
            address: '',
            phoneNumber: '',
            name: '',
            product: [],
            test: {}
        }
    },
    methods: {
        getTotal() {
            let carts = localStorage.getItem("carts", JSON.stringify(this.cart))
            let data = JSON.parse(carts);
            let total = 0;
            data.forEach(item => {
                total += item.price * item.quantity;
            });
            this.totalProduct = total;
            this.product = data;
        },
        async makeOrder() {
            this.getTotal()
            try {
                await userServices.MakeOrder({
                    name: this.name,
                    phone: this.phoneNumber,
                    address: this.address,
                    tax: this.tax,
                    note: this.note,
                    total: this.totalProduct,
                    products: this.product,
                    sub_total: this.tax * this.totalProduct
                });
                setTimeout(() => {
                    this.$router.push('/');
                    localStorage.removeItem('carts');
                }, 1000);
                alert("Bạn đã đặt hàng thành công");
            } catch (e) {
                alert(e)
            }
        },
        logOut() {
            localStorage.removeItem('token');
            this.$router.push('/');
        },
    },
    mounted() {
        if (!localStorage.getItem("token")) {
            alert("Bạn phải đăng nhập để sử dụng chức năng này");
            this.$router.push('/login');
        }
        let show = setInterval(() => {
            this.getTotal();
        }, 100)
        clearInterval(show)
    },
    components: {
        ProductCheckComponent
    },
};
</script>
