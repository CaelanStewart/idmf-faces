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
        this.faceToSound = new FaceToSound();

        this.reset();
    }

    async reset() {
        this.elements.input.value = '';

        this.image = {
            result: 'https://raw.githubusercontent.com/CaelanStewart/idmf-faces/master/images/placeholder.jpg'
        };

        await this.updatePreview();
    }

    cacheElements() {
        this.elements.input = document.querySelector('#input');
        this.elements.play = document.querySelector('#play');
        this.elements.stop = document.querySelector('#stop');
        this.elements.preview = document.querySelector('#preview');
        this.elements.canvas = document.querySelector('#canvas');
        this.elements.sampleRate = document.querySelector('#sample-rate');
    }

    attachEvents() {
        this.elements.input.addEventListener('change', this.onInputChange);
        this.elements.play.addEventListener('click', this.onPlayClick);
        this.elements.stop.addEventListener('click', this.onStopClick);
    }

    async onInputChange() {
        try {
            await this.updateImage();
            await this.updatePreview();
        } catch (error) {
            console.error(error);
        }
    }

    async onPlayClick() {
        try {
            await this.updateImage();
            await this.updatePreview();
            await this.play();
        } catch (error) {
            this.handleError(error);
        }
    }

    onStopClick() {
        try {
            this.faceToSound.stop();
        } catch (error) {
            this.handleError(error);
        }
    }

    async updateImage() {
        let imageLoader = new ImageLoader(this.elements.input);

        this.image = await imageLoader.getDataUrl();
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

    getSampleRate() {
        let raw = this.elements.sampleRate.value,
            rate = parseInt(raw, 10);

        if (isNaN(rate) || '' + raw !== raw) {
            throw new Error('You fucking plonker, enter an integer sample-rate why don\'t ya.');
        }

        return rate;
    }

    async play() {
        this.canvas.setDimensions(this.getPreviewNaturalDimensions());
        this.canvas.clear();

        await this.canvas.drawImageFromDataUrl(this.image.result);

        this.faceToSound = new FaceToSound(this.canvas);

        this.faceToSound.play(
            this.getSampleRate()
        )
    }
}


window.idmf = new IDMFFaces;