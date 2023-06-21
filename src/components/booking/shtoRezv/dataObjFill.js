export const ditQendrimi = [];
export let cmimi = 0;

export const fillData = (ardh, ikj, dhoma) => {
  const refArdh = Number(ardh.match(/(?<=\W)\d+/)[0]); //dita
  const refIkja = Number(ikj.match(/(?<=\W)\d+/)[0]);
  const ardhj = ardh.match(/\d+/)[0]; //muaj
  const ikja = ikj.match(/\d+/)[0];
  let nisja = refArdh;

  if (ardhj == ikja) helperFunc(refIkja);

  if (ardhj == 6 && ikja == 7) {
    helperFunc(30);
    nisja = 1;
    helperFunc(refIkja);
  }

  if (ardhj == 6 && ikja == 8) {
    helperFunc(30);
    nisja = 1;
    helperFunc(31);
    nisja = 1;
    helperFunc(refIkja);
  }

  if (ardhj == 7 && ikja == 8) {
    helperFunc(31);
    nisja = 1;
    helperFunc(refIkja);
  }

  const helperFunc = (pozicioni) => {
    ditQendrimi.push(nisja);
    if (nisja == pozicioni) return;
    nisja++;
    helperFunc(pozicioni);
  };

  if (dhoma === "dhomTeke") cmimi = `$${ditQendrimi.length * 100}`;
  if (dhoma === "dhomCift") cmimi = `$${ditQendrimi.length * 120}`;
  if (dhoma === "dhomFamiljare") cmimi = `$${ditQendrimi.length * 150}`;
};
