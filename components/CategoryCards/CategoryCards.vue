<style>
@import url("./CategoryCards.scss");
</style>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <NuxtLink :to="`/product/${item.name}`" class="shopping-cards-container">
    <img :src="item.imagePath" alt="imagem item" />
    <div class="description-card">
      <p>
        {{ item.name }}
      </p>
    </div>
  </NuxtLink>
</template>
