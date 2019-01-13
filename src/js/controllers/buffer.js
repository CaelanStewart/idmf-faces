import Controller from 'controller';
import {promiseToCallMeBack} from "../util/functions";
import Bus from "../bus";

class AudioBuffer extends Controller {
    ready(audio, length, sampleRate) {
        this.audio = audio;
        this.channels = this.audio.channels;
        this.context = this.audio.context;
        this.length = length;
        this.sampleRate = sampleRate;
        this.buffer = this.audio.context.createBuffer(this.channels, length, sampleRate);

        this.channel = new Array(this.channels);

        for (let i = 0; i < this.channels; ++i) {
            this.channel[i] = this.buffer.getChannelData(i);
        }

        this.app.bus.on('pitch-shift-change', this.onPitchShiftChange);
        this.app.bus.on('stop', this.onStop);
    }

    onPitchShiftChange() {
        if (this.source) {
            this.updatePitchShift();
        }
    }

    updatePitchShift() {
        this.source.playbackRate.value = this.app.inputs.pitchShift.value;
    }

    onStop() {
        this.source.stop();
    }

    prepare() {
        this.source = this.context.createBufferSource();

        this.source.buffer = this.buffer;

        this.source.connect(this.context.destination);

        this.updatePitchShift();

        return this;
    }

    async play() {
        this.updatePitchShift();

        this.source.start();

        await promiseToCallMeBack(callback => {
            this.source.onended = callback;
        });

        console.log('ended');
    }
}

export default AudioBuffer;