import { useState } from "react";
import { earningsData } from "../Data";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const [earnData, setEarnData] = useState({
    labels: earningsData.map((el) => el.data),
    datasets: [
      {
        fill: true,
        label: "Për Vitin 2023",
        data: earningsData.map((el) => el.fitimi),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const [opt, setOpt] = useState({
    responsive: true,
  });

  return <Line data={earnData} options={opt} />;
};

export default LineChart;
