const tail = require("./tail");
var head = 0;
const map = (list, operation) => {
  var array = [];
  changeValue(list, operation, array);
  return array;
};

const changeValue = (list, operation, array) => {
  if (list.length == head) return;
  array.push(operation(list[head]));
  changeValue(tail(list), operation, array);
};
module.exports = map;
