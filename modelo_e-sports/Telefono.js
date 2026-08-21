
// ------------------------------------------------------------
//  Telefono
// ------------------------------------------------------------

class Telefono {
    static nextId = 1;
    constructor(numero, tipo, esPrincipal = false)
    
    {
        this.id =telefono.nextId++;
        this.numero = numero;
        this.tipo = tipo;
        this.esPrincipal =esPrincipal;
    }
    tojson() {
        return {
            id: this.id, 
            numero: this.numero, 
            tipo: this.tipo, 
            esPrincipal: this.esPrincipal
        };
    }

}