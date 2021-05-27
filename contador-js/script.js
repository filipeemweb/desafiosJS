const contar = () => {
    const intial = document.querySelector('input#start');
    const end = document.querySelector('input#end');
    const count = document.querySelector('input#count');
    const res = document.querySelector('div#res');

    if (intial.value.length == 0 || end.value.length == 0 || count.value.length == 0) {
        alert('[ERRO] Faltan dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = "Contando: </br>"
        res.style.textAlign = 'justify';
        let i = Number(intial.value);
        let f = Number(end.value);
        let p = Number(count.value);

        if (p == 0) {
            alert('Passo 0 invalido! Considerando passo 1');
            p = 1;
        }

        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449}${c}  | &nbsp;`;
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449}${c}  | &nbsp;`;
            }
        }
        res.innerHTML += '&#127937;'
    }
}