

const cc = new TipoDocumento( 'CC', 'Cedula');
const ti = new TipoDocumento( 'TI', 'Tarjeta de Identidad');

const tipoAtleta = new TipoUsuario( 'ATLETA', 'Atleta');
const tioArbitro = new TipoUsuario( 'ARBITRO', 'Arbitro');

const ps1 = new Plataforma( 'PlayStation 1', 'Sony');
const xbox = new Plataforma( 'Xbox Serie X', 'Microsoft');

const fifa = new Juego( 'EA Sports FC', 'E', 'EA Sports', 21, 'digital', 7);
    fifa.agregarPlataforma(ps1);
    fifa.agregarPlataforma(xbox);

const trofeoGoleador = new Trofeo( 'Goleador del Torneo', 50, fifa);
const trofeoMVP = new Trofeo( 'MVP', 25, fifa)

const douglas = new Usuario({
    TipoDocumento: ti,
    numeroDocumento: '10674425666',
    nombre: 'Douglas',
    apellido: 'Hernandez',
    edad: 17,
    sexo: 'Masculino',
    direccion: new Direccion( 'Comuna 5', 'Buenos Aires', 'calle 38', '12-34'),
    tipoUsuario: tipoAtleta,
    nickname: 'DougVoid_',
    contrasena: 'Pass66',
    telefonos: [new Telefono( '3206669112', TipoTelefono.MOVIL, true)],
    acudiente: new Acudiente( 'Juan Camilo Hernandez', cc, '10769666', '3119876543', 'Hermano')

});

const helena = new Usuario({
    TipoDocumento: cc,
    numeroDocumento: '1188384996',
    nombre: 'Helena',
    apellido: 'Sotomayor',
    edad: 22,
    sexo: 'Binario',
    direccion: new Direccion( 'Comuna 15', 'Colina del Sur', 'calle 18Sur', '23-17'),
    tipoUsuario: tipoAtleta,
    nickname: 'SubMiss_R',
    contrasena: 'Rich7979',
    telefonos: [new Telefono( '3105446912', TipoTelefono.MOVIL, true)],
    
});

const arbitro = new Usuario({
    TipoDocumento: cc,
    numeroDocumento: '1011121314',
    nombre: 'Juan',
    apellido: 'Neira',
    edad: 32,
    sexo: 'Masculino',
    direccion: new Direccion( 'Comuna 10', 'El 12', 'calle 43B', '2-50'),
    tipoUsuario: tipoArbitro,
    nickname: 'Juan_PnRa',
    contrasena: 'Respirando777',
    telefonos: [new Telefono( '319696912', TipoTelefono.MOVIL, true)],
    
});

const buitres = new Equipo( 'Los Buitres'. fifa, 110 );
        douglas.unirseAEquipo( buitres, '8', 'defensa' );
        helena.unirseAEquipo( buitres, '6', 'arquera');

        douglas.obternerTrofeo( trofeoGoleador, new Date('08-05-2026'));
        douglas.obternerTrofeo( trofeoMVP, new Date('11-05-2026'));
        
            buitres.agregarTrofeo( new Trofeo( 'Campeon Best Player', 110, fifa),
                    new Date( '18-05-2026'));    


const consola1 = new consola( 'SN54321', 'ps1 sala B', ps1, '192.168.1.10',
    'AA:BF:BB:11:22:33', 'HH:KK:LI:66:11:99', 5);
const control1 = new Control( 'CTL001', ps1, 'DualSense');

const sesion = new SesionEntrenamiento( '15-08-2026', '15:00', '17:00', fifa, arbitro);
    sesion.agregarParticipante(douglas);
    sesion.agregarParticipante(helena);
    sesion.agregarParticipante(buitres);

const puntos = sesion.cerrar();

console.log( '=== EQUIPO ===');
console.log(buitres.tojson());
console.log( '=== JUGADORES ===');
buitres.listarAtletas().forEach( a => console.log( `${a.nombreCompleto} - Expo: ${a-experiencia} pts`));
console.log( '=== SESION ===');
console.log( 'Estado:', sesion.estado, '| puntos:', puntos);
console.log( '=== HARDWARE ===');
console.log( 'Conosla:', consola1.nombre, '| IP:', consola1.ip);
console.log( 'Control1:', control1.tipo, '| plataforma:',
    control1.plataforma.nombre);





