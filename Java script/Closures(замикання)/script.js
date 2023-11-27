const firstName = 'Bob';
function sayHello(){
    const lastName = 'Marley';
     return function(){
        console.log(firstName);
        console.log(lastName);
     }
}
//два варіанти виклику функції

//1) sayHello()();//() для того щоб викликати функцію яка знаходиться всередині функції

//2)
const test = sayHello() // ми в цю змінну передаємо те що повертає функція
 test() 

 //Практичне завдання

 let name1 = 'John'

 function sayMyName(){
   console.log(name1);//щоб знайти значення цієї змінної, функція звертається до посилання на глобальний скоуп
   // і виводить видозмінене значення змінної томущо вона запам'ятовує лише поточне значення змінної
 }
  
 name1 = 'Mike'

 sayMyName()