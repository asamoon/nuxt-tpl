<template>
<div class="progress__wrap">
  <slot></slot>
  <div class="progress__info-box col-box__between" :class="{'isShow': showInfo}">
    <div class="progress__percent" :style="bgStyle"></div>
    <div class="progress__percentNum">
      {{ setPercent }}<span>%</span>
    </div>
  </div>
</div>
<!-- ======================== Progress end ======================== -->
</template>

<script>
export default {
  name: 'mui-progressItem',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      setPercent: 0
    }
  },
  computed: {
    isShowInfo () {
      if (this.showInfo) {
        this.setPercent = this.percent
      } else {
        this.setPercent = 0
      }
    },
    bgStyle () {
      this.isShowInfo
      return {
        width: `${this.setPercent}%`,
        height: `${this.strokeWidth}px`
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/style/import";

.progress{
  &__info-box {
    height: 0;
    visibility: hidden;
    overflow: hidden;

    &.isShow {
      height: auto;
      visibility: visible;
    }
  }
  &__percent {
    background-image: linear-gradient(90deg, $color-brand-30, $color-brand);
    box-shadow: 0 3px 5px $color-brand-30;
    // background-image: linear-gradient(90deg, #5bfee8, #affeed);
    // background-image: linear-gradient(90deg, #ff4823,  #ff858f);
    display: block;
    position: relative;
    border-radius: .5rem;
    transition: all 500ms; transition-delay: 100ms;
  }
  &__percentNum {
    margin-left: .5rem;
    width: 4.2rem;
    overflow: hidden;
    font-size: 1.4rem;
    text-align: right;
    z-index: 2;
    span {font-size: 1.2rem;}
  }
}
</style>
