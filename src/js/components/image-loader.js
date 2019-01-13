import Component from 'component';
import {promiseToCallMeBack} from 'util/functions';

class ImageLoader extends Component {
    ready() {
        this.input = this.query('input[type="file"]');
    }

    async getDataUrl() {
        return await this.readFile((reader, file) => {
            reader.readAsDataURL(file);
        })
    }

    async readFile(hook) {
        let file = this.getFile();

        if ( ! file) {
            this.throwMissingFileError();
        }

        let fileReader = new FileReader();

        let [event] = await promiseToCallMeBack(callback => {
            fileReader.onload = callback;

            hook(fileReader, file);
        });

        return event.target;
    }

    throwMissingFileError() {
        throw new Error('Failed to load file. Have you actually uploaded a fucking file?');
    }

    getFile() {
        return this.input.files && this.input.files[0] || null;
    }
}

export default ImageLoader;