import Component from 'component';

class Preview extends Component {
    ready() {
        this.elements = { };

        this.cacheElements();
        this.attachEvents();
    }

    cacheElements() {
        this.elements.preview = document.querySelector('#preview');
    }

    attachEvents() {
        this.app.bus.on('image-change', this.onChange);
    }

    onChange(event, image) {
        this.elements.preview.setAttribute('src', image.result);
    }
}

export default Preview;