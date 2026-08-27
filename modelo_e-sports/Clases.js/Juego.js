

// ------------------------------------------------------------
//  JUEGO   
// ------------------------------------------------------------


class Juego {
    static nextId = 1;
    constructor(nombre, esrb, estudio, numJugadores, tipo, existencias = 0) {

        this.id = Juego.nextId++;
        this.nombre = nombre;
        this.esrb = esrb;
        this.estudio = estudio;
        this.numJugadores = numJugadores;
        this.tipo = tipo;
        this.existencias = existencias;
        this.plataformas = [];
    }

    agregarPlataforma(p) {
    this.plataformas.push(p);
    
  }
}
