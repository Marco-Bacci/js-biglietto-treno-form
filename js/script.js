// recupero il button per inviare il form
const button = document.getElementById(`send`)
// creo l'evento click sul pulsante
button.addEventListener (`click`, function(e){
  e.preventDefault();
  // Recupero valori del form
  const name = document.getElementById (`name`).value;
  const numKm = document.getElementById (`km`).value;
  const userAge = document.getElementById (`eta`).value;
  console.log(name, numKm, userAge)

})
















