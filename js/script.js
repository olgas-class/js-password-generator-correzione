// Test
// alert('Ciao')

// 1. Raccolta dati
const userName = prompt("Ciao! Dimmi il tuo nome"); // string | null
console.log(userName);

const userLastName = prompt("Dimmi il tuo cognome"); // string | null
console.log(userLastName);

const userColor = prompt("Dimmi il tuo colore preferito"); // string | null
console.log(userColor);

// const rndNum = 21; // number
const rndNum =  Math.floor(Math.random() * 101); // number
console.log(rndNum);

// 2. Esecuzione logica
const rndNumStr = rndNum.toString(); // string
const password = userName + userLastName + userColor + rndNumStr; // string
console.log(password);

// 3. Output
document.getElementById('result').innerHTML = password;