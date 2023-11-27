const subscribers = [
    {name:"Paul", age:23},
    {name:"Mike", age:19},
];
let userHaveNewSubscriber = true;

if (userHaveNewSubscriber){
 subscribers.push({name:"Bob", age: 43})//.push() цей метод додає новий елемент в кінець масиву (краще використовувати цей)
}                                      // .pop() цей метод видаляє останній елемент з масиву (краще використовувати цей)
                                      //.shift() видаляє перший елемент з масиву 
                                     //.unshift() додає перший елемент до масиву

console.log(subscribers);




const subscribers2 = [
    {name:"User1", age:23},
    {name:"User2", age:19},
    {name:"User3", age:22},
    {name:"User4", age:22},
    {name:"User5", age:22},
    {name:"User6", age:22},
    {name:"User7", age:22}
];
let userHaveNewSubscriber2 = true;
if (userHaveNewSubscriber2){
    subscribers2.splice(0,3,/*we can write here the element, that we want to put in place of the deleted one*/) 
} 
console.log(subscribers2);

//практичне завдання (вивести повідомлення якщо підписників більше семи використовуючи масив і функції)
const subscribers3 = [
    {name:"user1"},
    {name:"user2"},
    {name:"user3"},
    {name:"user4"},
    {name:"user5"},
    {name:"user6"},
    {name:"user7"},
    {name:"user8"},
    {name:"user9"},
];
function sayCongrats(arr){
    arr.length >= 2 ? alert('congrat') : alert('lonelines has its advantages too)')
    alert("number of subscribers: " + arr.length)
}

sayCongrats(subscribers3);
