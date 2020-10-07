// characters I have designed
let characters = [{
  name: "Marissa",
  color: "BlUe*%$?/pUrPlE?!@5%"
}, {
  name: "Scarlett",
  color: "Pink"
}, {
  name: "Valentine",
  color: "RAINBOW!GRAY?"
}, {
  name: "Madison",
  color: "Green"
}, {
  name: "Stella",
  color: "Cyan"
}, {
  name: "Violet",
  color: "Magenta"
}];

let randomIndex; 
let counter = 0;
let animating = false;
let drawings = [];
let imageCounter = 0;
let button;

function preload(){
  for (let i = 0; i<=62; i++){
    drawings[i] = loadImage("assets/drawings_" + i + ".PNG")
  }
}

function setup() {
  createCanvas(900, 900);
  background(200);
  textSize(24);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);


  text("Click to Randomize!", 450, 450);
  

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
  if (characters[0]) {
    clear();
    image(random(drawings), width/2, height/2); 
    randomIndex = int(random(characters.length));
    text(`${characters[randomIndex].name}'s favorite color is ${characters[randomIndex].color}`, width/2, height - 5);
    
    //text(dogs[randomIndex].name + "'s favorite color is" + dogs[randomIndex].color, 50, 50);
    characters.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    
    text("nothing left!", 450, 450);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}