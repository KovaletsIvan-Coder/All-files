const start1 = document.querySelector(".startBtn")
const Logo = document.querySelector(".logo")
const form = document.querySelector('.form')
start1.addEventListener("click",function() {
    Logo.style.display = 'none';
    start1.style.display = 'none'
    
    const input = document.createElement('input')
    form.appendChild(input)
});

