document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#ligar').addEventListener('click', function(request, sender, sendResponse){

        
        //document.querySelector('.chapter-c').style.backgroundColor = 'red';
        if(document.querySelector('#ligar').innerText == 'Aperte para desligar'){
            document.querySelector('#ligar').innerText = 'Aperte para ligar'
        }else{
            document.querySelector('#ligar').innerText = 'Aperte para desligar'
        }

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {aviso: "ligar"}, function(response) {
               //console.log('response.farewell');
            });
        });



    })
})
   
