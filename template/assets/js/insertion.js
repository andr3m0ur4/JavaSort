window.onload = () => {
    document.getElementById('panel-chart').classList.add('hidden')
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('1.000', [0.0047, 0.0003, 0.0063])
            return

        case 2:
            loadChart('15.000', [0.044, 0.0007, 0.082])
            return

        case 3:
            loadChart('100.000', [1.774, 0.002, 3.240])
            return

        case 4:
            loadChart('500.000', [42.241, 0.004, 86.849])
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
