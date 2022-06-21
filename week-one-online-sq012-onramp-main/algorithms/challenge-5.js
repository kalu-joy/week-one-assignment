function filterList(arr) {
    // Here we would just filter out the strings and return only the integers
    return arr.filter(function(item) {return typeof item==='number'})
}
  module.exports =filterList
console.log(filterList([3, "Pop", 8, 9, 7,"learn" ]));
