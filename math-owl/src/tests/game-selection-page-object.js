import ReactSelector from 'testcafe-react-selectors';

export default class GameSelectionPage {
    constructor () {
        this.icon = ReactSelector('Header Icon');
    }
}