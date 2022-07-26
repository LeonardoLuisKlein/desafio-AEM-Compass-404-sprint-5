<template>
  <header>
    <Title idTitle="" type="" text=""/>
  </header>
</template>

<script>
// Imports
import Title from './Micro/Title/Title.vue'

export default {
  name: 'Header',
  components:{
    Title, 
  }
}
</script>

<style scoped>
header {
  width: 100vw;
}
</style>
