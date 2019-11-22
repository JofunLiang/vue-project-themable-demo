<template>
  <div id="app" :class="$style.app">
    <div :class="$style.header">
      <div :class="$style.nav">
        <router-link :class="$style.link" :to="{name: 'home'}">首页</router-link>
        <router-link :class="$style.link" :to="{name: 'about'}">关于</router-link>
        <i-switch v-model="value" :content="switchText"></i-switch>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import toggleTheme from '@/themes'
  import ISwitch from '@/components/ISwitch.vue'
  
  export default {
    components: {
      ISwitch
    },
    data () {
      return {
        switchText: ['夜', '昼'],
        value: true,
      }
    },
    watch: {
      value: {
        handler (val) {
          val ? toggleTheme('default') : toggleTheme('dark')
        },
        immediate: true
      }
    }
  }
</script>

<style module lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--font-color-1);
    background-color: var(--bg-color-1);
  }

  .header {
    height: 48px;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border-color-1);
    background-color: var(--bg-color-1);
    
    .nav {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    
    .btn {
      display: flex;
      align-items: center;
      border: 0;
      background-color: transparent;
      outline: none;
      padding: 5px 12px;
      border-radius: 4px;
      color: var(--font-color-1);
      
      &:hover {
        cursor: pointer;
        color: var(--font-color-2);
      }
    }
    
    .icon {
      fill: currentcolor;
      margin-right: 4px;
    }
    
    .link {
      padding: 5px 10px;
      color: var(--font-color-1);
      font-size: 14px;
      margin-right: 15px;
      text-decoration: none;
      
      &:hover {
        color: var(--font-color-2);
      }
    }
  }
</style>
