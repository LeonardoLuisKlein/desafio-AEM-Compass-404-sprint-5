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
  name: 'Title',
  props: {
    text: {
      type: String,
      default: '404 NOT FOUND'
    },
    idTitle: {
      type: String
    },
    type: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#basicTitle {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 4em;
  color: #333333;
  max-width: 35vw;
  text-align: left;
  margin: 0;
}

#headTitle {
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  color: #333333;
}

#footTitle {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #BDBDBD;
}
</style>
