import {promiseToCallMeBack} from "./util";

class Canvas {
    constructor(canvas) {
        this.canvas = canvas;

        this.updateContext();
    }

    updateContext() {
        this.context = this.canvas.getContext('2d');
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    async drawImageFromDataUrl(dataUrl, x = 0, y = 0) {
        let image = new Image();

        await promiseToCallMeBack(callback => {
            image.onload = callback;

            image.src = dataUrl;
        });

        this.context.drawImage(image, x, y);
    }

    setDimensions(dimensions) {
        for (let dimension of Object.getOwnPropertyNames(dimensions)) {
            console.log(`Setting ${dimension} of canvas to: ${dimensions[dimension]}`)
            this.canvas[dimension] = dimensions[dimension];
        }
    }

    getImageData(x, y, w, h) {
        console.log('getting image data', x || 0, y || 0, w || this.canvas.width, h || this.canvas.height);
        return this.context.getImageData(x || 0, y || 0, w || this.canvas.width, h || this.canvas.height);
    }

    getPixelCount() {
        return this.canvas.width * this.canvas.height;
    }
}

export default Canvas;