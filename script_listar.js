
//rodar no site > https://myactivity.google.com/item?product=58

var lista = []
for(i=0;i<document.querySelectorAll('.QTGV3c > a').length;i++){
    var palavra = document.querySelectorAll('.QTGV3c > a')[i].innerText
    palavra = palavra.split('"')
    
    lista.push(palavra[1])
}


var novaLista = lista.filter((este, i) => lista.indexOf(este) === i);


// PAra salvar os dados
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)

console.save(novaLista, "array_palavras_tradutor.json");
