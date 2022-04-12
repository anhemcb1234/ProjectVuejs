<template>
<!-- component -->
<div class="bg-white p-8 rounded-md w-full">
    <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                products
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Created at
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Total Price
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Status
                            </th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Detail
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(itemCart, itemCartIndex) in this.order.data" :key="itemCartIndex">
                        <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{itemCart.name}}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">{{itemCart.products.length}}</p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{itemCart.created_at}}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{itemCart.total}}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span class="relative">{{itemCart.status == 1? 'Pending' :itemCart.status == 2 ? 'Processing' : itemCart.status == 3 ? 'Sent' : itemCart.status == 4 ? 'Received' : 'Cancel'}}</span>
                                </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm flex flex-col">
                                <a v-if="login()" href="/order-tracking" class="font-bold text-lg"><button @click="detail(itemCartIndex)" class="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Deltail</button></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            user: {},
            order: {},
            processing: ['Pending', 'Processing', 'Sent', 'Received', 'Cancel order'],
            to: 0,
        }
    },
    methods: {
        async getOrder() {
            const reps = await userServices.getOrders();
            this.order = reps.data
            console.log(this.order)
        },
        async getUser() {
            const reps = await userServices.getUser();
            this.user = reps.data
            console.log(this.user)
        },
        detail(e) {
            localStorage.setItem('id',e)
        },
        login() {
            if (localStorage.getItem('token')) {
                    return true;
                }
        }
    },
    mounted() {
        setTimeout(() => {
            this.getOrder()
            this.getUser()
        }, 100)
    },
}
</script>

<style>

</style>
