import { ref, defineAsyncComponent } from 'vue';

export const itemProps = {
  type: Object,
  required: true,
};

export const Modal = defineAsyncComponent(() => import('../Modal/Modal.vue'));




