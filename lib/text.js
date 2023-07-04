class Text {
    constructor(text) {
        this.text = text;
        this.x = 100;
        this.y = 110;
    }
    setColor(color) {
        this.color = color;
    }
    setPosition(shape) {
        // Text position is different for Triangle than Circle and Square
        // Function is called in Logo class
        const shapeName = shape.constructor.name;
        if(shapeName === 'Triangle') {
            this.x = 150;
            this.y = 123;
        }
    }
    render() {
        return `<text x="${this.x}" y="${this.y}" font-size="30" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}

module.exports = Text;
