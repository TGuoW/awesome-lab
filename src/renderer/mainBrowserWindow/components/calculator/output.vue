<template>
  <div>
    <p>{{outputText[0]}}</p>
    <p>{{outputText[1]}}</p>
  </div>
</template>

<script>
export default {
  props: ['outputText']
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 14%;
    background: rgb(235, 235, 235);
    font-size: 0.4rem;
    position: relative;
  }
  div p {
    /* position: absolute; */
    width: 100%;
    /* padding: 4px; */
    text-align: right;
    right: 0;
    /* bottom: 0; */
  }
</style>
