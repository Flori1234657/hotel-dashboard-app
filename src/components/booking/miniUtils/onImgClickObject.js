export let obj;
//Duhet ne momentin qe nje dit mund te kemi 0 dhoma ne dizpozicion te japim nje mesazh qe tia sqarojm perdoruesit qe ky person smund te pranohet
export const objektiINumritTeDhomave = (dataForSpecific, muaj, dhFirebase) => {
  const ditQendrimiArray = dataForSpecific.ditetEQendrimitL;
  obj = dhFirebase;
  let indexiQeELam = 0;
  if (
    dataForSpecific.ditaIkjes.match(/\d+/)[0] ==
    dataForSpecific.ditaArdjhes.match(/\d+/)[0]
  ) {
    for (let i = 0; i < ditQendrimiArray.length; i++) {
      if (
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 6 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 7
  ) {
    //qershor korrig
    for (let i = 0; i < 30; i++) {
      if (
        obj.muajt.qershor.datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt.qershor.datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 30) {
        break;
      }
    }
    for (let i = 0; i < ditQendrimiArray[ditQendrimiArray.length - 1]; i++) {
      if (
        obj.muajt.korrig.datatDhomat[
          `dat${ditQendrimiArray[indexiQeELam + 1]}`
        ][`${dataForSpecific.dhoma}`] != 0
      ) {
        obj.muajt.korrig.datatDhomat[
          `dat${ditQendrimiArray[indexiQeELam + 1]}`
        ][`${dataForSpecific.dhoma}`] -= 1;
      }
      indexiQeELam++;
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 6 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 8
  ) {
    //qershor gusht
    for (let i = 0; i < 30; i++) {
      if (
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 30) {
        break;
      }
    }
    for (let i = 0; i < 31; i++) {
      if (
        obj.muajt.korrig.datatDhomat[
          `dat${ditQendrimiArray[indexiQeELam + 1]}`
        ][`${dataForSpecific.dhoma}`] != 0
      ) {
        obj.muajt.korrig.datatDhomat[
          `dat${ditQendrimiArray[indexiQeELam + 1]}`
        ][`${dataForSpecific.dhoma}`] -= 1;
      }
      indexiQeELam++;
      if (ditQendrimiArray[i] == 31) {
        break;
      }
    }
    for (
      let i = 0;
      i < Number(ditQendrimiArray[ditQendrimiArray.length - 1]);
      i++
    ) {
      if (
        obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
      indexiQeELam++;
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 7 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 8
  ) {
    //shtator tetor
    for (let i = 0; i < 31; i++) {
      if (
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 31) {
        break;
      }
    }
    for (
      let i = 0;
      i < Number(ditQendrimiArray[ditQendrimiArray.length - 1]);
      i++
    ) {
      if (
        obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
          `${dataForSpecific.dhoma}`
        ] != 0
      ) {
        obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
          `${dataForSpecific.dhoma}`
        ] -= 1;
      }
      indexiQeELam++;
    }
  }
};

export const objektiINumritTeDhomaveShto = (
  dataForSpecific,
  muaj,
  dhFirebase
) => {
  const ditQendrimiArray = dataForSpecific.ditetEQendrimitL;
  obj = dhFirebase;
  let indexiQeELam = 0;
  if (
    dataForSpecific.ditaIkjes.match(/\d+/)[0] ==
    dataForSpecific.ditaArdjhes.match(/\d+/)[0]
  ) {
    for (let i = 0; i < ditQendrimiArray.length; i++) {
      obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 6 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 7
  ) {
    //qershor korrig
    for (let i = 0; i < 30; i++) {
      obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 30) {
        break;
      }
    }
    for (
      let i = 0;
      i < Number(ditQendrimiArray[ditQendrimiArray.length - 1]);
      i++
    ) {
      obj.muajt.korrig.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam++;
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 6 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 8
  ) {
    //qershor gusht
    for (let i = 0; i < 30; i++) {
      obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 30) {
        break;
      }
    }
    for (let i = 0; i < 31; i++) {
      obj.muajt.korrig.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam++;
      if (ditQendrimiArray[i] == 31) {
        break;
      }
    }
    for (
      let i = 0;
      i < Number(ditQendrimiArray[ditQendrimiArray.length - 1]);
      i++
    ) {
      obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam++;
    }
  } else if (
    dataForSpecific.ditaArdjhes.match(/\d+/)[0] == 7 &&
    dataForSpecific.ditaIkjes.match(/\d+/)[0] == 8
  ) {
    //shtator tetor
    for (let i = 0; i < 31; i++) {
      obj.muajt[`${muaj}`].datatDhomat[`dat${ditQendrimiArray[i]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam = i;
      if (ditQendrimiArray[i] == 31) {
        break;
      }
    }
    for (
      let i = 0;
      i < Number(ditQendrimiArray[ditQendrimiArray.length - 1]);
      i++
    ) {
      obj.muajt.gusht.datatDhomat[`dat${ditQendrimiArray[indexiQeELam + 1]}`][
        `${dataForSpecific.dhoma}`
      ] += 1;
      indexiQeELam++;
    }
  }
};

//     ...dhomatFirebase[0],
//     muajt: {
//       ...dhomatFirebase[0].muajt,
//       qershor: {
//         datatDhomat: {
//           ...dhomatFirebase[0].muajt.qershor.datatDhomat,
//           dat1: {
//             ...dhomatFirebase[0].muajt.qershor.datatDhomat.dat1,
//             dhomFamiljare:
//               dhomatFirebase[0].muajt.qershor.datatDhomat.dat1.dhomFamiljare -
//               1,
//           },
//         },
//       },
//     },
//   };
