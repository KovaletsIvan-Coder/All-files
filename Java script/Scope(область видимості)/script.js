const number = 10;//змінна глобальної області видимості
console.log(number);

function local (){
let num = 23;
let number = 64; //ми можемо створювати в локальній області видимості змінну з таким самим ім'ям як в глобальній обл
console.log(num);//змінна локальної області 
console.log(number);// в локальній області ми можемо виводити змінні глобальної області
}
local();

//console.log(num);   //не виведеться

function local2 (){
const age = 98;

function sayAge(){
console.log(age);  //якщо функція немає змінної з такою назвою,вона шукатиме її вище   
}
sayAge();
}

local2();
// але ми неможемо навпаки достукатись до змінної яка знаходиться в нищій області видимості
//з аргументами які приймає функція так само


//домашка: написати функцію яка приймає масив об'єктів,
// пробігається по ньому і додає прикметники, кі описують людину відповідно до її статі

const people = 
[
    {name: 'Monica', gender: 'female'},

    {name: 'Chandler', gender: 'male'},

    {name: 'Moly', gender: 'female'},

    {name: 'Joey', gender: 'male'},

    {name: 'Rachel', gender: 'female'},

    {name: 'Ross', gender: 'male'},
];

function peopleF(arr){
for(let i = 0; i < arr.length; i++){
    if(arr[i].gender === 'male'){
        arr[i].name = "handsome " + arr[i].name;
    }else{
        arr[i].name = "beautiful " + arr[i].name;
 
    }
    
}return arr
}
console.log(peopleF(people));