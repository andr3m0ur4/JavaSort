let myChartBar
let myChartPie

window.addEventListener('load', () => {

    myChartBar = new  Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
            datasets: [ {
                label: "Tempo em Segundos",
                backgroundColor: [
                    'rgba(220,57,18,0.5)', 
                    'rgba(255,153,0,0.5)', 
                    'rgba(16,150,24,0.5)',
                    'rgba(153,0,153,0.5)',
                    'rgba(59,62,172,0.5)',
                    'rgba(0,153,198,0.5)',
                    'rgba(221,68,119,0.5)',
                    'rgba(102,170,0,0.5)',
                    'rgba(184,46,46,0.5)',
                    'rgba(49,99,149,0.5)',
                    'rgba(153,68,153,0.5)',
                    'rgba(34,170,153,0.5)',
                    'rgba(170,170,17,0.5)',
                    'rgba(102,51,204,0.5)',
                    'rgba(230,115,0,0.5)',
                    'rgba(139,7,7,0.5)',
                    'rgba(50,146,98,0.5)',
                    'rgba(85,116,166,0.5)',
                    'rgba(59,62,172,0.5)'
                ],
                data: [],
                borderWidth: 2,
                borderColor: [
                    'rgb(220,57,18)',
                    'rgb(255,153,0)',
                    'rgb(16,150,24)',
                    'rgb(153,0,153)',
                    'rgb(59,62,172)',
                    'rgb(0,153,198)',
                    'rgb(221,68,119)',
                    'rgb(102,170,0)',
                    'rgb(184,46,46)',
                    'rgb(49,99,149)',
                    'rgb(153,68,153)',
                    'rgb(34,170,153)',
                    'rgb(170,170,17)',
                    'rgb(102,51,204)',
                    'rgb(230,115,0)',
                    'rgb(139,7,7)',
                    'rgb(50,146,98)',
                    'rgb(85,116,166)',
                    'rgb(59,62,172)'
                ],
            }]
        },
        options: {
            tooltips: {
                enabled: true
            },
            hover: {
                animationDuration: 1
            },
            animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },
            legend: { display: false },
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Quantidade de elementos'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    myChartPie = new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
            datasets: [ {
                label: "Tempo em segundos",
                backgroundColor: [
                    'rgba(220,57,18,0.5)', 
                    'rgba(255,153,0,0.5)', 
                    'rgba(16,150,24,0.5)',
                    'rgba(153,0,153,0.5)',
                    'rgba(59,62,172,0.5)',
                    'rgba(0,153,198,0.5)',
                    'rgba(221,68,119,0.5)',
                    'rgba(102,170,0,0.5)',
                    'rgba(184,46,46,0.5)',
                    'rgba(49,99,149,0.5)',
                    'rgba(153,68,153,0.5)',
                    'rgba(34,170,153,0.5)',
                    'rgba(170,170,17,0.5)',
                    'rgba(102,51,204,0.5)',
                    'rgba(230,115,0,0.5)',
                    'rgba(139,7,7,0.5)',
                    'rgba(50,146,98,0.5)',
                    'rgba(85,116,166,0.5)',
                    'rgba(59,62,172,0.5)'
                ],
                data: [0, 0, 0]
            }]
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Quantidade de Elementos'
            },
            showTooltips: true
        }
    });
})

const filter = () => {
    const selectInputData = document.form_group.data.value
    const selectQtdElements = document.form_group.elements.value

    data = getData(selectInputData, selectQtdElements)
    loadChart(selectQtdElements, data)
}

const loadChart = (elements, data) => {
    // document.getElementById('panel-chart').classList.remove('hidden')
    
    myChartBar.data.datasets[0].data = data
    myChartBar.options.title.text = `${elements} Elementos`
    myChartBar.update()

    myChartPie.data.datasets[0].data = data
    myChartPie.options.title.text = `${elements} Elementos`
    myChartPie.update()
}

const getData = (inputData, qtdElements) => {
    const obj = {
        1: {
            10000: [0.218, 0.055, 0.037],
            15000: [0.556, 0.093, 0.04],
            100000: [22.325, 3.963, 1.738],
            500000: [598.992, 108.065, 51.047]
        },
        2: {
            10000: [0.00061, 0.022, 0.00062],
            15000: [0.063, 0.049, 0.001],
            100000: [2.577, 2.02, 0.003],
            500000: [73.432, 33.487, 0.004]
        },
        3: {
            10000: [0.139, 0.046, 0.041],
            15000: [0.116, 0.107, 0.084],
            100000: [12.643, 4.341, 3.455],
            500000: [266.961, 102.321, 80.339]
        }
    }

    return obj[inputData][qtdElements]
}

