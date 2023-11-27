const array =[
    {name: 'bob', age: 20},
    {name: 'julia', age: 30},
    {name: 'daniel', age: 18},
    {name: 'robert', age: 45},
    {name: 'mike', age: 35},
    {name: 'monica', age: 24},
    {name: 'sara', age: 60},
]

// function compliment (arr){
//     for (const key in arr) {
//         if(arr.age[key] > 30){
//             arr.name[key] = arr.name[key] +'old'

//         }
//     }
//     return arr
// }
// compliment(array)

function compliment (arr){
    for(let i = 0; i < arr.length; i++){
        const element = arr[i]
        element.age >= 30 
        ? element.name = 'old ' + element.name 
        : element.name = 'young ' + element.name
    }
    return arr

}
console.log(compliment(array)
);