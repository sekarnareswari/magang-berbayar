"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/button.tsx":
/*!***************************************!*\
  !*** ./src/app/components/button.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst Button = (param)=>{\n    let { label, targetId, link, type } = param;\n    const handleClick = ()=>{\n        if (type === \"scroll\" && targetId) {\n            var _document_getElementById;\n            (_document_getElementById = document.getElementById(targetId)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    if (type === \"link\" && link) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: link,\n            className: \"bg-mb-green-100 hover:bg-mb-green-200 text-white font-medium px-6 py-3 rounded-full\",\n            children: label\n        }, void 0, false, {\n            fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/components/button.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"bg-mb-green-100 hover:bg-mb-green-200 text-white font-medium px-6 py-3 rounded-full\",\n        children: label\n    }, void 0, false, {\n        fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/components/button.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRTBCO0FBUzFCLE1BQU1DLFNBQWdDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQ2xFLE1BQU1DLGNBQWM7UUFDaEIsSUFBSUQsU0FBUyxZQUFZRixVQUFVO2dCQUMvQkk7YUFBQUEsMkJBQUFBLFNBQVNDLGNBQWMsQ0FBQ0wsdUJBQXhCSSwrQ0FBQUEseUJBQW1DRSxjQUFjLENBQUM7Z0JBQzlDQyxVQUFVO1lBQ2Q7UUFDSjtJQUNKO0lBRUEsSUFBSUwsU0FBUyxVQUFVRCxNQUFNO1FBQ3pCLHFCQUNJLDhEQUFDTztZQUNHQyxNQUFNUjtZQUNOUyxXQUFVO3NCQUVUWDs7Ozs7O0lBR2I7SUFFQSxxQkFDSSw4REFBQ1k7UUFDR0MsU0FBU1Q7UUFDVE8sV0FBVTtrQkFFVFg7Ozs7OztBQUdiO0tBNUJNRDtBQThCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uLnRzeD82YWNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0YXJnZXRJZD86IHN0cmluZzsgLy8gRm9yIHNjcm9sbCBidXR0b25zXG4gICAgbGluaz86IHN0cmluZzsgLy8gRm9yIHJlZ3VsYXIgYnV0dG9uc1xuICAgIHR5cGU6IFwic2Nyb2xsXCIgfCBcImxpbmtcIjsgLy8gVHlwZSBvZiB0aGUgYnV0dG9uXG59XG5cbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHsgbGFiZWwsIHRhcmdldElkLCBsaW5rLCB0eXBlIH0pID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2Nyb2xsXCIgJiYgdGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKT8uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHR5cGUgPT09IFwibGlua1wiICYmIGxpbmspIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tYi1ncmVlbi0xMDAgaG92ZXI6YmctbWItZ3JlZW4tMjAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHgtNiBweS0zIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbWItZ3JlZW4tMTAwIGhvdmVyOmJnLW1iLWdyZWVuLTIwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHB4LTYgcHktMyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJsYWJlbCIsInRhcmdldElkIiwibGluayIsInR5cGUiLCJoYW5kbGVDbGljayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/button.tsx\n"));

/***/ })

});