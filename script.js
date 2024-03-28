let calculo;
let displayText = document.querySelector('#display');
let calculoAnterior = document.querySelector('#calculoAnterior');

[...document.querySelectorAll('button')].map(btn => {
    btn.addEventListener('click', (e) => {
        const valor = e.target.innerText;
        if (valor === 'C') {
            displayText.value = '';
            calculoAnterior.textContent = '';
        } else if (valor === '=') {
            calculo = displayText.value.replaceAll('x', '*').replaceAll('÷', '/');
            calculoAnterior.textContent = displayText.value+'=';
            displayText.value = eval(calculo);
        } else {
            displayText.value += valor;
        }
    })
})
