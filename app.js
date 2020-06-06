const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;


}
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv);
//console.log(argv2);

/*
 */