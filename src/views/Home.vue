<template>
  <div :class="$style.home">
    <div :class="$style.content">
      <blog-list :data="blogs" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList'

export default {
  name: 'home',
  components: {
    BlogList
  },
  data () {
    return {
      blogs: [
        {
          id: 0,
          img: require('../assets/images/blog/ca1465eaa1bcf66766c9ac6d3af6d493.jpg'),
          content: 'Top 6 Material Design Dashboards',
          time: '21h ago'
        },
        {
          id: 1,
          img: require('../assets/images/blog/1aed359dff137276d5a20b9a6eccd745.jpg'),
          content: '10 HTML5 Hacks Every Web Developer Should Know',
          time: '42h ago'
        },
        {
          id: 2,
          img: require('../assets/images/blog/a154a23ec4796e6d73ce2f429a81da35.jpg'),
          content: '7 libraries to build Node.js CLI',
          time: '20h ago'
        },
        {
          id: 3,
          img: require('../assets/images/blog/4a5a6aeb958c7b1aff492a1fde7e2329.jpg'),
          content: 'Building a UI Component Library for Your Startup',
          time: '16h ago'
        },
        {
          id: 4,
          img: require('../assets/images/blog/e2adcbaab06e219ac7e62f67465d392f.jpg'),
          content: 'Compile-time Immutability in TypeScript',
          time: '9h ago'
        },
        {
          id: 5,
          img: require('../assets/images/blog/1f05cebb756b83d11911925f16393b65.jpg'),
          content: 'Access Control in a React App',
          time: '7h ago'
        },
        {
          id: 6,
          img: require('../assets/images/blog/3777c730d75fb28c1016f0dec0296a43.jpg'),
          content: 'Countdown Timer with React Hooks',
          time: '4h ago'
        },
        {
          id: 7,
          img: require('../assets/images/blog/95f891bc3aa0ec85f157e5481ca9258e.jpg'),
          content: 'Learn Dart (for Flutter) by comparing it to TypeScript',
          time: '30h ago'
        }
      ]
    }
  }
}
</script>

<style module lang="scss">
  .content {
    min-height: calc(100vh - 48px);
    background-color: var(--bg-color-2);
  }
</style>
