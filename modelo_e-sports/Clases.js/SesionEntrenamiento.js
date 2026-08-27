

// ------------------------------------------------------------
//  SESION ENTRENAMIENTO   
// ------------------------------------------------------------


class SesionEntrenamiento {
    static nextId = 1;
    static PUNTOS_POR_HORA = 10;
    constructor(fecha, horaInicio, horaFin, juego, arbitro) {

        this.id = SesionEntrenamiento.nextId++;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.juego = juego;
        this.arbitro = arbitro;
        this.participantes = [];
        this.equipos = [];
        this.estado = EstadoSesion.AGENDADA;
    }

    agregarParticipante(usuario) {
        this.participantes.push(usuario);
    }

    agregarEquipo(equipo) {
        this.equipos.push(equipo);
    }

    calcularHoras() {
        const [h1, m1] = this.horaInicio.split(':').map(Number);
        const [h2, m2] = this.horaFin.split(':').map(Number);
        return (h2 * 60 + m2 - h1 * 60 - m1) / 60;
    }

    asignarExperiencia() {
        const horas = this.calcularHoras();
        const puntos = Math.round(horas * SesionEntrenamiento.PUNTOS_POR_HORA);
        for (const p of this.participantes) p.sumarExperiencia(puntos);
        for (const e of this.equipos) e.sumarExperiencia(puntos);
        return puntos;
    }

     cancelar() {
        this.estado = EstadoSesion.CANCELADA;
    }

    cerrar() {
        if (this.estado === EstadoSesion.CANCELADA) {
            throw new Error('No se puede cerrar una sesión cancelada.');
    }
        this.estado = EstadoSesion.CERRADA;
            return this.asignarExperiencia();
    }
}