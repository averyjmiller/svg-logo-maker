const { Square, Circle, Triangle } = require('./shapes.js');

// Square Tests
describe('Square', () => {
  describe('setColor', () => {
    it('should render a blue square', () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue" />');
    });
  });
  describe('setText', () => {
    it('should generate white SVG text', () => {
      const shape = new Square();
      shape.setText("SVG", "white");
      expect(shape.generateText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
    });
  });
  describe('setText', () => {
    it('should throw an error when the text is more than 3 characters', () => {
      const shape = new Square();
      const cb = () => shape.setText("SVG123", "white");
      const err = new Error('Text must be 3 characters or less')
      expect(cb).toThrowError(err);
    });
  });
});

// Circle Tests
describe('Circle', () => {
  describe('setColor', () => {
    it('should render a blue circle', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });
});

// Triangle Tests
describe('Triangle', () => {
  describe('setColor', () => {
    it('should render a blue triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
  describe('setText', () => {
    it('should generate white SVG text', () => {
      const shape = new Square();
      shape.setText("SVG", "white");
      expect(shape.generateText()).toEqual('<text x="150" y="140" font-size="50" text-anchor="middle" fill="white">SVG</text>');
    });
  });
});