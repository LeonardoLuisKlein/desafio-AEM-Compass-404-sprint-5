<template>
  <div id="image-container">
  <img :src="src" />
  </div>
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
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0 auto
}
  img {
    width: 50vw;
    max-height: 40vh;
    margin-top: 16em;
  }

</style>
