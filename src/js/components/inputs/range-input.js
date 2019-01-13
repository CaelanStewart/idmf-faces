import Component from 'component';

class RangeInput extends Component {
    ready() {
        this.elements = { };

        this.cacheElements();
        this.attachEvents();

        this.updateValue();
    }

    cacheElements() {
        this.elements.input = this.query('input[type="range"]');
        this.elements.preview = this.query('.preview');
    }

    attachEvents() {
        this.elements.input.addEventListener('input', this.updateValue);
    }

    updateValue() {
        this.value = +this.elements.input.value;
        this.elements.preview.textContent = this.value;

        this.bus.emit('change', this.value);
    }
}

export default RangeInput;