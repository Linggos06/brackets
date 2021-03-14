module.exports = function check(str, bracketsConfig) {
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|'
};

let stack = [];



for (let i = 0; i < str.length; i++) {
  if(str[i] === '|'){
    if(!stack.includes(str[i])){
      stack.push(str[i]);
      continue;
    }else {
      let last = stack.pop();
       if (str[i] !== map[last]) {
         return false
         }
         return true;
      }
      
  }
    
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
  
        stack.push(str[i]);
    }else{
      let last = stack.pop();
       if (str[i] !== map[last]) {
         return false
         }
      }
}
      
return stack.length === 0;
}
