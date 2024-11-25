<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from '~/composables/useToast'; // Adapte para sua implementação
import { useRuntimeConfig } from '#app';
import { useFetch } from '#app';

const { public: { apiBase } } = useRuntimeConfig();
const { addToast } = useToast();

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const zipCode = ref('');
const address = ref('');
const number = ref('');
const city = ref('');
const complement = ref('');
const neighborhood = ref('');
const uf = ref('');

const handleRegister = async () => {
  if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
    addToast('Preencha todos os campos obrigatórios!', 'error');
    return;
  }

  if (password.value !== confirmPassword.value) {
    addToast('As senhas não coincidem!', 'error');
    return;
  }

  try {
    const { error } = await useFetch(`${apiBase}/users`, {
      method: 'POST',
      body: {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        zipCode: zipCode.value,
        address: address.value,
        number: number.value,
        city: city.value,
        complement: complement.value,
        neighborhood: neighborhood.value,
        uf: uf.value,
      },
    });

    if (error.value) {
      addToast('Erro ao registrar. Tente novamente.', 'error');
      return;
    }

    addToast('Registro realizado com sucesso!', 'success');
  } catch (err) {
    console.error('Erro ao registrar:', err);
    addToast('Erro inesperado. Tente novamente.', 'error');
  }
};
</script>

<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister" class="register-form">
      <h2>Registro</h2>
      
      <div class="form-group">
        <label for="fullName">Nome Completo</label>
        <input type="text" id="fullName" v-model="fullName" placeholder="Digite seu nome completo" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmar Senha</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirme sua senha" required />
      </div>

      <div class="form-group">
        <label for="zipCode">CEP</label>
        <input type="text" id="zipCode" v-model="zipCode" placeholder="Digite seu CEP" />
      </div>

      <div class="form-group">
        <label for="address">Endereço</label>
        <input type="text" id="address" v-model="address" placeholder="Digite seu endereço" />
      </div>

      <div class="form-group">
        <label for="number">Número</label>
        <input type="text" id="number" v-model="number" placeholder="Número da residência" />
      </div>

      <div class="form-group">
        <label for="city">Cidade</label>
        <input type="text" id="city" v-model="city" placeholder="Digite sua cidade" />
      </div>

      <div class="form-group">
        <label for="complement">Complemento</label>
        <input type="text" id="complement" v-model="complement" placeholder="Digite o complemento" />
      </div>

      <div class="form-group">
        <label for="neighborhood">Bairro</label>
        <input type="text" id="neighborhood" v-model="neighborhood" placeholder="Digite seu bairro" />
      </div>

      <div class="form-group">
        <label for="uf">Estado (UF)</label>
        <input type="text" id="uf" v-model="uf" placeholder="Digite seu estado (UF)" />
      </div>

      <button type="submit" class="btn">Registrar</button>
    </form>
  </div>
</template>

<style scoped>
@import url('./Register.scss');
</style>
