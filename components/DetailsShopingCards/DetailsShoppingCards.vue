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
import { useLoginModal } from '~/stores/loginModal';

const { addToast } = useToast();

const cartStore = useCartStore();
const session = useSession();
const loginModal = useLoginModal();
const isAuthenticated = computed(() => session.isAuthenticated)
const addToCart = (item) => {
  if(isAuthenticated.value){
    cartStore.addItem(item);
    addToast('adicionado ao carrinho!', 'success');
  }else{
    loginModal.open()
  }
};
</script>

<template>
  <div class="details-shopping-cards-container">
    <img src="../../assets/images/macbook.jpg" alt="imagem item" />
    <div class="description-card">
      <span>
        {{ item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
      </span>
      <span>
        {{ item.category }}
      </span>
      <h6>
        {{ item.name }}
      </h6>
      <p>
        {{ item.description }}
      </p>
      <button @click="addToCart(item)">
        Adicionar item
      </button>
    </div>
  </div>
</template>
