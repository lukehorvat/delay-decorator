"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var milliseconds = arguments[0] === undefined ? 0 : arguments[0];

  return function (target, name, descriptor) {
    var func = descriptor.value;

    descriptor.value = function () {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
      }).then(function () {
        return func.apply(_this, args);
      });
    };
  };
};

module.exports = exports["default"];