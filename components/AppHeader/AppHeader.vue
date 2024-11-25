<style>
@import url("./AppHeader.scss");
</style>

<script setup>
import Cart from '../Cart/Cart.vue';
import { useCartStore } from '~/stores/cart';
import { useSession } from '~/stores/session';
import { useLoginModal } from '~/stores/loginModal';
import Login from '../Login/Login.vue';
const cartStore = useCartStore();
const sessionStore = useSession();
const loginModal = useLoginModal();
const cartItemsCount = computed(() => cartStore.itemCount)
const isAuthenticated = computed(() => sessionStore.isAuthenticated)
const isLoginModalOpen = computed(() => loginModal.isOpen)

const isModalOpen = ref(false);

const openCartModal = () => {
  isModalOpen.value = true;
};

const closeCartModal = () => {
  isModalOpen.value = false;
};
const openLoginModal = () => {
  loginModal.open()
};

const closeLoginModal = () => {
  loginModal.close()
};
const closeSession = () => {
  sessionStore.logout()
  isModalOpen.value = false;
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
      <div v-if="isAuthenticated" class="auth-div">
        <div class="header-menu">
          <div class="header-balance">
            R$ 10.000,00
          </div>
        <div class="vertical-divider-primary" />
        <div class="header-market">
          <div class="header-count-container">
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
