

// ------------------------------------------------------------
//  DIRECCION
// ------------------------------------------------------------


class Direccion {
    constructor(comuna, barrio, calle, numero, referencia = '') {
   
        this.comuna = comuna;
        this.barrio = barrio;
        this.calle = calle;
        this.numero = numero;
        this.referencia = referencia;
    }
    completa() {
        return `${this.calle} #${this.numero}, ${this.barrio}, ${this.comuna}`;
     }
}