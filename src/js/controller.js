class Controller {
    constructor(...args) {
        this.boot();

        /**
         * @property {function} ready
         */
        if (typeof this.ready === 'function') {
            this.ready(...args);
        }
    }

    boot() {
        this.bindMethodsToInstance();
    }

    bindMethodsToInstance() {
        let prototype, next = p => (prototype = Object.getPrototypeOf(p || prototype));

        next(this);

        do {
            for (let property of Object.getOwnPropertyNames(prototype)) {
                if (property === 'constructor' || typeof this[property] !== 'function') {
                    continue;
                }

                this[property] = this[property].bind(this);
            }
        } while (next() && prototype.constructor !== Controller);
    }

    handleError(error) {
        alert(error.message);

        throw error;
    }
}

export default Controller;