<script setup lang="ts">
import Sidebar from '~/components/Sidebar/Sidebar.vue';
import DetailsShoppingCards from '~/components/DetailsShopingCards/DetailsShoppingCards.vue';
const route = useRoute()

const { public: { apiBase } } = useRuntimeConfig();
const search = ref('');
const sliderValue = ref('');

const { data, refresh }:any = useFetch(`${apiBase}/products`, {
  method: 'GET',
  params:{
    search: search,
    category: route.params.id,
    price: sliderValue
  }
});


const items = computed(() => data.value?.data)
const refetchData = () => {
  refresh();
};

</script>

<style>
@import url(./product.scss);
</style>

<template>
  <div class="product-sidebar-container">
    <Sidebar
     @update:search="(newValue) => { search = newValue , refetchData()}"
     @update:sliderValue="(newValue) => { sliderValue = newValue , refetchData()}"
     @refresh="refetchData()"
    />
    <section class="product-container">
      <DetailsShoppingCards 
       v-for="item in items" 
       :key="item.id" 
       :item="item"
       />
    </section>
  </div>
</template>
