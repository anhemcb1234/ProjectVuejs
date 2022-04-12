<template>
<div>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <form class="w-full p-10 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50" @submit.prevent="login" method="" action="">
                    <h1 class="mb-8 text-3xl text-center font-black">Login</h1>

                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" v-model="email" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" v-model="password" />

                    <button type="submit" class="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">LOG IN</button>
                </form>
                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                    <div class="mt-10">
                        <button class="w-full p-2 rounded  bg-black hover:bg-black active:bg-black focus:outline-none focus:ring focus:ring-white-300 text-white">
                            <a class="no-under no-underline border-b border-blue text-blue" href="../sign-in">
                                Create a new account
                            </a>
                        </button>
                    </div>
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
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const login = await userServices.Login({
                    email: this.email,
                    password: this.password
                })
                const data = login.data;
                console.log(data)
                localStorage.setItem('token', data.token);
                alert("Đăng nhập thành công")
                setTimeout(() => {
                    this.$router.push('/')
                }, 1000)
            } catch (error) {
                alert(error.response.data.message)
            }
        },
        async _getLoggedUserInfo() {
            try {} catch (e) {
                alert(e);
            }
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            alert("Bạn đã đăng nhập rồi")
            setTimeout(() => {
                this.$router.push('/')
            }, 1000)
            console.log(data)
        }
    },
}
</script>

<style>

</style>
