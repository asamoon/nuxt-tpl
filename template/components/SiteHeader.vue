<template>
  <header class="masthead">
    <div class="masthead__inner"><div class="inner-wrap">
      <div class="masthead__nav nav">
        <h1 class="logo"><nuxt-link to="/about">天</nuxt-link></h1>
        <ul role="menubar">
          <li><nuxt-link to="/about">首頁</nuxt-link></li>
          <li><nuxt-link to="/about">發現</nuxt-link></li>
        </ul>
      </div>
      <div class="masthead__nav nav">
        <ul role="menubar">
          <li><a href="12" class="btn btn--o">申請</a></li>
          <li><a href="12" class="btn">寫文章</a></li>
          <li>
            <v-popover class="dropdown" popoverClass="user-menu" offset="8" aria-haspopup="true">
            <span><Icon>notifications</Icon></span>
            <template slot="popover">
              <Card />
            </template>
            </v-popover>
          </li>
          <li>
            <v-popover class="dropdown" popoverClass="user-menu" offset="8" aria-haspopup="true" aria-busy="false" role="menubar">
              <Avater class="profileAvatar--col"
                name="asamoon"
                :src="'../imgs/1.jpg'"
                :size="30"
                :rounded="true" />
              <template slot="popover">
                <ul>
                  <li><nuxt-link to="/editor"><icon>keyboard</icon>寫文章</nuxt-link></li>
                </ul>
                <ul>
                  <li><nuxt-link to="/my"><icon>web</icon>我的部落格</nuxt-link></li>
                  <li><nuxt-link to="/my"><icon>camera_alt</icon>我的相簿</nuxt-link></li>
                </ul>
                <ul>
                  <li><nuxt-link to="/my/posts"><icon>dvr</icon>文章管理</nuxt-link></li>
                  <li><nuxt-link to="/my/tags"><icon>bookmark</icon>分類管理</nuxt-link></li>
                  <li><nuxt-link to="/my/follow"><icon>people</icon>追蹤與粉絲</nuxt-link></li>
                </ul>
                <ul>
                  <li><nuxt-link to="/my/profile">個人化設定</nuxt-link></li>
                  <li><nuxt-link to="/my/setting">服務設定</nuxt-link></li>
                  <li><nuxt-link to="/logout">登出</nuxt-link></li>
                </ul>
              </template>
            </v-popover>
          </li>
        </ul>
      </div>
    </div></div>
  </header>
</template>

<script>
// Icon
import Icon from '~/components/mui/Icon'
import AccountCircleIcon from 'vue-material-design-icons/account-circle'
import BellIcon from 'vue-material-design-icons/bell'
// components
import Avater from '~/components/mui/Avater'
import Card from '~/components/mui/Card'

export default {
  name: 'masthead',
  components: {
    Icon,
    AccountCircleIcon,
    BellIcon,
    Avater,
    Card
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

/* header
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.masthead {
  &, &__inner {
    width: 100vw;
    height: 55px;
    transition: all 150ms; transition-delay: 100ms;
  }
  &__inner {
    background-color: rgba(#fff, .8);
    position: fixed;
    z-index: 9;
  }

  .inner-wrap {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100vw;
    height: 100%;
    // line-height: 55px;

    @include mq(md){
      max-width: 1000px;
    }
  }
  & a {
    display: inline-block;
  }


/* nav
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  &__nav {
    display: flex;
    height: 100%;
    .logo {
      height: 55px;
      line-height: 55px;
    }
    ul {
      display: flex;
      margin: 0;
      height: 100%;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 45px;
      height: 100%;
      &.pop {
        cursor: pointer;
      }
      .v-popover {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      & > span, .v-popover > span {
        // @include square(25px);
        // full: $color-blod_border;
      }
      & > .btn {
        margin: 0 1rem;
      }
    }
  }
}


/* v-popover.user-menu
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.tooltip.user-menu {
  .popover-inner {
    background: #fff;
    padding: 0;
    border: 1px solid $color-divider;
    width: 300px;
    z-index: 9;
  }
  ul {
    margin: 0;
    padding: .3rem 0;
    border-bottom: 1px solid $color-divider;
    list-style: none;
    a {
      display: block;
      padding: .6rem 2rem;
      color: #555;
      text-decoration: none;
      i {
        margin-right: 1rem;
        font-size: 1.5rem;
        color: #aaa;
        transition: all 150ms;
        transition-delay: 100ms;
      }
      &:hover {
        color: #000;
        i {
          color: $color-brand;
        }
      }
    }
  }
  .card {
    z-index: 3;
  }
  &[x-placement^="bottom"] .popover-arrow {
    // @include svg-arrow(#aaa, 'down');
    background: #fff;
    transform: rotate(45deg) translate(6px,6px);
    box-shadow: -1px -1px 1px -1px rgba(#000, .54);
    top: -10px;
    width: 15px;
    height: 15px;
  }
}


</style>
