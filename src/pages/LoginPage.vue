<template>
    <div class="wrap" id="wrap">
        <HeadButton isHistoryBack pageTitle="Login"></HeadButton>
        <div class="container">
            <div class="contents">
                <FormGroup formLabel="Id" formPlaceholder="이름" inputId="userName"></FormGroup>
                <FormGroup formLabel="Cellphone" formPlaceholder="Cell Number" isNumber="true" inputId="userCellNumber"></FormGroup>
            </div>
            <div class="btn-area fixed">
                <a href="javascript:;" class="btn-primary">button</a>
            </div>
        </div>
    </div>
</template>

<script>
import HeadButton from '@/components/HeadButton.vue'
import FormGroup from '@/components/Form/FormGroup.vue'

export default {
    name: 'Login',
    components: {
        HeadButton,
        FormGroup

    },
    mounted() {
        
    },
}

</script>

<style lang="scss" scoped>

</style>