const greets = document.getElementById("greets")
const currentDate = new Date();
const hours = currentDate.getHours();

let showHours = hours => {
    if (hours >= 5 || hours < 12) {
        return greets.innerText = "Bom Dia!"

    } else if (hours >= 12 || hours < 18) {
        return greets.innerText = "Boa Tarde!"

    } else {
        return greets.innerText = "Boa Noite!"

    }
}

let showDate = () => {
    let CompleteDate = new Date()
    let month = CompleteDate.getDay()
    let day = CompleteDate.getDate()
    document.getElementById("currentDay").innerHTML = `${day} / ${month}`
}

document.addEventListener('DOMContentLoaded', function() {
    showHours()
    showDate()
})

/*fetch('https://api.hgbrasil.com/weather?format=json-cors&key=a1db9024&city_name=Osasco,SP')
    .then(res => res.json())
    .then(data => console.log(data))*/