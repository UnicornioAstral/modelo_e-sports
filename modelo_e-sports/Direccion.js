
// ------------------------------------------------------------
//  Direccion
// ------------------------------------------------------------


class Direccion {
    constructor( comuna, barrio, calle, numero, referencia ) 
    
    {
        this.comuna = comuna;
        this.barrio = barrio;
        this.calle = calle;
        this.numero = numero;
        this.referencia = referencia;
    }
    completa() {
        return `${this.calle} ${this.numero}, ${this.barrio}, ${this.comuna}, ${this.referencia}`;
    }
    tojson() { 
        return {
            comuna: this.comuna,
            barrio: this.barrio,
            calle: this.calle,
            numero: this.numero,
            referencia: this.referencia
        } 
    }




}
