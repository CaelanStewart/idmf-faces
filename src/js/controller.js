import Bus from 'bus';

class Controller {
    constructor(...args) {
        this.init(...args);
    }

    init(app, ...args) {
        this.boot(app, ...args);

        this.ready(...args);
    }

    ready() {
        // To be overridden by derived classes
    }

    makeBus() {
        return new Bus(this);
    }

    /**
     *
     * @param {Controller} app
     * @param args
     */
    boot(app, ...args) {
        /**
         * @property {Controller} app
         */
        this.app = app;
        this.bus = this.makeBus();

        this.bindMethodsToInstance();
    }

    bindMethodsToInstance() {
        let prototype, next = () => (prototype = Object.getPrototypeOf(prototype || this));

        do {
			next();

            for (let property of Object.getOwnPropertyNames(prototype)) {
                if (typeof this[property] !== 'function' || property === 'constructor') {
                    continue;
                }

                this[property] = this[property].bind(this);
            }
        } while (prototype.constructor !== Controller);
    }

    getGenericErrorMessage() {
        return `[${this.constructor.name}]: Error in Controller - instance logged below and assigned to window.__lastErrorOrigin.`;
    }

    handleError(error) {
        alert(error.message);

        console.error(this.getGenericErrorMessage());
        console.log(this);
        window.__lastErrorOrigin = this;

        throw error;
    }

    make(controller, ...args) {
        return new controller(this.app, ...args)
    }

    getComponentElementsRoot(root) {
        return root || document;
    }

    component(controller, ...args) {
        if ( ! Controller.isPrototypeOf(controller)) {
            console.log(controller);
            throw new Error('Invalid Controller specified, cannot get component elements');
        }

        let components = [ ];

        for (let element of this.getComponentElements(controller)) {
            components.push(
                this.make(controller, this, element, ...args)
            );
        }

        return components.length < 2
            ? components[0] || null
            : components;
    }

    getComponentElements(controller, root) {
        let selector = `component[name="${controller.name}"]`;

        return this.getComponentElementsRoot(root).querySelectorAll(selector);
    }

    static is(controller) {
        return controller instanceof Controller;
    }
}

export default Controller;