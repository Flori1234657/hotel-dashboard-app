import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ statistikat, setFtTotal, ftmSot, rrimerStats }) => {
  const data = new Date();
  const docForDayStats = doc(db, "Statistikat", "Gdl50e3i9nMNtWGy47mD");

  const addFitimSotToServer = async () => {
    let muajTxt;
    const objNisja = statistikat[0][`fitimetSezon${data.getFullYear()}`];

    if (data.getMonth() == 5) muajTxt = "qershor";
    if (data.getMonth() == 6) muajTxt = "korrig";
    if (data.getMonth() == 7) muajTxt = "gusht";

    if (objNisja[muajTxt].length == data.getDate()) return; //base case dmth nese e kemi shtuar kte statistik

    const fitimiSotForServer = {
      [`fitimetSezon${data.getFullYear()}`]: {
        ...objNisja,
        [muajTxt]: [...objNisja[muajTxt], ftmSot],
      },
    };

    try {
      await setDoc(docForDayStats, fitimiSotForServer, { merge: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Ktu InshaaAllah do shtojm fitimet pasi hapim appin
    addFitimSotToServer();
  }, []);

  const [labels, setLabels] = useState(() => {
    const fitimetSezon = statistikat[0][`fitimetSezon${data.getFullYear()}`];
    const arr = [];

    const addLabels = (monthArray, labelPrefix) => {
      if (monthArray.length > 0) {
        const emrat = monthArray.map((_, i) => `${i + 1} ${labelPrefix}.`);
        arr.push(...emrat);
      }
    };

    addLabels(fitimetSezon.qershor, "Qer");
    addLabels(fitimetSezon.korrig, "Korr");
    addLabels(fitimetSezon.gusht, "Gush");

    return arr;
  });

  const dtSetDryCode = (muaj) => {
    const arr = [];
    const startObj = statistikat[0][`fitimetSezon${data.getFullYear()}`][muaj];
    for (let i = 0; i < startObj.length; i++) {
      arr.push(startObj[i]);
    }
    return arr;
  };

  //InshaaAllah kjo flatMap ben run kte func per te gjitha el te arrayt
  //pastaj na kthen nje array tek e cila aplikojm ...spread operator
  const [teDhenat, setTeDhenat] = useState([
    ...["qershor", "korrig", "gusht"].flatMap(dtSetDryCode),
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
