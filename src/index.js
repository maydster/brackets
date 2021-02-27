module.exports = function check(str, bracketsConfig) {

  let stack = [];

  for(let char of str) {
    
    for(let item of bracketsConfig) {

      if(char == item[0] && item[0] != item[1]) { // test for opening brackets
        stack.push(char);
      } else if(char == item[1] && item[0] != item[1]) { // test for closing brackets
        let temp = stack.pop();
        if(temp != item[0]) return false;
      } else if (char == item[0] && item[0] == item[1]){ // test for '|'
        if(stack[stack.length-1] != item[0]) {
          stack.push(char);
        } else {
          stack.pop();
        }
      }

    }

  }

  return !stack.length;

}
