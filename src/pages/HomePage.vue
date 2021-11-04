<template>
    <div>
        Home Page

        <TabModule 
            :tabMenuList="TABMENU" 
            @selectedTab="onFocusTab" 
            :isSelectedTab="tabContent"
        ></TabModule>

        <div>
            <div class="tab-content" v-if="tabContent === 'tab01'">tab01</div>
            <div class="tab-content" v-if="tabContent === 'tab02'">tab02</div>
            <div class="tab-content" v-if="tabContent === 'tab03'">tab03</div>
        </div>

        <Navigation></Navigation>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import TabModule from '@/components/Tab.vue';

export default {
    name: 'Home',
    components: {
        Navigation,
        TabModule
    },
    props: {
        // selectedTab: Object,
    },
    data: () => { return {
        TABMENU: [
            { label: 'tab 1', id: 'tab01' },
            { label: 'tab 2', id: 'tab02' },
            { label: 'tab 3', id: 'tab03' },
        ],
        tabContent: 'tab01',
    } },
    methods: {
        onFocusTab(tab) {
            this.selectedTab = tab;
            this.tabContent = this.selectedTab;
        }
    },
}
</script>

<style lang="scss" scoped>

</style>