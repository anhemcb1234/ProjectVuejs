<template>
<div class="container mx-auto mt-10">
    <div class="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5">
        <div class="my-5 mx-5 md:mx-10">
            <h3 class="text-2xl font-black text-center"><i class="fa-solid fa-list"></i></h3>
            <ul class="flex flex-col
            text-start">
                <button>
                    <li>Trạng thái</li>
                </button>
                <button>
                    <li>Danh mục</li>
                </button>
            </ul>
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-10 mx-5">
            <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(lastProductsItem,index) in products.data" :key="index">
                <div class="mx-3 my-2 ">
                    <button class="text-xl font-black">{{ lastProductsItem.name }}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    userServices
} from '@/services/userServices'
export default {
    data() {
        return {
            products: {},
        }
    },
    methods: {
        async getOrder() {
            const reps = await userServices.FilterProducts();
            this.products = reps.data
            console.log(this.products)
        },
    },
    mounted() {
        setTimeout(() => {
            this.getOrder()
        }, 100)
    },
}
</script>

<style>

</style>
