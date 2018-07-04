// Task 4 - Add to an array at a specific index point in the array

var arraySplice = [10, 20, 30, 40, 50];

// inserting in to the box should add to the array. 

//var arrayInsert = document.getElementById("buttonAdd").addEventListener('click', addToArray);
//
//
//function addToArray(){
//    
//    arraySplice.push();
//    console.log(arraySplice);
//    
//}

var indexArray = document.getElementById("buttonAdd").addEventListener('click', addPosition);

function addPosition(){
    var inputData = document.getElementById("input1").value;
    var secondInput = document.getElementById("input2").value;
    arraySplice.splice(secondInput, 0, inputData);
    console.log(arraySplice);
}

var indexRemove = 
document.getElementById("buttonRemove").addEventListener('click', removeItem);

function removeItem(){
    var thirdInput = document.getElementById("input3").value;
    arraySplice.splice(thirdInput, 1);
    console.log(arraySplice);
}


