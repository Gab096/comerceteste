<style>
@import url("./Cart.scss");
</style>

<script setup>
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();
const items = computed(() => cartStore.getItems)
const total = computed(() => cartStore.getTotal)

const removeToCart = (item) => {
  cartStore.removeItem(item);
};


import { useToast } from '~/composables/useToast';

const { addToast } = useToast();




const finalizePurchase = async () => {
  try {

    const data = {
      addressId: "1",
      total: total.value,
      products: items.value
    }

    const response = await fetch('http://localhost:3333/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      addToast('Ocorreu um erro !', 'error');
      throw new Error('Erro ao finalizar a compra');
    }

    addToast("compra finalizada com sucesso", 'success');

  } catch (error) {
    console.error(error.message);
    addToast('Ocorreu um erro !', 'error');
  }
};

</script>


<template>
  <div class="cart">
    <div class="cart-items-container">
      <div class="cart-item" v-for="(item, index) in items" :key="item.id" :item="item">
        <p>
          {{ item.name }}
        </p>
        <div class="value-close-container">
          <span>
            {{ item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
          </span>
          <button @click="removeToCart(index)">
            x
          </button>
        </div>
      </div>
      <span class="total-price">
        {{ total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}
      </span>
    </div>
    <button  :disabled="total === 0" @click="finalizePurchase()">
      Finalizar Compra
    </button>
  </div>
</template>
