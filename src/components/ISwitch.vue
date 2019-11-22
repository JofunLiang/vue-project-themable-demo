<template>
  <span
    :class="[$style.switch, { [$style['switch-on']]: checked}]"
    :data-content="dataContent"
    :value="value"
    @click="toggle">
  </span>
</template>

<script>
  export default {
    name: 'ISwitch',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      /**
       * 绑定值
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * 开关文本
       */
      content: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        checked: this.value
      }
    },
    watch: {
      checked (val) {
        /**
         * 开关切换事件
         * @event change
         */
        this.$emit('change', val);
      }
    },
    computed: {
      dataContent () {
        try {
          return this.content[Number(this.checked)]
        } catch (e) {
          return ''
        }
      }
    },
    methods: {
      toggle() {
        this.checked = !this.checked;
      }
    }
  }
</script>

<style module lang="scss">
  .switch {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 58px;
    height: 18px;
    border-radius: 9px;
    box-sizing: border-box;
    background-color: var(--bg-color-2);
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
    
    &:after {
      content: attr(data-content);
      position: absolute;
      top: 50%;
      left: 0;
      width: 34px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-top: -10px;
      border-radius: 10px;
      white-space: nowrap;
      font-size: 12px;
      background-color: var(--bg-color-1);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
  }
  .switch-on {
    &:after {
      transform: translateX(24px);
    }
  }
</style>
