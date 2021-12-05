let myChart
let chartGroup1

window.addEventListener('load', () => {
    myChart = new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: ['Dados Aleatórios', 'Dados Ordenados - Crescente', 'Dados Ordenados - Decrescente'],
            datasets: [{
                label: "Tempo em segundos",
                backgroundColor: [
                    'rgba(220,57,18,0.5)', 
                    'rgba(0,153,198,0.5)',
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
                    'rgb(0,153,198)',
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
                text: ''
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
})
