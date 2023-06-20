const datTod = new Date();
export let disabledDates = [];

export const setDisabledDays = (dta) => {
  notAvailableDays(dta, "qershor", 30, 6);
  notAvailableDays(dta, "korrig", 31, 7);
  notAvailableDays(dta, "gusht", 31, 7);

  //Nga sot e mbrapa
  if ([5, 6, 7].includes(datTod.getMonth())) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(
        `${datTod.getFullYear()}, ${datTod.getMonth() + 1}, ${datTod.getDate()}`
      ),
    });
  }
};

const notAvailableDays = (dta, muaj, ditet, muajNr) => {
  for (let i = 1; i <= Number(ditet); i++) {
    if (dta[muaj].datatDhomat[`dat${i}`] == null) {
      disabledDates.push(new Date(`${datTod.getFullYear()}, ${muajNr}, ${i}`));
    }
  }
};

export const disableDaysBasedOnClick = (vlera) => {
  if ([5, 6, 7].includes(vlera.getMonth())) {
    disabledDates.push({
      from: new Date(`${datTod.getFullYear()}, 6, 1`),
      to: new Date(
        `${datTod.getFullYear()},${vlera.getMonth() + 1}, ${
          vlera.getDate() + 1
        }`
      ),
    });
  }
};
