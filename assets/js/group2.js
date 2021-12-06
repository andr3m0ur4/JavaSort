let myChartBar
let myChartPie

window.addEventListener('load', () => {

    myChartBar = new  Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: ['Quick Sort', 'Merge Sort', 'Array Sort'],
            datasets: [ {
                label: "Tempo em Segundos",
                backgroundColor: [
                    'rgba(102,170,0,0.5)',
                    'rgba(255,153,0,0.5)',
                    'rgba(49,99,149,0.5)',
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
                    'rgb(102,170,0)',
                    'rgb(255,153,0)',
                    'rgb(49,99,149)',
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
            duration: 1000,
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
            labels: ['Quick Sort', 'Merge Sort', 'Array Sort'],
            datasets: [ {
                label: "Tempo em segundos",
                backgroundColor: [
                    'rgba(102,170,0,0.5)',
                    'rgba(255,153,0,0.5)',
                    'rgba(49,99,149,0.5)',
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
            15000: [0.008, 0.006, 0.003],
            100000: [0.014, 0.019, 0.013],
            1000000: [0.455, 0.322, 0.321],
            10000000: [18.878, 1.311, 0.468]
        },
        2: {
            15000: [0.037, 0.003, 0.0004],
            100000: [0.052, 0.03, 0.001],
            1000000: [1.160, 0.149, 0.006],
            10000000: [33.693, 0.822, 0.49]
        },
        3: {
            15000: [0.02, 0.008, 0.0007],
            100000: [0.079, 0.02, 0.005],
            1000000: [0.813, 0.135, 0.016],
            10000000: [24.624, 0.613, 0.042]
        }
    }

    return obj[inputData][qtdElements]
}

