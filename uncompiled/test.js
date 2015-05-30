import delay from "./";

describe("@delay()", () => {
  it("should return a Promise resolving the function's return value", done => {
    class Dog {
      @delay(10)
      makeNoise() { return "Woof!" }
    }

    let promise = new Dog().makeNoise();
    promise.should.be.an.instanceof(Promise);
    promise.then(noise => { noise.should.be.exactly("Woof!") }).then(done).catch(done);
  });
});
