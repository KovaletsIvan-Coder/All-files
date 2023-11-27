const promise = new Promise((resolve, reject)=>{
isUserLoggedIn = false;

   //isUserLoggedIn === true
if(isUserLoggedIn){
    resolve('You are logged in') //успішний варіант виконання промісу
}else{
    reject('You are not loged in')  //не успішний варіант виконання промісу
}
});
             //кол бек з аргументом
promise
.then(data=> console.log(data)) // method then always return a successfull result
.catch(eror=> console.log(eror));// method catch always return a failed result
