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
footer{
    width: 100vw;
}
#basicFooter{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
text-align: center;
color: #BDBDBD;
}
</style>
