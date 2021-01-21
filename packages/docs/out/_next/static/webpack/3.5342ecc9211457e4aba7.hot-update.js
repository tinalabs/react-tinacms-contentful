webpackHotUpdate_N_E(3,{

/***/ "./content/3-editing-entries.mdx":
/*!***************************************!*\
  !*** ./content/3-editing-entries.mdx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"../../node_modules/@mdx-js/react/dist/esm.js\");\n\n\nvar _jsxFileName = \"/Users/christophermacrae/Code/tinalabs/react-tinacms-contentful/packages/docs/content/3-editing-entries.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"Editing Entries\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, \"In this guide, we'll cover how to edit entries with \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 64\n    }\n  }, \"react-tinacms-contentful\"), \".\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"Editing A Single Entry\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, \"Editing a single entry can be done via the \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 55\n    }\n  }, \"useContentfulEntryForm\"), \" hook.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, \"Fetch an entry and pass it to \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 42\n    }\n  }, \"useContentfulEntryForm\"), \", and you will receive a \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 137\n    }\n  }, \"modifiedEntry\"), \" and \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 203\n    }\n  }, \"form\"), \" object.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 10\n    }\n  }), \"export function Page() {\\n  const [entry, loading, error] = useContentfulEntry(entryId);\\n  const [modifiedEntry, form] = useContentfulEntryForm(entry);\\n\\n  if (error) {\\n    return <div>Error: {error.message}</div>\\n  }\\n\\n  return (\\n    <main>\\n      {loading && \\\"Loading...\\\"}\\n      {entry && entry.fields.title}\\n    </main>\\n  )\\n}\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"table\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"thead\", {\n    parentName: \"table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"tr\", {\n    parentName: \"thead\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), \"name\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }), \"description\"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"tbody\", {\n    parentName: \"table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"tr\", {\n    parentName: \"tbody\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"td\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 14\n    }\n  }, \"modifiedEntry\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }), \"The entry data returned from the form, to re-render the page with draft form data\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"tr\", {\n    parentName: \"tbody\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"td\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 14\n    }\n  }, \"form\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"tr\"\n  }, {\n    \"align\": null\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }), \"A TinaCMS \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"td\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 28\n    }\n  }, \"Form\"), \" object to be used with \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"td\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 105\n    }\n  }, \"usePlugin\"), \" or \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"td\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 167\n    }\n  }, \"InlineForm\"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, \"You can also pass \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://tina.io/docs/plugins/forms/#form-configuration\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 30\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"a\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 10\n    }\n  }, \"FormOptions\")), \" to the hook to further customize the form:\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-diff\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 10\n    }\n  }), \"export function Page() {\\n  const [entry, loading, error] = useContentfulEntry(entryId);\\n-  const [modifiedEntry, form] = useContentfulEntryForm(entry);\\n+  const [modifiedEntry, form] = useContentfulEntryForm(entry, {\\n+    id: \\\"page\\\",\\n+    onChange: (values) => console.log(values)\\n+  });\\n\\n  if (error) {\\n    return <div>Error: {error.message}</div>\\n  }\\n\\n  return (\\n    <main>\\n      {loading && \\\"Loading...\\\"}\\n      {entry && entry.fields.title}\\n    </main>\\n  )\\n}\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, \"Finally, you can also create a custom form altogether if you need full control:\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 10\n    }\n  }), \"export function Page() {\\n  const contentful = useContentful();\\n  const [entry, loading, error] = useContentfulEntry(entryId);\\n  const [modifiedEntry, form] = useForm({\\n    id: \\\"page\\\",\\n    onChange: (values) => console.log(values),\\n    onSubmit: (values) => contentful.updateEntry(entryId, values)\\n  });\\n\\n  if (error) {\\n    return <div>Error: {error.message}</div>\\n  }\\n\\n  return (\\n    <main>\\n      {loading && \\\"Loading...\\\"}\\n      {entry && entry.fields.title}\\n    </main>\\n  )\\n}\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, \"Pro Tips\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, \"See the \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://tina.io/docs/plugins/forms/\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 46\n    }\n  }), \"TinaCMS form documentation for more info\"), \".\\nSee the API documentation for \", \"[\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 38\n    }\n  }, \"useContentful\"), \"]\", \" and \", \"[\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 114\n    }\n  }, \"useContentfulEntry\"), \"]\", \".\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 5\n    }\n  }, \"FAQs\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ol\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ol\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }\n  }, \"What happens on write?\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"blockquote\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, \"That depends. If you're looking to write back a single entry, then write back updates only the fields on that entry, and none of its relationships.\\nHowever, if you're looking to update an entry and its children, then see \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"p\"\n  }, {\n    \"href\": \"#editing-nested-referenced-entries\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 76\n    }\n  }), \"Editing Nested & Referenced Entries\")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ol\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }\n  }, \"What happens to references?\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 11\n    }\n  }, \"see \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"li\"\n  }, {\n    \"href\": \"#editing-nested-referenced-entries\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 39\n    }\n  }), \"Editing Nested & Referenced Entries\")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ol\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 5\n    }\n  }, \"Editing Nested & Referenced Entries\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }\n  }, \"explain useContentfulEntryForm with { references: true }\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, \"explain cms.api.updateEntry\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, \"expain cms.api.updateEntries\")));\n}\n_c = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c;\n\n$RefreshReg$(_c, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGVudC8zLWVkaXRpbmctZW50cmllcy5tZHg/YWE3ZSJdLCJuYW1lcyI6WyJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBR0EsSUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZLLEVBR0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFBMkQ7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBM0QsTUFISyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUFrRDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFsRCxXQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBcUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFB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QVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL2NvbnRlbnQvMy1lZGl0aW5nLWVudHJpZXMubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuXG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cbiAgICA8aDE+e2BFZGl0aW5nIEVudHJpZXNgfTwvaDE+XG4gICAgPGhyPjwvaHI+XG4gICAgPHA+e2BJbiB0aGlzIGd1aWRlLCB3ZSdsbCBjb3ZlciBob3cgdG8gZWRpdCBlbnRyaWVzIHdpdGggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVhY3QtdGluYWNtcy1jb250ZW50ZnVsYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPGgyPntgRWRpdGluZyBBIFNpbmdsZSBFbnRyeWB9PC9oMj5cbiAgICA8cD57YEVkaXRpbmcgYSBzaW5nbGUgZW50cnkgY2FuIGJlIGRvbmUgdmlhIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1c2VDb250ZW50ZnVsRW50cnlGb3JtYH08L2lubGluZUNvZGU+e2AgaG9vay5gfTwvcD5cbiAgICA8cD57YEZldGNoIGFuIGVudHJ5IGFuZCBwYXNzIGl0IHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHVzZUNvbnRlbnRmdWxFbnRyeUZvcm1gfTwvaW5saW5lQ29kZT57YCwgYW5kIHlvdSB3aWxsIHJlY2VpdmUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Btb2RpZmllZEVudHJ5YH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGZvcm1gfTwvaW5saW5lQ29kZT57YCBvYmplY3QuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLnt9fT57YGV4cG9ydCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbZW50cnksIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbnRlbnRmdWxFbnRyeShlbnRyeUlkKTtcbiAgY29uc3QgW21vZGlmaWVkRW50cnksIGZvcm1dID0gdXNlQ29udGVudGZ1bEVudHJ5Rm9ybShlbnRyeSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIHtsb2FkaW5nICYmIFwiTG9hZGluZy4uLlwifVxuICAgICAge2VudHJ5ICYmIGVudHJ5LmZpZWxkcy50aXRsZX1cbiAgICA8L21haW4+XG4gIClcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDx0YWJsZT5cbiAgICAgIDx0aGVhZCBwYXJlbnROYW1lPVwidGFibGVcIj5cbiAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0aGVhZFwiPlxuICAgICAgICAgIDx0aCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BuYW1lYH08L3RoPlxuICAgICAgICAgIDx0aCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BkZXNjcmlwdGlvbmB9PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgcGFyZW50TmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgbW9kaWZpZWRFbnRyeWB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YFRoZSBlbnRyeSBkYXRhIHJldHVybmVkIGZyb20gdGhlIGZvcm0sIHRvIHJlLXJlbmRlciB0aGUgcGFnZSB3aXRoIGRyYWZ0IGZvcm0gZGF0YWB9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2Bmb3JtYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgQSBUaW5hQ01TIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2BGb3JtYH08L2lubGluZUNvZGU+e2Agb2JqZWN0IHRvIGJlIHVzZWQgd2l0aCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgdXNlUGx1Z2luYH08L2lubGluZUNvZGU+e2Agb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YElubGluZUZvcm1gfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDxwPntgWW91IGNhbiBhbHNvIHBhc3MgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vdGluYS5pby9kb2NzL3BsdWdpbnMvZm9ybXMvI2Zvcm0tY29uZmlndXJhdGlvblwiXG4gICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgRm9ybU9wdGlvbnNgfTwvaW5saW5lQ29kZT48L2E+e2AgdG8gdGhlIGhvb2sgdG8gZnVydGhlciBjdXN0b21pemUgdGhlIGZvcm06YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1kaWZmXCJcbiAgICAgIH19PntgZXhwb3J0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtlbnRyeSwgbG9hZGluZywgZXJyb3JdID0gdXNlQ29udGVudGZ1bEVudHJ5KGVudHJ5SWQpO1xuLSAgY29uc3QgW21vZGlmaWVkRW50cnksIGZvcm1dID0gdXNlQ29udGVudGZ1bEVudHJ5Rm9ybShlbnRyeSk7XG4rICBjb25zdCBbbW9kaWZpZWRFbnRyeSwgZm9ybV0gPSB1c2VDb250ZW50ZnVsRW50cnlGb3JtKGVudHJ5LCB7XG4rICAgIGlkOiBcInBhZ2VcIixcbisgICAgb25DaGFuZ2U6ICh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcylcbisgIH0pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7bG9hZGluZyAmJiBcIkxvYWRpbmcuLi5cIn1cbiAgICAgIHtlbnRyeSAmJiBlbnRyeS5maWVsZHMudGl0bGV9XG4gICAgPC9tYWluPlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZpbmFsbHksIHlvdSBjYW4gYWxzbyBjcmVhdGUgYSBjdXN0b20gZm9ybSBhbHRvZ2V0aGVyIGlmIHlvdSBuZWVkIGZ1bGwgY29udHJvbDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgZXhwb3J0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRmdWwgPSB1c2VDb250ZW50ZnVsKCk7XG4gIGNvbnN0IFtlbnRyeSwgbG9hZGluZywgZXJyb3JdID0gdXNlQ29udGVudGZ1bEVudHJ5KGVudHJ5SWQpO1xuICBjb25zdCBbbW9kaWZpZWRFbnRyeSwgZm9ybV0gPSB1c2VGb3JtKHtcbiAgICBpZDogXCJwYWdlXCIsXG4gICAgb25DaGFuZ2U6ICh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyksXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IGNvbnRlbnRmdWwudXBkYXRlRW50cnkoZW50cnlJZCwgdmFsdWVzKVxuICB9KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge2xvYWRpbmcgJiYgXCJMb2FkaW5nLi4uXCJ9XG4gICAgICB7ZW50cnkgJiYgZW50cnkuZmllbGRzLnRpdGxlfVxuICAgIDwvbWFpbj5cbiAgKVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGJsb2NrcXVvdGU+XG4gICAgICA8aDMgcGFyZW50TmFtZT1cImJsb2NrcXVvdGVcIj57YFBybyBUaXBzYH08L2gzPlxuICAgICAgPHAgcGFyZW50TmFtZT1cImJsb2NrcXVvdGVcIj57YFNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly90aW5hLmlvL2RvY3MvcGx1Z2lucy9mb3Jtcy9cIlxuICAgICAgICB9fT57YFRpbmFDTVMgZm9ybSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9gfTwvYT57YC5cblNlZSB0aGUgQVBJIGRvY3VtZW50YXRpb24gZm9yIGB9e2BbYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlQ29udGVudGZ1bGB9PC9pbmxpbmVDb2RlPntgXWB9e2AgYW5kIGB9e2BbYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlQ29udGVudGZ1bEVudHJ5YH08L2lubGluZUNvZGU+e2BdYH17YC5gfTwvcD5cbiAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPGgzPntgRkFRc2B9PC9oMz5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BXaGF0IGhhcHBlbnMgb24gd3JpdGU/YH1cbiAgICAgICAgPGJsb2NrcXVvdGUgcGFyZW50TmFtZT1cImxpXCI+XG4gICAgICAgICAgPHAgcGFyZW50TmFtZT1cImJsb2NrcXVvdGVcIj57YFRoYXQgZGVwZW5kcy4gSWYgeW91J3JlIGxvb2tpbmcgdG8gd3JpdGUgYmFjayBhIHNpbmdsZSBlbnRyeSwgdGhlbiB3cml0ZSBiYWNrIHVwZGF0ZXMgb25seSB0aGUgZmllbGRzIG9uIHRoYXQgZW50cnksIGFuZCBub25lIG9mIGl0cyByZWxhdGlvbnNoaXBzLlxuSG93ZXZlciwgaWYgeW91J3JlIGxvb2tpbmcgdG8gdXBkYXRlIGFuIGVudHJ5IGFuZCBpdHMgY2hpbGRyZW4sIHRoZW4gc2VlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgICBcImhyZWZcIjogXCIjZWRpdGluZy1uZXN0ZWQtcmVmZXJlbmNlZC1lbnRyaWVzXCJcbiAgICAgICAgICAgIH19PntgRWRpdGluZyBOZXN0ZWQgJiBSZWZlcmVuY2VkIEVudHJpZXNgfTwvYT48L3A+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BXaGF0IGhhcHBlbnMgdG8gcmVmZXJlbmNlcz9gfVxuICAgICAgICA8dWwgcGFyZW50TmFtZT1cImxpXCI+XG4gICAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgc2VlIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICAgICAgXCJocmVmXCI6IFwiI2VkaXRpbmctbmVzdGVkLXJlZmVyZW5jZWQtZW50cmllc1wiXG4gICAgICAgICAgICB9fT57YEVkaXRpbmcgTmVzdGVkICYgUmVmZXJlbmNlZCBFbnRyaWVzYH08L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PC9saT5cbiAgICA8L29sPlxuICAgIDxoMj57YEVkaXRpbmcgTmVzdGVkICYgUmVmZXJlbmNlZCBFbnRyaWVzYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YGV4cGxhaW4gdXNlQ29udGVudGZ1bEVudHJ5Rm9ybSB3aXRoIHsgcmVmZXJlbmNlczogdHJ1ZSB9YH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgZXhwbGFpbiBjbXMuYXBpLnVwZGF0ZUVudHJ5YH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgZXhwYWluIGNtcy5hcGkudXBkYXRlRW50cmllc2B9PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./content/3-editing-entries.mdx\n");

/***/ })

})