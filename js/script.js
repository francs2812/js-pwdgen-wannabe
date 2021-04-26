var nome = prompt("Qual è il tuo nome?");
console.log(nome);

var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

var colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log(colorePreferito);

var password;
password = nome + cognome + colorePreferito + "21";

document.getElementById("password").innerHTML= password;