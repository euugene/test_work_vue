<template>
  <div class='v-menu-element'>
    <a href=""><div class="v-menu-element__item" v-if="category_data.name !== ''"
                                                 @click.prevent="changeMessage"
                                                 >{{category_data.name}}</div></a>
  </div>
</template>

<script>

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
  },
  watch: {},
  mounted () {}
}
</script>

<style lang ='scss'>
</style>
