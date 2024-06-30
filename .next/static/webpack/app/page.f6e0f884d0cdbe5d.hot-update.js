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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Listings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing */ \"(app-pages-browser)/./src/app/listing.tsx\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container */ \"(app-pages-browser)/./src/app/components/container.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Listings() {\n    _s();\n    const [listing, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/joblistings.json\").then((response)=>response.json()).then((data)=>setJobs(data)).catch((error)=>console.error(\"Error fetching jobs:\", error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"listings\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: listing.map((job, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    logo: job.logo,\n                    company: job.company,\n                    position: job.position,\n                    location: job.location,\n                    arrangement: job.arrangement,\n                    pay: job.pay,\n                    link: job.link\n                }, index, false, {\n                    fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sekar/Desktop/magang-berbayar/src/app/listings.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Listings, \"1aAvP4PILulFwUd8qTrX/5W6ufE=\");\n_c = Listings;\nvar _c;\n$RefreshReg$(_c, \"Listings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlzdGluZ3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ1o7QUFDZTtBQVloQyxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFpQixFQUFFO0lBRXRERCxnREFBU0EsQ0FBQztRQUNOTyxNQUFNLHFCQUNEQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQXlCTCxRQUFRSyxPQUN2Q0MsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO0lBQ2hFLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFRQyxJQUFHO2tCQUNSLDRFQUFDYiw2REFBU0E7c0JBQ0xFLFFBQVFZLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZiw4REFBQ2pCLGdEQUFPQTtvQkFFSmtCLE1BQU1GLElBQUlFLElBQUk7b0JBQ2RDLFNBQVNILElBQUlHLE9BQU87b0JBQ3BCQyxVQUFVSixJQUFJSSxRQUFRO29CQUN0QkMsVUFBVUwsSUFBSUssUUFBUTtvQkFDdEJDLGFBQWFOLElBQUlNLFdBQVc7b0JBQzVCQyxLQUFLUCxJQUFJTyxHQUFHO29CQUNaQyxNQUFNUixJQUFJUSxJQUFJO21CQVBUUDs7Ozs7Ozs7Ozs7Ozs7O0FBYTdCO0dBNUJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saXN0aW5ncy50c3g/NzI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RpbmcgZnJvbSBcIi4vbGlzdGluZ1wiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgTGlzdGluZ1Byb3BzIHtcbiAgICBsb2dvOiBzdHJpbmc7XG4gICAgY29tcGFueTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBhcnJhbmdlbWVudDogc3RyaW5nO1xuICAgIHBheTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGluZ3MoKSB7XG4gICAgY29uc3QgW2xpc3RpbmcsIHNldEpvYnNdID0gdXNlU3RhdGU8TGlzdGluZ1Byb3BzW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiL2pvYmxpc3RpbmdzLmpzb25cIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IExpc3RpbmdQcm9wc1tdKSA9PiBzZXRKb2JzKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGpvYnM6XCIsIGVycm9yKSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJsaXN0aW5nc1wiPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7bGlzdGluZy5tYXAoKGpvYiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvPXtqb2IubG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2pvYi5jb21wYW55fVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e2pvYi5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtqb2IubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJhbmdlbWVudD17am9iLmFycmFuZ2VtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5PXtqb2IucGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17am9iLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0aW5nIiwiQ29udGFpbmVyIiwiTGlzdGluZ3MiLCJsaXN0aW5nIiwic2V0Sm9icyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJpZCIsIm1hcCIsImpvYiIsImluZGV4IiwibG9nbyIsImNvbXBhbnkiLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwiYXJyYW5nZW1lbnQiLCJwYXkiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/listings.tsx\n"));

/***/ })

});