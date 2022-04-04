<template>
    <div class="b-main__item ">
      id: {{ id }}, Имя: {{ name }}, Дата рождения: {{ dob }}
    </div>
</template>

<script>
export default {
  name: "list-items",
  props:[
    'id',
    'name',
    'dob'
  ]
}
</script>

<style scoped>

</style>