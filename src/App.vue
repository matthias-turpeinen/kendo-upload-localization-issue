<template>
  <div>
    <LocalizationProvider :language="userLanguage">
      <IntlProvider :locale="userLocale">
        <!-- ImportFiles / -->
        <div>
          <p>Locale: {{ localeInfo.locale }}</p>
          <p>Language: {{ localeInfo.language }}</p>
          <p>Upload Cancel Label: {{ localeInfo.messages.upload.cancel }}</p>
        </div>
      </IntlProvider>
    </LocalizationProvider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImportFiles from './ImportFiles.vue';
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from '@progress/kendo-vue-intl';
import { getMessages, type LocaleInfo } from './fetchTranslations';

const defaultLanguage = 'en';

const userLanguage = ref('');
const userLocale = ref('');
const localeInfo: LocaleInfo = getMessages(defaultLanguage);

const setLanguage = (code: string = '') => {
  const { messages, locale, language } = getMessages(code);
  userLocale.value = locale;
  userLanguage.value = language;
  loadMessages(messages, language);
};

// Initialize with default language
setLanguage(defaultLanguage);
</script>
