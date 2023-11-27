class Chart1{    //прописуємо назву класу

    constructor(height,background){    //прописуємо функцію конструктор
    this.height = height
    this.background = background
    }
    
}


function renderChart(data){ //функція яка буде рендерити кожну окрему діаграму на сайт вставляючи її в контейнер
    const container = document.querySelector('.Chart-container')
    const chart = document.createElement("div");
    chart.classList.add('chart');
    chart.style.height = data.height;
    chart.style.width = data.width;
    chart.style.backgroundColor = data.background;
    container.appendChild(chart)

}

renderChart( new Chart1('350px','#ff4b00')) //в дужках передаємо параметри кожної окремої діаграми
renderChart( new Chart1('300px','#e40909'))
renderChart( new Chart1('280px','#c40808'))
renderChart( new Chart1('230px','#960404'))
