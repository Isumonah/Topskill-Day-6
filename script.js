let input = document.getElementById("input")
let submit = document.getElementById("submit")
let numbers = document.getElementById("numbers")
let sort = document.getElementById("sort")
let sortedArray = document.getElementById("sorted-array")

let myArray = []
let mySortedArray = []
let highest = ""
submit.addEventListener("click", function(){
  if(myArray.length === 5){
    alert("You can only choose 10 numbers")
  }
  else if(myArray.length === 4){
    myArray.push(input.value)
  numbers.innerHTML += input.value
   input.value = "" ;
  }
  else{
  myArray.push(input.value)
  numbers.innerHTML += input.value + ", "
    input.value = "";
  }
})

  sort.addEventListener("click", function(){
  sortedArray.innerHTML += myArray.sort(function(a, b){return a-b }).join(", ");
    
})