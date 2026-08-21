
// ------------------------------------------------------------
//  SesionEntrenamiento
// ------------------------------------------------------------


class SesionEntrenamiento {
    static nextId = 1;
    static PUNTOS_POR_HORA = 10;
    constructor( fecha, horaInicio, horaFin, juego, arbitro)


        {
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

        agregarEquipo() {
            this.equipos.push(equipo);
        }

        calcularHoras() {
            const [h1, m1] = this.horaInicio.split(':').map(Number);
            const [h2, m2] = this.horaFin.split(':').map(Number);
            retunr (h2 * 60 + m2 - h1 * 60 -m1) / 60;
        }

        asignarExperiencia() {
            const horas = this.calcularHoras();
            const puntos = Math.round(horas * SesionEntrenamiento.PUNTOS_POR_HORA);
            for (const p of this.participantes) p.sumarExperiencia(puntos);
            for (const e of this.equipos) e.sumarExperiencia(puntos);
            return puntos;
        }

        calncelar() {
            this.estado =EstadoSesion.CANCELADA;
        }

        cerrar() {
            if (this.estado === EstadoSesion.CANCELADA) {
                throw new Error('No se puedemantener abierta una sesion cancelada');
            }
            this.estado = EstadoSesion.CERRADA;
            return this.asignarExperiencia();
        }
        tojson() {
            return {
                id: this.id,
                fecha: this.fecha,
                horaInicio: this.horaInicio,
                horaFin: this.horaFin,
                juego: this.juego?.tojson(),
                arbitro: this.arbitro?.tojson(),
                participantes: this.participantes.map( p => p.tojson()),
                equipos: this.equipos.map( e => e.tojson()),
                estado: this.estado
            };
        }

}