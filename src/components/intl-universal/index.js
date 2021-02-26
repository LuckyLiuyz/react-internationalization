import React from "react";
import intl from "react-intl-universal";
import Test from "./components/Test";
import { docCookies } from "../../common/cookieUtils";

// 设置cookie，用于intl获取默认语种
docCookies.setItem("lang", "en-US");

/**
 * 初始化的时候，除了直接指定语言外，还可以由函数determineLocale根据以下配置进行指定：
 * Url中的query参数
 * cookie中的参数
 * 浏览器的当前语言(当没有配置query参数和cookie参数时)
 */
let currentLocale = intl.determineLocale({
  cookieLocaleKey: "lang"
});

// locale data
const locales = {
  "en-US": {
    ...require("./common-en.json"),
    ...require("./universal-en.json")
  },
  "zh-CN": {
    ...require("./common-zh.json"),
    ...require("./universal-zh.json")
  }
};

export default class IntlUniversal extends React.Component {
  state = { initDone: false };

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // react-intl-universal 是单例模式, 只应该实例化一次
    intl
      .init({
        currentLocale,
        locales
      })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  render() {
    if (this.state.initDone) {
      return (
        <section>
          <br />
          <br />
          <h1>方案二：react-intl-universal</h1>
          <h3> 由阿里巴巴推出的react国际化库,这个库最好地方在于使用简单方便，侵入性低。 </h3>
          <p>当前cookie：<span className="red-font">{ docCookies.getItem("lang") }</span></p>
          <div>
            测试词条：<span className="red-font">{ intl.get("SIMPLE") }</span>
            <br />
            测试词条：<span className="red-font">{ intl.get("COMMON") }</span>
          </div>
          <Test />
        </section>
      );
    } else {
      return null;
    }
  }
}
