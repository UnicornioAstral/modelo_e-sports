

// ------------------------------------------------------------
//  CONSOLA   
// ------------------------------------------------------------


class Consola {
    static nextId = 1;
    constructor(numeroSerie, nombre, plataforma, ip, macUtP5, macWifi, totalControles) {

        this.id = Consola.nextId++;
        this.numeroSerie = numeroSerie;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.ip = ip;
        this.macUtP5 = macUtP5;
        this.macWifi = macWifi;
        this.totalControles = totalControles;
    }
}
