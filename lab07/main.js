/*** Object Constructors ***/
function Emu(name, age) {
  this.name = name;
  this.age = age;
  this.image = "emu.png";
  this.type = "Emu";
}

function Capybara(name, age) {
  this.name = name;
  this.age = age;
  this.image = "capybara.png"
  this.type = "Capybara";
}

function Hedgehog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "hedgehog.png"
  this.type = "Hedgehog";
}

/*** Global Variables ***/
var animals = [new Capybara(), new Hedgehog(), new Emu()]
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Capybara) 
  {
    return new Capybara(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Hedgehog) 
  {
    return new Hedgehog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Emu) 
  {
    return new Emu(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)

};
