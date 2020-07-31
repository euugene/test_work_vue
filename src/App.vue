<template>
  <div id="app">
    <component :is="layout"  @changeMessage='onChange'>
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import store from './store/index'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  },
  methods: {
    onChange (data) {
      store.currentId = data
    }
  },
  components: {
    MainLayout
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import './assets/style.scss';
  @import './assets/global.scss';
</style>
