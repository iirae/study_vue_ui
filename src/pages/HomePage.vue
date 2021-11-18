<template>
    <div class="p-main">
        Home Page

        <div>
            <TabModule 
                :tabMenuList="TABMENU" 
                @selectedTab="onFocusTab" 
                :isSelectedTab="tabContent"
            ></TabModule>

            <div class="tab-content" v-if="tabContent === 'tab01'">tab01</div>
            <div class="tab-content" v-if="tabContent === 'tab02'">tab02</div>
            <div class="tab-content" v-if="tabContent === 'tab03'">tab03</div>
        </div>

        <div class="mt-l">
            <a href="javascript:;" class="btn btn-normal small" data-href="#layerAlert" :targetLayerID="targetLayerID" @click="onOpenAlert()" >Alert</a>
        </div>

        <Navigation></Navigation>

        <AlertModule hasCloseBtn hasConfirmBtn :isShowAlert="isShowAlert" :paragraph="alertMessages" @updateIsShowLayer="updateIsShow"></AlertModule>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import TabModule from '@/components/Tab.vue';
import AlertModule from '@/components/Alert.vue';

export default {
    name: 'Home',
    components: {
        Navigation,
        TabModule,
        AlertModule
    },
    props: {
        
    },
    data: () => { return {
        TABMENU: [
            { label: 'tab 1', id: 'tab01' },
            { label: 'tab 2', id: 'tab02' },
            { label: 'tab 3', id: 'tab03' },
        ],
        tabContent: 'tab01',
        isShowAlert: false,
        targetLayerID: String,
        alertMessages: 'alert 메세지는 <br> 되나?'
    } },
    mounted: function() {
        console.log(this.isShowAlert);
    },
    methods: {
        onOpenAlert() {
            this.isShowAlert = !this.isShowAlert;
            this.targetLayerID = event.target.dataset.href.slice(1);
            console.log('onOpenAlert', this.targetLayerID, this.isShowAlert);
        },
        updateIsShow(isShowAlertP) {
            this.isShowAlert = isShowAlertP;
            console.log('updateIsShow', isShowAlertP);
        },
        onFocusTab(tab) {
            this.selectedTab = tab;
            this.tabContent = this.selectedTab;
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>