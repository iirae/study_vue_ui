<template>
<div class="head-button">
    <a href="javascript:history.back();" class="btn-icon back" v-if="isHistoryBack">back</a>
    <span class="al-right" v-if="isActivityClose">
        <a href="javascript:;" class="btn-icon close">close</a>
    </span>
</div>
</template>

<script>
export default {
    name: 'HeadButton',
    props: {
        isHistoryBack: Boolean,
        isActivityClose: Boolean,
    }
}
</script>

<style lang="scss" scoped>

</style>