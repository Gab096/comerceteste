<style>
@import url("./Sidebar.scss");
</style>

<script setup>
import Range from '../Range/Range.vue';
import { ref } from "vue";

const sliderValue = ref(20000);

const emit = defineEmits(["update:search", "update:sliderValue" , 'refresh']);

const handleUpdateSliderValue = (newValue) => {
  sliderValue.value = newValue
  emit("update:sliderValue", newValue);
}
const handleSearchData = (value) =>{
  emit("update:search", value);
}

const refetchData = () => {
  emit("refresh") 
};
</script>


<template>
  <aside class="sidebar-container">
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Buscar..." @change="(value) => { handleSearchData(value.target.value) }"
        class="search-input" />
      <button class="search-button" @click="refetchData" >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
    <Range :min="0" :max="20000" :step="5" :value="sliderValue" @update:value="(newValue )=>handleUpdateSliderValue(newValue)" />
    <p>Valor máximo: {{ sliderValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</p>
  </aside>
</template>
