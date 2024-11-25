<script setup lang="ts">
import { useFetch, useRuntimeConfig } from 'nuxt/app';
import { ref } from 'vue';
import { useToast } from '../../composables/useToast';
import { useSession , type IDataToken } from '../../stores/session';

const { addToast } = useToast();
const sessionStore = useSession();
const { public: { apiBase } } = useRuntimeConfig();

const email = ref('');
const password = ref('');

const emit = defineEmits(['click-link']); 

const closeModal = () => {
  emit('click-link');
};

const handleSubmit = async () => {
  try {
    const { data, error } = await useFetch(`${apiBase}/session`, {
      method: 'POST',
      body: { email: email.value, password: password.value },
    });

    if (error.value) {
      addToast('Erro ao fazer login. Verifique suas credenciais.', 'error');
      return;
    }

    sessionStore.authenticate(data.value as IDataToken)
    addToast('Login bem-sucedido', 'success');
  } catch (err) {
    console.error('Erro ao fazer login:', err);
    addToast('Erro inesperado. Tente novamente.', 'error');
  }
};
</script>


<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
      </div>
      <button type="submit" class="btn">Entrar</button>
    </form>
    <NuxtLink @click="closeModal" to="/register">Cadastre-se</NuxtLink>
  </div>
</template>

<style scoped>
@import url('./Login.scss');
</style>
