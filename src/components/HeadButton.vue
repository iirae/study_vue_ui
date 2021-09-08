<template>
<div class="head-button">
    <a href="javascript:history.back();" class="btn-icon back" v-if="isHistoryBack" title="뒤로가기"></a>
    <h1 class="page-title" v-if="pageTitle">{{ pageTitle }}</h1>
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
        pageTitle: String
    }
}
</script>

<style lang="scss" scoped>

</style>