import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log("Hello ", name);
};

const goodbyeHandler = (name) => {
  console.log("Goodbye ", name);
};

//register event handlers
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

//emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");
