export const ditQendrimi = [];
export let cmimi = 0;

export const fillData = (ardh, ikj, dhoma) => {
  const refArdh = Number(ardh.match(/(?<=\W)\d+/)[0]);
  const refIkja = Number(ikj.match(/(?<=\W)\d+/)[0]);

  if (ardh.match(/\d+/)[0] == ikj.match(/\d+/)[0]) {
    let nisja = refArdh;
    for (let i = 0; i < refIkja; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
  }

  if (ardh.match(/\d+/)[0] == 6 && ikj.match(/\d+/)[0] == 7) {
    let nisja = refArdh;
    for (let i = nisja; i <= 30; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
    nisja = 1;
    for (let i = 0; i < refIkja; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
  }

  if (ardh.match(/\d+/)[0] == 6 && ikj.match(/\d+/)[0] == 8) {
    let nisja = refArdh;
    for (let i = nisja; i <= 30; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
    nisja = 1;
    for (let i = 0; i < 31; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
    nisja = 1;
    for (let i = 0; i < refIkja; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
  }

  if (ardh.match(/\d+/)[0] == 7 && ikj.match(/\d+/)[0] == 8) {
    let nisja = refArdh;
    for (let i = nisja; i <= 31; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
    nisja = 1;
    for (let i = 0; i < refIkja; i++) {
      ditQendrimi.push(nisja);
      nisja++;
    }
  }

  if (dhoma === "dhomTeke") {
    cmimi = `$${ditQendrimi.length * 100}`;
  }
  if (dhoma === "dhomCift") {
    cmimi = `$${ditQendrimi.length * 120}`;
  }
  if (dhoma === "dhomFamiljare") {
    cmimi = `$${ditQendrimi.length * 150}`;
  }
};
