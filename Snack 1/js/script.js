// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bicidacorsa = [ {
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

let biciLeggera = bicidacorsa[0];

for (var i = 1; i < bicidacorsa.length; i++) {
  let biciCorrente = bicidacorsa[i];

  if (biciCorrente.peso < biciLeggera.peso) {
    biciLeggera = biciCorrente;
  }
}

const container = document.getElementById("container");
const { nome, peso } = biciLeggera;

container.innerHTML = `
    <h1>La bici più leggera</h1>
    <ul>
        <li>Nome: <strong>${nome}</strong></li>
        <li>Peso: <strong>${peso}</strong></li>
    </ul> `;      

console.log(nome);
console.log(peso);



//const root = document.getElementById("root");
//const element = document.getElementsByClassName("element")[0];
//const [bici] = bicidacorsa;
//const {peso} = bici;
//let pesoMinore = peso;
//let biciLeggera = {};
//for (let i = 0; i < bicidacorsa.length; i++) {
  //const {peso} = bicidacorsa[i];
  //if (peso < pesoMinore) {
    //posoMinore = peso;
    //biciLeggera = bicidacorsa[i];
  //}
//}
//element.addEventListener("click", () => root.innerHTML = `
