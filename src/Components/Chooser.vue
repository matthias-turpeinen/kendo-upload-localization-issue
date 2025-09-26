<template>
  <div class="col-xs-12 col-sm-12 example-col">
    <label> {{ label }}: </label>
    <DropDownList
      :style="{ width: '250px', marginLeft: '10px' }"
      :value="value"
      :data-items="options"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { DropDownList } from "@progress/kendo-vue-dropdowns";

interface Props {
    label: string;
    value: string;
    options: string[];
}

interface Emits {
    (e: 'change', event: any): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

function onChange(e: any) {
    emit("change", e);
}
</script>