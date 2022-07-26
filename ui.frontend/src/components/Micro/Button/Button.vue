<template>
  <button :id="idButton">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    idButton: {
      type: String
    }
  }
}

</script>

<style lang="scss" scoped>
#basicButton {
  width: 13.5em;
  height: 4.25em;
  background-color: #333333;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875em;
  color: #FFFFFF;
  margin-top: 2em;
}
</style>
