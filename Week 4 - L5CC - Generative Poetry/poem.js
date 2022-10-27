
// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}
let openingline = "upon the rainy feilds"

let pronouns = ["i", "we", "he", "she", "they", ]

let verbs = ["cryed", "ran", "danced", "galavanted", "died", "rolled"]

let adverbs = ["deceivingly", "devilishly", "compleatly", "joyusly", "fluidly"]

let pronoun = randomElementFromArray( pronouns)
let verb = randomElementFromArray( verbs)
let adverb = randomElementFromArray( adverbs)
let poem = (openingline+" "+ pronoun+ " " +verb + " " +adverb )
console.log(poem)


let begining = "there once was "

let ajectives = ["lovely", "develish", "horrible", "bumbling", ]
let ajective = randomElementFromArray(ajectives)

let ages = ["young", "old",]
let age = randomElementFromArray(ages)

let nouns = ["beatle", "beetle", "eagle", "seagull", "weasel", "beagle", ]
let noun = randomElementFromArray(nouns)

let places = ["norwich", "cambrigde", "london"]
let place = randomElementFromArray(places)

let actions = ["fancied himself", "splashed around in", "bottled up", "helped himself to" ]
let action = randomElementFromArray(actions)

let amounts = [ "some of the", "the", "all the"]
let amount = randomElementFromArray(amounts)

let liquids = [ "treacle", "desel", "beatles", ]
let liquid = randomElementFromArray(liquids)

let endings = [ "through a needle","through a needle", "through a needle", "on a beagle", "on abeetle", "on a eagle", "on aseagull", "on a weasel"]
let ending = randomElementFromArray(endings)

 let poem2 = (begining + ajective + " " + age + " " + noun + " who " + action
  + " " + amount +" "+ liquid + " and then with a frown he drank it all down then the next day he shat " + ending )
 
 console.log(poem2)

  document.getElementById("para").innerHTML = poem
  document.getElementById("paratwo").innerHTML = poem2
