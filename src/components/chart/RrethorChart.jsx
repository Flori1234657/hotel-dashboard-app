import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

const RrethorChart = ({ dhomat }) => {
  const [dhomDat, setDhomDat] = useState({
    labels: ["Teke", "Çift", "Familjare"],
    datasets: [
      {
        label: "Dhoma Të Zëna",
        data: [
          dhomat[0].Rezervuar.dhomTeke,
          dhomat[0].Rezervuar.dhomCift,
          dhomat[0].Rezervuar.dhomFamiljare,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  });
  return <Doughnut data={dhomDat} options={{ responsive: true }} />;
};

export default RrethorChart;
