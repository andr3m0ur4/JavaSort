window.onload = () => {
    
}

const filter = select => {
    const value = parseInt(select.value)

    switch (value) {
        case 1:
            loadChart('1.000', [0.0057, 0.004, 0.0059])
            return

        case 2:
            loadChart('15.000', [0.536, 0.062, 0.324])
            return

        case 3:
            loadChart('100.000', [22.600, 3.438, 13.006])
            return

        case 4:
            loadChart('500.000', [547.440, 67.925, 269.328])
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
