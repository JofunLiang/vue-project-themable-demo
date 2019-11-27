<template>
  <div :class="$style['blog-list']">
    <div :class="$style['blog-item']"
      v-for="item in data"
      :key="item.id">
      <pre-card
        :img="item.img"
        :content="item.content"
        :time="item.time">
      </pre-card>
    </div>
  </div>
</template>

<script>
  import PreCard from './PreCard'
  
  export default {
    name: 'BlogList',
    components: {
      PreCard
    },
    props: {
      /**
       * 列表数据
       */
      data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style module lang="scss">
  .blog-list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    flex-wrap: wrap;
    padding: 40px;
    box-sizing: border-box;
  }
</style>
