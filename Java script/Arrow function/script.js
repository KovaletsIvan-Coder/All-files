function sayHello(){
    console.log('Hello');
}
sayHello();//звичайна функція 

const sayHello2 = () => {
    console.log('hello2');
}
sayHello2();//стрілкова функція того самого типу   



function sayHelloToPerson(name){
    console.log('Hello ' + name);
}
sayHello();//звичайна функція
 
const sayHelloToPerson2  = (name) => {
console.log('hello ' + name);
}
sayHelloToPerson2 ('Mike')// стрілкова функція


function summ(a,b){
return a + b;
};
console.log(summ(10,5));//звичайна функція

                       //замість return
const summ2 = (a,b) => a + b;      //стрілкова функція набагато скорочена

console.log(summ(10,4));
 





