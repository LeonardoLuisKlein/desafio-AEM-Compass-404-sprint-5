<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
template {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  img {
    width: 40vw;
  }
}
</style>
