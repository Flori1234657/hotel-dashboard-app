import { Bar } from "react-chartjs-2";
import { useState, useContext } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { PageContext } from "../../App";

const BarChart = () => {
  const dta = useContext(PageContext);
  const [data, setData] = useState(dta.firestoreData);

  const [earnData, setEarnData] = useState({
    labels: ["Dhoma Teke", "Dhoma Çif", "Dhoma Familjare"],
    datasets: [
      {
        label: "Dhoma Gjithsej",
        data: [123, 90, 130],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dhoma Të Zëna",
        data: [48, 53, 87],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const [opt, setOpt] = useState({
    responsive: true,
  });

  return <Bar data={earnData} options={opt} />;
};

export default BarChart;
