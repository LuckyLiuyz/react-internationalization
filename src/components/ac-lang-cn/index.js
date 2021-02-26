
import React from "react";
import lang from "ac-lang-cn";
import { docCookies } from "../../common/cookieUtils";

// // 设置cookie，用于intl获取默认语种
docCookies.setItem("locale", "en_US");
const pack = require('./pack.js').default;
console.log('pack', pack);

lang.init(pack, null); // 参数2为localeType，不传递的情况下会从cookie('locale')或者url中 ?locale=***读取
console.log(" ************************多语加载成功!***************************");

let test = lang.template("TEST");
debugger

export default class ACLangCN extends React.Component {

  render() {
    return (
      <section>
        <div>
          测试词条：<span className="red-font">{ lang.template("TEST") }</span>
        </div>
      </section>
    );
  }
}
