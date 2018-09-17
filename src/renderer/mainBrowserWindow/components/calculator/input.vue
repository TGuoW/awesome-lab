<template>
  <div>
    <p>{{inputText}}</p>
  </div>
</template>

<script>
export default {
  props: ['inputText']
  // mounted () {
  //   let url = '/getToDoList'
  //   this.$http(url).then((res) => {
  //     console.log(res)
  //   }).catch((error) => {
  //     console.error(error)
  //   })
  // }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 14%;
    background: rgb(212, 212, 212);
    font-size: 0.5rem;
    position: relative;
  }
  div p {
    width: 100%;
    position: absolute;
    padding: 4px;
    text-align: right;
    right: 0;
    bottom: 0;
  }
</style>
