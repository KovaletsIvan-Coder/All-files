/*const num1 = 13;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);//вираховує залишок

//addition asignment(доповнене присвоєння)

let num3 = 30;
console.log(num3 += 40);//скорочена зміна значення
// console.log(num3 -= 20);
// console.log(num3 /= 3);
// console.log(num3 *= 3);

// оператори порівняння

let age1 = 18;

if(age1 === 18){//чи число в змінній дорівнює числу
    alert("Congrat, you are allowed to watch our content")
}

let age2 = 19;

if(age2 >= 18){//чи число в змінній більше або дорівнює числу 
    alert("Congrat")
}

let name = 'john';
if(name === 'john'){
alert('Your name sounds good');
}
 
let age3 = 19;
if(age3 !== 18){//чи число в змінній не дорівнює числу 
    alert("it is not 18")
}*/


//logical operators
let num4 = 32;
let word = 'flower'
if(num4 === 32 && word === 'flower'){ // усі умови повинні справдитись
console.log('done1');
}

if(num4 === 32 || word === 'ball'){ // хочаб одна умова повинна справдитись
console.log('done2');
}

console.log('red'+'dog');//відбувається злиття слів,якщо не додати відступ

const obj = {
name: 'john',
age4: 19, 
sex: 'male'
}
delete obj.sex;//deletes any values from the object
console.log(obj);

console.log('age4' in obj);//для того щоб перевірити чи є в об'єкті конкретна властивість
