<template>
  <div>
    <!-- Button to open the modal -->
    <KButton @click="openModal" theme-color="primary">
      Import Files
    </KButton>

    <!-- Modal containing the upload component -->
    <Modal
      :show="isModalOpen"
      title="Import Files"
      subtitle="Select files to upload"
      @okAction="handleOk"
      @cancelAction="handleCancel"
    >
      <template #content>
        <Upload
          :default-files="[]"
          :batch="false"
          :multiple="true"
          :with-credentials="false"
          :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
          :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
        />
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import Modal from './Modal.vue';

// Reactive state for modal visibility
const isModalOpen = ref(false);

// Function to open the modal
const openModal = () => {
  isModalOpen.value = true;
};

// Handle modal OK action
const handleOk = () => {
  // You can add logic here to process the uploaded files
  console.log('OK clicked - processing files');
  isModalOpen.value = false;
};

// Handle modal cancel action
const handleCancel = () => {
  console.log('Cancel clicked');
  isModalOpen.value = false;
};
</script>
