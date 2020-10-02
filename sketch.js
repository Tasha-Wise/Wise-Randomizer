// dogs I have loved before
let dogs = [{
  name: "Lakota",
  color: "pink"
}, {
  name: "Kiowa",
  color: "blue"
}, {
  name: "Druid",
  color: "red"
}, {
  name: "Skye",
  color: "frisbee"
}, {
  name: "Shasta",
  color: "dog treat"
}, {
  name: "Sona",
  color: "fruit"
}];

let randomIndex; 
let counter = 0
let animating = false;
let drawings = [];
let imageCounter = 0
let button;

function preload(){
  for (let i = 0; i<=65; i++){
    drawings[i] = loadImages("assets/drawings_ " + i + ".PNG")
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imagemode(CENTER);
  frameRate(8);

  text("Click to Randomize!", 50, 50);
  

 button = createButton("click to Randomize!");
 button.mousePressed(buttonPressed);




}

function draw() {


  if (animating == true) {
    clear();
    image(drawings[imageCounter], width/2, height/2); 
    if (imageCounter < drawings.length - 1){
    imageCounter++;
    }else {
      imageCounter = 0;
    }
  }

}



function randomizer() {
  animating = false;
  if (dogs[0]) {
    clear();
    image(random(drawings), width/2, height/2); 
    randomIndex = int(random(dogs.length));
    text(`${dogs[randomIndex].name} 's favorite color is
${dogs[randomIndex].color}`, width/2, height - 25);
    
    //text(dogs[randomIndex].name + "'s favorite color is" + dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}