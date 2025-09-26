// Utility to load upload messages and locale info for supported languages

export type UploadMessages = {
  upload: {
    cancel: string;
    clearSelectedFiles: string;
    dropFilesHere: string;
    headerStatusUploaded: string;
    headerStatusUploading: string;
    invalidFileExtension: string;
    invalidFiles: string;
    invalidMaxFileSize: string;
    invalidMinFileSize: string;
    remove: string;
    retry: string;
    select: string;
    statusUploaded: string;
    statusUploadFailed: string;
    uploadSelectedFiles: string;
    total: string;
    files: string;
  };
};

export type LocaleInfo = {
  messages: UploadMessages;
  locale: string; // e.g. 'en-US', 'bg-BG'
  language: string; // e.g. 'en', 'bg'
};

const enMessages: UploadMessages = {
  upload: {
    cancel: 'Cancel',
    clearSelectedFiles: 'Clear',
    dropFilesHere: 'Drop files here to upload',
    headerStatusUploaded: 'Done',
    headerStatusUploading: 'Uploading...',
    invalidFileExtension: 'This file type is not allowed.',
    invalidFiles: 'Invalid files. Please check upload requirements.',
    invalidMaxFileSize: 'File is too large.',
    invalidMinFileSize: 'File is too small.',
    remove: 'Remove',
    retry: 'Retry',
    select: 'Select files...',
    statusUploaded: 'Files uploaded successfully.',
    statusUploadFailed: 'Files failed to upload.',
    uploadSelectedFiles: 'Upload',
    total: 'Total',
    files: 'files',
  },
};

const bgMessages: UploadMessages = {
  upload: {
    cancel: 'Отмени',
    clearSelectedFiles: 'Изчисти',
    dropFilesHere: 'Пусни фаиловете тук за качване',
    headerStatusUploaded: 'Готово',
    headerStatusUploading: 'Качване...',
    invalidFileExtension: 'Този тип фаил не е позволен.',
    invalidFiles: 'Невалидни файлове. Моля проверете изискванията за качване.',
    invalidMaxFileSize: 'Файлът е прекалено голям.',
    invalidMinFileSize: 'Файлът е прекалено малък.',
    remove: 'Премахни',
    retry: 'Опитай отново',
    select: 'Избери файлове...',
    statusUploaded: 'Файловете са успешно качени.',
    statusUploadFailed: 'Файловете не успяха да се качат.',
    uploadSelectedFiles: 'Качи',
    total: 'Общо',
    files: 'файлове',
  },
};

const locales: Record<string, LocaleInfo> = {
  en: {
    messages: enMessages,
    locale: 'en-US',
    language: 'en',
  },
  bg: {
    messages: bgMessages,
    locale: 'bg-BG',
    language: 'bg',
  },
};

export function getMessages(lang: string): LocaleInfo {
  return locales[lang] || locales['en'];
}
