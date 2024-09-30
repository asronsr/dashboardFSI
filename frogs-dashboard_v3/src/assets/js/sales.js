var options = {
  series: [
    {
      name: 'Flat Line',
      data: [
        { x: 'Jan', y: 0 },
        { x: 'Feb', y: 0 },
        { x: 'Mar', y: 0 },
        { x: 'Apr', y: 0 },
        { x: 'May', y: 0 },
        { x: 'Jun', y: 0 },
        { x: 'Jul', y: 0 },
        { x: 'Aug', y: 0 },
        { x: 'Sep', y: 0 },
        { x: 'Oct', y: 0 },
        { x: 'Nov', y: 0 },
        { x: 'Dec', y: 0 }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'line' // Menggunakan tipe chart line
  },
  stroke: {
    curve: 'straight' // Pastikan garis lurus
  },
  markers: {
    hover: {
      sizeOffset: 5
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yaxis: {
    min: -1, // Rentang sumbu Y sedikit di bawah 0
    max: 1,  // Rentang sumbu Y sedikit di atas 0
    labels: {
      formatter: (val) => {
        return val;
      }
    }
  }
};

if(document.getElementById("sales") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("sales"), options);
  chart.render();
}
