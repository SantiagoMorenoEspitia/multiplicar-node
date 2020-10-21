const argv = require('./config/yargs').argv
const colors = require('colors')

//const fs = require('express');
// const fs = require("./")
//const { argv } = require('process');
const {crearArchivo,listarTable}  = require('./multiplicar/multiplicar')

// let arbv2 = process.argv;
// // let parametro = argv[2]
// // let base = parametro.split('=')[1];

 console.log(argv)
 let command = argv._[0]
 switch(command){
    case 'listar':
        listarTable(argv.base,argv.limite);
    break;
    case 'crear':
        console.log("Crear")
        crearArchivo(argv.base).then(archivo=> console.log(`El nombre del archivo creado: ${archivo}`))
                          .catch(err=>console.log(err));
    break;
    default:
        console.log("Comando no reconocido")

 }
// console.log(arbv2)
// crearArchivo(base).then(archivo=> console.log(`El nombre del archivo creado: ${archivo}`))
//                  .catch(err=>console.log(err));