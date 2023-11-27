const input = document.querySelector('.input1')
const button = document.querySelector('.input-container button');
const list = document.querySelector('.todo-list')

button.addEventListener('click',() =>{
    if(input.value === ' '){
        alert('Текстове поле не заповнене')
    }else{
const li = document.createElement("li");//створюємо новий елемент прописуючи йому тег
li.className = 'todo-list-item';// додаємо клас для елемента щоб мати можливість прописати стиль в css
li.innerText = input.value;//присвоюємо списку текст всередині з поля для введення

const deleteBtn = document.createElement("button")//створюємо новий елемент прописуючи йому тег
deleteBtn.className = 'deleteBtn1'
deleteBtn.innerText = "Delete";// прописуємо текст всередині кнопки


list.appendChild(li);//до list додаємо окремий li
li.appendChild(deleteBtn);//до li додаємо кнопку

input.value = ' ';



//прописуємо кнопку в тілі тої самої функції тому що в іншому випадку джава не буде знати до якого елемента застосовувати цю кнопку
deleteBtn.addEventListener('click',() =>{
    list.removeChild(li);//щоб видалити елемент li  зі списку list
})}

}) 

