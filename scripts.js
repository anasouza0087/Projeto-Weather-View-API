const greets = document.getElementById("greets")

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const time = document.getElementById("time").innerHTML = `${hours}h${minutes}`

let showHours = hours => {
    if (hours >= 5 && hours < 12) {
        return greets.innerText = "Bom Dia!"

    } else if (hours >= 12 && hours < 18) {
        return greets.innerText = "Boa tarde!"

    } else {
        return greets.innerText = "Boa noite!"

    }
}

let showDate = () => {
    let CompleteDate = new Date()
    let month = (CompleteDate.getMonth() + 1)
    let day = CompleteDate.getDate()
    document.getElementById("currentDay").innerHTML = `${day} / ${month}`
}

document.addEventListener('DOMContentLoaded', function () {
    showHours()
    showDate()
})

fetch('https://api.hgbrasil.com/weather?format=json-cors&key=a1db9024&user_ip=remote')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("city").innerHTML = data.results.city_name
        document.getElementById("temp").innerHTML = `${data.results.temp}°C <br>`
        document.getElementById("city-description").innerHTML = `${data.results.description}`
        data.results.forecast.forEach(element => {

            let previsao = [
                `${element.weekday} -------------->
                ${element.date}
                Máx: ${element.max}°C /
                Min: ${element.min}°C
                Tempo: ${element.description}`
            ]

            let items = document.getElementById("week-forecast")
            for (var i = 0;i < previsao.length;i++) {

                let newItem = document.createElement('li')
                newItem.appendChild(document.createTextNode(previsao[i]))
                items.appendChild(newItem)
            }
        })
    })