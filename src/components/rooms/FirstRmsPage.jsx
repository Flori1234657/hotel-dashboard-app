import BarChart from "../chart/BarChart";

const FirstRmsPage = () => {
  return (
    <main className="rmvRoom">
      <section className="rmvRm_fp_txt">
        <h1>Faqja e dhomave</h1>
        <h2>Hiq një dhomë</h2>
      </section>
      <div className="funcContainer">
        <form className="rmvRomForm">
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
          <button>Fshije</button>
        </form>
        <div className="barchart">
          <BarChart />
        </div>
      </div>
    </main>
  );
};

export default FirstRmsPage;
