function secondLargest(arr) {
    /*Using the .sort function to get the hierachy of the elements
    in the array and using the index number 1, we get second largest number
    */
  let sortedArr=arr.sort((a,b)=>{return b-a})
  return sortedArr[1];
}
module.exports = secondLargest
console.log(secondLargest([2, 30, 4, 57, 6, 9, 100]))