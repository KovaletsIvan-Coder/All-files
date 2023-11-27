function calc (a ,b){
return[
    a + b,
    a - b
]
}
const result = calc(20,30)
const sum = result[0]
const sub = result[1]
console.log(sum);
//код який знаходиться зверху є довгим, деструктуризація допоможе його спростити і скоротити

function calc2(a,b){
    return[
        a + b,
        a - b,
        a * b,
        a / b,
        a + a / b
    ]
}                      // в оператор rest попадають всі інші операції які не були окремо деструктуризовані
const [sum2,sub2,mult2,...other] = calc2(10,5)//деструктуризація

console.log(sum2,sub2);//+ -
console.log(sum2,mult2,other);//  +  *  і оператор рест