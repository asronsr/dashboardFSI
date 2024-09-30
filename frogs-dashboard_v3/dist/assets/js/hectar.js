/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/assets/js/hectar.js ***!
  \*********************************/
var options = {
  chart: {
    type: 'bar',
    stacked: true
  },
  colors: ["#c7d2fe"],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  series: [{
    data: [0, 0, 0, 0, 10, 8.5, 0, 11, 12, 14, 0, 7.5, 5, 12.1, 5, 0, 3, 4, 3, 4, 5.4, 5, 6, 5, 0, 0, 0, 0, 0, 0, 0]
  }],
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  },
  plotOptions: {
    bar: {
      borderRadius: 5
    }
  }
};
if (document.getElementById("hectar") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("hectar"), options);
  chart.render();
}
/******/ })()
;