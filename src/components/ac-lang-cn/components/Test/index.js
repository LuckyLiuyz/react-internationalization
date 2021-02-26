import React from "react";
import lang from "ac-lang-cn";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        测试词条：<span className="red-font">{ lang.template("SINGLETON") }</span>
        <br />
      </div>
    );
  }
}
