class Chart1 {
    constructor(height,bColor){
        this.height = height;
        this.backgroundColor = bColor;
    }

}
class ChartModified extends Chart1{   //наслідування першого класу, ми отримуємо його елементи і можемо дописати додаткові
     isClicable = true;
    clickAlert(){
        alert('click')
    }
}



function renderChart(data){
    const container = document.getElementsByClassName('Chart-container')[0];
    const chart = document.createElement('div');
    chart.classList.add("chart");
    chart.style.height = data.height;
    chart.style.background = data.backgroundColor;
    container.appendChild(chart)
    if(data.isClicable){
        chart.addEventListener('click', data.clickAlert)
        chart.style.cursor = 'pointer'
    }

}

renderChart(new Chart1('350px','#f10707'))
renderChart(new Chart1('300px','#e40909'))
renderChart(new Chart1('270px','#c40808'))
renderChart(new Chart1('230px','#960404'))
renderChart(new Chart1('160px','#560202'))
renderChart(new ChartModified('110px','#310202'))