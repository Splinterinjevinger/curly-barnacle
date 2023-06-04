let VeranderImgButton = document.querySelector('button');
let Img = document.querySelector('img');

let EvolutiesBilly = ['images/billy1.png', 'images/billy2.png', 'images/billy3.png', 'images/billy4.png', 'images/billy5.png', 'images/billy6.png', 'images/billy7.png', 'images/billy8.png', 'images/billy9.png', 'images/billy10.png', 'images/billy11.png', 'images/gefeliciteerd.png'];

let BeginImg = 0;
let clicks = 0;

let progressBar = document.querySelector('progress');

let audio = new Audio('billyvoice.mp3'); 

VeranderImgButton.addEventListener('click', function() {

    //klik +1, img + 1
    BeginImg++;
  clicks++;

  audio.play(); 
  
  
  //controleren of img binnen array is 
  if (BeginImg < EvolutiesBilly.length) {
    
   //afbeelding kiezen  
    Img.src = EvolutiesBilly[BeginImg];
  }
  
  //waarde progress op basis van clicks instellen
  progressBar.value = clicks * 10;
  
  //checken of 11de img bereikt is 
  if (BeginImg === EvolutiesBilly.length - 1) {
    
    //klicks, img terug naar 0 
    BeginImg = 0;
     clicks = 0;
    
    progressBar.value = 0;
  }
})


function autoTerugzetten() {
  
    //checken of img groter dan 0 is 
  if (BeginImg > 0) {
    
    //img, clicks verlagen 
    BeginImg--;
    clicks--;
    
    //bron afbeelding vastellen 
    Img.src = EvolutiesBilly[BeginImg];
    
    //prgress aanpassen op bais kliks 
    progressBar.value = clicks * 10;
  }
}

//automatisch terug zetten img 
setInterval(autoTerugzetten, 1500);




//bron(progress.value)https://www.w3schools.com/jsref/prop_progress_value.asp
//bron(src property)//:https://www.w3schools.com/jsref/prop_img_src.asp
//bron(operators)https://www.w3schools.com/jsref/jsref_operators.asp
//bron(audio)https://www.w3schools.com/jsref/met_audio_play.asp