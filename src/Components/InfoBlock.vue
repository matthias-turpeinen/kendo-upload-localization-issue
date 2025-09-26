<template>
  <div class="infoBlock">
    <p>Selected locale: {{ localeInfo.locale }}</p>
    <p>Selected language: {{ localeInfo.language }}</p>
  </div>
</template>

<script setup lang="ts">
import type { LocaleInfo } from '../fetchTranslations';

interface Props {
  localeInfo: LocaleInfo;
}

defineProps<Props>();
</script>

<style scoped>
.infoBlock {
  background: #f4f4f4;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>