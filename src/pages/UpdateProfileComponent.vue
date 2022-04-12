<template>
<div>
    <div class="bg-grey-lighter min-h-screen flex flex-col my-20">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <form class="w-full p-10 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50" @submit.prevent="updateProfile" method="" action="">
                    <h1 class="mb-8 text-3xl text-center text-bold font-black">Update profile</h1>
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" maxlength="10" placeholder="Full Name" v-model="fullName" />

                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" v-model="email" />
                    <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="phone" placeholder="Phone Number" v-model="phoneNumber" />
                    <img :src="previewImage" class="uploading-image  " />
                    <input type="file" class="p-3 mb-4" @change='uploadImage'>
                    <button class="w-full text-center bg-black hover:bg-white hover:text-black font-semibold text-white py-2 px-4 border border-gray-400 rounded shadow">Update</button>
                </form>
                <button @click="logOut()" class="w-full text-center px-4 py-3 bg-black rounded-md shadow-md text-white font-semibold">Log out</button>
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
            phoneNumber: '',
            previewImage: null
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
            this.validateNumber();
        },
        async updateProfile() {
            try {
                if (this.submit()) {
                    return
                }
                await userServices.UpdateProfile({
                    full_name: this.fullName,
                    phone: this.phoneNumber,
                    email: this.email,
                    avatar: this.previewImage
                });
            } catch (e) {
                console.log(e)
            }
        },
        async uploadImage(e) {
            try {
                const image = e.target.files[0];
                const formData = new FormData();
                formData.append('avatar', image);
                await userServices.UpdateAvatar(formData);
                alert("Cập nhật ảnh đại diện thành công");
            } catch (e) {
                alert(e)
            }
        },
        logOut() {
            localStorage.removeItem('token');
            setTimeout(() => {
                this.$router.push('/');
            }, 1000)
        }
    },
    mounted() {

    },
}
</script>

<style>

</style>
