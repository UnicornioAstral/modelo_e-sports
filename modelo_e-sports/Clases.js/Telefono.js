

// ------------------------------------------------------------
//  DIRECCION
// ------------------------------------------------------------


class Telefono {
    static nextId = 1;
    constructor(numero, tipo, esPrincipal = false) {

        this.id = Telefono.nextId++;
        this.numero = numero;
        this.tipo = tipo;
        this.esPrincipal = esPrincipal;
    }
}
