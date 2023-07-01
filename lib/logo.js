class Logo {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
        setTextPosition();
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    setTextPosition() {
        this.text.setPosition();
    }
    render() {
        return `<svg width="${this.width}" height="${this.height}">
    ${this.shape.render()}
    ${this.text.render()}
</svg>`
    }
}