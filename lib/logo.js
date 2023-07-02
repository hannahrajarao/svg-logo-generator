class Logo {
    constructor(text, shape) {
        this.text = text;
        this.shape = shape;
        // Add default svg size
        this.width = 300;
        this.height = 200;
        this.setTextPosition();
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    setTextPosition() {
        this.text.setPosition(this.shape);
    }
    render() {
        return `<svg width="${this.width}" height="${this.height}">
    ${this.shape.render()}
    ${this.text.render()}
</svg>`
    }
}

module.exports = Logo;
