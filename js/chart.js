const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Zumba", "Cardio", "Step", "Power-stretching", "Abs", "Aerobox"],
    datasets: [
      {
        label: "class",
        data: [300, 50, 100, 35, 70, 90],
        backgroundColor: [
          "#03c1ab",
          "#C4C4C4",
          "#F611C4",
          "#840ae1",
          "#F69B11",
          "#32F611",
        ],
        hoverOffset: 2,
      },
    ],
  },
  options: {
    radius: 110,
  },
});
