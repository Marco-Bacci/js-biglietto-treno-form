
// Recupero button 
const button = document.getElementById(`send`)

// // creo event listener
button.addEventListener(`click`, function(e)  
{
  e.preventDefault();
// richiamo gli input e stabilisco variabile prezzo del ticket
  const name =document.getElementById(`name`).value
  const km = parseInt(document.getElementById(`km`).value)
  const age = parseInt(document.getElementById(`age`).value)
  let ticketPrice = km * 0.21
  
  if (age <= 18){
    ticketPrice = ticketPrice * 0.8
  }
  
  else if (age >= 65){
    ticketPrice = ticketPrice * 0.6
  }
  

  document.getElementById('show-name').innerText = `nome: ${name}`  
  document.getElementById('show-age').innerText = `età: ${age}`
  document.getElementById('show-km').innerText = `da percorrere: ${km} km`
  document.getElementById('show-price').innerText = `${ticketPrice.toFixed(2)} euro`
})


  
  

