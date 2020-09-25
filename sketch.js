// dogs I have loved before
let dogs = [{name:"Lakota", color: "pink"}, {name: "Kiowa", color:"blue"}, {name; "Druid", color:"red"}, {name: "Skye", color:"frisbee"}, {name; "Shasta", color:"dog treat"}, {name; "Sona", color:"fruit"}];

let randomIndex;

function setup() {
	createCanvas(600, 600);
	background(200);	

	
	
}

function draw(){
	background(200);
}

function mousePressed(){
	background(random(200, 255));
	randomIndex = int(random(dogs.length));
	text(dogs[randomIndex].name, 50, 50);
	dogs.splice(randomIndex, 1);
}