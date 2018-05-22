import GameSelectionPage from './game-selection-page-object.js';
import { ReactSelector } from 'testcafe-react-selectors';

fixture `Game Selection test`
        .page `http://localhost:3000/`;

const page = new Page();

test('Select addition game', async t => {
    const addition = ReactSelector('Header Icon').find("#Add");
    const startButton = ReactSelector('Header Icon').find(".play.icon");
    await t
        .click(addition)
        .expect(addition.exists).ok()
})