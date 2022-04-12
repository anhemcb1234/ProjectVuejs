<template>
<div>
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10 lg:mx-12">
        <a href="/"><img class="w-16 h-16" src="https://gigamall.com.vn/data/2019/09/05/15023424_LOGO-NIKE-500x500.jpg" alt=""></a>
        <div class="flex items-center gap-4">
            <div class="md:inline-block hidden">
                <ul class="flex items-center gap-4 ">
                    <li><a href="/" class="font-bold text-lg">Home</a></li>
                    <li><a href="/filter-products" class="font-bold text-lg">Danh mục</a></li>
                    <li v-if="!login()"><a href="/sign-in" class="font-bold text-lg">Đăng ký</a></li>
                    <li v-if="login()"><a href="/order-detail" class="font-bold text-lg">Các đơn hàng</a></li>
                    <li v-if="login()"><a href="/Update-profile" class="font-bold text-lg"><i class="fa-solid fa-user"></i></a></li>
                    <li v-else><a href="/login" class="font-bold text-lg">Đăng nhập</a></li>
                </ul>
            </div>

            <div class="md:hidden inline-block " @click="show()">
                <i class="fa-solid fa-bars text-3xl"></i>
            </div>
            <div class="relative">
                <router-link :to="{name:'cart'}">
                    <i class="fa-solid fa-cart-arrow-down text-3xl cursor-pointer"></i>
                </router-link>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            shower: false
        }
    },
    methods: {
        login() {
            if (localStorage.getItem('token')) {
                    return true;
                }
        },
    },
    mounted() {}
}
</script>

<style>

</style>
