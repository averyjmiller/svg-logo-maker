const prompts = [
  {
    type: 'input',
    message: 'Enter your logo text. (Up to 3 characters)',
    name: 'text'
  },
  {
    type: 'input',
    message: 'Enter your logo text color. (Keyword or hexidecimal)',
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
    message: 'Enter your logo color. (Keyword or hexidecimal)',
    name: 'color'
  }
]

module.exports = prompts;