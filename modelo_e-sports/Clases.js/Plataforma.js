

// ------------------------------------------------------------
//  PLATAFORMA
// ------------------------------------------------------------


class Plataforma {
    static nextId = 1;
    constructor(nombre, marca) {

        this.id = Plataforma.nextId++;
        this.nombre = nombre;
        this.marca = marca;
    }
}
