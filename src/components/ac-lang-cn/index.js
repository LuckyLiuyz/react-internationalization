
import React from "react";
import lang from "ac-lang-cn";
import Test from './components/Test';
import { EPMGetLang, EPMGetCurrLang } from '../../common/langUtils';

console.log('1');
let language1 = EPMGetLang();
console.log('2');
let language2 = EPMGetLang('BCS');
console.log('3');


const pack = require('./pack.js').default;
console.log('pack', pack);

lang.init(pack, EPMGetCurrLang()); // 参数2为localeType，不传递的情况下会从cookie('locale')或者url中 ?locale=***读取
console.log(" ************************多语加载成功!***************************");

let test = lang.template("TEST");

export default class ACLangCN extends React.Component {

  render() {
    return (
      <section>
        <br />
        <br />
        <h1>方案三：ac-lang-cn</h1>
        <h3>用友体系内封装的多语控件。 </h3>
        <div>
          测试词条：<span className="red-font">{ lang.template("TEST") }</span>
        </div>
        <Test />
      </section>
    );
  }
}
