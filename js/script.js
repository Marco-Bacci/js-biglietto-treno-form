
// Recupero valori del form
const button = document.getElementById (`send`)
button.addEventListener (`click`, function(e))  
{
  e.preventDefault();
  const km = document.getElementById (`km`).value
  const age = document.getElementById (`age`).value
  
  console.log(km,age)
}


  
  
  

  



// variabile costo del biglietto
  // let TicketPrice = numKm * 0.21
  
  // if (userAge <= 18){
  //   TicketPrice = TicketPrice * 0.8
  // }
  
  // else if (userAge >= 65){
  //   TicketPrice = TicketPrice * 0.6
  // }
  
  // console.log(numKm, userAge , ticketPrice.toFixed(2))

// // recupero il button per inviare il form
// const button = document.getElementById(`send`)

// // creo l'evento click sul pulsante
// button.addEventListener (`click`, function(e){
//   e.preventDefault();
// })


