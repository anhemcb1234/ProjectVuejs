<template>
<div>
    <div class="bg-grey-lighter min-h-screen flex flex-col my-20">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <form class="w-full p-10 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50" @submit.prevent="signup" method="" action="">
                    <h1 class="mb-8 text-3xl text-center text-bold font-black">Sign up</h1>
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" maxlength="10" placeholder="Full Name" v-model="fullName" />

                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" v-model="email" />
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="phone" placeholder="Phone Number" v-model="phoneNumber" />

                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" min="5" max="20" name="password" placeholder="Password" v-model="password" />
                    <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" min="5" max="20" name="confirm_password" placeholder="Confirm Password" v-model="confirmPassword" />
                    <button class="w-full text-center bg-black hover:bg-white hover:text-black font-semibold text-white py-2 px-4 border border-gray-400 rounded shadow">Create Account</button>
                </form>
                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <a class="no-underline border-b border-blue text-blue" href="../login/">
                    Log in
                </a>.
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
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        }
    },
    methods: {
        validateName() {
            if (this.fullName.length < 5) {
                alert("Tên không được nhỏ hơn 5 ký tự");
            }
            return;
        },
        validateEmail() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                return (true)
            }
            alert("Email không đúng định dạng")
            this.email = ''
            return;
        },
        validatePass() {
            if (this.password.length < 5) {
                alert("Mật khẩu không được nhỏ hơn 5 ký tự");
                this.password = ''
                this.confirmPassword = ''
                return
            } else if (this.password == this.confirmPassword && this.password.length === 0 && this.confirmPassword.length === 0) {
                alert("Mật khẩu không được trống");
                this.password = ''
                this.confirmPassword = ''
                return

            } else if (this.password != this.confirmPassword) {
                alert("Mật khẩu không trùng khớp");
                this.password = ''
                this.confirmPassword = ''
                return

            }
            return;
        },
        validateNumber() {
            if (this.phoneNumber.split('')[0] == 0 && this.phoneNumber.length < 10) {
                alert("Số điện thoại không đúng định dạng");
                this.phoneNumber = ''
                return
            }
        },
        submit() {
            this.validateName();
            this.validateEmail();
            this.validatePass();
            this.validateNumber();
        },
        async signup() {
                try {
                    if(this.submit()){
                        return
                    }
                    await userServices.SignIn({
                        name: this.name,
                        full_name: this.fullName,
                        phone: this.phoneNumber,
                        email: this.email,
                        password: this.password,
                    });
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 1000);
                    alert("Đăng ký thành công");
                } catch (e) {
                    console.log(e)
                }
        }
    },
    mounted() {

    },
}
// POST http://127.0.0.1:8000/api/v1/signup
</script>

<style>

</style>
