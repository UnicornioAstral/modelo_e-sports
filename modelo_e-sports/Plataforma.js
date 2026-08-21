
// ------------------------------------------------------------
//  Plataforma
// ------------------------------------------------------------


class Plataforma {
    static nextId = 1;
    constructor( nombre, marca) 
    
    {
        this.id = plataforma.nextId++;
        this.nombre = nombre;
        this.marca = marca;
    }
    tojson() {
        return {
            id: this.id,
            nombre: this.nombre,
            marca: this.marca
        };
    }
}