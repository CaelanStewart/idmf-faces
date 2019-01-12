class FaceToSound {
    constructor(canvas) {
        this.canvas = canvas;
        this.audio = new AudioContext();
    }

    getAudioBuffer() {
        let canvas = this.canvas,
            length = canvas.getPixelCount(),
            audio = this.audio,
            buffer = audio.createBuffer(1, length, audio.sampleRate / 2),
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
                    * 2
                ) / 255
            ) - 1;
        }

        return buffer;
    }

    play() {
        let buffer = this.getAudioBuffer(),
            source = this.audio.createBufferSource();

        source.buffer = buffer;

        source.connect(this.audio.destination);

        source.start();
        console.log(buffer);
    }
}

export default FaceToSound;