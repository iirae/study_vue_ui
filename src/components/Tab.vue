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

        } },
        created: function() {

        }, 
        mounted: function() {
            this.init();
        },
        methods: {
            init() {
                this.getSelectedTabWidth();
                // const $this = $(e.target);
                // const $tabItem = $this.closest('li'),
                //     $wrap = $this.closest('.module-tab');

                // let tabItemWidth = $this.width();
                // let tabItemPositionLeft = $tabItem.position().left + $this.closest('.tab').scrollLeft();

                // function tabDeco($wrap, tabItemWidth, tabItemOffsetLeft) {
                    // $($wrap).find('.tab-point').css({
                    //     'width': tabItemWidth,
                    //     'transform': ('translate3d(' + (tabItemOffsetLeft) + 'px, 0, 0)')
                    // });
                // }
            },
            onClickTab(tabId) {
                // console.log('onClickTab', tabId);
                this.$emit('selectedTab', tabId);
                this.getSelectedTabWidth();
            },
            getSelectedTabWidth() {
                let tabInfo = document.querySelector('li.on').getBoundingClientRect();
                let tabWidth = tabInfo.width;
                let tabPositionLeft = tabInfo.left;

                const tabPoint = document.querySelector('.tab-point');

                tabPoint.style.cssText = 'width:' + tabWidth + 'px; transform: translate3d(' + tabPositionLeft + 'px, 0, 0)';
                // tabPoint.style.width = tabWidth;
                // tabPoint.style.transform = 'translate3d(' + tabPositionLeft + 'px, 0, 0';
                console.log(tabWidth, tabPositionLeft);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>