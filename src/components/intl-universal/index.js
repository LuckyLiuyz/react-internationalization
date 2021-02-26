import React from "react";
import intl from "react-intl-universal";
import Test from "./components/Test";
import { docCookies } from "../../common/cookieUtils";

// 设置cookie，用于intl获取默认语种
docCookies.setItem("lang", "zh-CN");

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
