"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Operaciones.js":
/*!***************************************!*\
  !*** ./src/components/Operaciones.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Operaciones = function() {\n    _s();\n    // const [result, setResult] = useState();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), view = _useState1[0], setView = _useState1[1];\n    // const handleResult = async () => {\n    //     try{\n    //       const response = await fetch('/api/call_procedure', {\n    //         method: 'POST',\n    //       });\n    //       if(response.ok){\n    //         const data = await response.json();\n    //         console.log(data);\n    //       }\n    //       else{\n    //         console.error('Error en la llamada al procedimiento almacenado');\n    //       }\n    //     }\n    //     catch(error){\n    //       console.error(`Error en la solicitud ${error}`)\n    //     }\n    // }\n    var handleSearch = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/search_products\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!response.ok) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setProducts(data.products);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        console.error(\"Error al buscar productos\");\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error en la solicitud: \".concat(error));\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSearch() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleView = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            5,\n                            ,\n                            6\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/view\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!response.ok) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setProducts(data.products);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        console.error(\"Error al buscar productos\");\n                        _state.label = 4;\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        error = _state.sent();\n                        console.error(\"Error en la solicitud: \".concat(error));\n                        return [\n                            3,\n                            6\n                        ];\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleView() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(// <div>\n    //     Hola mundo cruel!!\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSearch,\n                children: \"Buscar productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleView,\n                children: \"Buscar view\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Nombre\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Descripci\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                lineNumber: 94,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                            lineNumber: 93,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: products.map(function(product1) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product1.product_id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product1.product_name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product1.product_description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, product1.product_id, true, {\n                                    fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                    lineNumber: 92,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: view.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Nombre\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Descripci\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                lineNumber: 123,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                            lineNumber: 122,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: view.map(function(view) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product.product_id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 133,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product.product_name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 41\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: product.product_description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                            lineNumber: 135,\n                                            columnNumber: 41\n                                        }, _this)\n                                    ]\n                                }, product.product_id, true, {\n                                    fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                            lineNumber: 129,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                    lineNumber: 121,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ricar\\\\OneDrive\\\\Escritorio\\\\BASE DE DATOS ll\\\\proyectos\\\\conexionbd\\\\src\\\\components\\\\Operaciones.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this));\n};\n_s(Operaciones, \"Ckh0sLiB7Hkn7Dso3uwfUdZ33WI=\");\n_c = Operaciones;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Operaciones);\nvar _c;\n$RefreshReg$(_c, \"Operaciones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQW9KTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PcGVyYWNpb25lcy5qcz8zMzgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgT3BlcmFjaW9uZXMgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZVJlc3VsdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICB0cnl7XHJcbiAgICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NhbGxfcHJvY2VkdXJlJywge1xyXG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgZWxzZXtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZW4gbGEgbGxhbWFkYSBhbCBwcm9jZWRpbWllbnRvIGFsbWFjZW5hZG8nKTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgLy8gICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZW4gbGEgc29saWNpdHVkICR7ZXJyb3J9YClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT5cclxuICAgIHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VhcmNoX3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGJ1c2NhciBwcm9kdWN0b3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGVuIGxhIHNvbGljaXR1ZDogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZpZXcgPSBhc3luYyAoKSA9PlxyXG4gICAge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS92aWV3Jyk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIGJ1c2NhciBwcm9kdWN0b3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGVuIGxhIHNvbGljaXR1ZDogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICAgIEhvbGEgbXVuZG8gY3J1ZWwhIVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXN1bHR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExMYW1hZGEgYWwgcHJvY2VkaW1pZW50b1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIFJlc3VsdGFkbyBkZWwgcHJvY2VkaW1pZW50byBhbG1hY2VuYWRvOiA8c3Bhbj57cmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxici8+ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICBCdXNjYXIgcHJvZHVjdG9zXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaWV3fT5cclxuICAgICAgICAgICAgICAgIEJ1c2NhciB2aWV3XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogUmVzdWx0YWRvIGRlIHByb2R1Y3RvczogPHNwYW4+e3Byb2R1Y3RzfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm9tYnJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubWFwKCAocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0LnByb2R1Y3RfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2R1Y3RfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X2Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBSZXN1bHRhZG8gZGUgcHJvZHVjdG9zOiA8c3Bhbj57cHJvZHVjdHN9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgIHt2aWV3Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXBjacOzbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcubWFwKCAodmlldykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9kdWN0LnByb2R1Y3RfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0LnByb2R1Y3RfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5wcm9kdWN0X2Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmFjaW9uZXM7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhY2lvbmVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJoYW5kbGVWaWV3IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImxlbmd0aCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJwcm9kdWN0IiwidGQiLCJwcm9kdWN0X2lkIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9kZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Operaciones.js\n"));

/***/ })

});