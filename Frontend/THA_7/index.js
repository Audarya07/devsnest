// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno


function printKeys(obj){
    return Object.keys(obj).join(",");
}
console.log("Question 1)");
console.log(printKeys({ name : "David Rayy", sclass : "VI", rollno : 12 }));
console.log("---------------------------------------------------");

//  2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: { name : "David Rayy", sclass : "VI", rollno : 12 }; 

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
function deleteProperty(obj){
    delete obj.rollno;
    return obj;
}
console.log("Question 2)");
console.log("Before = ", student);
deleteProperty(student);
console.log("After = ", student);
console.log("---------------------------------------------------");


// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
function getLength(obj){
    return Object.keys(obj).length;
}
console.log("Question 3)");
console.log("Length = ", getLength({ name : "David Rayy", sclass : "VI", rollno : 12 , age: 10}));
console.log("---------------------------------------------------");


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

function status(list){
    for(i of list){
        console.log(i.title, " -> Reading status = ", i.readingStatus);
    }
}
console.log("Question 4)");
status(library);
console.log("---------------------------------------------------");


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
function volume(r, h){
    var volume = 3.143 * r * r * h;
    // solution 1
    // return volume.toString().split(".")[0] + "." + volume.toString().split(".")[1].slice(0, 4);
    
    return volume.toFixed(4);
}
console.log("Question 5)");
console.log(volume(53, 71));
console.log("---------------------------------------------------");


// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort((a, b) => {
    // sort based on libraryID
    return a.libraryID - b.libraryID;
});

console.log("Question 6)");
console.log(library);
console.log("---------------------------------------------------");
