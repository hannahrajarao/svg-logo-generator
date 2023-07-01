const Text = require('./text.js');

describe('text', () => {
    describe('render', () => {
        it('should render correctly', () => {
            const t = new Text('Test');
            t.setColor('white');
            expect(t.render()).toEqual('<text x="100" y="110" font-size="30" text-anchor="middle" fill="white">Test</text>');
        })
    });
})
