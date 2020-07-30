<template>
  <div class='v-menu'>
    <div class="v-menu__title">Menu</div>
    <VMenuElement   v-for="category in CATEGORIES.data.results"
                    :key="category.id"
                    @changeMessage='onChange'
                    v-bind:category_data="category"/>
  </div>
</template>

<script>
import VMenuElement from './v-menu-element'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-menu',
  props: {},
  data () {
    return {
      currentNum: ''
    }
  },
  components: {
    VMenuElement
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    onChange (data) {
      this.$emit('changeMessage', data)
      this.currentNum = data
      this.GET_ID_IN_STATE(this.currentNum)
      this.GET_ELEMENTS_FROM_API()
      // console.log(this.currentNum)
    },
    ...mapActions([
      'GET_CATEGORIES_FROM_API',
      'GET_ID_IN_STATE',
      'GET_ELEMENTS_FROM_API'
    ])
  },
  watch: {},
  mounted () {
    this.GET_CATEGORIES_FROM_API()
  }
}
</script>

<style lang ='scss'>
</style>
