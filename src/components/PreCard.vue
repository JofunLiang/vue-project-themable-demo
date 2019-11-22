<template>
  <div :class="$style.precard">
    <div :class="$style['precard-bg']">
      <img :class="$style['precard-img']" :src="img" :alt="content">
    </div>
    <div :class="$style['precard-content']">
      {{ content }}
    </div>
    <div :class="$style['precard-footer']">
      &#35; {{ time }} &#35;
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PreCard',
    props: {
      /**
       * 背景图片地址
       */
      img: {
        required: true,
        type: String,
        default: ''
      },
      /**
       * 文本内容
       */
      content: {
        required: true,
        type: String,
        default: ''
      },
      /**
       * 创建时间
       */
      time: {
        required: true,
        type: String,
        default: ''
      }
    }
  }
</script>

<style module lang="scss">
  .precard {
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
    background-color: var(--bg-color-1);
    
    .precard-bg {
      width: 100%;
      height: 212px;
      position: relative;
      overflow: hidden;
      
      &:before {
        display: block;
        content: '';
        width: 100%;
        height: 12px;
        border-radius: 12px;
        position: absolute;
        left: 0;
        bottom: -6px;
        z-index: 1;
        background-color: var(--bg-color-1);
      }
    }
    
    .precard-img {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      margin: 0 auto;
      object-fit: cover;
      transition: transform .2s linear;
      transform-origin: center;
      will-change: transform;
    }
    
    &:hover .precard-img {
      transform: translateY(4px) scale(1.05);
    }
    
    .precard-content {
      height: 144px;
      padding: 30px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: .56px;
      line-height: 20px;
    }
    
    .precard-footer {
      height: 48px;
      line-height: 48px;
      box-sizing: border-box;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      color: var(--font-color-2);
    }
  }
</style>
