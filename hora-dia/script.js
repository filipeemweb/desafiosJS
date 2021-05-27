function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('photo')
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    let dayTime = ""

    
    if (hour >= 5 && hour < 12) {
        document.body.style.background = "rgb(250, 208, 119)"
        img.src = "images/morning.png"
        img.style.width = "250px"
        dayTime = "manhã"
    } else if (hour >= 12 && hour <= 18) {
        document.body.style.background = "gb(108, 209, 235)"
        img.src = "images/afternoon.png"
        img.style.width = "250px"
        dayTime = "tarde"
    } else {
        document.body.style.background = "rgb(40, 52, 94)"
        img.src = "images/night.png"
        img.style.width = "250px"
        dayTime = "noite"
    }

    msg.innerHTML = `Agora são <strong>${hour}:${(min<10?'0':'') + min}</strong> horas da ${dayTime}.`
}
