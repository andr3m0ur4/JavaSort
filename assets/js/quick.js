window.onload = () => {
    
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('15.000', [0.008, 0.037, 0.02])
            return

        case 2:
            loadChart('100.000', [0.014, 0.052, 0.079])
            return

        case 3:
            loadChart('1.000.000', [0.455, 1.16, 0.813])
            return

        case 4:
            loadChart('10.000.000', [18.878, 33.693, 24.624])
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
