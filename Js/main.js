
// carregamento dinamico das linhas e colunas
//declarao de variaveis usado no caregamento das linhas
 var main__linha=document.getElementById("main__linha");

 const colunas=
    `<div class="main__coluna" imagem="img/uem.png" artist="Khalil" song="Kilil" file="audio/k.mp3">
    <img src="img/uem.png" alt="" srcset="">
    <h3>Khalil</h3>
    <p>Kilil  </p>  
    </div><!-- coluna -->
    `;
//paradas
main__linha.innerHTML+=`
<div class="main_linha__title">
<h2>Paradas</h2>
</div><!-- titulo da linha-->
`+colunas+``+colunas+``+colunas+``+colunas+``+colunas+``+colunas+``+colunas+`

`;


 //minhas musicas
main__linha.innerHTML+=`
 
<div class="main_linha__title">
<h2>Minhas Musicas</h2>
</div><!-- titulo da linha-->
<div class="main__coluna" imagem="img/uem.png" artist="Khalil" song="Kilil" file="audio/k.mp3">
<img src="img/uem.png" alt="" srcset="">
<h3>Khalil</h3>
<p>Kilil  </p>  
</div><!-- coluna --> 
`;



//fim carregamento dinamico das linhas e colunas


// carregamento dinamico do player de musica
//declarao de variaveis usado no player
var audioPlayer= document.getElementById("audioPlayer");
var loaded=false;

var playBtn=document.getElementById("playBtn");
var pauseBtn=document.getElementById("pauseBtn");

var barra=document.getElementById("barra");

let segundos;
let timing;
let interval;
let global_sec;
let minutos;
/***************************************************/

pauseBtn.addEventListener("click",(e)=>{
     e.preventDefault();

     playBtn.style.display="inline";
     pauseBtn.style.display="none";
     audioPlayer.pause();
     timeCount(global_sec,timing,segundos,false);
     return false;
 });

 playBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    playBtn.style.display="none";
    pauseBtn.style.display="inline";
    audioPlayer.play();
    timeCount(global_sec,timing,segundos,true);
    return false;
 })

 const playSong=(file)=>{
    
     if(loaded==false)
     {
         audioPlayer.innerHTML=`<source src="`+file+`" type="audio/mp3"/>`;
         loaded=true;
     }
     audioPlayer.play();
     playBtn.style.display="none";
     pauseBtn.style.display="inline";
     clearInterval(interval);
     audioPlayer.onloadeddata=()=>{
        // let data =new Date(null);
        // data.setSeconds(audioPlayer.duration)
        // minutos=data.toISOString().substr(12,8);
        segundos=audioPlayer.duration;
        
        timeCount(0,timing,segundos,true);


      
     }
     

 };

 document.querySelectorAll(".main__coluna").forEach(item=>{
     item.addEventListener("click", Event=>{
       let image=item.getAttribute("imagem");
       let art=item.getAttribute("artist");
       let song=item.getAttribute("song");
       let file=item.getAttribute("file");


       let player__artist__component=document.getElementsByClassName("player__artist");
       
       console.log(minutos);
       player__artist__component[0].innerHTML= `
        <img class="song-img" src="`+image+`"/>
        <h3>`+art+`<br/><span>`+song+`</span></h3>
        `;
        
        playSong(file);
     });
 });
 
 function timeCount(segundoAtual,time,minutoAtual,contar){    
    if(contar==true)
    {
        timing=0;
       interval=setInterval(function(){
            
        segundoAtual++;
           
            if(segundoAtual<=minutoAtual)
            {
                global_sec=segundoAtual++;
                timing=(segundoAtual/minutoAtual)*100;
                barra.style.width=``+timing+`%`;
            }
            else{
                audioPlayer.pause();
                barra.style.width=``+0+`%`;
                
            }
        },2000);
    }
    else{

        clearInterval(interval);
        barra.style.width=``+time+`%`;
    }
   
};
// fim do script do player de musica


