<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'ImageContent',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
img {
  max-width: 40vw;
}
</style>
