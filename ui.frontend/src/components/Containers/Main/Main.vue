<template>
  <main>
    <Title :idTitle="mainTitleId" :type="mainType" :text="mainTitleText" />
    <TextContent :idText="mainId" :text="mainText" />
    <Button :idButton="mainButtonId" :text="mainButtonText" />
  </main>
</template>

<script>
import Title from '../../Micro/Title/Title.vue'
import TextContent from '../../Micro/TextContent/TextContent.vue'
import Button from '../../Micro/Button/Button.vue'

export default {
  name: 'Main',
  components: {
    Title, TextContent, Button
  },
  props: {
    mainTitleId: {
      type: String,
      default: 'basicTitle'
    },
    mainType: {
      type: String,
      default: 'h3'
    },
    mainTitleText: {
      type: String,
      default: 'I have bad news for you'
    },
    mainId: {
      type: String,
      default: 'basicText'
    },
    mainText: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarly unavailable'
    },
    mainButtonId: {
      type: String,
      default: 'basicButton'
    },
    mainButtonText: {
      type: String,
      default: 'BACK TO HOME PAGE'
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
}

main {
  display: flex;
  flex-direction: column;
  width: 49vw;
  margin-top: 10em;
  flex-wrap: wrap;
    @media (max-width: 768px) {
    width: 98%;
    margin-top: 0em;
    margin-left: 0.3em
  }
}
</style>
