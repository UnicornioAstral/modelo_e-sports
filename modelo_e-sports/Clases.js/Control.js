

// ------------------------------------------------------------
//  CONTROL   
// ------------------------------------------------------------


class Control {
    static nextId = 1;
    constructor(numeroSerie, plataforma, tipo) {

        this.id = Control.nextId++;
        this.numeroSerie = numeroSerie;
        this.plataforma = plataforma;
        this.tipo = tipo;
    }
}
