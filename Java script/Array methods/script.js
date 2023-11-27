const array = [
    {
        name: 'Bob',
        age: 13,
        sex: 'male'
    },
    {
        name: 'Mike',
        age: 62,
        sex: 'male'
    },
    {
        name: 'Gloria',
        age: 15,
        sex: 'female'
    },
    {
        name: 'Den',
        age: 28,
        sex: 'male'
    },
    {
        name: 'Mia',
        age: 24,
        sex: 'female'
    },
    {
        name: 'Julia',
        age: 45,
        sex: 'female'
    }
]
// const count = {
//     men: 0,
//     woman: 0
// }

// array.forEach(function(item){//метод який пробігається по масиву
// item.sex === 'male' ? count.men++ : count.woman++; // умова ? тоді... : в іншому випадку... 
// })

// console.log(count)//кількість жінок і чоловіків в масиві

// const adultUsers = array.filter(function(item){//метод фільтр поверне новий масив в змінній adultUsers не змінюючи попереднього оригінального масиву
//     return item.age >= 18;
// })
// console.log(adultUsers)



// const correctNames = array.map(function(item){   //пробігається по масиву та модифікує його записи та повертає новий масив
//     return item.sex === "male" ? 'Mr.'+ item.name : "Mrs."+ item.name
// })
// console.log(correctNames);


                                   //зберігає значення / отримує нове значення яке треба додати до акумулятора (вік наступного користувача)         
const summ = array.reduce(function(    accumulator,       currentValue){//метод повертає суму значень усіх елементів масиву
    return accumulator + currentValue.age;
},0)// 0 - це точа відліку
console.log(summ / array.length);//виводимо в консоль середній вік користувачів

// const foundObj = array.find(function(item){//метод завжди повертає одне унікальне значення
//     return item.name === 'Mike'
// })
// console.log(foundObj)

// const somebody = array.some(function(item){//метод який перевіряє масив на те, чи хочаб один елемент в цьому масиві задовільняє дану умову
//     //і в залежності від перевірки він повертає булеве значення 
//     return item.age === 24;
// })
// console.log(somebody);


// const everybody = array.every(function(item){//метод перевіряє чи кожен елемент задовільняє дану умову 
//     //і тоді відповідно до перевірки  повертає булеве значення 
//     return item.age > 12;
// })
// console.log(everybody);

// const findIndex = array.findIndex(function(item){//метод виводить порядковий номер елемента,який задовільнив дану умову,в консоль 
//     return item.age === 15;
// })
// console.log(findIndex);
console.log(summ);
console.log(array)