

// ------------------------------------------------------------
//  TIPO USUARIO
// ------------------------------------------------------------


class TipoUsuario {
    static nextId = 1;
    constructor(codigo, nombre, permisos = []) {
        
        this.id = TipoUsuario.nextId++;
        this.codigo = codigo;
        this.nombre = nombre;
        this.permisos = permisos;
    }
}
