webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const isboolean = __webpack_require__(2);
const map = __webpack_require__(3);

const sayHi = __webpack_require__(0);
const sayHello = __webpack_require__(1);

const sayHello2 = __webpack_require__(0); // will not refence 

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);

const data = map(['Aindex', 'B', true, false], function (item) {
    return isboolean(item) ? String(item) : item
});
console.info(data);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const isboolean = __webpack_require__(2);
const map = __webpack_require__(3);

const sayHi = __webpack_require__(0);
const sayHello = __webpack_require__(1);

const sayHello2 = __webpack_require__(0); // will not refence 

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);

const data = map(['Aindex2', 'B2', true, false], function (item) {
    return isboolean(item) ? String(item) : item
});
console.info(data);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const sayHi = new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 0));
const sayHello = new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 1));

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);


/***/ })
],[4]);