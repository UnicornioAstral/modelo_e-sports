
// ------------------------------------------------------------
//  TipoUsuario
// ------------------------------------------------------------


class TipoUsuario {
    static nextId = 1;
    constructor( codigo, nombre, pérmisos = []) 
    
    {
        this.id =TipoUsuario.nextId++;
        this.codigo = codigo;
        this.nombre = nombre;
        this.permisos = [...permisos];
    }

    tienePermiso(p) {
        return this.permisos.includes(p);
    }
    tojson() { 
        return {
            id: this.id,
            codigo: this.codigo,
            nombre: this.nombre,
            permisos: [...this.permisos]
        }
    }
}

