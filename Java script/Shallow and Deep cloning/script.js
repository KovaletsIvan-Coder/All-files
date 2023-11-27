//Shallow method of cloning:

// Spret operator
//вбудований об'єкт Object.assign

const obj1 = {
    name: 'john',
    age: 27,
    favoriteFood:{
        sweet:'chocolate',
        salty: 'pizza'
    }
}

// obj2 = {...obj1};  //Spret operator cloned yhe value and passed it to the new variable

// obj2.name = 'Vitaly';  //MODIFY THE COPY

// console.log(obj1);
// console.log(obj2);



// const obj2 = Object.assign({},obj1);  //вбудований об'єкт Object.assign
// obj2.name = 'Mike'
// console.log(obj2);
// console.log(obj1);






//DEEP CLONING OF OBJECTS:

//JSON.parse(JSON.stringify(obj1))  -   but it does not work if the object has a method ...function()
//Lodash library --- THE BEST WAY TO DEEP CLONE

//             //this method convert from text to object     // this method converts the object to text
// const obj2 = JSON.parse                                  (JSON.stringify(obj1));
// obj2.name = "Bob"
// obj2.favoriteFood.salty = 'burger'
// console.log(obj1);
// console.log(obj2);


//Cloning Arrays:
//The same way


array1 = [
    {
        name: 'Donatello',
        age: 13,
        sayHello(){     //the same problem, method does not copy
            console.log('hello');
        }
    },
    {
        name: 'Rafael',
        age: 11,
    },
    {
        name: 'Mikelangelo',
        age: 12,
    }

]

// array2 = JSON.parse(JSON.stringify(array1))           //JSON.parse(JSON.stringify(array1))
// array2.push({
//     name: 'Leonardo',
//     age: 14
// })
// console.log(array1);
// console.log(array2);


array2 = _.cloneDeep(array1);    //Lodash Library  THE BEST WAY TO DEEP CLONE
array2[0].name = 'Splinter';
array2[0].age = 25;

console.log(array1);
console.log(array2);

