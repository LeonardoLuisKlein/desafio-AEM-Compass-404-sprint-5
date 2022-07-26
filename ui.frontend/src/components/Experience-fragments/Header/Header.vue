<template>
  <header>
    <Title :idTitle="idHead" :type="typeHead" :text="textHead" />
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
    }
  }
}
</script>

<style scoped>
header {
  width: 100vw;
}

#basicHeader {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  color: #333333;
}
</style>
