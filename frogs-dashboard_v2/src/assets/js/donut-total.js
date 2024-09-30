var getChartOptions = () => {
  return {
    series: [36.2, 63.8],
    colors: ["#1e3a8a", "#a5b4fc"],
    chart: {
      height: 500,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Booked", "Flooped"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: ["#FFFFFF", "#FFFFFF"],
      },
    },
  }
}

if (document.getElementById("donut-total") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("donut-total"), getChartOptions());
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
  });
}