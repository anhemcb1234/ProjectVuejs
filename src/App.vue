<template>
<div class="container mx-auto">

    <MenuComponent></MenuComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
</div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
    name: 'App',
    components: {
        MenuComponent,
        FooterComponent,
    },
    methods: {

    },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        formatDate(dateString) {
            let convertedDate = new Date(dateString);
            return convertedDate.toDateString();
        },
        getInitialUsers() {
            axios.get(`https://randomuser.me/api/?results=5`).then((response) => {
                this.users = response.data.results;
            });
        },
        getNextUser() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    axios.get(`https://randomuser.me/api/`).then(response => {
                        this.users.push(response.data.results[0]);
                    });
                }
            }
        }
    },
    beforeMount() {
        this.getInitialUsers();
    },
    mounted() {
        this.getNextUser();
    }
}
</script>

<style>
#app {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
