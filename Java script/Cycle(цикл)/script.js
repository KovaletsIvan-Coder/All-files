let subscribers = [
    {name: 'user1', isCloseFriend: true},
    {name: 'user2', isCloseFriend: false},
    {name: 'user3', isCloseFriend: true},
    {name: 'user4', isCloseFriend: false},
    {name: 'user5', isCloseFriend: false},
    {name: 'user6', isCloseFriend: true},
    {name: 'user7', isCloseFriend: false},
    {name: 'user8', isCloseFriend: true},
    {name: 'user9', isCloseFriend: false},
    {name: 'user10', isCloseFriend: false}
];

// for(let i = 0; i < subscribers.length; i++ ) {
//     console.log(subscribers[i])
// }; //цикл for


// for(let i = subscribers.length; i >= 0; i-- ) {
//     console.log(subscribers[i])
// }   зворотній цикл for

// for(const item of subscribers){
//     console.log(item);
// }  // for of


// const obj ={
//     name: 'Bob',
//     age: 13,
//     tel: 380638282376,
//     gender: 'male'
// }
// for(const key in obj){
//     console.log(obj[key]);  //(key)самі змінні   (obj[key])значення змінних
// }  for in


// let index = 0;
// while(index < subscribers.length)
// {
//     console.log(subscribers[index]);
//     index++;
// }   //    cycle while

// do 
// {
// console.log(subscribers[index]);
// index++;
// } while(index > subscribers.length);//  cycle do while



// for
// for of
// for in не для масиву а для значень об'єкта
// while
// do while

//практичне заняття - створити функцію яка буде приймати масив чисел 
// та підносити кожне число до квадрату

const arrNumbers = [1,2,3,4,5,6,7,8,9];

function square(arr){
    for(let i = 0 ; i < arr.length; i++){
       console.log(arr[i] * arr[i]) 
    }
}
square(arrNumbers)