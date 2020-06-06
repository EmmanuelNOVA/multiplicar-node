const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo TXT para una tabla de multiplicar de acuerdo a una base y un limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}