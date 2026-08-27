

// ------------------------------------------------------------
//  TIPO DOCUMENTO
// ------------------------------------------------------------


class TipoDocumento {
    static nextId = 1;
    constructor(codigo, nombre) {

        this.id = TipoDocumento.nextId++;
        this.codigo = codigo;
        this.nombre = nombre;
    }
}