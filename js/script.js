
// Recupero button 
const button = document.getElementById(`send`)
// recupero il risultato del form 
const resultForm = document.getElementById(`result-form`)
// creo event listener
button.addEventListener(`click`, function(e)  
{
  e.preventDefault();
// richiamo gli input e stabilisco variabile prezzo del ticket
  const km = parseInt(document.getElementById(`km`).value)
  const age = parseInt(document.getElementById(`age`).value)
  let ticketPrice = km * 0.21
  
  if (age <= 18){
    ticketPrice = ticketPrice * 0.8
  }
  
  else if (age >= 65){
    ticketPrice = ticketPrice * 0.6
  }
  
  resultForm.innerHTML = `<ul>
    <li><strong> km ${km}</strong></li>
    <li><strong> età ${age}</strong></li>
    <li><strong> prezzo ticket ${ticketPrice.toFixed(2)} &#8364</strong></li>
  </ul>`
    
})


  
  

