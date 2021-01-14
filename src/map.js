const map = (list, mapfunction) => {
  var result = [];
  var start = 0;
  mapCurrentPosition(list, mapfunction, result, start);
  return result;
};

const mapCurrentPosition = (list, mapfunction, result, currentPosition) => {
  if (currentPosition == list.length) return;
  result.push(mapfunction(list[currentPosition]));
  mapCurrentPosition(list, mapfunction, result, currentPosition + 1);
};
module.exports = map;
