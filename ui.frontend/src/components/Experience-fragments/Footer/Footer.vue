<template>
  <footer>
    <Title :idTitle="idFoot" :type="typeFoot" :text="textFoot" :fontFamily="fontFooter" :colorField="colorFooter"/>
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
      default: 'h2'
    },
    fontFooter: {
      type: String,
      default: 'Montserrat'
    },
    colorFooter: {
      type: String,
      default: '#BDBDBD'
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
width: 100vw;
height: 27vh;
display: flex;
justify-content: end;
align-items: center;
flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        height: 12vh;
        font-size: 0.7em;
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
