

// ------------------------------------------------------------
//  ACUDIENTE
// ------------------------------------------------------------


class Acudiente {
    static nextId = 1;
    constructor(nombreCompleto, tipoDocumento, numeroDocumento, telefono, parentesco) {
            
        this.id = Acudiente.nextId++;
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.telefono = telefono;
        this.parentesco = parentesco;
    }
}
