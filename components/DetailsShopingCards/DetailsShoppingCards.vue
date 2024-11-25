<style>
  @import url("./DetailsShoppingCards.scss");
</style>

<script setup>

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

import { useCartStore } from '~/stores/cart';
import { useToast } from '~/composables/useToast';
import { useSession } from '~/stores/session';

const { addToast } = useToast();

const cartStore = useCartStore();
const session = useSession();
const isAuthenticated = computed(() => session.isAuthenticated)
const addToCart = (item) => {
  cartStore.addItem(item);
  addToast('adicionado ao carrinho!', 'success');
};
</script>

<template>
  <div class="details-shopping-cards-container" >
    <img src="../../assets/images/macbook.jpg" alt="imagem item" />
    <div class="description-card">
      <span>
        {{ item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}
      </span>
      <h6>
        {{ item.name }}
      </h6>
      <p>
        {{ item.description }}
      </p>
      <button :disabled="isAuthenticated === false" @click="addToCart(item)">
        Adicionar item
      </button>
    </div>
  </div>
</template>
