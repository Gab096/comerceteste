<style>
@import url("./AppHeader.scss");
</style>

<script setup>
import Cart from '../Cart/Cart.vue';
import { useCartStore } from '~/stores/cart';
import { useSession } from '~/stores/session';
import Login from '../Login/Login.vue';
const cartStore = useCartStore();
const sessionStore = useSession();
const cartItemsCount = computed(() => cartStore.itemCount)
const isAuthenticated = computed(() => sessionStore.isAuthenticated)

const isModalOpen = ref(false);
const isLoginModalOpen = ref(false);

const openCartModal = () => {
  isModalOpen.value = true;
};

const closeCartModal = () => {
  isModalOpen.value = false;
};
const openLoginModal = () => {
  isLoginModalOpen.value = true;
};

const closeLoginModal = () => {
  isLoginModalOpen.value = false;
};
const closeSession = () => {
  sessionStore.logout()
};

const router = useRouter()
const goTo = (path) => {
  router.push({ path: path })
};

</script>


<template>
  <header class="header-app">
    <div class="header-container">
      <div class="header-logo" @click="goTo('/')">
        techno
      </div>
      <div v-if="isAuthenticated">
        <div class="header-menu">
          <div class="header-balance">
            R$ 10.000,00
          </div>
        <div class="vertical-divider-primary" />
        <div class="header-market">
          <div>
            <span class="count">
              {{ cartItemsCount }}
            </span>
            <button class="header-cart-button" @click="openCartModal">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </button>
          </div>
          <button class="header-cart-button" @click="closeSession">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          </button>
        </div>
        <Modal :show="isModalOpen" title="Carrinho" @close="closeCartModal">
          <Cart />
        </Modal>
      </div>
      </div>
      <div v-else>
        <button class="header-login-button" @click="openLoginModal">
          <font-awesome-icon :icon="['fa', 'circle-user']" />
        </button>
        <Modal :show="isLoginModalOpen" title="" @close="closeLoginModal">
          <Login @click-link="closeLoginModal" />
        </Modal>
      </div>
    </div>
  </header>
</template>
