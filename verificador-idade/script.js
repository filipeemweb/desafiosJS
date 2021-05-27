const verificar = () => {
    const date = new Date()
    const year = date.getFullYear()
    const birthYear = document.querySelector('input#birth')
    const res = document.querySelector('div#res')

    if (birthYear.value.length == 0 || Number(birthYear.value) > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        const fsex = document.getElementsByName('radsex')
        const age = year - Number(birthYear.value) 
        const img = document.createElement('img')
        img.setAttribute('id', 'photo')
        img.style.width = '250px'
        img.style.margin += '15px 0 0 0'
        let gender = ''
        if (fsex[0].checked) {
            gender = 'homem'
            document.body.style.background = 'rgb(127, 180, 240)'
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', 'images/babyboy.png')
            } else if (age <= 21) {
                img.setAttribute('src', 'images/teenboy.png')
            } else if (age <= 40) {
                img.setAttribute('src', 'images/man.png')
            } else if (age <= 65) {
                img.setAttribute('src', 'images/seniorman.png')
            } else {
                img.setAttribute('src', 'images/oldman.png')
            }
        } else {
            gender = 'mulher'
            document.body.style.background = 'rgb(240, 127, 197)'
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', 'images/babygirl.png')
            } else if (age <= 21) {
                img.setAttribute('src', 'images/teengirl.png')
            } else if (age <= 40) {
                img.setAttribute('src', 'images/woman.png')
            } else if (age <= 65) {
                img.setAttribute('src', 'images/seniorwoman.png')
            } else {
                img.setAttribute('src', 'images/oldwoman.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gender == 'homem' ? 'um' : 'uma'} ${gender} e tem ${age} anos.`
        res.appendChild(img)
    }
}