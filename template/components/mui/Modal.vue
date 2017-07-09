<template>
  <transition :name="toggleTransition">
    <div
      class="mui-modal mui-modal__mask"
      :class="classes"
      :role="role"
      v-show="isOpen">
      <div class="mui-modal__wrapper" ref="backdrop" @click="closeModal($event)">
        <div class="mui-modal__container" :class="type" ref="container" tabindex="-1" @keydown.esc="closeModal($event)">
          <div class="mui-modal__header" :class="{nonTitle: !hasTitle}">
            <slot name="header">
              <h1 v-if="hasTitle" class="mui-modal__header-title">{{ title }}</h1>
              <div class="mui-modal__close" @click="closeModal">
                <icon>close</icon>
              </div>
            </slot>
          </div>
          <!-- ======================== header end ======================== -->

          <div class="mui-modal__body">
            <slot></slot>
          </div>
          <!-- ======================== body end ======================== -->

          <slot name="footer"></slot>
          <!-- ======================== footer end ======================== -->

        </div>
        <!-- ======================== mui-modal__container end ======================== -->
      </div>
      <!-- ======================== mui-modal__wrapper end ======================== -->
    </div>
    <!-- ======================== mui-modal__mask end ======================== -->
  </transition>
</template>

<script>
import Icon from '~components/mui/Icon'

export default {
  name: 'mui-modal',
  components: {
    Icon
  },
  props: {
    title: {
      type: String
    },
    role: {
      type: String,
      default: 'dialog' // 'dialog' or 'alertdialog'
    },
    type: {
      type: String,
      default: '' // imgBox
    },
    transition: {
      type: String,
      default: 'scale' // 'scale', or 'fade'
    }
  },
  data () {
    return {
      isOpen: false,
      lastfocusedElement: null
    }
  },
  computed: {
    classes () {
      return [
        // `mui-modal__size-${this.size}`,
        { 'has-footer': this.hasFooter },
        { 'is-open': this.isOpen }
      ]
    },
    hasTitle () {
      return Boolean(this.title)
    },
    hasFooter () {
      return Boolean(this.$slots.footer)
    },
    toggleTransition () {
      return `mui-modal__effc-${this.transition}`
    }
  },
  watch: {
    isOpen () {
      this.$nextTick(() => {
        this[this.isOpen ? 'onOpen' : 'onClose']()
      })
    }
  },
  beforeDestroy () {
    if (this.isOpen) {
      this.teardownModal()
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    },
    closeModal (e) {
      // Make sure the element clicked was the backdrop and not a child whose click
      // event has bubbled up
      if (e.currentTarget === this.$refs.backdrop && e.target !== e.currentTarget) {
        return
      }
      this.isOpen = false
    },
    onOpen () {
      this.lastfocusedElement = document.activeElement
      this.$refs.container.focus()
      // classlist.add(document.body, 'ui-modal--is-open');
      document.addEventListener('focus', this.restrictFocus, true)
      this.$emit('open')
    },
    onClose () {
      this.teardownModal()
      this.$emit('close')
    },
    teardownModal () {
      // classlist.remove(document.body, 'ui-modal--is-open')
      document.removeEventListener('focus', this.restrictFocus, true)
      if (this.lastfocusedElement) {
        this.lastfocusedElement.focus()
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";
$header-height: 5rem;

.mui-modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    display: table;
    transition: opacity .3s ease;
  }

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    overflow-x: hidden;
  }

  &__container {
    position: relative;
    background-color: #fff;
    margin: 0 auto;
    padding: 0;
    border-radius: .3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    width: 50rem;
    max-height: 100vh;
    max-width: 100vw;
    outline: none;
    overflow: hidden;
    transition: all .3s ease;
  }

  &__header {
    background-color: rgba(#fff, .5);
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: 0 1px 1px rgba(black, 0.16);
    height: $header-height;
    z-index: 1;

    &.nonTitle {
      position: absolute;
      top: 0;
      width: 100%;
      background-color: transparent !important;
      box-shadow: none;
    }
  }

  &__header-title {
    padding: 0 .5rem 0 0;
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  &__body {
    // max-height: calc(100vh - #{$header-height});
    overflow-y: auto;
    padding: 16px 24px;
  }

  &__close {
    margin-left: auto;
    border-radius: .3rem;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    opacity: 1;
    transition: opacity .2s ease;
    transition-delay: .3s;
    i {
      position: relative;
      top: -2px;
    }
     .nonTitle & {
      background-color: rgba(#000, .2);
      color: #fff;
      text-shadow: 0 0 5px rgba(#000, .1), 0 1px 5px rgba(#000, .1), 0 2px 5px rgba(#000, .1);
     }
  }

  // ================================================
  // Type
  // ================================================
    .imgBox {
      background-color: transparent;
      box-shadow: none;
      // width: auto;
    }
      .imgBox &__body {
        box-shadow: none;
        padding: 0;
      }
      .imgBox &__header {
        background-color: rgba(#000, .5);
      }
      .imgBox &__header-title, .imgBox &__close {
        color: #fff;
      }
      .imgBox &__body img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        box-shadow: 0 1px 1px rgba(black, 0.16);
        transition: all .3s ease;
      }


  // ================================================
  // Transitions
  // ================================================
  // fade effc
  &__effc-fade-enter,
  &__effc-fade-leave-active,
  &__effc-scale-enter,
  &__effc-scale-leave-active {
    opacity: 0;
    .mui-modal__close {
      opacity: 0;
    }
  }
  // scale effc
 &__effc-scale-enter &__container,
  &__effc-scale-leave-active &__container {
    transform: scale(1.1);
  }
}
</style>
