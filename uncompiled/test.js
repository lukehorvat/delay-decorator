import delay from "./";

describe("@delay()", () => {
  it("should throw an error for non-numeric delay milliseconds", () => {
    (() => {
      class Dog {
        @delay("ABC")
        makeNoise() { return "Woof!" }
      }
    }).should.throw("Non-numeric delay milliseconds specified.");
  });

  it("should throw an error for negative delay milliseconds", () => {
    (() => {
      class Dog {
        @delay(-1)
        makeNoise() { return "Woof!" }
      }
    }).should.throw("Negative delay milliseconds specified.");
  });

  it("should throw an error for class decorations", () => {
    (() => {
      @delay(10)
      class Dog {
        makeNoise() { return "Woof!" }
      }
    }).should.throw("Property not defined. Did you decorate a class by mistake?");
  });

  it("should return a Promise resolving the function's return value", done => {
    class Dog {
      @delay(10)
      makeNoise() { return "Woof!" }
    }

    let dog = new Dog();
    let promise = dog.makeNoise();
    promise.should.be.an.instanceof(Promise);
    promise.then(noise => { noise.should.be.exactly("Woof!") }).then(done).catch(done);
  });

  it("should delay the function call for the specified milliseconds", done => {
    class Dog {
      @delay(1000)
      makeNoise() { return "Woof!" }
    }

    let dog = new Dog();
    let start = new Date();
    dog.makeNoise().then(() => { (new Date() - start).should.not.be.below(1000) }).then(done).catch(done);
  });

  it("should leave the function's bound value of 'this' intact", done => {
    class Obj {
      @delay(10)
      self() { return this }
    }

    let obj = new Obj();
    obj.self().then(self => { self.should.equal(obj) }).then(done).catch(done);
  });
});
