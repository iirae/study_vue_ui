<template>
    <div class="nav" id="nav">
        <ul>
            <li v-for="(menu, index) in MENU" :key="index" :class="{ on: menu.href === path }"><router-link :to="menu.href" v-html="menu.label"></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        data: () => { return {
            MENU: [
                { label: 'login', href: 'login' },
                { label: 'menu1', href: 'menu1' },
                { label: 'menu2', href: 'menu2' },
            ]
        } },
        created: function() {
            // this.MENU = menu;
        }, 
        mounted: function() {
            this.init();
        },
        methods: {
            init() {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>