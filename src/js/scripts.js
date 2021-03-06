//Variables
const inputName = document.getElementById('name-input')
const inputDate = document.getElementById('date-input')
const button = document.getElementById("add-button")

//Functions
const formatMsToTimer = (ms) => {
    let s = ms/1000
    let days = Math.floor(s / 86400)
    let restOfHours = s % 86400
    let hours = Math.floor(restOfHours / 3600)
    let restOfMinutes = restOfHours % 3600
    let minutes = Math.floor(restOfMinutes/60)
    let restOfSeconds = restOfMinutes % 60
    let seconds = Math.floor(restOfSeconds)
    let string = ''

    if (days != 0 && days === 1){
        string+=` ${days} day `
    } else if (days !=0 && days > 1){
        string+=` ${days} days `
    } 

    if (hours != 0 && hours === 1){
        string+=` ${hours} hour `
    } else if (hours !=0 && hours > 1){
        string+=` ${hours} hours `
    } 
    
    if (minutes != 0 && minutes === 1){
        string+=` ${minutes} minute `
    } else if (minutes !=0 && days > 1){
        string+=` ${minutes} minutes `
    } 

    if (seconds != 0 && seconds === 1){
        string+=` ${seconds} second `
    } else if (seconds !=0 && seconds > 1){
        string+=` ${seconds} seconds `
    } 

    return string
}

const getTime = (futureDate) => {
    let currentDate = new Date();
    let time = currentDate.getTime()
    let futureTime = Date.parse(futureDate)
    let difference = (futureTime - time) 
    return(formatMsToTimer(difference))
}   

const addNewCard = (formatedTimeDiff,counterName) =>{
    if (document.getElementsByClassName('cards-container').length === 0 ){
        let cardsContainer = document.createElement('div')
            cardsContainer.className = ('cards-container')
            cardsContainer.id = ('cards-container')  
        document.getElementById('container').appendChild(cardsContainer)  
    }

    let card = document.createElement('div')
        card.className = ('card')

    let titleElemment = document.createElement('h1')
    let titleTextNode = document.createTextNode(counterName)
        titleElemment.appendChild(titleTextNode)
    card.appendChild(titleElemment)

    let timeLeft = document.createElement('h3')
    let timeLeftTextNode = document.createTextNode('TIME LEFT')
        timeLeft.appendChild(timeLeftTextNode)
    card.appendChild(timeLeft)

    let timeDiff = document.createElement('p')
    let timeDiffTextNode = document.createTextNode(formatedTimeDiff)
        timeDiff.appendChild(timeDiffTextNode)
    card.appendChild(timeDiff)

    let delButton = document.createElement('h2')
    let delButtonTextNode = document.createTextNode('X')
        delButton.appendChild(delButtonTextNode)
    card.appendChild(delButton)

    document.getElementById('cards-container').appendChild(card)
    

}

//Events
inputName.addEventListener ('keypress',function(event) {
    if(event.keyCode === 13) {
        if(inputName.value.length > 0 && inputDate.value.length > 1) {
        } else {
            alert('Please add name and date')
        }
    }
})

button.addEventListener ("click",function() {
    if(inputName.value.length > 0 && inputDate.value.length > 1) { 
        addNewCard(getTime(inputDate.value),inputName.value.toUpperCase())
    } else {
        alert('Please add name and date')
    }
})