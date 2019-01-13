import Component from 'component';
import SampleRate from 'components/inputs/sample-rate';
import PitchShift from 'components/inputs/pitch-shift';

class Inputs extends Component {
    ready() {
        this.sampleRate = this.component(SampleRate);
        this.pitchShift = this.component(PitchShift);
    }
}

export default Inputs;