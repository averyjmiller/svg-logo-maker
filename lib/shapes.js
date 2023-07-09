class Shape {
  constructor(name, text) {
    this.name = name;
    this.text = text;
    this.color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  constructor(name, text) {
    super(name, text)
  }

  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  constructor(name, text) {
    super(name, text)
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  constructor(name, text) {
    super(name, text)
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

module.exports = { Square, Circle, Triangle };