
// ------------------------------------------------------------
//  TipoDocumento
// ------------------------------------------------------------


class TipoDocumento {
    static nextId = 1;
    cosntructor(nombre, codigo) 
    
    {
        this.id = TipoDocumento.nextId++;
        this.codigo = codigo;
        this.nombre = nombre;       
    }   
    tojson() {
        return { 
            id: this.id, 
            codigo: this.codigo, 
            nombre: this.nombre 
        };
    }
}

