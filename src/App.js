
/*
 * @desc 国际化方案，参考：https://g.yuque.com/runarale/gau4ci/zd1n8x
 */

import "./styles.css";
import I18nextCom from "./components/i18next";
import ACLangCN from './components/ac-lang-cn';
import IntlUniversal from "./components/intl-universal";
import { docCookies } from "./common/cookieUtils";

// // 设置cookie，用于intl获取默认语种
docCookies.setItem("locale", "en_US");

export default function App() {

  return (
    <div className="App">
      <I18nextCom />
      <IntlUniversal />
      <ACLangCN />
    </div>
  );
}
