
// Recupero valori del form
const button = document.getElementById(`send`)
button.addEventListener(`click`, function(e)  
{
  e.preventDefault();
  const km = parseInt(document.getElementById(`km`).value)
  const age = parseInt(document.getElementById(`age`).value)
  let ticketPrice = km * 0.21
  
  if (age <= 18){
    ticketPrice = ticketPrice * 0.8
  }
  
  else if (age >= 65){
    ticketPrice = ticketPrice * 0.6
  }
  
  console.log(`km`,km,`age`,age , ticketPrice)
})


  
  


// // recupero il button per inviare il form
// const button = document.getElementById(`send`)

// // creo l'evento click sul pulsante
// button.addEventListener (`click`, function(e){
//   e.preventDefault();
// })


