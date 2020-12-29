chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.aviso == "ligar"){

      var xmlhttp = new XMLHttpRequest();
      var url = "https://raw.githubusercontent.com/rafaelconcept/noveluptade_traducao_extensao/master/tradutor/src/traduzido.json"; // caminho do arquivo

      xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            handle(myArr);
         }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();



      function handle(arr) {


         

         var teste = document.querySelector("#chapter-content").innerText
         var testeLow = document.querySelector("#chapter-content").innerText
         teste = teste.split(' ');



         var reconstruir = '';
         
         testeLow = testeLow.split('\n');
         testeLow3 = []

         testeLow.map((parte,i) =>{
            
            testeLow3[i] = parte.split(' ')
            
        })
         
        const tooltip_css= 
        `
        <style>
         .tooltip {
         position: relative;
         display: inline-block;
         border-bottom: 1px dotted black;
         }

         .tooltip .tooltiptext {
         visibility: hidden;
         width: 120px;
         background-color: black;
         color: #fff;
         text-align: center;
         border-radius: 6px;
         padding: 5px 0;
         
         /* Position the tooltip */
         position: absolute;
         z-index: 1;
         top: -110%;
         left:-20px;
         
         }

         .tooltip:hover .tooltiptext {
         visibility: visible;
         }
         </style>

        `;


        const scriptSty = document.createRange().createContextualFragment(tooltip_css);
        document.querySelector("head").append(scriptSty);


        




        const html =
        `<script>
               function tool(id){
               
               }
        </script>`;
    
      const scriptEl = document.createRange().createContextualFragment(html);
      document.querySelector("head").append(scriptEl);

     


        testeLow3.map((paragrafo,i)=>{
            paragrafo.map((palavra,j)=>{
                //testeLow3[i][j]=palavra.toLowerCase()
            })
        })



         
         arr.map((traduzida)=>{

            testeLow3.map((paragrafo, i)=>{
               paragrafo.map((palavra,j)=>{
                     (palavra.toLowerCase()==traduzida.en)
                     ||palavra.toLowerCase()==traduzida.en+','
                     ||palavra.toLowerCase()==traduzida.en+'.'
                     ||palavra.toLowerCase()==traduzida.en+'"'
                     ||palavra.toLowerCase()==traduzida.en+"'"?testeLow3[i][j]='<div class="tooltip" style="color:rgba(255,255,255,1);cursor:pointer;">'+traduzida.en+'<span class="tooltiptext">'+traduzida.pt+'</span></div>':''
                     
                     
                     
                    // <h1 onclick="tool('+i+''+j+')" id="'+i+''+j+'" style="color:rgba(255,255,255,1);cursor:pointer;">'+traduzida.en+'</h1>':''    
               })
               
            })

         })

        


         testeLow3.map((paragrafo,i)=>{
            paragrafo.map((palavra,j)=>{
               reconstruir = reconstruir + palavra + ' ';
            })
            reconstruir = reconstruir + '<br>';
        })

        





         reconstruir = reconstruir.replace("  ", " ");

     


         //console.log(reconstruir)


         document.querySelector("#chapter-content").innerHTML = reconstruir;

 
         
         console.log(arr)
      }

     

    }
}
)