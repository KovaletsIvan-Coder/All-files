//написатит функцію яка буде приймати масив чисел від 1 до 10 та число користувача 
//і шукати кількість співпадінь у масиві з числом користувача
//виводити алертом результат


const userNumber = 4;
const arrayNumbers =[1,4,2,6,4,8,2,5,7,4,7,3,4,];
let numberOfCoincidence = 0;

function coincidence (arr,number){

for(i = 0; i < arr.length; i++){
    if(arr[i] === number){
       numberOfCoincidence++;
    }
}
return numberOfCoincidence
}

coincidence(arrayNumbers, userNumber)

numberOfCoincidence > 0 ? alert('number of matches: ' + numberOfCoincidence) : alert("no matches");




















//інше практичне завдання

//  function isNumberRepeated(arr,number){
//     let coincidence = 0;
//     for(item of arr){
//         if(item === number){
//             coincidence++;
//         }
//     }
//     return coincidence > 0 ? coincidence : "даного числа в списку немає"
//  }
//  console.log(isNumberRepeated([1,4,2,7,5,4,3,1],1));