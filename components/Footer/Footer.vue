<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <h1>Techno</h1>
      </div>

      <nav class="footer__nav">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">Sobre</NuxtLink></li>
          <li><NuxtLink to="/contact">Contato</NuxtLink></li>
        </ul>
      </nav>

      <div class="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook-f"></i>
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>

    <div class="footer__copyright">
      &copy; 2024 techno. Todos os direitos reservados.
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
@import url('./Footer.scss');
</style>
