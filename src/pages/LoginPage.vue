<template>
    <div class="wrap">
        <HeadButton isHistoryBack pageTitle="Login"></HeadButton>
        <div class="container">
          <div class="contents">
            <FormGroup formLabel="Id" formPlaceholder="이름"></FormGroup>
            <FormGroup formLabel="Cellphone" formPlaceholder="Cell Number" isNumber="true"></FormGroup>
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

  }
}
</script>

<style lang="scss" scoped>

</style>