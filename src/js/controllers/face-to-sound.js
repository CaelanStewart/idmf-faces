import Controller from 'controller';
import {promiseToCallMeBack, DescopedPromise} from 'util/functions';

class FaceToSound extends Controller {
    ready(canvas, audio) {
        this.canvas = canvas;
        this.audio = audio;

        this.updateImageData();
    }

    getChunk(offset, length) {
        let buffer = this.audio.createBuffer(length),
            channel = buffer.channel[0],
            // channel = new Array(length),
            pixels = this.data.data;

        // The Image data is a linear list of values, where each segment of four values maps to RGBA: [R,G,B,A, R,G,B,A]
        offset = offset * 4;

        for (let i = 0; i < length * 4; i += 4) {
            let p = i + offset;

            channel[i / 4] = (
                (
                    // Average of RGB
                    (pixels[p] + pixels[p + 1] + pixels[p + 2]) / 3
                    // Amplitude modulated by A
                    * (pixels[p + 3] / 255)
                ) / 255 * 2
            ) - 1;
        }

        return buffer;
    }

    stop() {
        if (this.audio.playing) {
            this.audio.stop();
        } else {
            throw new Error('You can\'t stop what isn\'t playing. Can you even hear? Do you even have your fucking speakers turned up?');
        }
    }

    updateImageData() {
        this.length = this.canvas.getPixelCount();
        this.data = this.canvas.getImageData();
    }

    async play() {
        let buffer = this.getChunk(0, this.length);

        console.log(buffer);

        this.audio.queueBuffer(buffer);

        this.audio.play();

        await promiseToCallMeBack(callback => {
            this.audio.bus.once('next', callback);
        });

        if (this.audio.playing) {
            this.stop();
        }

        console.log('finished playing source', this.index, this.length);
    }
}

export default FaceToSound;