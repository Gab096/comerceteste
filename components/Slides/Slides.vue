


<script setup>
const containerRef = ref(null)
const slides = [
  {
    image: new URL('@/assets/images/ipad.jpeg', import.meta.url).href,
    alt: "Descrição do slide 1",
  },
  {
    image: new URL('@/assets/images/iphone.jpeg', import.meta.url).href,
    alt: "Descrição do slide 2",
  },
  {
    image: new URL('@/assets/images/macbook.jpg', import.meta.url).href,
    alt: "Descrição do slide 3",
  },
];

const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: false,
    enabled:false
  },
  navigation: false,
});

onMounted(() => {
})
</script>

<template>
  <div class="slider-container">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="my-swiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="slide-image" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>


<style scoped>
  @import url('./Slides.scss');
</style>

