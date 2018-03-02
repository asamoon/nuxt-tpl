<template>
  <div class="profileAvatar" itemprop="profile" itemscope itemtype="http://schema.com/Person">
    <a :href="link">
      <Avater :name="name" :src="src" :size="size" :rounded="rounded" aria-hidden="true" />
      <div class="account__group">
        <span class="user-name" itemprop="name">{{ name }}</span>
        <span class="user-account" itemprop="account">@{{ account }}</span>
      </div>
    </a>
  </div><!-- ======================== profile end ======================== -->
</template>

<script>
import Avater from '~/components/mui/Avater'

export default {
  name: 'mui-profile-avater',
  components: {
    Avater
  },
  props: {
    name: {
      type: String,
      default: 'someyoneg'
    },
    account: {
      type: String,
      default: 'someyoneg'
    },
    src: {
      type: String
    },
    link: {
      type: String,
      default: '/'
    },
    size: {
      type: Number,
      default: 48
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

.profileAvatar {
  display: inline-flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  a {
    display: inline-flex;
    align-items: center;
    color: inherit!important;
  }
  .avater {
    flex: 0 0 auto;
    margin-right: 1rem;
  }
  &--col {
    align-items: center;
    text-align: center;
    a {
      flex-direction: column;
    }
   .avater {
     margin-right: 0;
     margin-bottom: 1rem;
   }
  }

    // @include mq(sm) {
    //   .avater {
    //     max-width: 90px;
    //     max-height: 90px;
    //   }
    // }


  .user-name:hover, .user-account:hover {
    text-decoration: underline;
    outline: 0;
    color: inherit!important;
  }
}

// .desc
</style>
