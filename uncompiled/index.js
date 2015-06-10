export default (milliseconds=0) => {
  if (isNaN(milliseconds)) {
    throw new Error("Non-numeric delay milliseconds specified.");
  }

  if (milliseconds < 0) {
    throw new Error("Negative delay milliseconds specified.");
  }

  return (target, name, descriptor) => {
    if (!descriptor) {
      throw new Error("Property not defined. Did you decorate a class by mistake?");
    }

    let method = descriptor.value;

    descriptor.value = function(...args) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      }).then(() => {
        return method.apply(this, args);
      });
    };
  };
};
