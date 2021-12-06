window.onload = () => {
    
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('15.000', [0.006, 0.003, 0.008])
            return

        case 2:
            loadChart('100.000', [0.019, 0.03, 0.02])
            return

        case 3:
            loadChart('1.000.000', [0.322, 0.149, 0.135])
            return

        case 4:
            loadChart('10.000.000', [1.311, 0.822, 0.613])
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
