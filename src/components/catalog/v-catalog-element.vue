<template>
  <div class="v-catalog-element">
    <img class="v-catalog-element__img" v-bind:src="element_data.image">
    <div class="v-catalog-element__name"><span>Название блюда:</span> <b>{{element_data.name}}</b></div>
    <div class="v-catalog-element__price"><span><b>Цена: {{element_data.price}}</b></span></div>
    <div class="v-catalog-element__consist"><span><b>Ингредиенты:</b> </span>{{element_data.consist}}</div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-element',
  components: {},
  props: {
    element_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  mounted () {}
}
</script>

<style lang = 'scss'>
</style>
