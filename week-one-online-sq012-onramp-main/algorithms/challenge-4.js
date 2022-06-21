function sumTwoSmallestNums(arr) {
    let sum=0;
    let filteredArr=arr.filter((item)=>{return item>0; });
    let sortFilteredArr=filteredArr.sort((a,b)=>{return a-b});
    sum=sortFilteredArr[0]+sortFilteredArr[1];
    return sum;
 }
  module.exports =sumTwoSmallestNums
  console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));