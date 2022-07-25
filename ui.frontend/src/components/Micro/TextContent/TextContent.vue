<template>
  <p id="idText">{{ text }}</p>
</template>

<script>
export default {
  name: "TextContent",
  props: {
    text: {
      type: String,
      default: ""
    },
    idText: {
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
#basicText {
  font-family: 'Space Mono';
  font-weight: 400;
  font-size: 1.5em;
  color: #4F4F4F;
}
</style>