<template>
  <img :src="imgSrc" :alt="imgAlt" />
</template>

<script>
export default {
  name: 'ImageContent',
  props: {
    src: {
      type: String
    },
    imgAlt: {
      type: String
    }
  }
}
</script>

<style scoped>
img {
  max-width: 50vw;
}
</style>
