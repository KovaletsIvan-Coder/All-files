

function Auto (brand,price,fuel){
    this.brand = brand;
    this.price = price;
    this.fuel = fuel;
  
}

Auto.prototype.drive = function(){
//ми створюємо прототип для того щоб одна функція використовувалась для усіх обєктів,
// а не створювалась для кожного об'єкта нова функція, бо це жре пам'ять і грузить сайт
        if(this.fuel > 0){
            this.fuel = this.fuel - 10;
            return this.fuel;
        }else{
            console.log('lose');
        }

    }

const BMW = new Auto('BMW', "1 000 000", 120);
const Mercedes = new Auto('Mercedes', "1 100 000", 130);



console.log(Mercedes);
console.log(Mercedes.drive());
console.log(Mercedes.drive());
console.log(Mercedes.drive());

console.log(BMW);
console.log(BMW.drive());
console.log(BMW.drive());
console.log(BMW.drive());

console.log(BMW.drive === Mercedes.drive); 
//перевірка на те чи справді метод drive застосовується для обох змінних а не його новостворені копії





let cat = {
    name: 'bob',
    age: 30//властивість яку треба передати для об'єкта dog
    };
     
    let dog = {
        name: 'sem'
    } 
    dog.__proto__ = cat;//за допомогою методу __proto__ми унаслідували прототипні валтивості обєкта cat 
    
    console.log(dog.age);