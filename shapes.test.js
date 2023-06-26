const { describe } = require("node:test")
const Triangle = require('./shapes.js')

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
})