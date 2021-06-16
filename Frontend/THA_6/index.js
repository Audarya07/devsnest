// Q1)
// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

console.log("----------------------------------------------")
var in1 = 'w3resources'; 
var in2 = [1, 2, 4, 0]; 
function is_array(input){
    return Array.isArray(input);
}
console.log("Question 1");
console.log(is_array(in1));
console.log(is_array(in2));
console.log("-----------------------------------------------")

// Q2)
// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function arrayClone(arr) {
    let clone = [];
    for(val of arr){
        clone.push(val);
    }
    return clone;
}
console.log("Question 2");
console.log(arrayClone([1, 2, 3, 4]));
console.log(arrayClone([1, 2, 3, [4, 0]]));
console.log("----------------------------------------")


// Q3)
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(array, n=0){
    if(n === 0){
        return array[0];
    }
    else if(n < 0){
        return [];
    }else{
        if(n > array.length){
            return array;
        }
        let newArr = [];
        return array.slice(0, n);
    }
}
console.log("Question 3");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log("----------------------------------------")

// Q4)
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function joinArr(input, sep){
    return input.join(sep);
}
console.log("Question 4");
console.log(joinArr(["Red", "Green", "White", "Black"], ","));
console.log(joinArr(["Red", "Green", "White", "Black"], "+"));
console.log("-----------------------------------------")


// Q5)
// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function mostFreq(arr) {
    mp = {};
    for(val of arr){
        if(mp[val]){
            mp[val] += 1;
        }
        else{
            mp[val] = 1;
        }
    }
    var mx = 0;
    var ch;
    for(val in mp){
        if(mp[val] > mx){
            mx = mp[val];
            ch = val;
        }
    }
    console.log(ch + " -> " + mx + " times");
}
console.log("Question 5");
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
mostFreq(arr1);
console.log("----------------------------------------")
