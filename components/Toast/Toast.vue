  <style  scoped>
  @import url("./Toast.scss");
</style>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'success',
  },
  duration: {
    type: Number,
    default: 3000,
  }
});

const visible = ref(true);

const closeToast = () => {
  visible.value = false;
};

setTimeout(closeToast, props.duration);
</script>


<template>
  <div v-if="visible" class="toast" :class="type">
    <p>{{ message }}</p>
    <button class="close-btn" @click="closeToast">x</button>
  </div>
</template>

