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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Listings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing */ \"(app-pages-browser)/./src/app/listing.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Listings() {\n    _s();\n    const [jobs, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/joblistings.json\").then((response)=>response.json()).then((data)=>setJobs(data)).catch((error)=>console.error(\"Error fetching jobs:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"listings\",\n        children: jobs.map((job, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                logo: job.title,\n                company: job.company,\n                position: job.title,\n                location: job.location,\n                arrangement: job.title,\n                pay: \"string\",\n                link: \"string\"\n            }, index, false, {\n                fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Listings, \"Q0mbvptFv5mszAZqWDb/1cpBDtw=\");\n_c = Listings;\nvar _c;\n$RefreshReg$(_c, \"Listings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlzdGluZ3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDWjtBQVNqQixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUU7SUFFMUNELGdEQUFTQSxDQUFDO1FBQ05NLE1BQU0scUJBQ0RDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBZ0JMLFFBQVFLLE9BQzlCQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7SUFDaEUsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNFO1FBQVFDLElBQUc7a0JBQ1BYLEtBQUtZLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDWiw4REFBQ2hCLGdEQUFPQTtnQkFFSmlCLE1BQU1GLElBQUlHLEtBQUs7Z0JBQ2ZDLFNBQVNKLElBQUlJLE9BQU87Z0JBQ3BCQyxVQUFVTCxJQUFJRyxLQUFLO2dCQUNuQkcsVUFBVU4sSUFBSU0sUUFBUTtnQkFDdEJDLGFBQWFQLElBQUlHLEtBQUs7Z0JBQ3RCSyxLQUFJO2dCQUNKQyxNQUFLO2VBUEFSOzs7Ozs7Ozs7O0FBWXpCO0dBMUJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saXN0aW5ncy50c3g/NzI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RpbmcgZnJvbSBcIi4vbGlzdGluZ1wiO1xuXG5pbnRlcmZhY2UgSm9iIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbXBhbnk6IHN0cmluZztcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RpbmdzKCkge1xuICAgIGNvbnN0IFtqb2JzLCBzZXRKb2JzXSA9IHVzZVN0YXRlPEpvYltdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcIi9qb2JsaXN0aW5ncy5qc29uXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBKb2JbXSkgPT4gc2V0Sm9icyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBqb2JzOlwiLCBlcnJvcikpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibGlzdGluZ3NcIj5cbiAgICAgICAgICAgIHtqb2JzLm1hcCgoam9iLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGxvZ289e2pvYi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcGFueT17am9iLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtqb2IudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtqb2IubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIGFycmFuZ2VtZW50PXtqb2IudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBheT1cInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgID48L0xpc3Rpbmc+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0aW5nIiwiTGlzdGluZ3MiLCJqb2JzIiwic2V0Sm9icyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJpZCIsIm1hcCIsImpvYiIsImluZGV4IiwibG9nbyIsInRpdGxlIiwiY29tcGFueSIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJhcnJhbmdlbWVudCIsInBheSIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/listings.tsx\n"));

/***/ })

});