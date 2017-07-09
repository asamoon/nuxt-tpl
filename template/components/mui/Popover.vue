<template>
  <div
    class="mui-popover"
    role="dialog"
    tabindex="-1"
    :class="{ 'is-raised': raised }"
    @keydown.esc="closeDropdown"
  >
    <slot></slot>
    <div class="mui-popover__focus-redirector" tabindex="0" @focus="restrictFocus"></div>
  </div>
</template>

<script>
import classlist from './helpers/classlist'
// import Drop from 'tether-drop'

let Drop
if (process.BROWSER_BUILD) {
  Drop = require('tether-drop')
}

export default {
  name: 'mui-popover',
  props: {
    trigger: {
      type: String,
      required: true
    },
    dropdownPosition: {
      type: String,
      default: 'bottom left'
    },
    openOn: {
      type: String,
      default: 'click' // 'click', 'hover', 'focus', or 'always'
    },
    containFocus: {
      type: Boolean,
      default: false
    },
    focusRedirector: Function,
    raised: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dropInstance: null,
      lastfocusedElement: null
    }
  },
  computed: {
    triggerEl () {
      return this.$vnode.context.$refs[this.trigger]
    }
  },
  mounted () {
    if (this.triggerEl) {
      this.initializeDropdown()
    }
  },
  beforeDestroy () {
    if (this.dropInstance) {
      this.dropInstance.destroy()
    }
  },
  methods: {
    initializeDropdown () {
      // console.log(111)
      this.dropInstance = new Drop({
        target: this.triggerEl,
        content: this.$el,
        position: this.dropdownPosition,
        constrainToWindow: true,
        openOn: this.openOn
      })

      // TO FIX: Workaround for Tether not positioning
      // correctly for positions other than 'bottom left'
      if (this.dropdownPosition !== 'bottom left') {
        this.dropInstance.open()
        this.dropInstance.close()
        this.dropInstance.open()
        this.dropInstance.close()
      }
      this.dropInstance.on('open', this.onOpen)
      this.dropInstance.on('close', this.onClose)
    },
    openDropdown () {
      if (this.dropInstance) {
        this.dropInstance.open()
      }
    },
    closeDropdown () {
      if (this.dropInstance) {
        this.dropInstance.close()
      }
    },
    toggleDropdown (e) {
      if (this.dropInstance) {
        this.dropInstance.toggle(e)
      }
    },
    /**
    * Ensures drop is horizontally within viewport (vertical is already solved by drop.js).
    */
    positionDrop () {
      const drop = this.dropInstance
      const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      const width = drop.drop.getBoundingClientRect().width
      const left = drop.target.getBoundingClientRect().left
      const availableSpace = windowWidth - left
      if (width > availableSpace) {
        const direction = width > availableSpace ? 'right' : 'left'
        drop.tether.attachment.left = direction
        drop.tether.targetAttachment.left = direction
        drop.position()
      }
    },
    onOpen () {
      this.positionDrop()
      classlist.add(this.triggerEl, 'has-dropdown-open')
      this.lastfocusedElement = document.activeElement
      this.$el.focus()
      this.$emit('open')
    },
    onClose () {
      classlist.remove(this.triggerEl, 'has-dropdown-open')
      if (this.lastfocusedElement) {
        this.lastfocusedElement.focus()
      }
      this.$emit('close')
    },
    restrictFocus (e) {
      console.log(22)
      if (!this.containFocus) {
        this.closeDropdown()
        return
      }
      e.stopPropagation()
      if (this.focusRedirector) {
        this.focusRedirector(e)
      } else {
        this.$el.focus()
      }
    },
    open () {
      console.log(22)
      this.openDropdown()
    },
    close () {
      this.closeDropdown()
    },
    toggle () {
      console.log(22)
      this.toggleDropdown()
    }
  }
}
</script>


<style lang="scss">
@import "~assets/style/import";

.mui-popover {
  background-color: white;
  outline: none;
  border-radius: .5rem;
  // border: 1px solid #333;
  overflow: hidden;

  &.is-raised {
    box-shadow: 0 0 30px rgba(#111, .1), 0 15px 50px rgba(#111,.1);
    // box-shadow: 0 0 25px rgba(#000, .2), 0 15px 50px rgba(#aaa,.8);
  }
  .mui-menu {
    border: none;
  }
}
.mui-popover__focus-redirector {
  opacity: 0;
  position: absolute;
}


/* 最外層
---------------------------------------- */
.drop-element {
  display: none;
  max-height: 100%;
  max-width: 100%;
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s ease;
  z-index: 999;
  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before {
    box-sizing: border-box;
  }
  &.drop-open, &.drop-open .inner {
    display: block;
  }
  &.drop-after-open {
    opacity: 1;
  }
}
</style>
