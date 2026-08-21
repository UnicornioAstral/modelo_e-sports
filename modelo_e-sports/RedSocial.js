
// ------------------------------------------------------------
//  RedSocial
// ------------------------------------------------------------


class RedSocial {
    static nextId = 1;
    constructor( plataforma, urlPerfil, nombreUsuario = '') 
    
    {
        this.id = RedSocial.nextId++;
        this.plataforma = plataforma;
        this.urlPerfil = urlPerfil;
        this.nombreUsuario = nombreUsuario;
    }
    tojson() {
        return {
            id: this.id,
            plataforma: this.plataforma,
            urlPerfil: this.urlPerfil,
            nombreUsuario: this.nombreUsuario
        };
    }
}