const entry = document.getElementById('entry');
const lista = document.getElementById('num-list');
const res = document.getElementById('res');
const line = document.getElementById('line');
let numList = [];

function isNumero(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true;
    }
    return false;
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    }
    return false;
}

function adicionar() {   
    line.style.display = "none";
    res.innerHTML = '';
    
    if (isNumero(entry.value) && !inLista(entry.value, numList)) {
        numList.push(Number(entry.value));
        let item = document.createElement('option');
        item.text = `Valor ${Number(entry.value)} adicionado`;
        lista.appendChild(item);
    } else {
        alert('[ERRO] Valor inserido inválido ou já adicionado!')
    }
    
    entry.value = '';
    entry.focus();

}

const finalizar = () => {
    if (numList.length == 0) {
        alert('[ERRO] Adicione um valor antes de finalizar!');
    } else {
        numList.sort();
        let qtdNum = numList.length;
        let max = numList[0];
        let min = numList[0];
        let sum = 0;
        
        for (let i in numList) {
            sum += numList[i];
            if (numList[i] > max)
                max = numList[i];
            if (numList < min)
                min = numList[i];
        }
        
        let media = sum/qtdNum;
    
        line.style.display = "block";
        line.style.marginBottom = "15px";
        res.innerHTML = `Ao todo, temos ${qtdNum} ${qtdNum > 1 ? 'números cadastrados' : 'número cadastrado'}. </br></br>`;
        res.innerHTML += `O maior valor informado foi ${max}. </br></br>`; 
        res.innerHTML += `O menor valor informado foi ${min}. </br></br>`; 
        res.innerHTML += `Somando todos os valores, temos ${sum}. </br></br>`; 
        res.innerHTML += `A média dos valores digitados é ${media}.`;
    }

   
}