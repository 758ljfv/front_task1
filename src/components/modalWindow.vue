<template>
  <div class="b-modal">
    <div class="b-modal__btnBlock">
      <button class="btn-custom b-modal__btn" v-on:click="$emit('close-modal')">X</button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "modalWindow",
}
</script>

<style scoped>
.b-modal{
  width: 500px;
  height: 350px;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 50%;
  position: absolute;
  padding: 20px;
  background-color: #fff;
}
.b-modal .b-main__item{
  width: auto;
}
.b-modal{
  z-index: 100;
}
.b-modal__btnBlock{
  text-align: right;
}
.b-modal__btn{
  padding: 5px;
  font-size: 14px;
}

</style>