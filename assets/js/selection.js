window.onload = () => {
    document.getElementById('panel-chart').classList.add('hidden')
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('1.000', [0.0041, 0.0035, 0.0034])
            return

        case 2:
            loadChart('15.000', [0.112, 0.051, 0.116])
            return

        case 3:
            loadChart('100.000', [4.800, 1.853, 4.622])
            return

        case 4:
            loadChart('500.000', [119.845, 36.694, 107.809])
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
