
// ------------------------------------------------------------
//  Equipo
// ------------------------------------------------------------


class Equipo {
    static nextId = 1;
        constructor( nombre, Juego, horasJuego = 0) 
        
        {
            this.id = Equipo.nextId++;
            this.nombre = nombre;
            this.juego = juego;
            this.horasJuego = horasJuego;
            this.miembros = [];
            this.trofeos = [];
            this.fechaCreacion = new Date();
            this.estado = "activo";
            this.experiencia = 0;
        }

        calcularNivel() {
            let puntos = 0;
            for (const m of this.miembros) {
                for ( const t of m.usuario.trofeos) {
                    puntos += t.trofeos.puntos;
                }
            }
            return puntos;
        }
           
        
        
    agregarTrofeo( trofeo, fechaObtencion, descripcion = ";") {
        this.trofeos.push({ tofeo, fechaObtencion, descripcion});
    }
     

    listarAtletas() {
        return this.miembros.map( m => m.usuario);
    }

    sumarExperiencia(puntos) {
        this.experiencia += puntos;
    }
    tojson() {
        return {
            id: this.id,
            nombre: this.nombre,
            juego: this.juego?.tojson(),
            horasJuego: this.horasJuego,
            nivel: this.calcularNivel(), 
            fechaCreacion: this.fechaCreacion, 
            estado: this.estado, 
            experiencia: this.experiencia };
        
        }
    
}        

    
        

        



    


   




