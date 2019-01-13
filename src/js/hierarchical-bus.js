import Bus from 'bus';

class HierarchicalBus extends Bus {
    constructor(origin, parent) {
        super(origin);

        this.parent = parent;

        this.hookParentIntoBus();
    }

    hookParentIntoBus() {
        if (this.parent instanceof Bus) {
            let localSignature = null;

            // Inject stopPropagation method and flag
            this.hook('before-emit', signature => {
                localSignature = signature;

                signature.propagationStopped = false;
                signature.stopPropagation = () => signature.propagationStopped = true;
            });

            this.hook('after-emit', (signature, ...args) => {
                // If propagation was not stopped, emit up tree
                if ( ! localSignature || ! localSignature.propagationStopped) {
                    this.parent.emit(signature.event, ...args);
                }
            })
        }
    }
}

export default HierarchicalBus;