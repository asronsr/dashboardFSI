/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/assets/js/income-month.js ***!
  \***************************************/
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
    data: [9450, 23000, 12650, 26950, 37300, 34500, 29500, 27850, 39150, 37500, 34950, 32200]
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
if (document.getElementById("income-month") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("income-month"), options);
  chart.render();
}
/******/ })()
;