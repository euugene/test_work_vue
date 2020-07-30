<template>
  <div class='v-catalog'>
    <VCatalogElement v-for="element in ELEMENTS.data.results"
                     :key="element.message"
                     v-bind:element_data="element"/>
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
    return {}
  },
  computed: {
    ...mapGetters([
      'ELEMENTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ELEMENTS_FROM_API'
    ])
  },
  watch: {},
  mounted () {
    // this.GET_ELEMENTS_FROM_API()
  }
}
</script>

<style lang ='scss'>
</style>
