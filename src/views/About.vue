<template>
  <div :class="$style.about">
    <h2 :class="$style.title">关于</h2>
    <p>这是一个实验性项目！</p>
    <p><a :class="$style.link" href="https://github.com/JofunLiang/vue-project-themable-demo" target="_blank">Github项目地址</a></p>
  </div>
</template>

<script>
  export default {}
</script>

<style module lang="scss">
  .about {
    min-height: calc(100vh - 49px);
    color: var(--font-color-1);
    background-color: var(--bg-color-1);
    text-align: center;
    padding: 40px;
    box-sizing: border-box;
  }
  
  .title {
    margin-top: 0;
  }
  
  .link {
    color: var(--font-color-1);
    
    &:hover {
      color: var(--font-color-2);
    }
  }
</style>
