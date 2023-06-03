import SuccessLogo from "../../../assets/images/icons/success.png";

const SubSuccess = ({ setOptRendr }) => {
  return (
    <div className="sbmitOption">
      <img src={SuccessLogo} alt="" />
      <h1>Rezervuar me sukses!</h1>
      <button
        onClick={() => {
          setOptRendr("FirstOp");
        }}
      >
        Vazhdo
      </button>
    </div>
  );
};

export default SubSuccess;
