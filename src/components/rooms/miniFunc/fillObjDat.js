export let datForUpdat;
let i = 1;
export const updateData = (dt, firestoreDT, shenja, defMuaj = "qershor") => {
  //dt esht per dat. qe marrim nga inputet
  datForUpdat = firestoreDT;

  if (i == 31 && defMuaj == "qershor") {
    i = 1;
    updateData(dt, datForUpdat, shenja, (defMuaj = "korrig"));
    return;
  } else if (i == 32 && defMuaj == "korrig") {
    i = 1;
    updateData(dt, datForUpdat, shenja, (defMuaj = "gusht"));
    return;
  } else if (i == 32 && defMuaj == "gusht") {
    i = 1;
    return datForUpdat;
  }

  if (
    firestoreDT.muajt[defMuaj].datatDhomat[`dat${i}`] != null &&
    shenja == "-"
  ) {
    datForUpdat = {
      ...datForUpdat,
      muajt: {
        ...datForUpdat.muajt,
        [defMuaj]: {
          datatDhomat: {
            ...datForUpdat.muajt[defMuaj].datatDhomat,
            [`dat${i}`]: {
              ...datForUpdat.muajt[defMuaj].datatDhomat[`dat${i}`],
              [`${dt.llojiDhomes}`]:
                datForUpdat.muajt[defMuaj].datatDhomat[`dat${i}`][
                  `${dt.llojiDhomes}`
                ] - dt.numri,
            },
          },
        },
      },
    };
  } else if (
    firestoreDT.muajt[defMuaj].datatDhomat[`dat${i}`] != null &&
    shenja == "+"
  ) {
    datForUpdat = {
      ...datForUpdat,
      muajt: {
        ...datForUpdat.muajt,
        [defMuaj]: {
          datatDhomat: {
            ...datForUpdat.muajt[defMuaj].datatDhomat,
            [`dat${i}`]: {
              ...datForUpdat.muajt[defMuaj].datatDhomat[`dat${i}`],
              [`${dt.llojiDhomes}`]:
                datForUpdat.muajt[defMuaj].datatDhomat[`dat${i}`][
                  `${dt.llojiDhomes}`
                ] + dt.numri,
            },
          },
        },
      },
    };
  }
  i++;
  updateData(dt, datForUpdat, shenja, defMuaj);
};
