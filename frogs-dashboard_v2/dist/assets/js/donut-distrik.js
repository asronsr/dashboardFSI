/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/assets/js/donut-distrik.js ***!
  \****************************************/
var getChartOptions = function getChartOptions() {
  return {
    series: [13.1, 28.6, 28, 30.3],
    chart: {
      height: 500,
      width: "100%",
      type: "donut"
    },
    colors: ["#1e3a8a", "#60a5fa", "#c4b5fd", "#f3e8ff"],
    stroke: {
      colors: ["transparent"]
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: ["Q1", "Q2", "Q3", "Q4"],
    dataLabels: {
      enabled: false
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      }
    }
  };
};
if (document.getElementById("donut-distrik") && typeof ApexCharts !== 'undefined') {
  var chart = new ApexCharts(document.getElementById("donut-distrik"), getChartOptions());
  chart.render();

  // Get all the checkboxes by their class name
  var checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

  // Attach the event listener to each checkbox
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function (event) {
      return handleCheckboxChange(event, chart);
    });
  });
}
/******/ })()
;