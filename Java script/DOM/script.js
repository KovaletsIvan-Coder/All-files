const happyButton = document.getElementById("btn-hapiness");
const sadButton = document.getElementById('btn-sadness'); 
const image = document.getElementsByClassName('img')[0];//метод який викликає елемент за класом     //document.querySelector('.img')//метод який знаходить лише перший елемент на сторінці з таим класом     //document.querySelectorAll('.img')//якщо хочемо достукатись до усіх елементів за даним класоm


happyButton.addEventListener('click', function(){
image.style.display = 'inline';

happyButton.disabled = true;//робимо кнопку не активною
sadButton.disabled = false;//робимо кнопку активною
});

sadButton.addEventListener('click', function(){
 image.style.display = 'none';//приховуємо картинку

happyButton.disabled = false;//робимо кнопку активною
sadButton.disabled = true;//робимо кнопку не активною
});



