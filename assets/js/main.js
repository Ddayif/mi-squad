function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;

}

var arr = [];

const ValentinaS = new MiembroSquad("Valentina", "Spuler", 21, ["Ver peliculas", "Dormir", "jugar con sus gatos"]);
const MartinaC = new MiembroSquad("Martina", "Covarrubias", 27, ["Cocinar", "Comer", "Andar en bicicleta"]);
const Alejandra = new MiembroSquad("Alejandra", "Morales", 27, ["Leer", "Observar la naturaleza", "Acampar"]);
const ValentinaR = new MiembroSquad("Valentina", "Rodriguez", 25, ["Dibujar", "Tejer", "Hacer panqueques"]);
const PaulinaR = new MiembroSquad("Paulina", "Rojas", 35, ["Cocinar", "Leer", "Caminar"]);
const PaulinaH = new MiembroSquad("Paulina", "Huañaco", 26, ["Escuchar música", "Bailar", "Jugar Videojuegos"]);
const Fa = new MiembroSquad("Fa", "Diaz", 31, ["Correr", "Hacer mandalas", "Cantar"]);
const Joselin = new MiembroSquad("Joselin", "Grez", 22, ["Jugar con Dakota", "Andar en bicicleta", "Comer"]);

arr.push(ValentinaS);
arr.push(MartinaC);
arr.push(Alejandra);
arr.push(ValentinaR);
arr.push(PaulinaR);
arr.push(PaulinaH);
arr.push(Fa);
arr.push(Joselin);

var contenedor = document.getElementById("contenedor");

arr.forEach(function(valorActual){
	contenedor.innerHTML += "<strong>Nombre: </strong>" + valorActual.nombre + " " + valorActual.apellido + "<br>" + "<strong>Edad: </strong>" + valorActual.edad + " años " + "<br>" + "<strong>Hobbies: </strong>" + "<br>";
	var listaDeHobbies = valorActual.hobbies.forEach(function(el){
		return (contenedor.innerHTML += "<ul><li>" + el + "</li></ul>")
	});
	contenedor.innerHTML += "<br>";
})