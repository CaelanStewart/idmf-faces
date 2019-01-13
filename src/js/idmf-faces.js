import Component from 'component';
import Player from 'components/player';
import Preview from 'components/preview';
import Inputs from 'components/inputs';

class IDMFFaces extends Component {
    ready() {
        this.app = this;

        this.inputs = this.component(Inputs);
        this.player = this.component(Player);

        this.preview = this.component(Preview);
    }
}


window.idmf = new IDMFFaces;