<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  htmlUrl: {
    type: String,
    required: true,
  },
});

const htmlContent = ref('');

onMounted(async () => {
  const response = await fetch(props.htmlUrl);
  htmlContent.value = await response.text();
});
</script>

<template>
    <div v-html="htmlContent"></div>
</template>
