<template>
  <div class="v-search">
    <p class="v-search-desktop">Поиск по каталогу</p>
    <p class="v-search-mobile">Поиск</p>
    <input class="v-search__text" type="text" v-model="searchValue">
    <button class="v-search__button" @click.prevent="search(searchValue)">Найти</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-search',
  components: {},
  props: {},
  data () {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE',
      'CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX',
      'GET_VALUE_SEARCH'
    ]),
    search (value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value)
    }
  },
  watch: {},
  mounted () {
  }
}
</script>
<style lang='scss'>

</style>
