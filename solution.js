// Given an array, you must increment any duplicate elements until all its elements are unique. In
// addition, the sum of its elements must be the minimum possible within the rules. For example,
// if arr = [3, 2, 1, 2, 7], then arrunique = [3, 2, 1, 4, 7] and its elements sum to a minimal
// value of 3 + 2 + 1 + 4 + 7 = 17.


// Function Description

// Complete the getMinimumUniqueSum function in the editor below to create an array of unique
// elements with a minimal sum. Return the integer sum of the resulting array.

// getMinimumUniqueSum has the following parameter(s):

//     arr:  an array of integers to process

// Constraints

// 1 ≤ n ≤ 2000
// 1 ≤ arr[i] ≤ 3000 where 0 ≤ i < n
// Input Format For Custom Testing


// Sample Case 0

// Sample Input 0

// 1
// 2
// 2

// Sample Output 0

// 6

// Explanation 0

// inputarray = [1, 2, 2]

// The duplicate array elements 2 must be addressed. The minimum unique array will be achieved by
// incrementing one of the twos by 1, creating the array [1, 2, 3]. The sum of elements in the
// new array is 1 + 2 + 3 = 6.


//let inputarray = [7, 5, 7, 2, 1, 2,7, 7]
let inputarray = [5, 5, 5,4,4,4,3,4]
//let inputarray = [4, 2, 1,2,6]
//let inputarray = [1 ,3,1, 2 ,9 ,1 ,9,9,9,9,9 ]
//let inputarray = [3, 2, 7, 25, 5,7,6,7]
//let inputarray = [5,5,1,1,2,2,1]

getMinimumUniqueSum(inputarray)

function getMinimumUniqueSum(numbers) {

     console.log("Actual input Array :  " ,numbers )
     numbers.sort()
     let arrylength = numbers.length - 1 ;

  for(let i = 0 ; i < arrylength  ; i+=1 ) {

            for (let a = i+1  ; ( numbers[i] == numbers[a]  ) ;  ) {

                  numbers.splice(a , 1, numbers[a]+1)
                  numbers = numbers.sort((a, b) => a - b)

                     if( ( numbers[i] == numbers[a] ))  {
                        continue }
                     else
                         break
             }

  }

    numbers = numbers.sort((a, b) => a - b)
    console.log("Final Array : ", numbers)
    let sum =0
    for(let i in numbers) { sum += numbers[i] }

    console.log("Array sum : " ,sum)

  }  /// function end

