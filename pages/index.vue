<script setup>
import CategoryCards from '../components/CategoryCards/CategoryCards.vue';
const items = [
  { 
    name: 'laptop',
    imagePath: new URL('@/assets/images/macbook.jpg', import.meta.url).href,
  },
  { 
    name: 'cellphone',
    imagePath: new URL('@/assets/images/iphone.jpeg', import.meta.url).href,
  },
  {
    name: 'tablet',
    imagePath: new URL('@/assets/images/ipad.jpeg', import.meta.url).href,
  },
];

</script>

<template>
    <Main class="main-container">
      <Slides />
      <CategoryCards
       v-for="item in items" 
       :key="item.id" 
       :item="item"
       />
    </Main>
</template>
