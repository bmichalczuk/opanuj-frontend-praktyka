import { unknown } from 'zod';
type SubscriberFunction = (state: unknown) => void;

class State {
  state: unknown;
  subscribers: SubscriberFunction[] = [];
  constructor(initialState: unknown) {
    this.state = initialState;
  }
  emit() {
    this.subscribers.forEach((fn) => {
      fn(this.state);
    });
  }
  update(newState: unknown) {
    this.state = newState;
    this.emit();
  }
  getState() {
    return this.state;
  }
}

export { State };
