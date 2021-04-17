// 1) referenze //
var refName = document.getElementById('name');
var refPrezzo = document.getElementById('price')
var bottone = document.getElementById('button');
var ingradienti = document.getElementsByClassName('ingredient-checkbox');
var sconto = document.getElementById('coupon')
// 2) setting delle varibili //
var prezzoInziale = 50;
var sconto20 = 0.20;
var coupons = ['sconto2021', 'sconto-bool'];
prezzoScritto(prezzoInziale,refPrezzo)




// 3) eventi //
bottone.addEventListener('click' ,  function(){
  //console.log(ingradienti)
  //(cosa succede al click?)
  //1) ----- CONTROLLO NOME -----
  var nomeInserito = refName.value; //(creo questa variabile per aggiungere successivamente '.trim' valore che impedisce di inserire gli spazzi vuoti)
  if(nomeInserito.trim() == 0){
    alert('ATTENZIONE! \n  Il nome da lei inserito non è corretto')
  }else{
    //2) ------ SOMMA VALORI ELEMENTI SELEZIONATI -----
    var prezzoReset = 0 // il prezzo va resettato prima della funzione
    for( var i = 0; i < ingradienti.length; i++){
      var elIngradienti =  ingradienti[i];
      if(elIngradienti.checked === true){
        //console.log(elIngradienti.value)
        prezzoReset += parseInt(elIngradienti.value);
      }
    }
    //3) ------ PREZZO SCONTATO (con coupon) --------
    var prezzoTotale = prezzoInziale + prezzoReset;
    if(coupons.includes(sconto.value) === true){
     prezzoTotale -= prezzoTotale * sconto20;
     console.log('Hai diritto ad uno sconto')
    }
   
    //4) ----- STAMPA PREZZO -----
    prezzoScritto(prezzoTotale, refPrezzo)
  }

});





// 4) funzioni //

// creo una funzione che mi scriva il prezzo 
function prezzoScritto(value, target){
  target.innerHTML = value.toFixed(2);
}

// creo una funzione che mi scriva la somma degli elementi aggiunti
/* function totPrice (dollor){
  for( var i = 0; i < ingradienti.length; i++){
    var elIngradienti =  ingradienti[i];
    if(elIngradienti.checked === true){
      //console.log(elIngradienti.value)
      prezzoInziale += parseInt(elIngradienti.value);
    }
    console.log( prezzoInziale)
  }
  return prezzoInziale
} */