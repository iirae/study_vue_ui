<template>
    <div class="form-group" :class="{ error: hasError }"><!-- input error 시 class error 추가 -->
        <div class="head">
            <strong class="form-label">{{ formLabel }}</strong>
            <button class="btn btn-normal small" v-if="formButtonName">{{ formButtonName }}</button>
        </div>
        <span class="f-text">
            <input type="text" :placeholder="formPlaceholder" v-if="!isNumber" :id="inputId">
            <input type="tel" pattern="[0-9]*" inputmode="numeric" :placeholder="formPlaceholder" maxlength="6" v-if="isNumber" :id="inputId">
        </span>
        <p class="text-error" v-if="formErrorMsg">{{ formErrorMsg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'FormGroup',
        props: {
            hasError: Boolean,
            formLabel: String,
            formButtonName: String,
            formErrorMsg: String,
            isNumber: Boolean,
            formPlaceholder: String,
            inputId: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>