let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')

// Adding the play again button:
let playAgainBtn = document.querySelector('#playAgain')

// Selecting a random country using the Math floor and random functions
// Learned some about it from here:
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// Don't totally understand how they work, even reading the tooltips.
let randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
// Using the randomly selected object, taking out the name and
// the country code (referred to as alpha-2))
let countryName = randomCountry['name']
let countryCode = randomCountry['alpha-2']
// Then prompting the user with the name.
randomCountryElement.innerHTML = countryName

submitButton.addEventListener('click', () => {
    // the submit button listens for a click, then pulls in the user's answer
    let userAnswer = userAnswerElement.value
    // verifies that they even put in an answer first
    if (userAnswer.length === 0) {
        alert('Please enter an answer')
    // If they did, the fetch function starts and tries to bring back the answer
    // which the user's answer is checked against in the next function
    } else {
        infoFetch().then(countryCapital => {
            answerCheck(userAnswer, countryCapital)
        })
    }
})

playAgainBtn.addEventListener('click', () => {
    // The play again button runs through the same sort of things at the beginning
    // could be reduced to another function..
    randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
    countryName = randomCountry['name']
    countryCode = randomCountry['alpha-2']
    // New random country name and code, and resetting the html elements for the user.
    randomCountryElement.innerHTML = countryName
    userAnswerElement.value = ''
    resultTextElement.innerHTML = 'Replace with result'
})

function answerCheck(answer, capital) {
    // Using the actual answer and the user input, both set to lower case and compared,
    if (answer.toLowerCase() === capital.toLowerCase()) {
        // either tells the user they got it right or wrong.
        resultTextElement.innerHTML = `Correct! The capital of ${countryName} is ${capital}`
    } else {
        resultTextElement.innerHTML = `Incorrect, the capital isn't ${answer}, it's ${capital}`
    }
}

// This was explained a little bit to me by a classmate
// the fetch function runs using the country code piece saved earlier
function infoFetch() {
    let url = `http://api.worldbank.org/v2/country/${countryCode}?format=json`
    // the whole promise is set to be returned?
    return fetch(url)
    // the response is saved as json?
    .then(response => response.json())
    // is this the callback piece? using the promise data,
    // the country capital is pulled out and returned with the promise?
    .then(countryData => {
        let countryInfo = countryData[1]
        countryCapital = countryInfo[0].capitalCity
        return countryCapital
    })
    // errors are caught and displayed to the user.
    .catch(err => {
        alert("An error occurred: " + err)
        console.log(err)
    })
}