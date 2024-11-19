import { ref } from 'vue';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}

const toasts = ref<Toast[]>([]);

/**
 * @param message 
 * @param type 
 * @param duration 
 */
const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success', duration: number = 3000): void => {
  const id = Date.now();
  toasts.value.push({ id, message, type, duration });

  setTimeout(() => removeToast(id), duration);
};

/**
 * 
 * @param id 
 */
const removeToast = (id: number): void => {
  toasts.value = toasts.value.filter((toast) => toast.id !== id);
};

export const useToast = () => ({
  toasts,
  addToast,
  removeToast,
});
