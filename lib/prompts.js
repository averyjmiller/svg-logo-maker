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
    name: 'textColor'
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
    name: 'color'
  }
]

module.exports = prompts;