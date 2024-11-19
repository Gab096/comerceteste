<script setup>
import ShoppingCards from './components/ShopingCards/ShoppingCards.vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import { useToast } from '~/composables/useToast';
import Toast from './components/Toast/Toast.vue';




const { toasts } = useToast();
const items = [
  { 
    id: 1,
    price: 2000,
    name: 'Notebook',
    imagePath: new URL('@/assets/images/macbook.jpg', import.meta.url).href,
    description: "Descrição item 1"
  },
  { id: 2,
    price: 4000,
    name: 'Smartphone',
    imagePath: new URL('@/assets/images/iphone.jpeg', import.meta.url).href,
    description: "Descrição item 2"
  },
  { id: 3,
    price: 6000,
    name: 'Tablet',
    imagePath: new URL('@/assets/images/ipad.jpeg', import.meta.url).href,
    description: "Descrição item 3"
  },
];

const activeModalId = ref(null);

const openModal = (id) => {
  activeModalId.value = id;
};

const closeModal = () => {
  activeModalId.value = null;
};

</script>

<template>
  <div class="app-container">
    <AppHeader/>
    <Main class="main-container">
      <ShoppingCards 
       v-for="item in items" 
       :key="item.id" 
       :item="item"
        :activeModalId="activeModalId"
        @open-modal="openModal"
        @close-modal="closeModal"
       />
    </Main>
    <NuxtPage />
    <div class="toast-container">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :message="toast.message"
        :type="toast.type"
        :duration="toast.duration"
      />
    </div>
  </div>
</template>

<style lang="scss">
.toast-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
