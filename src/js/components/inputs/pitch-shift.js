import RangeInput from 'components/inputs/range-input';

class PitchShift extends RangeInput {
    ready() {
        // Hook into change, prevent propagation, and emit prefixed version
        this.bus.on('change', event => {
            event.stopPropagation();

            this.bus.emit('pitch-shift-change');
        });

        super.ready();
    }
}

export default PitchShift;