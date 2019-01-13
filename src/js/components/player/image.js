import ImageLoader from 'components/image-loader';

class Image extends ImageLoader {
    ready() {
        super.ready();

        this.attachEvents();
    }

    attachEvents() {
        this.input.addEventListener('change', this.updateImage);
    }

    async updateImage() {
        this.image = await this.getDataUrl();

        this.bus.emit('image-change', this.image);
    }
}

export default Image;