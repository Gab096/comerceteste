<style>
@import url('./Range.scss');
</style>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  value: {
    type: Number,
    default: 50,
  }
})

const emit = defineEmits(["update:value"]);

const internalValue = ref(props.value);


const handleInput = (event) => {
  internalValue.value = parseFloat(event.target.value);
  emit("update:value", internalValue.value);
};

const progressStyle = computed(() => {
  const percentage = ((internalValue.value - props.min) / (props.max - props.min)) * 100;
  return {
    background: `linear-gradient(to right, #747474 ${percentage}%, #ccc ${percentage}%)`,
  };
});
</script>

<template>
  <div class="range-slider">
    <input type="range" :min="min" :max="max" :step="step" v-model="internalValue" :style="progressStyle"
      @input="handleInput" />
  </div>
</template>
