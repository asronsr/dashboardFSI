/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/assets/js/income-year.js ***!
  \**************************************/
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
    data: [5000, 15000, 7750, 9500, 15500, 18500, 14500, 18950, 17500, 24500, 30000, 16500]
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
if (document.getElementById("income-year") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("income-year"), options);
  chart.render();
}
/******/ })()
;