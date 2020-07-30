<template>
  <div class='main-layout' >
    <VSearch/>
    <div class="v-content">
    <VMenu  @changeMessage='onChange'/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import VSearch from './../components/v-search'
import VMenu from './../components/menu/v-menu'

export default {
  name: 'main-layout',
  data: () => ({}),
  components: {
    VSearch,
    VMenu
  },
  methods: {
    onChange (data) {
      this.$emit('changeMessage', data)
    }
  }
}
</script>
