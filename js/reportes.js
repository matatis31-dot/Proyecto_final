const ctxVentas = document.getElementById('graficoVentas');
new Chart(ctxVentas,{
    type: 'bar',
    data:{
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
        datasets:[{
            label: 'Ventas en pesos',
            data:[2500000, 3000000, 2800000, 4200000, 3900000, 5200000],
            backgroundColor: '#800e13'
        }]
    },
    options:{
        responsive: true,
        plugins:{
            legend:{
                displaay:true
            },
            title:{
                display:false
            }
        }
    }
})