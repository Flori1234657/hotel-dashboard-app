const datTod = new Date();
export let disabledDates = [];

export const setDisabledDays = (dta) => {
  for (let i = 1; i <= 30; i++) {
    if (dta.qershor.datatDhomat[`dat${i}`] == null) {
      disabledDates.push(new Date(`${datTod.getFullYear()}, 6, ${i}`));
    }
  }
  for (let i = 1; i <= 31; i++) {
    if (dta.korrig.datatDhomat[`dat${i}`] == null) {
      disabledDates.push(new Date(`${datTod.getFullYear()}, 7, ${i}`));
    }
  }
  for (let i = 1; i <= 31; i++) {
    if (dta.gusht.datatDhomat[`dat${i}`] == null) {
      disabledDates.push(new Date(`${datTod.getFullYear()}, 8, ${i}`));
    }
  }

  //Nga sot e mbrapa
  if (datTod.getMonth() == 5) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 6, ${datTod.getDate()}`),
    });
  } else if (datTod.getMonth() == 6) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 7, ${datTod.getDate()}`),
    });
  } else if (datTod.getMonth() == 7) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 8, ${datTod.getDate()}`),
    });
  }
};

export const disableDaysBasedOnClick = (vlera) => {
  if (vlera.getMonth() == 5) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 6, ${vlera.getDate() + 1}`),
    });
  } else if (vlera.getMonth() == 6) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 7, ${vlera.getDate() + 1}`),
    });
  } else if (vlera.getMonth() == 7) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(`${datTod.getFullYear()}, 8, ${vlera.getDate() + 1}`),
    });
  }
};
