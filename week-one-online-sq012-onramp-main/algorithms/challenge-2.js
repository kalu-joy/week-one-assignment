function filterArray(arr) {
   // Here we would just filter out the strings and return only the integers
    return arr.filter(function (item) {return typeof item==='number'})
}

module.exports = filterArray
console.log(filterArray(["$%^", 567, "&&&"]));