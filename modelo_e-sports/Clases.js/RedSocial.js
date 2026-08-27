

// ------------------------------------------------------------
//  RED SOCIAL
// ------------------------------------------------------------


class RedSocial {
    static nextId = 1;
    constructor(plataforma, urlPerfil, nombreUsuario = '') {

        this.id = RedSocial.nextId++;
        this.plataforma = plataforma;
        this.urlPerfil = urlPerfil;
        this.nombreUsuario = nombreUsuario;
    }
}
