import {promiseToCallMeBack} from 'util.js';

class ImageLoader {
    constructor(input) {
        if (input instanceof HTMLInputElement) {
            this.input = input;
        } else {
            throw new Error('Invalid input element specified: HTMLInputElement required.');
        }
    }

    async getDataUrl() {
        return await this.readFile((reader, file) => {
            reader.readAsDataURL(file);
        })
    }

    async readFile(hook) {
        let file = this.getFile();

        if ( ! file) {
            throw new Error('Failed to load file. Have you actually uploaded a fucking file?');
        }

        let fileReader = new FileReader();

        let [event] = await promiseToCallMeBack(callback => {
            fileReader.onload = callback;

            hook(fileReader, file);
        });

        return event.target;
    }

    getFile() {
        return this.input.files && this.input.files[0] || null;
    }
}

export default ImageLoader;