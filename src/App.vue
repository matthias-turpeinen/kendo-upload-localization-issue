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

<script setup>
import { ref } from 'vue';
import ImportFiles from './ImportFiles.vue';
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from '@progress/kendo-vue-intl';
import { getMessages, LocaleInfo } from './fetchTranslations.ts';

const defaultLanguage = 'en';

const userLanguage = ref('');
const userLocale = ref('');
const messages = setLanguage(defaultLanguage);
const localeInfo: LocaleInfo = getMessages(defaultLanguage);

const setLanguage = (code = '') => {
  const { messages, locale, language } = getMessages(code);
  userLocale.value = locale;
  userLanguage.value = language;
  loadMessages(messages, language);
};
</script>
