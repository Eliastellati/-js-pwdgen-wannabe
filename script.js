var nomeUtente = prompt("Ciao, come ti chiami?");
var cognomeUtente = prompt("qual è il tuo cognome?");
var colore = prompt("qual è il tuo colore preferito?");

console.log(nomeUtente);

document.getElementById("username").innerHTML = nomeUtente + cognomeUtente + colore + "21";