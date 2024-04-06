export class Context {
  #state;

  constructor(state) {
    this.transitionTo(state);
  }

  transitionTo(state) {
    this.#state = state;
    this.#state.setContext(this);
  }

  request1() {
    this.#state.handle1();
  }

  request2() {
    this.#state.handle2();
  }
}

export class State {
  context;

  setContext(context) {
    this.context = context;
  }

  handle1() {}
  handle2() {}
}

class ConcreteStateA extends State {
  handle1() {
    this.context.transitionTo(new ConcreteStateB());
  }

  handle2() {
    console.log("ConcreteStateA handles request2");
  }
}

class ConcreteStateB extends State {
  handle1() {
    console.log("ConcreteStateB handles request1");
  }

  handle2() {
    this.context.transitionTo(new ConcreteStateA());
  }
}

const context = new Context(new ConcreteStateA());
context.request1();
