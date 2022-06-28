// creating new object 

let person = {
    firstName: 'Chanadler',
    lastName: 'Bong',
    age: 35,
    likes: [`making jokes`, `can i be any more weird `, 'basketball']
}

// using dot nothation

console.log(person.firstName)

// using brackets Notation

console.log(person["lastName"])

// accessing array in object using brakets/dot notation
console.log(person["likes"][2])
console.log(person.likes[2])

// object destructturing

let meal = {
    appitizer: 'chips & salsa',
    entree: 'chille relleno',
    dessert: 'churros',
    drink: 'horchata'
}

//  //using object destructuring, destructure the dessert property off of the meal object

// let dessert=meal.dessert
let { dessert, drink } = meal

console.log(`the dessert is ${dessert} and the drink is ${drink}`)

//destructure the remaining items in the same declaration
let { appitizer, entree } = meal;

console.log(`${appitizer} goes well with ${entree}`)


// destructure the drink and rename it 
let { drink: bestDrinkEver } = meal
console.log(bestDrinkEver)


// looping using a for-in loop
// lets loop over person object and console.log all the keys

for(key in person){  //key is like the i in the for loop
console.log(person[key])
}


for(key in meal){
    console.log(`${key}: ${meal[key]}`)
}

//add properties 
// lets add a job key to the person object withat a value of choice using dot notaion

person.job="statistical analysis and data reconfiguration";

// lets add pets [array] using bracket notation

person[`pets`]=["cat","dog"];

console.log(person)

// delete properties

let teams={
    teamOne:[`ryan`,`patrik`],
    teamTwo:[`jillian`,'emily'],
    teamThree: ['hamzah','isha']

}
delete teams.teamTwo

console.log(teams)


// Classes
// lets add a greeeting method/function to our class to greet the user form the dog
class Dog {
    constructor(name,breed,age){
        this.name=name,
        this.breed=breed,
        this.age=age
    }
    greeting(){
        console.log(`Hi my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }

}

let lassie=new Dog(`lassie`,`collie`,7)

console.log(lassie)

let beethoven=new Dog(`Beethoven`,`at.bernard`,2)
console.log(beethoven)

lassie.greeting()
beethoven.greeting()

// now we can loop over our instance of dog

for(key in lassie)
{
    console.log(lassie[key])
}

class Puppy extends Dog{
    constructor(name,age,breed,trainingLevel){
        super(name,breed,age)
    
        this.trainingLevel= trainingLevel
    }
    levelUp(num){
        this.trainingLevel=num
    }
}
let scrappyDoo= new Puppy(`scrappy`,`great-dane`, 1,3)

scrappyDoo.greeting()
scrappyDoo.levelUp(5)
console.log(scrappyDoo)