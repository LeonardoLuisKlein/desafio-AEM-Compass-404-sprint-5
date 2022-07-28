<template>
  <footer>
    <Title :idTitle="idFoot" :type="typeFoot" :text="textFoot" />
  </footer>
</template>

<script>
import Title from '../../Micro/Title/Title.vue'

export default {
  name: 'Footer',
  components: {
    Title
  },
  props: {
    textFoot: {
      type: String,
      default: ''
    },
    idFoot: {
      type: String
    },
    typeFoot: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer {
  width: 99vw;
  position: absolute;
  bottom: 0px;
    @media (max-width: 380px) {
    bottom: -10px
  }
}

#basicFooter {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #BDBDBD;
}
</style>
