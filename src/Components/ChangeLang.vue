<template>
    <Chooser
    :value="locale"
    :options="locales"
    label="Select Language"
    @change="onChange"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Chooser from "./Chooser.vue";

interface Emits {
  (e: 'languageChanged', language: string): void;
}

const locale = ref("en");
const locales = ["en", "bg"];
const emit = defineEmits<Emits>();

function onChange(e: any) {
    locale.value = e.value;
    emit('languageChanged', e.value);
}
</script>
