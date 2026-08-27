

// ------------------------------------------------------------
//  TROFEO
// ------------------------------------------------------------


class Trofeo {
    static nextId = 1;
    constructor(nombre, puntos, juego, descripcion = '') {

        this.id = Trofeo.nextId++;
        this.nombre = nombre;
        this.puntos = puntos;
        this.juego = juego;
        this.descripcion = descripcion;
    }
}
