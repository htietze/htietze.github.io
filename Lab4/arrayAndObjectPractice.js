/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// TODO Extract the latitude value, and log it to the console.
console.log(iss_location.iss_position.latitude)
// TODO Extract the longitude value, and log it to the console.
console.log(iss_location.iss_position.longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)

// https://www.w3schools.com/jsref/jsref_tofixed.asp
let AUDRate = rates.AUD
console.log((100 * AUDRate).toFixed(2))

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let comparison = 0
let rateCode = ''
// looping through each rate and saving our place if a higher value is found
for (let x in rates) {
    if (rates[x] > comparison) {
        comparison = rates[x]
        rateCode = x
    }
}
console.log(`The highest conversion rate is: ${rateCode} at ${comparison} to 1`)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
];

// TODO print Gary Oldman's cat's name
cats_and_owners.forEach(function(object) {
    // the console will only display the object.cat value if the name value matches
    if (object.name == 'Gary Oldman') {
        console.log(object.cat)
    }
})
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let swift = {name: 'Taylor Swift', cat: 'Meredith'}
// creates a new object and pushes it to the end of the cats and owners array
cats_and_owners.push(swift)

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach(function(object) {
    console.log(`${object.name}'s cat is named ${object.cat}`)
})

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

// Code is all after the variable here!!

let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// going down a level in the json since there's only the prizes object
let prizes = nobel_prize_winners_2017.prizes

// TODO print the full name of the Literature Nobel laureate.
prizes.forEach(function(prize) {
    // looping through the prizes array, if the category matches then..
    if (prize.category == 'literature') {
        // then looping through the prize winners..
        prize.laureates.forEach(function(winner) {
            // and collecting their first and last names to be printed.
            let prizeWinner = `${winner.firstname} ${winner.surname}`
            console.log(prizeWinner)
        })
    }
})

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
prizes.forEach(function(prize) {
    // looping through the prizes..
    if (prize.category == 'physics') {
        // stopping only if the category is physics
        // to then loop through the laureates of that prize category and collect their IDs to print
        prize.laureates.forEach(function(winner){
            console.log(`${winner.id}`)
        })
    }
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// setting up to save the prize categories, just to make them print nicely
let prizeCategories = []
let prizeList = ''
// looping through the prizes again
prizes.forEach(function(prize) {
    // taking out each category value and pushing it to our own array
    prizeCategories.push(prize.category)
    // then using that .join trick to put them all together and spaced
    prizeList = prizeCategories.join(', ')
})
// then printing that saved string.
console.log(prizeList)

// TODO write code to print the total number of prize categories
let categoryCounter = 0
prizes.forEach(function(prize) {
    // looping through each prize object (which means looping through each category)
    // and adding to the counter each loop.
    categoryCounter++
})
console.log(`There are ${categoryCounter} categories`)

// TODO write code to count the total number of laureates from 2017.
let winnerCounter = 0
prizes.forEach(function(prize) {
    // similar to last time, looping through each prize, this time looping through the number of
    // laureates too, and increasing the counter each time a winner is looped over
    prize.laureates.forEach(function(winner){
        winnerCounter++
    })
})
console.log(`There are ${winnerCounter} Nobel prize winners in 2017`)