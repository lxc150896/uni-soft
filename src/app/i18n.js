import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import các tệp JSON chứa nội dung dịch
import enTranslation from './locales/en/common.json';
import viTranslation from './locales/vi/common.json';

// Cấu hình i18next
const savedLanguage = localStorage.getItem('language') || 'en';
i18n
  .use(initReactI18next) // Kết nối i18next với React
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      vi: {
        translation: viTranslation
      },
    },
    lng: savedLanguage, // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // React đã tự động escape các giá trị
    },
  });

export default i18n;
