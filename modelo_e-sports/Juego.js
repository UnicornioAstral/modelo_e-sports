
// ------------------------------------------------------------
//  Juego
// ------------------------------------------------------------



class Juego {
    static nextId = 1;
    constructor( nombre, esrb, estudio, numJugadores, tipo, existencias = 0) 
    
    {
        this.id = Juego.nextId++;
        this.nombre = nombre;
        this.esrb = esrb;
        this.estudio = estudio;
        this.numJugadores = numJugadores;
        this.tipo =tipo;
        this.existencias = existencias;
        this.plataformas = [];
    } 

    agregarPlataforma(pf) {
        this.plataformas.push(pf);
    }
    tojson() {
        return {
            id: this.id,
            nombre: this.nombre,
            esrb: this.esrb,
            estudio: this.estudio,
            numJugadores: this.numJugadores,
            tipo: this.tipo,
            existencias: this.existencias,
            plataformas: this.plataformas.map(pf => pf.tojson()) };
        }    
}          
   

