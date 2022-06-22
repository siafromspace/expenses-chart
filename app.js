let todayDate = new Date()
let dayIndex = todayDate.getDay()

const days = Array.from(document.getElementsByClassName('day'))

fetch("data.json")
    .then(response => response.json())

    .then(data => data.map((dataPart) => {

        if (days[dayIndex].dataset['text'] === dataPart.day) {

            days[dayIndex].firstElementChild.nextElementSibling.style.backgroundColor = "hsl(186, 34%, 60%)"
        }

        days.forEach(day => {

            if (day.dataset['text'] === dataPart.day) {

                let bar = day.firstElementChild.nextElementSibling

                bar.style.height = ((dataPart.amount + 0.5) * 2.4) + "px"

                bar.addEventListener("mouseover", () => {

                    let amountText = day.firstElementChild

                    amountText.innerText = "$" + dataPart.amount

                    amountText.classList.add('amount')

                    bar.addEventListener("mouseout", () => {

                        amountText.innerText = ""

                        amountText.classList.remove('amount')
                    })
                })
            }
        })
    }))






