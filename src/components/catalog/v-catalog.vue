<template>
  <div class='v-catalog' v-if="renderMyComponent">
    <VCatalogElement v-for="element in ELEMENTS.data.results"
                     :key="element.id"
                     v-bind:element_data="element"
                     />
  </div>
</template>

<script>
import VCatalogElement from './v-catalog-element'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    VCatalogElement
  },
  props: {

  },
  data () {
    return {
      renderMyComponent: true
    }
  },
  computed: {
    ...mapGetters([
      'ELEMENTS',
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ELEMENTS_FROM_API',
      'GET_VALUE_SEARCH'
    ]),
    sortProductsBySearchValue (value) {
      this.ELEMENTS.data.results.forEach(element => {
        if (element.name.toLowerCase().includes(value.toLowerCase())) {
          this.GET_VALUE_SEARCH(element)
        }
      })
    }
  },
  watch: {
    SEARCH_VALUE () {
      this.GET_ELEMENTS_FROM_API()
      this.sortProductsBySearchValue(this.SEARCH_VALUE)
    }
  },
  mounted () {
    this.GET_ELEMENTS_FROM_API()
    this.sortProductsBySearchValue(this.SEARCH_VALUE)
  }
}
</script>

<style lang ='scss'>
</style>
