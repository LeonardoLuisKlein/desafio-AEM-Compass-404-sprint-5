<template>
  <header>
    <Title :idTitle="idHead" :type="typeHead" :text="textHead" :fontFamily="fontHeader" :colorField="colorHeader" />
  </header>
</template>

<script>
// Imports
import Title from '../../Micro/Title/Title.vue'

export default {
  name: 'Header',
  components: {
    Title
  },
  props: {
    textHead: {
      type: String,
      default: ''
    },
    idHead: {
      type: String
    },
    typeHead: {
      type: String,
      default: 'h1'
    },
    fontHeader: {
      type: String,
      default: 'Inconsolata'
    },
    colorHeader: {
      type: String,
      default: '#333333'
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 95vw;
}
</style>
