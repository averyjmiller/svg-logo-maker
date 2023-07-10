const prompts = [
  {
    type: 'input',
    message: 'Enter your logo text. (Up to 3 characters)',
    name: 'text',
    filter(input) {
      if(input.length > 3) {
        input = input.substring(0, 3);
      }
      return input;
    }
  },
  {
    type: 'input',
    message: 'Enter your logo text color. (Keyword or hexadecimal)',
    name: 'textColor',
    filter(input) {
      return validateColor(input);
    }
  },
  {
    type: 'list',
    message: 'Select your logo shape.',
    name: "shape",
    choices: [
      "Square", 
      "Circle", 
      "Triangle"
    ]
  },
  {
    type: 'input',
    message: 'Enter your logo color. (Keyword or hexadecimal)',
    name: 'color',
    filter(input) {
      return validateColor(input);
    }
  }
];

function validateColor(color) {
  if(color[0] === '#') {
    if (/^#?([0-9a-f]{3}){1,2}$/i.test(color)) {
      return color;
    } else {
      throw new Error(`Invalid hexadecimal: ${color}. Press CTRL ^C to exit.`);
    }
  } else {
    return color;
  }
}

module.exports = prompts;