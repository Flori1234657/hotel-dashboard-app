import SuccessLogo from "../../../assets/images/icons/success.png";
import { useContext } from "react";
import { PageContext } from "../../../App";

const SubSuccess = ({ setOptRendr }) => {
  const contextData = useContext(PageContext);

  return (
    <div className="sbmitOption">
      <img src={SuccessLogo} alt="" />
      <h1>Rezervuar me sukses!</h1>
      <button
        onClick={() => {
          contextData.setRegetData(true);
          setOptRendr("FirstOp");
        }}
      >
        Vazhdo
      </button>
    </div>
  );
};

export default SubSuccess;
