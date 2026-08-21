
// ------------------------------------------------------------
//  Consola
// ------------------------------------------------------------


class Consola {
    static nextId = 1;
    constructor( numeroSerie, nombre, plataforma, ip, macUtp5, macWifi, totalControles ) 
    
    {
    
        this.id = Consola.nextId++;
        this.numeroSerie = numeroSerie;
        this.nombre = nombre;
        this.plataforma = plataforma;
        this.ip = ip;
        this.macUtp5 = macUtp5;
        this.macWifi = macWifi;
        this.totalControles = totalControles;
    }
    tojson() {
        return {
            id: this.id,
            numeroSerie: this.numeroSerie,
            nombre: this.nombre,
            plataforma: this.plataforma,
            ip: this.ip,
            macUtp5: this.macUtp5,
            macWifi: this.macWifi,
            totalContorles: this.totalControles
            
        };
    }
}