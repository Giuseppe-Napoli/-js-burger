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
// indico ciò che accadrà al click "nameBurger"
bottone.addEventListener('click' , nameBurger);



// 4) funzioni //

//da qui ha origine ogni evento derivante dal click
function nameBurger(){
  var nomeInserito = refName.value; //(creo questa variabile per aggiungere successivamente '.trim' valore che impedisce di inserire gli spazzi vuoti)
  if(nomeInserito.trim() === 0){
    alert('ATTENZIONE! \n  Il nome da lei inserito non è corretto')
  }else{
    // se il nome inserito è valido entriamo nella funzione 
    calcPrezzo(prezzoInziale, refPrezzo);
  }
}

//2) ------ SOMMA VALORI ELEMENTI SELEZIONATI -----
function calcPrezzo(value,target){
  var prezzoReset = 0 // il prezzo va resettato prima della funzione
  //inizio un ciclo dove verifico quali ingradienti sono stati selezionati col valore "checked" e vado poi a sommare i loro "value"
  for( var i = 0; i < ingradienti.length; i++){
    var elIngradienti =  ingradienti[i];
    if(elIngradienti.checked === true){
      //console.log(elIngradienti.value)
      prezzoReset += parseInt(elIngradienti.value);
    }
  }
  var prezzoTotale = prezzoInziale + prezzoReset;
  var prezzoDiscount = checkDiscount(prezzoTotale,sconto20); //funzione che mi calcola lo sconto, dichiaro adesso i valori che andrà ad assumere la mia funzione. cifra=prezzoTotale e disc=sconto20
}
prezzoScritto(prezzoDiscount, refPrezzo);

//3) ------ PREZZO SCONTATO (con coupon) --------
function checkDiscount(cifra, disc) {
  if(coupons.includes(sconto.value) === true){
   cifra -= cifra * disc;
   console.log('Hai diritto ad uno sconto')
  return cifra;
  }else {
  return cifra;
  }
}

// creo una funzione che mi scriva il prezzo 
function prezzoScritto(value, target){
  target.innerHTML = value.toFixed(2);
}

