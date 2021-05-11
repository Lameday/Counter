//Variables
const inputName = document.getElementById('name-input')
const inputDate = document.getElementById('date-input')
const button = document.getElementById("add-button")



//2021-05-04T12:02
//Functions
const formatMsToTimer = (ms) => {
    let s = ms/1000
    let hours = Math.floor(s / 3600)
    let restOfMinutes = s % 3600
    let minutes = Math.floor(restOfMinutes/60)
    let restOfSeconds = restOfMinutes % 60
    let seconds = Math.floor(restOfSeconds)
    return hours + ":" + minutes + ":" + seconds;
}

const getTime = (futureDate) => {
    let currentDate = new Date();
    let time = currentDate.getTime()
    let futureTime = Date.parse(futureDate)
    let difference = (futureTime - time) 
    return(formatMsToTimer(difference))
}   


const send = () => {
    console.log('test')
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
        addNewCard(getTime(inputDate.value))
    } else {
        alert('Please add name and date')
    }
})