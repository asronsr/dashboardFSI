var options = {
  series: [{
    name: "Series 1",
    data: [0, 8, 15, 18, 22]
  },
  {
    name: "Series 2",
    data: [5, 8, 10, 14, 28]
  },
  {
    name: "Series 3",
    data: [5, 4, 5, 8, 28]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  markers: {
    size: 5,
    strokeWidth: 2,
    hover: {
      sizeOffset: 4
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'], // Kategori X yang sama untuk semua garis
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
