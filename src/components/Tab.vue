<template>
    <div class="m-tab" id="tab">
        <ul>
            <li v-for="(tabmenu, index) in tabMenuList" :key="index" 
                :class="{ on: isSelectedTab === tabmenu.id }"
            >
                <a @click="onClickTab(tabmenu.id)" v-html="tabmenu.label"></a>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'TabComponent',
        props: {
            tabMenuList: Object,
            isSelectedTab: String,
        },
        data: () => { return {

        } },
        created: function() {

        }, 
        mounted: function() {
            this.init();
        },
        methods: {
            init() {

            },
            onClickTab(tabId) {
                // console.log('onClickTab', tabId);
                this.$emit('selectedTab', tabId);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>