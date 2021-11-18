<template>
    <div class="layer center layer-alert" :class="{ show: isShowAlert }" id="layerAlert">
        <!-- alert 용 title 포함 -->
        <div class="layer-container">
            <div class="layer-content p-reset">
                <header class="head">
                    <h2>인증실패</h2>
                </header>
                <div> 
                    {{ isShowAlertP }}
                    {{ isShowAlert }}
                    <p>{{ paragraph }}</p>
                </div>
            </div>
            <div class="layer-footer">
                <button class="btn btn-secondary e-close" @click="onCloseLayer" v-if="hasCloseBtn">닫기</button>
                <button class="btn btn-primary" v-if="hasConfirmBtn">확인</button>
            </div>
        </div>
        <div class="dimmed"></div>
    </div>
</template>

<script>
    export default {
        name: 'AlertComponent',
        props: {
            targetLayerID: String,
            paragraph: String,
            isShowAlert: Boolean,
        },
        data: () => { return {
            hasCloseBtn: Boolean,
            hasConfirmBtn: Boolean,
            isShowAlertP: Boolean
        } },
        created: () => {

        }, 
        mounted: () => {
            // this.init();
                // console.log('mounted', this.props.paragraph);
                // this.isShowAlertP = this.isShowAlert;
        },
        methods: {
            init() {
                this.isShowAlertP = this.isShowAlert;
            },
            onCloseLayer() {
                this.isShowAlertP = false;
                this.$emit('updateIsShowLayer', this.isShowAlertP);
                console.log('onCloseLayer this.isShowAlertP', this.isShowAlertP);
            },
        },
        watch: {
            isShowAlert: function() {
                this.init();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>