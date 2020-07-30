<template>
  <div class='v-menu-element'>
    <a href=""><div class="v-menu-element__item" v-if="category_data.name !== ''"
                                                 @click.prevent="changeMessage"
                                                 >{{category_data.name}}</div></a>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  name: 'v-menu-element',
  props: {
    category_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      currentId: this.category_data.id
    }
  },
  computed: {},
  methods: {
    changeMessage () {
      this.$emit('changeMessage', this.category_data.id)
    }
    // ...mapActions([
    //   'GET_ID_IN_STATE'
    // ])
  },
  watch: {},
  mounted () {
    // this.GET_ID_IN_STATE('4445')
  }
}
</script>

<style lang ='scss'>
</style>
