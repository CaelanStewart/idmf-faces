class Bus {
    constructor(origin = null) {
        this.origin = origin;
        this.listeners = { };
        this.hooks = { };
    }

    getStack(type, reference) {
        if ( ! this[type][reference]) {
            this[type][reference] = [ ];
        }

        return this[type][reference];
    }

    signature(event) {
        let signature = {
            event,
            origin: this.origin,
            bus: this,
            stopped: false,
            stop() {
                signature.stopped = true;
            }
        };

        return signature;
    }

    removeFromStack(type, reference, object) {
        if ( ! reference) {
            for (let variant in this[type]) {
                this.removeFromStack(type, variant, object);
            }
        } else if ( ! object) {
            delete this[type][reference];
        } else {
            let stack = this.getStack(type, reference),
                index = stack.lastIndexOf(object);

            stack.splice(
                Math.max(index, 0),
                index < 0 ? 0 : 1
            )
        }
    }

    pushToStack(type, reference, object) {
        this.getStack(type, reference).push(object);
    }

    traverseStack(type, reference, executor) {
        if (Array.isArray(reference)) {
            for (let one of reference) {
                this.traverseStack(type, one, executor);
            }
        } else {
            for (let object of this.getStack(type, reference)) {
                if ( ! executor(object)) {
                    break;
                }
            }
        }
    }

    hook(method, callback) {
        this.pushToStack('hooks', method, callback);
    }

    unhook(method = null, callback = null) {
        this.removeFromStack('hooks', method, callback);
    }

    triggerHook(method, ...args) {
        this.traverseStack('hooks', method, hook => {
            hook(...args);
        })
    }

    on(event, callback) {
        this.triggerHook('before-on', event, callback);

        this.pushToStack('listeners', event, callback);

        this.triggerHook('on', event, callback);
    }

    off(event = null, callback = null) {
        this.triggerHook('before-off', event, callback);

        this.removeFromStack('listeners', event, callback);

        this.triggerHook('off', event, callback);
    }

    once(event, callback) {
        this.triggerHook('before-once', event, callback);

        let listener = (...args) => {
            this.removeFromStack('listeners', event, listener);

            callback(...args);
        };

        this.pushToStack('listeners', event, listener);

        this.triggerHook('once', event, callback, listener);
    }

    fireListeners(event, signature, ...args) {
        this.traverseStack('listeners', event, listener => {
            listener(signature, ...args);

            this.triggerHook('emit', signature, ...args);

            return ! signature.stopped;
        });
    }

    emit(event, ...args) {
        let signature = this.signature(event);

        this.triggerHook('before-emit', signature, ...args);

        this.fireListeners(event, signature, ...args);

        this.triggerHook('after-emit', signature, ...args);
    }
}

export default Bus;