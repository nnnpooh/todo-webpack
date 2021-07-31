(()=>{"use strict";var __webpack_modules__={426:(module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\r\\n  font-family: Prompt;\\r\\n  padding-left: 50px;\\r\\n  background: #f2f2f2;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  background: white;\\r\\n  padding: 12px;\\r\\n  border-radius: 15px;\\r\\n  width: 250px;\\r\\n  font-size: 16px;\\r\\n  font-family: Prompt;\\r\\n  border: 1px;\\r\\n  border-color: rgb(218, 218, 218);\\r\\n  border-style: solid;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: #289ebb;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  padding: 15px 25px;\\r\\n  text-align: center;\\r\\n  font-size: 14px;\\r\\n  font-family: Prompt;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: #1b7085;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-top: 10px;\\r\\n  background: white;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 50%;\\r\\n  border-color: rgb(219, 219, 219);\\r\\n  border-style: solid;\\r\\n  border-width: 1px;\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  background-color: rgb(218, 218, 218);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding-left: 0px;\\r\\n}\\r\\n.active {\\r\\n  color: rgb(39, 39, 39);\\r\\n}\\r\\n\\r\\n.inactive {\\r\\n  color: rgb(182, 182, 182);\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.active:hover,\\r\\n.inactive:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.delete-btn {\\r\\n  padding: 1px 8px;\\r\\n  background-color: rgb(161, 161, 161);\\r\\n  border-radius: 10px;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.delete-btn:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: gray;\\r\\n}\\r\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js')},645:module=>{eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/css-loader/dist/runtime/api.js?')},379:module=>{eval('\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},569:module=>{eval('\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},216:module=>{eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement("style");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},565:(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},795:module=>{eval('\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute("media", media);\n  } else {\n    style.removeAttribute("media");\n  }\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},589:module=>{eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")},987:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(379);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js\nvar styleDomAPI = __webpack_require__(795);\nvar styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js\nvar insertBySelector = __webpack_require__(569);\nvar insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\nvar setAttributesWithoutAttributes = __webpack_require__(565);\nvar setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js\nvar insertStyleElement = __webpack_require__(216);\nvar insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js\nvar styleTagTransform = __webpack_require__(589);\nvar styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css\nvar style = __webpack_require__(426);\n;// CONCATENATED MODULE: ./src/style.css\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (styleTagTransform_default());\noptions.setAttributes = (setAttributesWithoutAttributes_default());\n\n      options.insert = insertBySelector_default().bind(null, \"head\");\n    \noptions.domAPI = (styleDomAPI_default());\noptions.insertStyleElement = (insertStyleElement_default());\n\nvar update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);\n\n\n\n\n       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);\n\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\nlet data = [];\r\nlet inputText = '';\r\n\r\nconst listElement = document.getElementById('todo-list');\r\nconst inputElement = document.getElementById('todo-input');\r\nconst btnElement = document.getElementById('todo-btn');\r\n\r\ninputElement.addEventListener('input', (e) => {\r\n  inputText = e.target.value;\r\n});\r\n\r\ninputElement.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    addData();\r\n  }\r\n});\r\nbtnElement.addEventListener('click', addData);\r\n\r\nfunction addData() {\r\n  if (inputText) {\r\n    data.push({\r\n      title: inputText,\r\n      id: Math.floor(Math.random() * 10000),\r\n      active: true,\r\n    });\r\n    inputElement.value = '';\r\n    inputText = '';\r\n    renderList();\r\n  }\r\n}\r\n\r\nfunction renderList() {\r\n  while (listElement.firstChild) {\r\n    listElement.removeChild(listElement.lastChild);\r\n  }\r\n\r\n  data.forEach((el) => {\r\n    const itemElement = document.createElement('li');\r\n    const textClass = el.active ? 'active' : 'inactive';\r\n    const textElement = document.createElement('div');\r\n    const delElement = document.createElement('div');\r\n    textElement.classList.add(textClass);\r\n    textElement.innerHTML = el.title;\r\n    delElement.classList.add('delete-btn');\r\n    delElement.innerHTML = 'x';\r\n    itemElement.appendChild(textElement);\r\n    itemElement.appendChild(delElement);\r\n    listElement.appendChild(itemElement);\r\n\r\n    textElement.addEventListener('click', (e) => {\r\n      toggleActive(el.id);\r\n    });\r\n\r\n    delElement.addEventListener('click', () => {\r\n      deleteItem(el.id);\r\n    });\r\n  });\r\n}\r\n\r\nfunction toggleActive(id) {\r\n  const idx = data.findIndex((el) => el.id == id);\r\n  console.log(id, idx);\r\n  if (idx > -1) {\r\n    data[idx] = { ...data[idx], active: !data[idx].active };\r\n  }\r\n  renderList();\r\n}\r\n\r\nfunction deleteItem(id) {\r\n  data = data.filter((el) => el.id != id);\r\n  renderList();\r\n}\r\n\n\n//# sourceURL=webpack://todo-app-webpack/./src/index.js_+_1_modules?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var __webpack_exports__=__webpack_require__(987)})();