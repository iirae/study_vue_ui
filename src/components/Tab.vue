<template>
    <div class="m-tab" id="tab">
        <ul>
            <li v-for="(tabmenu, index) in tabMenuList" :key="index" 
                :class="{ on: isSelectedTab === tabmenu.id }"
            >
                <a @click="onClickTab(tabmenu.id)" v-html="tabmenu.label"></a>
            </li>
        </ul>
        <span class="tab-point"></span>
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
            tagetLi: Object,
        } },
        created: function() {

        }, 
        mounted: function() {
            this.init();
        },
        methods: {
            init() {
                this.tagetLi = document.querySelector('li.on');
                this.getSelectedTabWidth(this.tagetLi);
            },
            onClickTab(tabId) {
                this.tagetLi = event.target.closest('li');
                this.$emit('selectedTab', tabId);
                this.getSelectedTabWidth(this.tagetLi);
            },
            getSelectedTabWidth(tagetLi) {
                let tabInfo = tagetLi.getBoundingClientRect();
                let tabWidth = tabInfo.width;
                let tabPositionLeft = tabInfo.left;

                const tabPoint = document.querySelector('.tab-point');

                tabPoint.style.cssText = 'width:' + tabWidth + 'px; transform: translate3d(' + tabPositionLeft + 'px, 0, 0)';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>