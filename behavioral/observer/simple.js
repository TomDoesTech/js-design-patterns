function createObserable() {
  return {
    subscribers: [],

    subscribe(fn) {
      this.subscribers.push(fn);
    },
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((item) => item !== fn);
    },
    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
      }
    },
  };
}

const observer = createObserable();

const fn = (data) => {
  console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable");
