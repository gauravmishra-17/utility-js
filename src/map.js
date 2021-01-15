const map = (list, operation) => {
  var array = [],
    start = 0;
  changeValue(list, operation, array, start);
  return array;
};

const changeValue = (list, operation, array, index) => {
  if (index == list.length) return;
  array.push(operation(list[index]));
  changeValue(list, operation, array, index++);
};
module.exports = map;
