const gerar = () => {
    const num = document.querySelector('input#num');
    const table = document.querySelector('select#tabuada');
    let n = 0;

    if (num.value.length == 0){
        alert('Por favor, digite um número!');
    } else {
        n = Number(num.value);   
    }

    table.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement('option');
        item.text = `${n} X ${i} = ${n*i}`;
        table.appendChild(item);
    }
}