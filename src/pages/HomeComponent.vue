<script>
import {
    homeService
} from '@/services/homeService.js'

export default {
    name: 'ChildComponent',
    data() {
        return {
            lastProducts: [],
            carts: []
        }
    },
    components: {

    },
    methods: {

        addToCart(ProductId) {

            if (this.carts.find(product => product.id == ProductId)) {
                this.carts.find(product => product.id == ProductId).quantity += 1;
                localStorage.setItem('carts', JSON.stringify(this.carts))
                alert('Thêm sản phẩm vào giỏ hàng thành công')

            } else {
                this.carts.push(this.lastProducts.find(product => product.id == ProductId))
                this.carts.map((item) => item.quantity = 1)
                localStorage.setItem('carts', JSON.stringify(this.carts))
                console.log(this.carts)
                alert('Thêm sản phẩm vào giỏ hàng thành công')

            }

        },
        

    },

    async mounted() {
        try {
            const response = await homeService.getLastProducts();
            this.lastProducts = response.data.lastProducts;
        } catch (error) {
            console.log(error)
        }
    },
}
</script>

<template>
<div>

    <div class="my-5 mx-5 md:mx-10">
        <h3 class="text-2xl font-black">Sản Phẩm Mới Nhất</h3>
    </div>
    <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5">
        <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(lastProductsItem,index) in lastProducts" :key="index">
            <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}">
                <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path" alt="">
            </router-link>
            <div class="mx-3 my-2 ">
                <div class="flex justify-between items-center">
                    <h6 class="text-xl font-black">{{ lastProductsItem.name }}</h6>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <span class="text-xl font-black my-4 inline-block">{{ lastProductsItem.price }}</span>
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span class="inline-block ">-</span>
                        <span class="w-8 text-center text-md border border-indigo-200 inline-block ml-1 rounded ">1</span>
                        <span class="inline-block ml-1">+</span>
                    </div>
                    <div class="gap-1 flex">
                        <!-- <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}"> -->
                        <button class="p-2 text-md bg-gray-900 text-white" @click="addToCart(lastProductsItem.id)">
                            Add To Cart
                        </button>
                        <!-- </router-link> -->
                        <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5 mx-5 md:mx-10">
        <h3 class="text-2xl font-black">Sản Phẩm Mua Nhiều Nhất</h3>
    </div>
    <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5">
        <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(lastProductsItem,index) in lastProducts" :key="index">
            <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}">
                <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path" alt="">
            </router-link>
            <div class="mx-3 my-2 ">
                <div class="flex justify-between items-center">
                    <h6 class="text-xl font-black">{{ lastProductsItem.name }}</h6>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <span class="text-xl font-black my-4 inline-block">{{ lastProductsItem.price }}</span>
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span class="inline-block ">-</span>
                        <span class="w-8 text-center text-md border border-indigo-200 inline-block ml-1 rounded ">1</span>
                        <span class="inline-block ml-1">+</span>
                    </div>
                    <div class="gap-1 flex">
                        <!-- <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}"> -->
                        <button class="p-2 text-md bg-gray-900 text-white" @click="addToCart(lastProductsItem.id)">
                            Add To Cart
                        </button>
                        <!-- </router-link> -->
                        <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5 mx-5 md:mx-10">
        <h3 class="text-2xl font-black">Sản Phẩm Có Lượt Xem Nhiều Nhất</h3>
    </div>
    <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5">
        <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(lastProductsItem,index) in lastProducts" :key="index">
            <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}">
                <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path" alt="">
            </router-link>
            <div class="mx-3 my-2 ">
                <div class="flex justify-between items-center">
                    <h6 class="text-xl font-black">{{ lastProductsItem.name }}</h6>
                    <i class="fa-solid fa-heart"></i>
                </div>
                <span class="text-xl font-black my-4 inline-block">{{ lastProductsItem.price }}</span>
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span class="inline-block ">-</span>
                        <span class="w-8 text-center text-md border border-indigo-200 inline-block ml-1 rounded ">1</span>
                        <span class="inline-block ml-1">+</span>
                    </div>
                    <div class="gap-1 flex">
                        <!-- <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}"> -->
                        <button class="p-2 text-md bg-gray-900 text-white" @click="addToCart(lastProductsItem.id)">
                            Add To Cart
                        </button>
                        <!-- </router-link> -->
                        <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>

</style>
