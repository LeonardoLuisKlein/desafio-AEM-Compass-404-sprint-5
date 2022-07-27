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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
}

#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}
  img {
    width: 50vw;
    max-height: 50vh;
    margin-top: 10em;
    @media (max-width: 768px) {
      width: 99vw;
      margin-top: 1em;
      max-height: 30vh;
  }
  }

</style>
