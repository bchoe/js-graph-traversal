'use strict';

const Node = require('./graphGenerator');

let stack = [];
let node;
let visited = [];

const DFS = (start, searchFor) => {

  stack.push(start);
  //console.log('stack*******',stack);
  while(stack.length > 0){
    node = stack.pop();
    console.log('node*******', node);
  }
}

module.exports = DFS;


// stack.push(searchFor)
// white s != empty
// let start = searchfor.pop()
// if (start != labeled as discovered)
//   label search For as discovered
//     for each edges/neighbors from v to w in start.adjacent edges/neighbors(searchFor) do stack.push w
