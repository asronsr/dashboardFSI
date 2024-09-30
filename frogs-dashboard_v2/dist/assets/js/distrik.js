/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/assets/js/distrik.js ***!
  \**********************************/
var options = {
  chart: {
    type: 'bar',
    stacked: true
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  series: [{
    data: [62, 28, 19, 6, 12],
    colors: ["#1e3a8a", "#60a5fa", "#c4b5fd", "#f3e8ff", "#60a5fa"]
  }],
  xaxis: {
    categories: ['Distrik 1', 'Distrik 2', 'Distrik 3', 'Distrik 4', 'Distrik 5']
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      distributed: true
    }
  },
  colors: ["#1e3a8a", "#60a5fa", "#c4b5fd", "#f3e8ff", "#60a5fa"]
};
if (document.getElementById("distrik") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("distrik"), options);
  chart.render();
}
/******/ })()
;