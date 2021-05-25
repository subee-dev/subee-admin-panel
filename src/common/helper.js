export function enumToArray(enumObject) {
  var all = [];
  for (var key in enumObject) {
    all.push(enumObject[key]);
  }
  enumObject.all = all;
}
