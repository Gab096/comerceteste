<script setup>
import AppHeader from './components/AppHeader/AppHeader.vue';
import Footer from './components/Footer/Footer.vue';
import { useToast } from '~/composables/useToast';
import Toast from './components/Toast/Toast.vue';

const { toasts } = useToast();

</script>

<template>
  <div class="app-container">
    <AppHeader/>
    <NuxtPage />
    <Footer />
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
