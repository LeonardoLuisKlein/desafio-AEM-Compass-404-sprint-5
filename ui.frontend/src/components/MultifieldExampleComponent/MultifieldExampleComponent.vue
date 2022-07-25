<template>
  <div>
    <div v-for="item in items" :key="item">
      <input :type="item.type" />
      <img :src="item.image.src" alt="Selectable Image from AEM Dialog" />
    </div>
  </div>
</template>

<script>
// Imports

export default {
  name: 'MultifieldExampleComponent',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
