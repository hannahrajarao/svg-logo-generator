class Shape {
    setColor(color) {
        console.log('set color', color)
        this.color = color;
    }
    render() {}
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = Triangle;