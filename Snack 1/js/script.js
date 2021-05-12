// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

let bicidacorsa = [ {
  nome: "Bici d'epoca",
  peso: 15
},
{
  nome: "Bici elettrica",
  peso: 13
},
{
  nome: "Bici da corsa",
  peso: 7
},
{
  nome: "Bici per bambini",
  peso: 10
},
{
  nome: "Bici da downhill",
  peso: 12
},
];

console.log(bicidacorsa);
const root = document.getElementById("root");
const element = document.getElementsByClassName("element")[0];
const [bici] = bicidacorsa;
const {peso} = bici;

let pesoMinore = peso;
let biciLeggera = {};

for (let i = 0; i < bicidacorsa.length; i++) {
  const {peso} = bicidacorsa[i];
  if (peso < pesoMinore) {
    posoMinore = peso;
    biciLeggera = bicidacorsa[i];
  }
}


//element.addEventListener("click", () => root.innerHTML = `

//document.addEventListener("click", function(){
  //document.getElementById("demo").innerHTML = "Hello World";
//});