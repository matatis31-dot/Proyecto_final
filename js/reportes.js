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

const ctxServicios = document.getElementById('graficoServicios');
new Chart(ctxServicios,{
      type: 'doughnut',
      data: {
        labels:['Consulta', 'Vacunacion', 'Baño', 'Peluqueria', 'Urgencias'],
        datasets:[{
        label: 'Servicios',
        data:[35, 25, 15, 5, 45],
        backgroundColor:[
        '#72d8ba',
        '#5e60c4',
        '#d67bd2',
        '#d5e094',
        '#c7a76d',
        ]
      }]
      },
      options:{
        responsive: true,
        cutout: '55',
        plugins:{
            legend:{
                position:'bottom'
            }
        }
      }
})

const ctxProductos = document.getElementById('graficoProducto');
new Chart(ctxProductos, {
type: 'line',
    data:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets:[{
            label: 'Clientes Registrados',
            data:[ 100, 230, 43, 98, 110, 24],
            backgroundColor: '#4b0c0a'
        }]
    },
 
    options:{
        responsive:true,
        plugins:{
            legend:{
                display:true
            },
            title:{
                display:false
            }
        }
    }
 
});
const canvasPolar = document.getElementById("graficoPolar");
new Chart(canvasPolar, {
  type: "polarArea",
  data: {
    labels: ["Perros", "Gatos", "Aves", "Hámsters"],
    datasets: [
      {
        label: "Pacientes atendidos",
        data: [120, 85, 45, 25],
        backgroundColor: [
          "#dd403a",
          "#2e86ab",
          "#f6ae2d",
          "#00dbc2",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
 

