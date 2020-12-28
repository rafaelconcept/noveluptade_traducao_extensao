const translatte = require('translatte');
const token = require('@vitalets/google-translate-token');
const translate = require('@vitalets/google-translate-api');


const lista = require('./src/array_palavras_tradutor.json')
var fs = require('fs');
const path = require('path');
var traduzido = [];

var existente = []
var novaLista = []

/*
translate('I spea Dutch!', {from: 'en', to: 'pt'}).then(res => {
    console.log(res.text);
    //=> Ik spreek Nederlands!
    console.log(res.from.text.autoCorrected);
    //=> true
    console.log(res.from.text.value);
    //=> I [speak] Dutch!
    console.log(res.from.text.didYouMean);
    //=> false
}).catch(err => {
    console.error(err);
});



token.get('Hello').then(console.log);


*/


if(fs.existsSync(
    path.resolve(__dirname, "./src/traduzido.json"), 'binary'
    )){
       existente = require('./src/traduzido.json')


    }else{
        console.log('NÃO EXISTE')
    }





existente.map(palavra=>{
    novaLista.push(palavra.en)
})


var newList = lista.filter(palavra =>{
    return !novaLista.includes(palavra)
})


console.log(newList);

newList.length>0?traduzir(newList.length - 1):console.log("lista completa")





function traduzir(vezes){    



    
    if( vezes < 0 || isNaN( vezes ) ){
        
        return;     
    }


  

    translatte(newList[vezes], {
        from: 'en',
        to: 'pt',
        
        
    }).then(res => {

        

        salvar({'en':newList[vezes],'pt':res.text})

        return vezes < 1 ? '' : traduzir(vezes - 1)
        //console.log(res.text); 

    

    }).catch(res=>{
        console.log('Limite atingido, tente mais tarde')
    })
    



   


}

function salvar(array){
    
    var existente2 = []


    if(fs.existsSync(
        path.resolve(__dirname, "./src/traduzido.json"), 'binary'
        )){
             existente2 = require('./src/traduzido.json')

        }else{
        
        }

        existente2.push(array)
        console.log(existente2);

  

   // array = existente.push(array);
    
    array = JSON.stringify(existente2);
    
    fs.writeFile("./src/traduzido.json", array, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    }); 
}



/*

lista.map(palavra=>{
    
    translatte(palavra, {
        from: 'en',
        to: 'pt',
        
    }).then(res => {
        traduzido.push({'en':palavra,'pt':res.text})
        //console.log(res.text);
    }).catch(err => {
        console.error(err);
    });

})
    




translatte('Вы говорите по-русски?', {
    from: 'ru',
    to: 'pt',
    
}).then(res => {
    console.log(res.text);
}).catch(err => {
    console.error(err);
});

*/