

// ------------------------------------------------------------
//  USUARIO   
// ------------------------------------------------------------


class Equipo {
  static nextId = 1;
    constructor(nombre, juego, horasJuego = 0) {
            
        this.id = Equipo.nextId++;
        this.nombre = nombre;
        this.juego = juego;
        this.horasJuego = horasJuego;
        this.miembros = [];
        this.trofeos = [];
        this.fechaCreacion = new Date();
        this.estado = 'activo';
        this.experiencia = 0;
    }

    calcularNivel() {
        let puntos = 0;
            for (const m of this.miembros) {
            for (const t of m.usuario.trofeos) {
            puntos += t.trofeo.puntos;
        }
    }
    return puntos;
  }

    agregarTrofeo(trofeo, fechaObtencion, descripcion = '') {
        this.trofeos.push({ trofeo, fechaObtencion, descripcion });
    }

    listarAtletas() {
        return this.miembros.map(m => m.usuario);
    }

    sumarExperiencia(puntos) {
        this.experiencia += puntos;
    }
}
