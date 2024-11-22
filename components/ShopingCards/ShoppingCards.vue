<style>
@import url("./ShoppingCards.scss");
</style>

<script setup>
defineProps({
  item: {
  type: Object,
  required: true,
},
  activeModalId: {
    type: Number,
    required: true,
  },

});
const emit = defineEmits(['open-modal', 'close-modal'])
const openModal = (id) => emit('open-modal', id)

</script>

<template>
  <div class="shopping-cards-container" @click="openModal(item.id)">
    <img :src="item.imagePath" alt="imagem item" />
    <div class="description-card">
      <span>
        {{ item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
      </span>
      <p>
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
