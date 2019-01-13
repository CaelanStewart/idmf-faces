import RangeInput from 'components/inputs/range-input';

class SampleRate extends RangeInput {
    ready() {
        // Hook into change, prevent propagation, and emit prefixed version
        this.bus.on('change', event => {
            event.stopPropagation();

            this.bus.emit('sample-rate-change');
        });

        super.ready();
    }
}

export default SampleRate;