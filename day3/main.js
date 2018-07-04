// DAY 3 JAVASCRIPT!! :)

// SYNTAX FOR SWITCH STATEMENTS
/*
switch(expression)
{
    case condition1: statement
    break;
    
    case condition2: statement
    break;
    
    case condition3: statement
    break;
        
    default: statement 
}
*/
/*
var bankBalance = 100000;

console.log("Start point");

switch(bankBalance)
{
    case 0: console.log("What happened?");
    break;
        
    case 1000: console.log("Keep going!");
    break;
        
    case 10000: console.log("Almost there!");
    break;
        
    case 100000: console.log("Living the dream!");
    break;
        
    default: console.log("None of the cases apply.");
}

console.log("end point");
*/

//--------------------------ARRAYS----------------------------------

//The SYNTAX FOR DECLARING NEW ARRAYS - Arrays are a collection of things.
/*
var students = new Array(3); //this allows you to set length before adding any items. 

var students1 = ["Students1", "Students2", "Students3"]; // This one is best practice, no set number you can have within the array.

console.log(students);
console.log(students1);

var randomDataType = [
    
    1, // number [0]
    
    false, //boolean [1]
    
    "Test", //string [2]
    
    {
        name: "Sukhveer",
        _class: "JavaScript" //anonymous function [3]
    },
    
    function(_class){
        var greeting = "Good morning ";
        console.log(greeting + _class);          //function [4]
    }
    
]

console.log(randomDataType);

(randomDataType[4](randomDataType[3].name));
*/

// Array Task 1 ----Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage. 

//var userArray = [];
//
//
//document.getElementById("button").addEventListener('click', showArray);
//
//function showArray(){
   
    
    //Task 1
//    userArray[0] = document.getElementById("input1").value;
//    userArray[1] = document.getElementById("input2").value;
//    userArray[2] = document.getElementById("input3").value;
//    
//    document.getElementById("arrayresult").innerHTML = userArray[0];
//    document.getElementById("arrayresult1").innerHTML = userArray[1];
//    document.getElementById("arrayresult2").innerHTML = userArray[2];
//    
  
// Task 2 - Collect a user input and allocate it to a new array using the push method.
// Display the array and the length of the array (number of elements) using array.length on the webpage

//var userEntry = document.getElementById("input4").value; 
//userArray.push(userEntry);
//document.getElementById("arrayresult3").innerHTML = userArray + "number array elements " + userArray.length;
//
//}

//remember to look at the HTML!

// Task 3 -  Add and Remove first and last elements on and off an array using shift, unshift, push and pop methods. 

// Array created
//var popShiftUnshift = ["random", "array", "test", 50, true];
//
//// setting the variable for popping the element from the array, using the necessary ID from HTML.
//var poppedElement = document.getElementById("pop").addEventListener('click', popMethod);
//
////creating the function to pop the element from the array
//function popMethod(){
//popShiftUnshift.pop();
//console.log("this element is now out of the array : " + popShiftUnshift + ".");
//}
//
//
//var shiftElement = document.getElementById("shift").addEventListener('click', shiftMethod);
//
//function shiftMethod(){
//popShiftUnshift.shift();
//console.log("The item which has been shifted is " + popShiftUnshift);    
//}
//    
//
//var unShiftElement = document.getElementById("unshift").addEventListener('click', unshiftMethod);
////remember, the last parameter is used as the function name so it runs.
//function unshiftMethod(){
//popShiftUnshift.unshift();
//console.log("This element has been unshift: " + popShiftUnshift);
//}

//var unshiftElement = popShiftUnshift.unshift();
//document.write("The length of the array is " + unshiftElement);


//---------TASK 4-----------------



















    
                 
                 
                 