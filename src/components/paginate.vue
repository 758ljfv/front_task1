<template>
  <div class="b-paginate">
    <button v-bind:class="'btn-custom'" :disabled="pageNumber == 0" v-on:click="$emit('prevPage')">Пред.</button>
    <button v-bind:class="'btn-custom'" :disabled="pageNumber >= resultCount-1" v-on:click="$emit('nextPage')">След.</button>
  </div>
</template>

<script>
export default {
  name: "paginate",
  props:[
      'page-number',
      'page-count',
      'resultCount'
  ]
}
</script>

<style scoped>
.b-paginate button {
  font-size: 16px;
  padding: 5px;
  margin: 20px;
}

</style>