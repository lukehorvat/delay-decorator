export default (milliseconds=0) => {
  return (target, name, descriptor) => {
    let func = descriptor.value;

    descriptor.value = function(...args) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      }).then(() => {
        return func.apply(this, args);
      });
    };
  };
};
