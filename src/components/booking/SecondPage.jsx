import { useEffect, useState } from "react";
import FirstOp from "./shtoRezv/FirstOp";
import SecondOp from "./shtoRezv/SecondOp";
import SubSuccess from "./shtoRezv/SubSuccess";

const SecondPage = () => {
  const [optRendr, setOptRendr] = useState("FirstOp");
  const [returnPage, setReturnPage] = useState(
    <FirstOp setOptRendr={setOptRendr} />
  );

  useEffect(() => {
    if (optRendr == "FirstOp")
      setReturnPage(<FirstOp setOptRendr={setOptRendr} />);
    if (optRendr == "SecondOp")
      setReturnPage(<SecondOp setOptRendr={setOptRendr} />);
    if (optRendr == "SuccessOp")
      setReturnPage(<SubSuccess setOptRendr={setOptRendr} />);
  }, [optRendr]);

  return (
    <main className="booking_secondPage">
      <section className="homeMainText">
        <h1>Faqja e rezervimeve</h1>
        <h2>Shto revervim</h2>
      </section>
      {returnPage}
    </main>
  );
};

export default SecondPage;
