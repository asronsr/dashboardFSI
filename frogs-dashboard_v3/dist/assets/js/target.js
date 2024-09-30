/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/assets/js/target.js ***!
  \*********************************/
var options = {
  series: [{
    name: 'Line 1',
    data: [{
      x: 'January',
      y: 0
    }, {
      x: 'February',
      y: 0
    }, {
      x: 'March',
      y: 0
    }, {
      x: 'April',
      y: 0
    }, {
      x: 'May',
      y: 0
    }, {
      x: 'June',
      y: 0
    }, {
      x: 'July',
      y: 0
    }, {
      x: 'August',
      y: 126
    },
    // Garis pada bulan Agustus
    {
      x: 'September',
      y: 0
    }, {
      x: 'October',
      y: 0
    }, {
      x: 'November',
      y: 0
    }, {
      x: 'December',
      y: 0
    }]
  }],
  chart: {
    height: 350,
    type: 'line'
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  markers: {
    size: 6,
    hover: {
      sizeOffset: 5
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    labels: {
      formatter: function formatter(value) {
        return value;
      }
    },
    tickPlacement: 'on' // Agar titik data sesuai dengan bulan yang benar
  },
  yaxis: {
    min: 0,
    max: 150,
    labels: {
      formatter: function formatter(val) {
        return val;
      }
    }
  }
};
if (document.getElementById("target") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("target"), options);
  chart.render();
}
/******/ })()
;