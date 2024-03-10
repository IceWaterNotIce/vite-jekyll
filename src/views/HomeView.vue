<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import image_gallery from '../includes/image_gallery.html?raw'
</script>

<template>
  <main>
    <TheWelcome />
    <div v-html="image_gallery"></div>
  </main>
</template>
