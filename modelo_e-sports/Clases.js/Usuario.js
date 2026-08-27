

// ------------------------------------------------------------
//  USUARIO   
// ------------------------------------------------------------


class Usuario {
    static nextId = 1000;
    constructor(datos) {

        this.id = Usuario.nextId++;
        this.tipoDocumento = datos.tipoDocumento;
        this.numeroDocumento = datos.numeroDocumento;
        this.nombreCompleto = datos.nombreCompleto;
        this.edad = datos.edad;
        this.sexo = datos.sexo;
        this.direccion = datos.direccion;
        this.telefonos = datos.telefonos || [];
        this.redesSociales = datos.redesSociales || [];
        this.tipoUsuario = datos.tipoUsuario;
        this.nickname = datos.nickname;
        this.contrasena = datos.contrasena;
        this.acudiente = datos.acudiente || null;
        this.fechaRegistro = new Date();
        this.activo = true;
        this.equipos = [];
        this.trofeos = [];
        this.experiencia = 0;

            if (this.edad < 18 && !this.acudiente) {
                throw new Error('Menores de edad deben ingresar con Acudiente.');
        }
    }

    agregarTelefono(t) {
         this.telefonos.push(t); 
        }

    eliminarTelefono(id) {
         this.telefonos = this.telefonos.filter(t => t.id !== id); 
        }

    telefonoPrincipal() {
         return this.telefonos.find(t => t.esPrincipal); 
        }

    agregarRedSocial(r) {
         this.redesSociales.push(r); 
        }

    eliminarRedSocial(id) { 
        this.redesSociales = this.redesSociales.filter(r => r.id !== id); 
    }

    asignarAcudiente(a) {
         this.acudiente = a; 
        }

    esMenor() {
         return this.edad < 18; 
        }

    actualizar(campos) {
            Object.assign(this, campos);
                if (!this.esMenor()) this.acudiente = null;
    }

    unirseAEquipo(equipo, numeroCamiseta, posicion) {
            if (this.tipoUsuario.codigo !== 'ATLETA') {
                throw new Error('Solo atletas pueden unirse a un equipo.');
    }

            if (this.equipos.some(e => e.equipo.id === equipo.id)) {
                throw new Error('El atleta ya pertenece a este equipo.');
    }
    
            this.equipos.push({ equipo, numeroCamiseta, posicion, fechaIngreso: new Date() });
            equipo.miembros.push({ usuario: this, numeroCamiseta, posicion, fechaIngreso: new Date() });
    }

    obtenerTrofeo(trofeo, fechaObtencion, descripcion = '') {
        this.trofeos.push({ trofeo, fechaObtencion, descripcion });
    }

    sumarExperiencia(puntos) {
        this.experiencia += puntos;
    }
}
