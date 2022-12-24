function hasTargetSum(array, target) {
    

  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if ((array[j] + array[i])=== target){
        return true
      } 
      }
      
    }
    return false
    }
  
  



/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* pseudocode
  iterate the array from the beginning
    Iterate again but from the 2nd item in the array
      compare the two neighbouring pairs,
        if the first value equals the sum minus the value of the next index
        return true
  else return false 
*/

/*
  Add written explanation of your solution here
  write a function hasTargetSum that takes two paramenter an array and the sum.
  The function checks if there any two numbers in the array whose sum is equal to the sum in the parameter
  and returns true else if no such pair exists returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([6, 6, 6], 12));
}

module.exports = hasTargetSum;
