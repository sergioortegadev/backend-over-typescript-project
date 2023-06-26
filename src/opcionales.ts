const opcionales = (nombre: string, apellido: string, edad?: number) => {
  if (edad)
    console.log(
      `se llama ${nombre}, y su apellido es ${apellido}, y tiene ${edad} años`
    );
  else console.log(`se llama ${nombre}, y su apellido es ${apellido}`);
};

opcionales('sergio', 'ortega', 42);

opcionales('Sergio', 'Ortega');
opcionales('Sergio', 'Ortega', 40 + 2);
