<template>
  <div>
    <LocalizationProvider :language="userLanguage">
      <IntlProvider :locale="userLocale">
        <ChangeLang @languageChanged="onLanguageChange" />
        <ImportFiles />
        <InfoBlock :localeInfo="localeInfo" />
      </IntlProvider>
    </LocalizationProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ImportFiles from './Components/ImportFiles.vue';
import ChangeLang from './Components/ChangeLang.vue';
import InfoBlock from './Components/InfoBlock.vue';
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from '@progress/kendo-vue-intl';
import { getMessages } from './fetchTranslations';

const defaultLanguage = ref('en');

const userLanguage = ref('');
const userLocale = ref('');
const localeInfo = computed(() => getMessages(defaultLanguage.value));

const setLanguage = (code: string = '') => {
  const { messages, locale, language } = getMessages(code);
  userLocale.value = locale;
  userLanguage.value = language;
  loadMessages(messages, language);
};

// Handle language change from ChangeLang component
const onLanguageChange = (newLanguage: string) => {
  defaultLanguage.value = newLanguage;
  setLanguage(newLanguage);
};

// Initialize with default language
setLanguage(defaultLanguage.value);
</script>

