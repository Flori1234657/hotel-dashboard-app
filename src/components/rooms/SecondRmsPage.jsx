import BarChart from "../chart/BarChart";

const SecondRmsPage = () => {
  return (
    <main className="shtoRoom">
      <section className="shtoRoom_sp_txt">
        <h1>Faqja e dhomave</h1>
        <h2>Shto një dhomë</h2>
      </section>
      <div className="funcContainer">
        <form className="shtoRomForm">
          <div>
            <label>Lloji i dhomës</label>
            <select>
              <option value=""></option>
              <option value="Dhom Familjare">Dhom Familjare</option>
              <option value="Dhom Teke">Dhom Teke</option>
              <option value="Dhom Çif">Dhom Çift</option>
            </select>
          </div>
          <div className="quantityDiv">
            <label>Numri</label>
            <input type="number" min={1} max={5} />
          </div>
          <button className="shtojeBtn">Shtoje</button>
        </form>
        <div className="barchart">
          <BarChart />
        </div>
      </div>
    </main>
  );
};

export default SecondRmsPage;
