/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AppRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppRoute */ \"./src/AppRoute.js\");\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppRoute__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://redux-ssr/./src/App.js?");

/***/ }),

/***/ "./src/AppRoute.js":
/*!*************************!*\
  !*** ./src/AppRoute.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/User */ \"./src/pages/User.js\");\n\n\n\n\n\nfunction AppRoute() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n    path: \"user\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_pages_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoute);\n\n//# sourceURL=webpack://redux-ssr/./src/AppRoute.js?");

/***/ }),

/***/ "./src/index.server.js":
/*!*****************************!*\
  !*** ./src/index.server.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ \"core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/userService */ \"./src/services/userService.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nvar port = 3000; //Serve static files\n\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_4___default()[\"static\"]('static')); // This is fired every time the server side receives a request\n\napp.use(handleRender); // We are going to fill these out in the sections to follow\n\nfunction handleRender(req, res) {\n  // Create a new Redux store instance\n  var store = (0,_redux_store__WEBPACK_IMPORTED_MODULE_8__.createStore)(); // Render the component to a string\n\n  var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_6__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_9__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))); // Grab the initial state from our Redux store\n\n  var preloadedState = store.getState(); // Send the rendered page back to the client\n\n  res.send(renderFullPage(html, preloadedState));\n}\n\nfunction handleRender2(_x, _x2) {\n  return _handleRender.apply(this, arguments);\n}\n\nfunction _handleRender() {\n  _handleRender = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var users, store, html, preloadedState;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_services_userService__WEBPACK_IMPORTED_MODULE_11__.getUsers)();\n\n          case 2:\n            users = _context.sent;\n            store = (0,_redux_store__WEBPACK_IMPORTED_MODULE_8__.createStore)({\n              users: users\n            }); // Render the component to a string\n\n            html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_6__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n              store: store\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_9__.StaticRouter, {\n              location: req.url\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))); // Grab the initial state from our Redux store\n\n            preloadedState = store.getState(); // Send the rendered page back to the client\n\n            res.send(renderFullPage(html, preloadedState));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _handleRender.apply(this, arguments);\n}\n\nfunction renderFullPage(html, preloadedState) {\n  return \"\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <title>Redux Universal Example</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(html, \"</div>\\n        <script>\\n          // WARNING: See the following for security issues around embedding JSON in HTML:\\n          // https://redux.js.org/usage/server-rendering#security-considerations\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n        </script>\\n        <script src=\\\"/static/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n    \");\n}\n\napp.listen(port);\n\n//# sourceURL=webpack://redux-ssr/./src/index.server.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Hello World\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"user\"\n  }, \"user\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/user\"\n  }, \"user\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://redux-ssr/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/User.js":
/*!***************************!*\
  !*** ./src/pages/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/userSlice */ \"./src/redux/userSlice.js\");\n\n\n\n\n\nfunction User() {\n  // @ts-ignore\n  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.users;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  var handleDelete = function handleDelete(id) {\n    dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(id));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)());\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", null, users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n      key: user.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"\".concat(user.first_name, \" \").concat(user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n      onClick: function onClick() {\n        return handleDelete(user.id);\n      }\n    }, \"delete\"));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://redux-ssr/./src/pages/User.js?");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStore\": () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSlice */ \"./src/redux/userSlice.js\");\n\n\nvar createStore = function createStore(preloadedState) {\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: _userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    preloadedState: preloadedState\n  });\n};\n\n//# sourceURL=webpack://redux-ssr/./src/redux/store.js?");

/***/ }),

/***/ "./src/redux/userSlice.js":
/*!********************************!*\
  !*** ./src/redux/userSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers),\n/* harmony export */   \"deleteUser\": () => (/* binding */ deleteUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index.js */ \"core-js/modules/es6.array.find-index.js\");\n/* harmony import */ var core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/userService */ \"./src/services/userService.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar initialState = {\n  users: []\n};\nvar fetchUsers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createAsyncThunk)('posts/fetchUsers', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n  var users;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return (0,_services_userService__WEBPACK_IMPORTED_MODULE_6__.getUsers)();\n\n        case 2:\n          users = _context.sent;\n          return _context.abrupt(\"return\", users);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\nvar userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSlice)({\n  name: 'counter',\n  initialState: initialState,\n  reducers: {\n    deleteUser: function deleteUser(state, action) {\n      state.users.splice(state.users.findIndex(function (u) {\n        return u.id === action.payload;\n      }), 1);\n    }\n  },\n  extraReducers: _defineProperty({}, fetchUsers.fulfilled, function (state, action) {\n    state.users = state.users.concat(action.payload);\n  })\n});\nvar deleteUser = userSlice.actions.deleteUser;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n\n//# sourceURL=webpack://redux-ssr/./src/redux/userSlice.js?");

/***/ }),

/***/ "./src/services/userService.js":
/*!*************************************!*\
  !*** ./src/services/userService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction getUsers() {\n  return _getUsers.apply(this, arguments);\n}\n\nfunction _getUsers() {\n  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://reqres.in/api/users?page=2\");\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.data.data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getUsers.apply(this, arguments);\n}\n\n//# sourceURL=webpack://redux-ssr/./src/services/userService.js?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "core-js/modules/es6.array.find-index.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.array.find-index.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.find-index.js");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.map.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-property.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property.js" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.promise.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.regexp.replace.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.server.js");
/******/ 	
/******/ })()
;