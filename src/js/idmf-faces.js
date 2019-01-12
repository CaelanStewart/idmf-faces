import ImageLoader from 'image-loader';
import FaceToSound from 'face-to-sound';
import Canvas from 'canvas';
import Controller from 'controller';
import imagesLoaded from 'imagesloaded';
import {promiseToCallMeBack} from "./util";

class IDMFFaces extends Controller {
    ready() {
        this.elements = { };

        this.cacheElements();
        this.attachEvents();

        this.canvas = new Canvas(this.elements.canvas);

        this.reset();
    }

    async reset() {
        this.elements.input.value = '';

        this.image = {
            result: 'images/placeholder.jpg'
        };

        await this.updatePreview();
    }

    cacheElements() {
        this.elements.input = document.querySelector('#input');
        this.elements.button = document.querySelector('#button');
        this.elements.preview = document.querySelector('#preview');
        this.elements.canvas = document.querySelector('#canvas');
    }

    attachEvents() {
        this.elements.button.addEventListener('click', this.onButtonClick);
    }

    async onButtonClick() {
        await this.updateImage();
        await this.updatePreview();
        await this.renderAudio();
    }

    async updateImage() {
        let imageLoader = new ImageLoader(this.elements.input);

        try {
            this.image = await imageLoader.getDataUrl();
        } catch (error) {
            this.handleError(error);
        }
    }

    async updatePreview() {
        this.elements.preview.setAttribute('src', this.image.result);

        await promiseToCallMeBack(callback => {
            imagesLoaded(this.elements.preview, callback);
        });
    }

    getPreviewNaturalDimensions() {
        return {
            width: this.elements.preview.naturalWidth,
            height: this.elements.preview.naturalHeight
        }
    }

    async renderAudio() {
        this.canvas.setDimensions(this.getPreviewNaturalDimensions());
        this.canvas.clear();

        await this.canvas.drawImageFromDataUrl(this.image.result);

        this.faceToSound = new FaceToSound(this.canvas);

        this.faceToSound.play()
    }
}


window.idmf = new IDMFFaces;