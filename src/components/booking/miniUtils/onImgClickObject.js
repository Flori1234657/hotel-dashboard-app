export let obj;
//ky funksion InshaaAllah heq ose shton nr dhomave ne varsi te klikimit PRANO ose REFUZO
export const objektiINumritTeDhomave = (dataForSpecific, muaj, dhFirebase) => {
  const ditQendrimiArray = dataForSpecific.ditetEQendrimitL;
  const dataArdhjes = dataForSpecific.ditaArdjhes.match(/\d+/)[0];
  const dataIkjes = dataForSpecific.ditaIkjes.match(/\d+/)[0];

  obj = JSON.parse(JSON.stringify(dhFirebase));
  let i = 0;

  const helpFunc = (equal, mj, fundi) => {
    if (!obj) return; //objekti do na behet false InshaaAllah ne momentin qe dhoma e caktuar esht 0
    if (i == fundi) return;
    if (obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`] == null) return;

    const path =
      obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ];

    if (equal) {
      //dmth nese kemi vetem nje muaj

      if (path != 0) {
        obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
        i++;
        helpFunc(equal, mj, fundi);
      } else {
        obj = false;
      }
    }

    if (!equal) {
      if (path != 0) {
        obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;

        if (ditQendrimiArray[i] == fundi) return;
        i++;
        helpFunc(equal, mj, fundi);
      } else {
        obj = false;
      }
    }
  };

  if (dataIkjes == dataArdhjes) {
    helpFunc(true, muaj, ditQendrimiArray.length);
  } else if (dataArdhjes == 6 && dataIkjes == 7) {
    //qershor korrig
    helpFunc(false, "qershor", 30);
    helpFunc(true, "korrig", ditQendrimiArray.length);
  } else if (dataArdhjes == 6 && dataIkjes == 8) {
    //qershor gusht
    helpFunc(false, "qershor", 30);
    helpFunc(false, "korrig", 31);
    helpFunc(true, "gusht", ditQendrimiArray.length);
  } else if (dataArdhjes == 7 && dataIkjes == 8) {
    //korrig gusht
    helpFunc(false, "korrig", 31);
    helpFunc(true, "gusht", ditQendrimiArray.length);
  }
};

export const objektiINumritTeDhomaveShto = (
  dataForSpecific,
  muaj,
  dhFirebase
) => {
  const ditQendrimiArray = dataForSpecific.ditetEQendrimitL;
  const dataArdhjes = dataForSpecific.ditaArdjhes.match(/\d+/)[0];
  const dataIkjes = dataForSpecific.ditaIkjes.match(/\d+/)[0];

  obj = JSON.parse(JSON.stringify(dhFirebase));
  let i = 0;

  const helpFunc = (equal, mj, fundi) => {
    if (!obj) return; //objekti do na behet false InshaaAllah ne momentin qe dhoma e caktuar esht 0
    if (i == fundi) return;
    if (obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`] == null) {
      //ketu InshaaAllah do na kthej prap mbrapsht daten e hequr
      obj.muajt[mj].datatDhomat = {
        ...obj.muajt[mj].datatDhomat,
        [`dat${ditQendrimiArray[i]}`]: {
          dhomTeke: 0,
          dhomCift: 0,
          dhomFamiljare: 0,
          [dataForSpecific.dhoma]: 1,
        },
      };
      i++;
      helpFunc(equal, mj, fundi);
      return;
    }

    const path =
      obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ];

    if (equal) {
      //dmth nese kemi vetem nje muaj

      if (path != 0) {
        obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] += 1;
        i++;
        helpFunc(equal, mj, fundi);
      } else {
        obj = false;
      }
    }

    if (!equal) {
      if (path != 0) {
        obj.muajt[mj].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] += 1;

        if (ditQendrimiArray[i] == fundi) return;
        i++;
        helpFunc(equal, mj, fundi);
      } else {
        obj = false;
      }
    }
  };

  if (dataIkjes == dataArdhjes) {
    helpFunc(true, muaj, ditQendrimiArray.length);
  } else if (dataArdhjes == 6 && dataIkjes == 7) {
    //qershor korrig
    helpFunc(false, "qershor", 30);
    helpFunc(true, "korrig", ditQendrimiArray.length);
  } else if (dataArdhjes == 6 && dataIkjes == 8) {
    //qershor gusht
    helpFunc(false, "qershor", 30);
    helpFunc(false, "korrig", 31);
    helpFunc(true, "gusht", ditQendrimiArray.length);
  } else if (dataArdhjes == 7 && dataIkjes == 8) {
    //korrig gusht
    helpFunc(false, "korrig", 31);
    helpFunc(true, "gusht", ditQendrimiArray.length);
  }
};
