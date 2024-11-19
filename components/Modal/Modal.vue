<script setup>
import { onKeyStroke } from '@vueuse/core';

defineProps({
  show: Boolean,
  title: {
    type: String,
    default: 'Modal Title'
  }
});

const emit = defineEmits(['close']); 

const closeModal = () => {
  emit('close');
};
onKeyStroke('Escape', () =>  closeModal());
</script>

<template>
 <div v-if="show" class="modal-overlay"  @click="closeModal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-content" @click.stop>
    <header class="modal-header">
      <h2 id="modal-title">{{ title }}</h2>
      <button class="close-button" @click="closeModal" aria-label="Close modal">✕</button>
    </header>
    <div class="modal-body">
      <slot />
    </div>
  </div>
</div>
</template>


<style >
@import url("./Modal.scss");
</style>
