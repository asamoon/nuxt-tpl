<template>
<div class="author">
	<accountGroup :userName="authorName">
	  <avater :userName="authorName" slot="avater" :size="25"></avater><!-- avater -->
	</accountGroup>
  <!-- accountGroup -->

	<time :datetime="new Date(dataTime) | moment( 'YYYY-MM-DDTh:mm:ss' )" class="author__post-time" >
	  <icon>access_time</icon>
	  <span v-if="timePass">{{ new Date(dataTime) | moment( 'from', 'now' ) }}</span>
	  <span v-else>{{ new Date(dataTime) | moment( 'YYYY-MM-DD' ) }}</span>
	</time><!-- moment -->
</div><!-- ======================== author end ======================== -->
</template>

<script>
import VMoment from '~plugins/vue-moment'

import Avater from '~components/mui/Avater.vue'
import AccountGroup from '~components/mui/AccountGroup.vue'
import Icon from '~components/mui/Icon.vue'

export default {
  components: {
    VMoment,
    Avater,
    AccountGroup,
    Icon
  },
  props: {
    authorName: {
      type: String,
      require: true,
      default: ''
    },
    dataTime: {
      type: String,
      require: true,
      default: '0'
    },
    timePass: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

/* author 發文者/縮圖/資訊
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.author {
  display: flex;
  align-items: center;
  height: 3.3rem;

  &__post-time {
  	display: flex;
	  align-items: center;
  	margin-left: 1rem;
    color: $color-lighten_font;
    i, span {
			display: inline-block;
			font-size: 1.2rem;
    }
    i {margin-right: .5rem;}
  }
  // 顏色反轉
  &.invert .account-group__name, &.invert &__post-time {
    color: #fff !important;
  }
  &.invert .account-group__name:hover {
    color: $color-brand !important;
  }
}
</style>
