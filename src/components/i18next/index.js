import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./en.json";
import zh from "./zh.json";

const lng = "zh";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    },
    lng,
    fallbackLng: lng,

    interpolation: {
      escapeValue: false
    }
  });

function I18nextCom() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div>
        测试词条：<span className="red-font">{t("Welcome")}</span>
      </div>
    </div>
  );
}

export default I18nextCom;
