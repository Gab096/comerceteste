<style>
@import url("./ShoppingCards.scss");
</style>

<script setup>
import {
  itemProps,
  Modal,
} from './ShoppingCards.ts';
import DetailsShoppingCards from '../DetailsShopingCards/DetailsShoppingCards.vue';
defineProps({
  item: itemProps,
  activeModalId: {
    type: Number,
    required: true,
  },

});
const emit = defineEmits(['open-modal', 'close-modal'])
const openModal = (id) => emit('open-modal', id)
const closeModal = () => emit('close-modal')

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
  <Modal 
  v-if="activeModalId === item.id"
  :show="true" 
  title=""
  @close="closeModal">
    <DetailsShoppingCards :item="item" />
  </Modal>
</template>
