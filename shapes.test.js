const { describe } = require("node:test")
const {Triangle, Circle, Square} = require('./shapes.js')

describe('shape', () => {
    describe('triangle', () => {
        it('should return the render', () => {
            const shape = new Triangle();
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="undefined" />');
        })
        it('should return with color', () => {
            const shape = new Triangle();
            shape.setColor('green');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        })
    })
    describe('circle', () => {
        it('should render', () => {
            const shape = new Circle();
            shape.setColor('red');
            expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="red" />');
        })
    })
    describe('square', () => {
        it('should render', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="blue"/>');
        })
    })
})