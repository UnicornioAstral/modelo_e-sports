
// ------------------------------------------------------------
//  Trofeo
// ------------------------------------------------------------


class Trofeo {
    static nextId = 1;
    constructor( nombre, puntos, juego, descripcion = "") 
    
    {
        this.id = Trofeo.nextId++;
        this.nombre = nombre;
        this.puntos = puntos;
        this.juego = juego;
        this.descriocion = descripcion;

    }
    tojson() {
        return {
            id: this.id,
            nombre: this.nombre,
            puntos: this.puntos,
            juego: this.juego,
            descripcion: this.descripcion };    
        }



    
}