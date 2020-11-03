// PASO 1: Crear una constante llamada express y requerir el modulo express
const express = require ('express')

// PASO 2: Ejecución de Express
const app = express ();

// Recorda que express es una funcion... hay que invocarla y guardalo en una constante llamada app

// PASO 3: Informacion que vamos a usar
// Crea una variable (por ej. heroes) y asignale como valor el contenido del archivo "heroes.json"
// Tip: podes usar el require como si fuera un modulo ;)
let heroes = require ('./heroes.json')

// PASO 4: Configurando el servidor
// Crea una constante llamada PORT y asignale como valor el numero tres mil
// ...

let PORT = 3000;
// Reemplaza los guiones por la constante para que utilice ese numero de puerto
// Sabes por que lo definimos como constante y no como variable ? 

app.listen(3000, () => console.log(`Server running in ${3000} port`));

// CONSIGNA 1
// Ruta Raíz / Home
app.get('/', (req, res) => {
  res.send('estos son los héroes');
})
// CONSIGNA 2
// Ruta /heroes
// Consigna: enviar todo el array
app.get('/heroes', (req, res) => {
  res.send(heroes);
});

// CONSIGNA 3
// Aqui creas la ruta para devolver la pagina de los creditos
// Podes resolverlo en base a los ejemplos anteriores.


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
