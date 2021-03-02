
/**
 * @function 获取多语资源
 * @param {*} serviceCode 
 */
export function EPMGetLang(serviceCode) {
  let locales = null;
  if (serviceCode === 'BCS') {
    locales = {
      "enus": {
        ...require("../components/intl-universal/common-en.json"),
        ...require("../components/intl-universal/universal-en.json")
      },
    };
  } else {
    locales = {
      "zhcn": {
        ...require("../components/intl-universal/common-zh.json"),
        ...require("../components/intl-universal/universal-zh.json")
      }
    };
  }
  console.log('getLang');
  return locales;
}

/**
 * @function 获取当前多语类型
 * @param {*} serviceCode 
 */
export function EPMGetCurrLang(serviceCode) {
  return 'zh_CN';
}