import { Bar } from "react-chartjs-2";
import { useState, useContext } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { PageContext } from "../../App";

const BarChart = ({ menaxhimDT }) => {
  const dta = useContext(PageContext);
  const [data, setData] = useState(dta.firestoreData);

  const [earnData, setEarnData] = useState({
    labels: ["Dhoma Teke", "Dhoma Çif", "Dhoma Familjare"],
    datasets: [
      {
        label: "Dhoma Gjithsej",
        data: [
          menaxhimDT[0].NumriDhomave.dhomTeke,
          menaxhimDT[0].NumriDhomave.dhomCift,
          menaxhimDT[0].NumriDhomave.dhomFamiljare,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dhoma Të Zëna",
        data: [
          menaxhimDT[0].Rezervuar.dhomTeke,
          menaxhimDT[0].Rezervuar.dhomCift,
          menaxhimDT[0].Rezervuar.dhomFamiljare,
        ],
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
