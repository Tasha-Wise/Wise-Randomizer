// dogs I have loved before
let dogs = [{name:"dillon", color: "dog treat color"}, {name: "Ziggy", color:"chartrese"}, {name; "mercedes", color:"poop"}, {name: "nala", color:"stardust"}, {name; "kloot", color:"coffee grind brown"}, {name; "petunia", color:"rose gold"}];

let randomIndex;

function setup() {
	createCanvas(600, 600);
	background(200);	

	
	
}

function draw(){
	
}

function mousePressed(){
	background(random(200, 255));
	randomIndex = int(random(dogs.length));
	text(dogs[randomIndex].name, 50, 50);
	dogs.splice(randomIndex, 1);
}