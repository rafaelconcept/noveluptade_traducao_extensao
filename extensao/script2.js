chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.aviso == "ligar"){
    
     //alert('oi');
     if(document.querySelector('.chapter-c').style.backgroundColor == 'red'){
        document.querySelector('.chapter-c').style.backgroundColor = ''
     }else{
        document.querySelector('.chapter-c').style.backgroundColor = 'red';
     }
     

    }
}
)