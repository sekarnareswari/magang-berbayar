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

/***/ "(app-pages-browser)/./src/app/listings.tsx":
/*!******************************!*\
  !*** ./src/app/listings.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Listings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing */ \"(app-pages-browser)/./src/app/listing.tsx\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container */ \"(app-pages-browser)/./src/app/components/container.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Listings() {\n    _s();\n    const [jobs, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/joblistings.json\").then((response)=>response.json()).then((data)=>setJobs(data)).catch((error)=>console.error(\"Error fetching jobs:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"listings\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: jobs.map((job, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    logo: job.title,\n                    company: job.company,\n                    position: job.title,\n                    location: job.location,\n                    arrangement: job.title,\n                    pay: job.title,\n                    link: job.title\n                }, index, false, {\n                    fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Listings, \"Q0mbvptFv5mszAZqWDb/1cpBDtw=\");\n_c = Listings;\nvar _c;\n$RefreshReg$(_c, \"Listings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlzdGluZ3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1o7QUFDZTtBQVloQyxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFZLEVBQUU7SUFFOUNELGdEQUFTQSxDQUFDO1FBQ05PLE1BQU0scUJBQ0RDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBb0JMLFFBQVFLLE9BQ2xDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7SUFDaEUsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNFO1FBQVFDLElBQUc7a0JBQ1IsNEVBQUNiLDZEQUFTQTtzQkFDTEUsS0FBS1ksR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNaLDhEQUFDakIsZ0RBQU9BO29CQUVKa0IsTUFBTUYsSUFBSUcsS0FBSztvQkFDZkMsU0FBU0osSUFBSUksT0FBTztvQkFDcEJDLFVBQVVMLElBQUlHLEtBQUs7b0JBQ25CRyxVQUFVTixJQUFJTSxRQUFRO29CQUN0QkMsYUFBYVAsSUFBSUcsS0FBSztvQkFDdEJLLEtBQUtSLElBQUlHLEtBQUs7b0JBQ2RNLE1BQU1ULElBQUlHLEtBQUs7bUJBUFZGOzs7Ozs7Ozs7Ozs7Ozs7QUFhN0I7R0E1QndCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpc3RpbmdzLnRzeD83MjljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdGluZyBmcm9tIFwiLi9saXN0aW5nXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBMaXN0aW5nUHJvcHMge1xuICAgIGxvZ286IHN0cmluZztcbiAgICBjb21wYW55OiBzdHJpbmc7XG4gICAgcG9zaXRpb246IHN0cmluZztcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIGFycmFuZ2VtZW50OiBzdHJpbmc7XG4gICAgcGF5OiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0aW5ncygpIHtcbiAgICBjb25zdCBbam9icywgc2V0Sm9ic10gPSB1c2VTdGF0ZTxMaXN0aW5nW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiL2pvYmxpc3RpbmdzLmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IExpc3RpbmdbXSkgPT4gc2V0Sm9icyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBqb2JzOlwiLCBlcnJvcikpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibGlzdGluZ3NcIj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2pvYnMubWFwKChqb2IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nbz17am9iLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueT17am9iLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17am9iLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2pvYi5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmFuZ2VtZW50PXtqb2IudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXk9e2pvYi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e2pvYi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPjwvTGlzdGluZz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3RpbmciLCJDb250YWluZXIiLCJMaXN0aW5ncyIsImpvYnMiLCJzZXRKb2JzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImlkIiwibWFwIiwiam9iIiwiaW5kZXgiLCJsb2dvIiwidGl0bGUiLCJjb21wYW55IiwicG9zaXRpb24iLCJsb2NhdGlvbiIsImFycmFuZ2VtZW50IiwicGF5IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/listings.tsx\n"));

/***/ })

});