let greetingsForUsers = 'hello my dear user';// значення цього виду змінноє можна потім змінювати
greetingsForUsers = 'hello my user';

const greetingsForUsers2 = 'hello';// значення цього виду змінної не можна буде в подальшому змінювати

// alert(greetingsForUsers);
// alert(greetingsForUsers2); //виводимо повідомлення для користувача

console.log(greetingsForUsers)//виводимо значення змінної в консоль

const strVar = "hi";//змінна String
const numVar = 25234;//змінна Number
const boolVar = true;//змінна Boolean

console.log(typeof/*виводимо в консоль тип змінної*/ strVar);
console.log(typeof numVar);
console.log(typeof boolVar)

let NullValue = null;
console.log(NullValue);

let UndefinedValue;
console.log(UndefinedValue);

const obj = {//обєкти з колекцією інформації
name: "John",
age: 19,
hobby: "ride a bike",
dateOfBirth: "17.07.2003"
};
console.log(obj);

let obj2 = {}//another method,how we can assign a value to an object
obj2.name = "mike";
obj2.age = 26;
obj2["hobby"] = "footbal";//another method,how we can assign a value to an object

console.log(obj2);

const Bigint = 99999999999999999999999999999n; //the letter at the end means that it is Bigint 
console.log(Bigint);
console.log(Number.MAX_SAFE_INTEGER);//the maximum allowable value of the variable