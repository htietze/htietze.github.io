// Setting up the time element on the page for the initial display
let time = document.querySelector('#time')
time.innerHTML = getDate()
// refreshing the time for every second, calling the function to refresh it
setInterval( () => {
    time.innerHTML = getDate()
}, 1000)
// formatting the date so it just has the hours, minutes, and seconds in a set style.
function getDate() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    return `${hour} : ${minute} : ${second}`
}
// another little random bit, giving the party a random amount of money each time the page is opened.
let money = document.querySelector('#money')
money.innerHTML = Math.floor(Math.random() * 100000)

// setting up a vue app so that elements can be made clickable!
let app = new Vue({
    el:'#app',
    data: {
        itemDisplay: false,
        equipDisplay: false,
        // this list is picked from randomly by one of the later functions
        itemList: ['Hi-Potion', 'Tent', 'Antidote', 'Eye Drops',
            'Elixir', 'X-Potion', 'Megalixir', 'Remedy'],
        counter: 0,
        itemName: '',
        itemAmount: '',
        potionCount: '',
        duplicateCheck: [],
        rowData: []
    },
    methods: {
        items() {
            // this function goes off when the Item text is clicked to open the menu
            if (this.itemDisplay === false) {
                this.itemDisplay = true
                // the first time the menu is opened, the addItem function is run 3 times, ticking up the counter
                while (this.counter < 3) {
                    this.addItem()
                    this.counter++
                    // when the counter finishes the first loop, it'll also set the potions to a random amount
                    // that item is always there and just has a random amount.
                    if (this.counter === 1) {
                        this.potionCount = this.randomQuantity()
                    }
                }
            } else {
                // if item is clicked again, this'll close that menu
                this.itemDisplay = false
            }
            // whenever item is clicked, the equip menu will be disappear too, in case it was open.
            this.equipDisplay = false
        },
        equip() {
            // This function is a simple display setup, clicked it shows,
            // clicked again, it disappears
            if (this.equipDisplay === false) {
                this.equipDisplay = true
            } else {
                this.equipDisplay = false
            }
            // and closes the item menu if it was clicked.
            this.itemDisplay = false
        },
        order() {
            // things that could be added another time: moving character order
            alert("Whoops. Haven't added it.")
        },
        quit() {
            // After reading, learned that javascript isn't allowed to close windows it didn't open!
            // that was interesting.
            alert("Er.. can't do that either!")
        },
        addItem() {
            // https://stackoverflow.com/questions/52211682/add-rows-to-the-table-dynamically-with-the-use-of-vue-js
            // Learned how to add rows to a table using the post linked above
            // an object is made that finds a random item and a random quantity
            // and a set random quantity
            let itemObj = {
                itemName: this.randomItem(),
                itemAmount: this.randomQuantity()
            }
            // then the name for that item is first pushed to the duplicate array
            // which can be checked against when another item is found.
            this.duplicateCheck.push(itemObj.itemName)
            // then the item and it's amount are pushed to the rowData array
            // which is used to populate the item table in the HTML
            this.rowData.push(itemObj)
        },
        randomItem() {
            // randomly selecting an item from array
            let item = this.itemList[Math.floor(Math.random() * this.itemList.length)]
            // while that random item is included in the duplicateCheck array,
            while (this.duplicateCheck.includes(item)) {
            // the loop will pull another item
            item = this.itemList[Math.floor(Math.random() * this.itemList.length)]
            }
            // then that's returned so it can be added to the object.
            return item
        },
        randomQuantity() {
            // returns the random quantity for the item. 1-15.
            return Math.floor(Math.random() * 14)+1
        }
    }
})

// calling the functions for the 3 health bars and 3 mana bars
fillHPBars('firstHP')
fillHPBars('secondHP')
fillHPBars('thirdHP')
fillMPBars('firstMP')
fillMPBars('secondMP')
fillMPBars('thirdMP')

function fillHPBars(elementID) {
    // pulling in the element and creating a canvas for it
    let canvas = document.getElementById(elementID)
    let context = canvas.getContext('2d')
    // which is then filled with the color we want, a good green
    context.fillStyle = '#00A416'
    context.fillRect(0,0,200,30)
    // and includes a little text to note it as HP
    context.fillStyle = '#FFFFFF'
    context.font = '15px Arial'
    context.fillText('HP', 3, 15)
}

function fillMPBars(elementID) {
    // again taking the element id provided as the argument
    let canvas = document.getElementById(elementID)
    let context = canvas.getContext('2d')
    // and filling it in with a set blue color
    context.fillStyle = '#0064DD'
    context.fillRect(0,0,200,30)
    // and writing in that it's MP
    context.fillStyle = '#FFFFFF'
    context.font = '15px Arial'
    context.fillText('MP', 3, 15)
}