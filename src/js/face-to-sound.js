import {promiseToCallMeBack} from "./util";

class FaceToSound {
    constructor(canvas) {
        this.canvas = canvas;
        this.audio = new AudioContext();

        this.currentSource = null;
    }

    getAudioBuffer(sampleRate) {
        let canvas = this.canvas,
            length = canvas.getPixelCount(),
            audio = this.audio,
            buffer = audio.createBuffer(1, length, sampleRate),
            channel = buffer.getChannelData(0),
            // channel = new Array(length),
            data = canvas.getImageData(),
            pixels = data.data;

        for (let i = 0; i < length * 4; i += 4) {
            channel[i / 4] = (
                (
                    // Average of RGB
                    (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
                    // Amplitude modulated by A
                    * (pixels[i + 3] / 255)
                ) / 255 * 2
            ) - 1;
        }

        return buffer;
    }

    stop() {
        if (this.currentSource) {
            this.currentSource.stop();
        } else {
            throw new Error('You can\'t stop what isn\'t playing. Can you even hear? Do you even have your fucking speakers turned up?');
        }
    }

    async play(sampleRate) {
        let buffer = this.getAudioBuffer(sampleRate),
            source = this.audio.createBufferSource();

        this.currentSource = source;

        source.buffer = buffer;

        source.connect(this.audio.destination);

        source.start();

        await promiseToCallMeBack(callback => {
            source.onended = callback;
        });

        this.currentSource = null;

        console.log('finished playing source');
    }
}

export default FaceToSound;