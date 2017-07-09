<template>
  <div class="error">
    <div class="error__content">
      <div class="error__msg-wrap">
        <h1 class="error__code">{{ error.statusCode }}</h1>
        <h2 class="error__msg">{{ error.message }}</h2>
      </div>
      <p v-if="error.statusCode === 404"><nuxt-link class="error__link" to="/">Back to the home page</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/style/import";

.error {
  background: $color-bg;
  color: $color-font;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";
  // text-align: center;
  // padding-top: 20%;

  &__msg-wrap {
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    vertical-align: middle;
  }
  &__code {
    display: inline-block;
    font-size: 20rem;
    font-weight: 400;
    vertical-align: top;
    color: $color-danger-30;
  }
  &__msg {
    font-size: 14px;
    font-weight: normal;
    margin: 0px;
    padding: 0px;
  }
  &__link {
    color: #00BCD4;
    font-weight: normal;
    text-decoration: none;
    font-size: 14px;
  }
}
</style>
