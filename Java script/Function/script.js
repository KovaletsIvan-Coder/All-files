const userName = 'Bob';
const age = 45;
const gender = 'male';

//оголошення функції
function sayHello(/*аргумент який приймає функція*/ name, age,gender){
console.log('Hello, dear '+ name +' ' + age + ' ' + gender);
}
sayHello(userName, age, gender);
sayHello(userName, age, gender);
sayHello(userName, age, gender);
sayHello(userName, age, gender);


const bigUserName = 'mike';

function UpUserName (name){
return name.toUpperCase();//повертаємо значення великими буквами
}
console.log(UpUserName(bigUserName));

function count(){
    alert(1);
    alert(2);
    return 'i like math'//код який іде після ключового слова ретурн, стає не активним\
    alert(3);    
    alert(4);
    alert(5);
    alert(6);
    alert(7);
}
 
const math = count();// в цю функцію присвоюється тільки те що повертає ключове слово return
//якщо функція не повертатиме нічого,то значення цієї функції буде undefined
alert(math)


//СТВОРЕННЯ МЕТОДУ ОБ'ЄКТА

const car = 
{
    maxSpeed: function(speed){
        console.log(speed);
    },
    numberOfGears: 6
    
}
car.maxSpeed(100);//виклик методу об'єкта з передаванням значення

console.log(car.numberOfGears);//виклик окремої властивості об'єкта