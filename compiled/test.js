"use strict";

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require("./");

var _2 = _interopRequireDefault(_);

describe("@delay()", function () {
  it("should return a Promise resolving the function's return value", function (done) {
    var Dog = (function () {
      function Dog() {
        _classCallCheck(this, Dog);
      }

      _createDecoratedClass(Dog, [{
        key: "makeNoise",
        decorators: [(0, _2["default"])(10)],
        value: function makeNoise() {
          return "Woof!";
        }
      }]);

      return Dog;
    })();

    var promise = new Dog().makeNoise();
    promise.should.be.an["instanceof"](Promise);
    promise.then(function (noise) {
      noise.should.be.exactly("Woof!");
    }).then(done)["catch"](done);
  });
});