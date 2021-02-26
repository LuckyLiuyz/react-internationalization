import React from "react";
import intl from "react-intl-universal";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        测试：<span className="red-font">{intl.get("TEST")}</span>
        <br />
      </div>
    );
  }
}
