
<template>
  <Window
    v-if="show"
    ref="windowRef"
    :key="refreshKey"
    :title="title"
    :modal="true"
    :resizable="resizable"
    :width="windowWidth"
    :height="windowHeight"
    :min-width="minimumWidth"
    :min-height="minimumHeight"
    @close="handleClose"
  >
    <template #titleRender>
      <div
        v-if="title"
        class="d-flex flex-row w-100"
      >
        <div class="title-content flex-grow-1">
            {{ title }}
        </div>
      </div>
    </template>
    
    <div ref="windowContent">
      <slot name="content"></slot>
    </div>
    
    <template #actions>
      <DialogActionsBar>
        <KButton
          v-if="showCancelButton"
          fill-mode="outline"
          @click="handleClose"
        >
          {{ localizations.cancel }}
        </KButton>
        <KButton
          v-if="showOkButton"
          @click="handleOk"
        >
          {{ localizations.button_ok }}
        </KButton>
      </DialogActionsBar>
    </template>
  </Window>
</template>

<script setup lang="ts">
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { DialogActionsBar, Window } from '@progress/kendo-vue-dialogs';
import { provide, readonly, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    show?: boolean;
    initialWidth?: number;
    initialHeight?: number;
    minimumWidth?: number;
    minimumHeight?: number;
    showOkButton?: boolean;
    showCancelButton?: boolean;
    autoAdjustSize?: boolean;
    resizable?: boolean;
  }>(),
  {
    show: false,
    initialWidth: 600,
    minimumWidth: 400,
    initialHeight: 600,
    minimumHeight: 150,
    showOkButton: true,
    showCancelButton: true,
    autoAdjustSize: false,
    resizable: true,
  },
);

const emit = defineEmits<{
  cancelAction: [];
  okAction: [];
  resize: [width: number, height: number];
}>();

type KendoWindow = InstanceType<typeof Window>;
const windowRef = ref<KendoWindow | null>(null);
const windowContent = ref<HTMLElement | null>(null);

// Reactive window dimensions
const windowWidth = ref(props.initialWidth);
const windowHeight = ref(props.initialHeight);
const refreshKey = ref(0);

provide('containerType', 'dialog');
provide('containerWidth', readonly(windowWidth));
provide('containerHeight', readonly(windowHeight));

const localizations = {
  cancel: 'Cancel',
  button_ok: 'OK',
};

const toggleDialog = (isOk: boolean) => {
  if (isOk) {
    emit('okAction');
  } else {
    emit('cancelAction');
  }
};

const handleClose = () => toggleDialog(false);
const handleOk = () => toggleDialog(true);
</script>
