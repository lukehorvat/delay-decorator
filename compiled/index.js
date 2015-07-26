"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var milliseconds = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  if (isNaN(milliseconds)) {
    throw new Error("Non-numeric delay milliseconds specified.");
  }

  if (milliseconds < 0) {
    throw new Error("Negative delay milliseconds specified.");
  }

  return function (target, name, descriptor) {
    if (!descriptor) {
      throw new Error("Property not defined. Did you decorate a class by mistake?");
    }

    var method = descriptor.value;

    descriptor.value = function () {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
      }).then(function () {
        return method.apply(_this, args);
      });
    };
  };
};

module.exports = exports["default"];