/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/assets/js/capaian.js ***!
  \**********************************/
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
    data: [7, 12, 3, 6, 10, 11, 7, 5, 13, 26, 19, 26]
  }],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  plotOptions: {
    bar: {
      borderRadius: 5
    }
  }
};
if (document.getElementById("capaian") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("capaian"), options);
  chart.render();
}
/******/ })()
;