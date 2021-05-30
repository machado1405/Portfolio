export default function initCalculadora() {
    let inputCalc = document.querySelector('#displayCalculadora');
    let inputCalc2 = document.querySelector('#displayCalculadora2');
    let resultado = document.querySelector('#resultado');
    const botaoSomar = document.querySelector('[data-calculadora="somar"]');
    const botaoSubtrair = document.querySelector('[data-calculadora="subtrair"]');
    const botaoMultiplicar = document.querySelector('[data-calculadora="multiplicar"]');
    const botaoDividir = document.querySelector('[data-calculadora="dividir"]');

    function somar() {
        let n1 = +inputCalc.value;
        let n2 = +inputCalc2.value;
        resultado.value = n1 + n2;
        setTimeout(() => {
            inputCalc.value = '';
            inputCalc2.value = '';
            resultado.value = '';
        }, 2000)
    }

    function subtrair() {
        let n1 = +inputCalc.value;
        let n2 = +inputCalc2.value;
        resultado.value = n1 - n2;
        setTimeout(() => {
            inputCalc.value = '';
            inputCalc2.value = '';
            resultado.value = '';
        }, 2000)
    }

    function multiplicar() {
        let n1 = +inputCalc.value;
        let n2 = +inputCalc2.value;
        resultado.value = n1 * n2;
        setTimeout(() => {
            inputCalc.value = '';
            inputCalc2.value = '';
            resultado.value = '';
        }, 2000)
    }

    function dividir() {
        let n1 = +inputCalc.value;
        let n2 = +inputCalc2.value;
        resultado.value = n1 / n2;
        setTimeout(() => {
            inputCalc.value = '';
            inputCalc2.value = '';
            resultado.value = '';
        }, 2000)
    }

    botaoSomar.addEventListener('click', somar);
    botaoSubtrair.addEventListener('click', subtrair);
    botaoMultiplicar.addEventListener('click', multiplicar);
    botaoDividir.addEventListener('click', dividir);
}