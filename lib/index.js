import {DecoratorUtils} from "decorator-utils";

export default (milliseconds=0) => {
  if (isNaN(milliseconds)) {
    throw new Error("Non-numeric delay milliseconds specified.");
  }

  if (milliseconds < 0) {
    throw new Error("Negative delay milliseconds specified.");
  }

  return DecoratorUtils.createDecorator([
    DecoratorUtils.declarationTypes.CLASS_METHOD,
    DecoratorUtils.declarationTypes.CLASS_ACCESSOR,
    DecoratorUtils.declarationTypes.OBJECT_LITERAL_METHOD,
    DecoratorUtils.declarationTypes.OBJECT_LITERAL_ACCESSOR
  ], (target, name, descriptor) => {
    let method = descriptor.value;

    descriptor.value = function(...args) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      }).then(() => {
        return method.apply(this, args);
      });
    };
  });
};
