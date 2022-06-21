function sumMix(arr) {
    /*Here, we will first convert the strings to integers/numbers
    after which we can sum all the elements in the array as a number
    */
   let sum=0;
   let numberArr=arr.map((item)=>{return parseInt (item, );})
   for(let i=0;i<numberArr.length;i++){
    sum+=numberArr[i ];
   }   
   return sum;
 }

  module.exports = sumMix
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))