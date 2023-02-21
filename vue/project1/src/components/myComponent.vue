<template>
  <p class="pbox">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "myComp",
  props: {},
};
</script>

<style>
.pbox {
  padding: 20px;
  font-size: 18px;
  background: #fc3;
}
</style>
