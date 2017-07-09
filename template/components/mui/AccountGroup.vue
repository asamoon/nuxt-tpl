<template>
  <nuxt-link class="account-group" :to="`user/${userName}`">
    <slot name="avater"></slot>
    <span class="account-group__name">
      <strong>{{ userName }}</strong>
    </span>
  </nuxt-link>
  <!-- ======================== AccountGroup end ======================== -->
</template>

<script>
export default {
  name: 'mui-account-group',
  props: {
    userId: {
      type: String
      // required: true
    },
    userName: {
      type: String,
      default: 'guest'
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/config";

.account-group {
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 80%;

  &__name {
    margin-left: .6rem;
    color: $color-font;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.6rem;
    // font-weight: bold;
    &:hover {color: $color-brand;}
  }
}
</style>
