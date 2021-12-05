window.onload = () => {
    document.getElementById('panel-chart').classList.add('hidden')
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('15.000', [0.003, 0.0004, 0.0007])
            return

        case 2:
            loadChart('100.000', [0.013, 0.001, 0.005])
            return

        case 3:
            loadChart('1.000.000', [0.321, 0.006, 0.016])
            return

        case 4:
            loadChart('10.000.000', [0.468, 0.49, 0.042])
            return

        default:
            document.getElementById('panel-chart').classList.add('hidden')
    }
}

const loadChart = (elements, data) => {
    document.getElementById('panel-chart').classList.remove('hidden')
    
    myChart.data.datasets[0].data = data
    myChart.options.title.text = `${elements} Elementos`
    myChart.update()
}
