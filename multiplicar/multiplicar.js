//require
const { rejects } = require('assert');
const fs = require('fs')
const colors = require('colors')


let crearArchivo  = (base, limite = 10)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('No es un numero')
            return;
        }
        let data = ''
        for(let i = 0; i<=limite;i++){
            data+=`${base} * ${i} = ${base*i}`;
        }
        fs.writeFile(`talas/tabla-${base}`, data, (err) => {
          if (err) 
            reject(err);
          else
            resolve(`Tabla ${base}.txt`)
        });
    })
}

let listarTable =(base,limite = 10)=>{
        console.log('===========================')
        console.log(`==========tabla de ${base}=================`.red)
            for(let i = 0; i<=limite;i++){
                    console.log(`${base} * ${i} = ${base*i}`);
                
            }
}

module.exports = {
    crearArchivo,
    listarTable
}