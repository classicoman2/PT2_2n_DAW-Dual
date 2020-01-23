var toc = require('markdown-toc');

console.log(toc('README.MD').content);
//console.log(toc('# One\n\n# Two').content);

// Results in:
// - [One](#one)
// - [Two](#two)