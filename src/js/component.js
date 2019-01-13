import Controller from 'controller';
import HierarchicalBus from 'hierarchical-bus';

class Component extends Controller {
    init(app, parent, element, ...args) {
        this.element = element;
        this.parent = parent;
        this.children = { };

        super.init(app, ...args);
    }

    getParentBus() {
        return this.parent && this.parent.bus || null;
    }

    /**
     * Overriden to return a HierarchicalBus instead of a normal Bus, so that it propagates events to the parent, if it
     * was not stopped by any listeners on the local HierarchicalBus.
     *
     * @returns {HierarchicalBus}
     */
    makeBus() {
        return new HierarchicalBus(this, this.getParentBus());
    }

    getGenericErrorMessage() {
        return `[${this.constructor.name}]: Error in Component - instance logged below and assigned to window.__lastErrorOrigin.`;
    }

    getChildStack(name) {
        if ( ! this.children[name]) {
            this.children[name] = [ ];
        }

        return this.children[name];
    }

    pushChild(instance) {
        this.getChildStack(instance.constructor.name).push(instance);

        return instance;
    }

    make(controller, ...args) {
        return this.pushChild(
            new controller(this.app, ...args)
        );
    }

    getComponentElementsRoot(root) {
        return root || this.element || document;
    }

    query(selector) {
        return this.element.querySelector(selector);
    }

    queryAll(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }

    static is(component) {
        return component instanceof Component;
    }
}

export default Component;