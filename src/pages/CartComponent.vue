<script>
export default {
    data() {
        return {
            cart: [],
            total: 0,
            quantity: 0,
        }
    },
    methods: {
        removeItemCart(id) {
            this.cart.splice(this.cart.find(item => item.id === id), 1);
            localStorage.setItem("carts", JSON.stringify(this.cart))
            this.$router.go()
        },

        updateQuantity(itemCartIndex, quantityUnit) {
            let carts = localStorage.getItem("carts", JSON.stringify(this.cart))
            let data = JSON.parse(carts);
            if (this.cart[itemCartIndex].quantity + quantityUnit == 0) {
                data.splice(itemCartIndex, 1)
                localStorage.setItem("carts", JSON.stringify(data))
                this.getTotal()
            } else {
                this.cart[itemCartIndex].quantity += quantityUnit;
                this.getTotal()
                localStorage.setItem('carts', JSON.stringify(this.cart));
            }
        },
        getTotal() {
            let carts = localStorage.getItem("carts", JSON.stringify(this.cart))
            let data = JSON.parse(carts);
            let total = 0;
            let quantity = 0;
            data.forEach(item => {
                total += item.price * item.quantity;
                quantity += item.quantity
            });
            this.total = total;
            this.quantity = quantity;
        },
    },
    mounted() {
        if (localStorage.getItem("carts")) {
            this.cart = JSON.parse(localStorage.getItem("carts"))
        }
        let hihi = setInterval(() => {
            this.getTotal();
        }, 10)
        hihi()
        clearInterval(hihi)
    }
}
</script>

<template>
<div class="container mx-auto">
    <div class="flex justify-center my-6 ">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1">
                <table class="w-full text-sm lg:text-base" cellspacing="0" v-for="(itemCart, itemCartIndex) in cart" :key="itemCartIndex">
                    <thead>
                        <tr class="h-12 uppercase">
                            <th class="hidden md:table-cell"></th>
                            <th class="text-left p-4 lg:text-xs">Product</th>
                            <th class="lg:text-right text-left pl-5 lg:pl-0 lg:text-xs">
                                <span class="" title="Quantity">Số Lượng</span>
                            </th>
                            <th class="hidden text-right md:table-cell lg:text-xs">giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="hidden pb-4 md:table-cell">
                                <a href="#">
                                    <img :src="itemCart.image.full_image_path" class="w-52  rounded" alt="Thumbnail">
                                </a>
                            </td>
                            <td>
                                <a href="#">
                                    <p class="mb-2 md:ml-4">{{ itemCart.name }} </p>

                                    <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-3 sm:text-xs sm:p-0 md:p-1 lg:p-1  " @click="removeItemCart(itemCart.id)">Remove item</button>

                                </a>
                            </td>
                            <td class="justify-center md:justify-end md:flex mt-6">
                                <div class="w-20 h-10">
                                    <div class="relative flex flex-row w-full items-center top-20">
                                        <i class="fa-solid fa-minus cursor-pointer" @click="updateQuantity(itemCartIndex,-1)"></i>
                                        <span class="mx-4 font-bold text-lg "> {{ itemCart.quantity }}</span>
                                        <i class="fa-solid fa-plus cursor-pointer" @click="updateQuantity(itemCartIndex,1)"></i>

                                    </div>
                                </div>
                            </td>
                            <td class="hidden text-right md:table-cell">
                                <span class="text-sm lg:text-base font-medium">
                                    {{ itemCart.price * itemCart.quantity }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="container mx-auto">
                    <div class="font-bold flex-col pl-5" style="display: flex;
    align-items: center;
    justify-content: center;">
                        <h2>Tổng số sản phẩm {{quantity}}</h2>
                        <h2>Tổng tiền {{total}}</h2>
                    </div>
                </div>
                <a href="../check-out">
                    <button class="flex justify-end w-80  float-right px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                        <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" />
                        </svg>
                        <span class="ml-2 mt-5px">Procceed to checkout</span>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<style>

</style>
