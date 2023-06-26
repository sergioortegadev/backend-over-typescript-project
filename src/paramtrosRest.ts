const cartaPostres = (postre: string, ...frutas: string[]): void => {
  console.log(`El postre del día es: ${postre}, y tiene ${frutas}`);
};

cartaPostres(`Pavlova`, ' frutillas', ' arandanos', ' cerezas');
cartaPostres(`Chesse Cake`, ' queso', ' salsas dulces');
