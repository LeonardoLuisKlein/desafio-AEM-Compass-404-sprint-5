<template>
  <div>
    <h1 :id="idTitle" v-if="type === 'h1'">{{ text }}</h1>
    <h2 :id="idTitle" v-else-if="type === 'h2'">{{ text }}</h2>
    <h3 :id="idTitle" v-else-if="type === 'h3'">{{ text }}</h3>
    <h4 :id="idTitle" v-else-if="type === 'h4'">{{ text }}</h4>
    <h5 v-else-if="type === 'h5'">{{ text }}</h5>
    <h6 v-else-if="type === 'h6'">{{ text }}</h6>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      default: ''
    },
    idTitle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
#basicTitle {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  color: #333333;
}
</style>
