<template>
  <p :id="idText" :style="{ 'font-family': fontFamily, 'color': colorField, }">{{ text }}</p>
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
    },
    fontFamily: {
      type: String
    },
    colorField: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#basicText {
  font-family: 'Space Mono';
  font-weight: 400;
  font-size: 1.5em;
  color: #4F4F4F;
  max-width: 23vw;
  text-align: left;
  margin-top: 3em;

  @media (max-width: 768px) {
    max-width: 100vw;
    margin-top: 1em;
    font-size: 1.2em;
  }
}
</style>
