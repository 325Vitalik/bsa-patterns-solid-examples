class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber ===fn);
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

// https://codepen.io/SitePoint/pen/rzBEXP

// real world https://redux.js.org/introduction/getting-started