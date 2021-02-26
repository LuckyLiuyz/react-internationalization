import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./en.json";
import zh from "./zh.json";
import { docCookies } from "../../common/cookieUtils";

// // 设置cookie，用于intl获取默认语种
const lng = docCookies.getItem("locale");
console.log('lng', lng);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en_US: {
        translation: en
      },
      zh_CN: {
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
      <br />
      <h1>方案一：react-i18next</h1>
      <h3></h3>
      <div>
        测试词条：<span className="red-font">{ t("Welcome") }</span>
      </div>
    </div>
  );
}

export default I18nextCom;
