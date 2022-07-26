<template>
  <p :id="idText">{{ text }}</p>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      default: ''
    },
    idText: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

#basicText {
  font-family: 'Space Mono';
  font-weight: 400;
  font-size: 1.5em;
  color: #4F4F4F;
  width: 23em;
  margin-top: 2em;
}
#basicRedText {
  font-family: 'Space Mono';
  font-weight: 400;
  font-size: 1.5em;
  color: red;
}
</style>
