import Component from 'component';
import Audio from 'controllers/audio';
import Image from 'components/player/image';
import Canvas from 'components/canvas';
import FaceToSound from 'controllers/face-to-sound';

class Player extends Component {
    ready() {
        this.elements = { };

        this.image = this.component(Image);
        this.canvas = this.component(Canvas);

        this.audio = this.make(Audio);
        this.faceToSound = this.make(FaceToSound, this.canvas, this.audio);

        this.cacheElements();
        this.attachEvents();
    }

    cacheElements() {
        this.elements.play = this.query('#play');
        this.elements.stop = this.query('#stop');
    }

    attachEvents() {
        this.elements.play.addEventListener('click', this.onPlay);
        this.elements.stop.addEventListener('click', this.onStop);

        this.image.bus.on('image-change', this.onImageChange);
    }

    async onImageChange(event, image) {
        await this.canvas.drawImageFromDataUrl(image.result);

        this.faceToSound.updateImageData();
    }

    onPlay() {
        try {
            this.play();
        } catch (error) {
            this.handleError(error);
        }
    }

    onStop() {
        try {
            this.stop();
        } catch (error) {
            this.handleError(error);
        }
    }

    play() {
        if ( ! this.audio.context) {
            this.audio.initContext();
        }

        if ( ! this.image.getFile()) {
            this.image.throwMissingFileError();
        }

        if (this.audio.playing) {
            throw new Error('Your face is already playing. Do you want to listen to two of your faces simultaneously or something?')
        }

        this.faceToSound.play();

        this.bus.emit('play');
    }

    stop() {
        this.faceToSound.stop();

        this.bus.emit('stop');
    }
}

export default Player;