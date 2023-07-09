class Shape {
  setColor(color) {
    this.color = color;
  }

  setText(text, textColor) {
    if(text.length > 3) {
      throw new Error('Text must be 3 characters or less');
    }
    
    this.text = text;
    this.textColor = textColor;
  }

  generateText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  generateText() {
    return `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

module.exports = { Square, Circle, Triangle };