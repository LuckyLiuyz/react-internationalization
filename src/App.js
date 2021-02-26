import "./styles.css";
import I18nextCom from "./components/i18next";
import IntlUniversal from "./components/intl-universal";
import ACLangCN from './components/ac-lang-cn';

/*
 * @desc 国际化方案，参考：https://g.yuque.com/runarale/gau4ci/zd1n8x
 */
export default function App() {
  return (
    <div className="App">
      <br />
      <h1>方案一：react-i18next</h1>
      <p></p>
      <I18nextCom />
      <br />
      <br />
      <h1>方案二：react-intl-universal</h1>
      <p>
        由阿里巴巴推出的react国际化库,这个库最好地方在于使用简单方便，侵入性低。
      </p>
      <IntlUniversal />
      <br />
      <h1>方案三：ac-lang-cn</h1>
      <p>
        用友体系内封装的多语控件。
      </p>
      <ACLangCN />
      <br />
    </div>
  );
}
