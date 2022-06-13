const misDatos = {
  Nombre: "Leandro",
  Edad: 38,
  Desarrollador: true,
  Fecha_Nacimiento: new Date("Octubre 25, 1983 16:25:00"),
  Libro_Favorito: {
    Título: "Va' dove ti porta il cuore",
    Autor: "Susanna Tamaro",
    Fecha: 1994,
    Url: "https://it.wikipedia.org/wiki/Va%27_dove_ti_porta_il_cuore",
  },
};

console.log(
  "Nombre: " + misDatos.Nombre + "\n" + 
  "Edad: " + misDatos.Edad + "\n" +
  "Desarrollador: " + misDatos.Desarrollador + "\n" +
  "Fecha de Nacimiento: " + misDatos.Fecha_Nacimiento + "\n" + "\n" +
  "Libro Favorito: " + "\n"+
  "     Título: " + misDatos.Libro_Favorito.Título + "\n" +
  "     Autor: " + misDatos.Libro_Favorito.Autor + "\n" +
  "     Fecha: " + misDatos.Libro_Favorito.Fecha + "\n" +
  "     Url: " + misDatos.Libro_Favorito.Url+ "\n" + "\n"
);
