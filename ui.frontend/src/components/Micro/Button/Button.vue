<template>
  <button :id="idButton" :style="{ 'background-color': buttonColor }">{{ text }}</button>
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
    },
    buttonColor: {
      type: String
    }
  }
}

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

#basicButton {
  width: 13.5em;
  height: 4.25em;
  background-color: #333333;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875em;
  color: #FFFFFF;
  margin-top: 3em;
  border: none;
  cursor: pointer;
  outline: none;

  #basicButton:hover {
    background-color: #414141;
    transition: 0.5s;
    opacity: 1
  }

  @media (max-width: 768px) {
    margin-top: 1em;
  }
}
</style>
