let arr = [1,2,false,"hello",24,"world",undefined,null,"error",22]
let word = arr.filter(item => typeof(item) === "string")
let number = arr.filter(item => typeof(item) === "number")
let boolean = arr.filter(item => typeof(item) === "boolean")
let undeFined = arr.filter(item => typeof(item) === "undefined")
let object = arr.filter(item => typeof(item) === "object")
console.log(
   "Stringов в массиве" + " " +word.length +"." +"Это" +" " +word + "." +
   "Чисел в массив" + " " +number.length + "." + "Это" + " " +number + "." + 
   "Booleanов в массиве" + " " +boolean.length + "." + "Это" + " " +boolean + "." +
   "Undefinedов в массиве" + " " +undeFined.length + "." + "Это" + " " +undeFined + "." + 
   "Objectов в массиве" +" " +object.length + "." + "Это" + " " +object + "."  
)
if(number.length>5){
   alert("Good")
}
else{
   alert("Bad")
}
