import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ statistikat, setFtTotal }) => {
  const data = new Date();
  // const docForDayStats = doc(db, "Menaxhim", "VbAZSnMRNOcc2trCUdIj");
  // const addFitimToServer = async ()=>{
  //   if (statistikat[0][`fitimetSezon${data.getFullYear()}`].qershor.length < 29) {
  //     try {
  //       await setDoc(docRefRezervim, updatedDate, { merge: true })
  //     } catch (error) {

  //     }
  //   }
  // }

  useEffect(() => {
    //Ktu InshaaAllah do shtojm fitimet pasi hapim appin
  }, []);

  const [labels, setLabels] = useState(() => {
    const arr = [];
    if (
      statistikat[0][`fitimetSezon${data.getFullYear()}`].qershor.length > 0
    ) {
      statistikat[0][`fitimetSezon${data.getFullYear()}`].qershor.forEach(
        (el, i) => {
          arr.push(`${i + 1} Qer.`);
        }
      );
    }
    if (statistikat[0][`fitimetSezon${data.getFullYear()}`].korrig.length > 0) {
      statistikat[0][`fitimetSezon${data.getFullYear()}`].korrig.forEach(
        (el, i) => {
          arr.push(`${i + 1} Korr.`);
        }
      );
    }
    if (statistikat[0][`fitimetSezon${data.getFullYear()}`].gusht.length > 0) {
      statistikat[0][`fitimetSezon${data.getFullYear()}`].gusht.forEach(
        (el, i) => {
          arr.push(`${i + 1} Gush.`);
        }
      );
    }

    return arr;
  });

  const dtSetWithRecursion = (muaj) => {
    const arr = [];
    for (
      let i = 0;
      i < statistikat[0][`fitimetSezon${data.getFullYear()}`][muaj].length;
      i++
    ) {
      arr.push(statistikat[0][`fitimetSezon${data.getFullYear()}`][muaj][i]);
    }
    return arr;
  };

  const [teDhenat, setTeDhenat] = useState([
    ...dtSetWithRecursion("qershor"),
    ...dtSetWithRecursion("korrig"),
    ...dtSetWithRecursion("gusht"),
  ]);

  useEffect(() => {
    let ftTot = 0;
    teDhenat.forEach((el) => {
      ftTot += el;
    });
    setFtTotal(ftTot);
  }, []);
  const [earnData, setEarnData] = useState({
    labels: labels.map((el) => el),
    datasets: [
      {
        fill: true,
        label: `Sezoni ${data.getFullYear()}`,
        data: teDhenat.map((el) => el),
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
