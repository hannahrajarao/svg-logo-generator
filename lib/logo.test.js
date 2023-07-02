const Text = require('./text.js');
const {Triangle, Circle, Square} = require('./shapes.js');
const Logo = require('./logo.js');

describe('text', () => {
    describe('render', () => {
        it('should render correctly', () => {
            const t = new Text('Test');
            t.setColor('white');
            expect(t.render()).toEqual('<text x="100" y="110" font-size="30" text-anchor="middle" fill="white">Test</text>');
        });
    });
});
describe('logo', () => {
    describe('render', () => {
        it('should render circle', () => {
            const text = new Text('Text');
            text.setColor('black')
            const shape = new Circle();
            shape.setColor('white');
            const logo = new Logo(text, shape);
            logo.setSize(300, 200);
            expect(logo.render()).toEqual(`<svg width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="white" />
    <text x="100" y="110" font-size="30" text-anchor="middle" fill="black">Text</text>
</svg>`);
        });
        it('should render triangle', () => {
            const text = new Text('Text');
            text.setColor('white')
            const shape = new Triangle();
            shape.setColor('blue');
            const logo = new Logo(text, shape);
            logo.setSize(300, 200);
            expect(logo.render()).toEqual(`<svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="123" font-size="30" text-anchor="middle" fill="white">Text</text>
</svg>`);
        });
    });
});
