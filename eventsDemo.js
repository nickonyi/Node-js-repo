import { EventEmitter } from "events";

const myEmmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log("Hello " + name);
};

const goodbyHandler = (name) => {
  console.log("Goodbye " + name);
};

//register event listers
myEmmitter.on("greet", greetHandler);
myEmmitter.on("goodbye", goodbyHandler);

myEmmitter.emit("greet", "John");
myEmmitter.emit("goodbye", "Decaprio");
