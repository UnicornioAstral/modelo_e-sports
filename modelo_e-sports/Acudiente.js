
// ------------------------------------------------------------
//  Acudiente
// ------------------------------------------------------------


class Acudiente {
    static nextId = 1;
    constructor( nombreCompleto, tipoDocumento, numeroDocumento, telefono, parentesco)

    {
        this.id = Acudiente.nextId++;
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.telefono = telefono;
        this.parentesco = parentesco;
    }
    tojson() {
        return {
            id: this.id,
            nombreCompleto: this.nombreCompleto,
            tipoDocumento: this.tipoDocumento,
            numeroDocumento: this.numeroDocumento,
            telefono: this.telefono,
            parentesco: this.parentesco
        };
    }
}
