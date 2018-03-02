<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
    <!-- <div class="card__media">
    <figure>
      <img v-lazy="'http://via.placeholder.com/500x300'" alt="Placeholder image">
    </figure>
    </div> -->
    <div class="card__content">
      <!-- <ProfileAvater /> -->
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </p>
    </div>
    <slot name="footer"></slot>
  </div><!-- ======================== card end ======================== -->
</template>

<script>
import ProfileAvater from '~/components/mui/ProfileAvater'

export default {
  name: 'mui-card',
  components: {
    ProfileAvater
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
.card {
  position: relative;
  background-color: #fafafa;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  padding: 0;
  border: 1px solid $color-border;
  border-radius: .35rem;
  max-width: 100%;

  // &__header {}
  &__media {
    // figure
    img {
      display: block;
      width: 100%;
    }
  }
  &__content {
    padding: 2rem;
    text-align: left;
    color: $color-font;
  }
  p {
    margin: 0;
    padding: 0;
  }
  time {
    font-size: 1.5rem;
    color: $color-info;
  }
  // &__actions
  // &__footer
}
</style>
