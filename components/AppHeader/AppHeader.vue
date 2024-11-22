<style>
  @import url("./AppHeader.scss");
</style>

<script setup>
import Cart from '../Cart/Cart.vue';
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();
const cartItemsCount = computed(() => cartStore.itemCount)

 const isModalOpen = ref(false);

 const openModal = () => {
  isModalOpen.value = true;
};

 const closeModal = () => {
  isModalOpen.value = false;
};

const router = useRouter()
const goTo = (path) => {
  router.push({ path: path })
};

</script>


<template>
  <header class="header-app" >
    <div class="header-container">
      <div class="header-logo" @click="goTo('/')">
        techno
      </div>
      <div class="header-menu">
        <div class="header-balance">
            R$ 10.000,00
        </div>
        <div class="vertical-divider-primary" />
        <div class="header-market">
          <span class="count">
            {{ cartItemsCount }}
          </span>
          <button class="header-cart-button" @click="openModal">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </button>
        </div>
        <Modal 
          :show="isModalOpen" 
          title="Carrinho"
          @close="closeModal">
          <Cart />
      </Modal>
      </div>
    </div>
  </header>
</template>
