import Controller from 'controller';
import AudioBuffer from 'controllers/buffer';
import {async, sleep, promiseToCallMeBack} from "util/functions";

class Audio extends Controller {
    ready(channels = 1) {
        this.channels = channels;

        this.context = null;
        this.destination = null;
        this.playing = false;
        this.length = 0;
        this.queue = [ ];
        this.index = 0;
    }

    initContext() {
        this.context = new AudioContext();
        this.destination = this.context.destination;
    }

    createBuffer(length) {
        return this.make(AudioBuffer, this, length, this.app.inputs.sampleRate.value);
    }

    queueBuffer(buffer) {
        this.queue.push(buffer);

        ++this.length;

        return buffer;
    }

    getBufferAtOffset(offset) {
        return this.queue[this.index + offset] || null;
    }

    getCurrentBuffer() {
        return this.getBufferAtOffset(0);
    }

    getNextBuffer() {
        return this.getBufferAtOffset(1);
    }

    getPrevBuffer() {
        return this.getBufferAtOffset(-1);
    }

    flushBufferAtOffset(offset) {
        let index = this.index + offset;

        if (this.queue[index]) {
            return this.queue.splice(index, 1);
        }
    }

    prepareBufferAtOffset(offset) {
        let buffer = this.getBufferAtOffset(offset);

        if (buffer) {
            buffer.prepare();
        }
    }

    prepareNextBuffer() {
        this.prepareBufferAtOffset(1);
    }

    flushPreviousBuffer() {
        this.flushBufferAtOffset(-1);
    }

    playBufferAtOffset(offset) {
        let buffer = this.getBufferAtOffset(offset);

        if (buffer) {
            return buffer.play();
        }

        console.log('non-existent buffer at offset: ', offset, this.index);

        return promiseToCallMeBack(callback => callback());
    }

    async beginLoop() {
        this.prepareBufferAtOffset(0);

        let cycles = 0;

        while (this.playing) {
            while (this.index < this.length && this.playing) {
                console.time('playing current buffer');
                let promise = this.playBufferAtOffset(0);

                async(this.flushPreviousBuffer);
                async(this.prepareNextBuffer);

                await promise;

                console.timeEnd('playing current buffer');

                this.bus.emit('next');

                if (this.playing) {
                    ++this.index;
                }

                console.log(this.length);
            }

            await sleep(10);
            ++cycles;

            if (cycles % 20 === 0) {
                console.log('waiting for buffer')
            }
        }

        console.log(this.index, this.length);
    }

    play() {
        this.playing = true;

        console.log(this.index);

        this.beginLoop();
    }

    pause() {
        this.playing = false;
    }

    stop() {
        this.playing = false;

        this.flush();
    }

    flush() {
        this.queue = [ ];
        this.index = 0;
        this.length = 0;

        console.log('flush');
    }
}

export default Audio;