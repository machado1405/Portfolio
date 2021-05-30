export default function initBuscaCep() {
    const inputCep = document.querySelector('#cep');
    const btnBuscarCep = document.querySelector('#buscarCep');
    const cepBuscado = document.querySelector('.cep-buscado');
    const rua = document.querySelector('#rua');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade');
    const estado = document.querySelector('#estado');
    const ddd = document.querySelector('#ddd');

    async function buscarCep(event) {
        event.preventDefault();

        const cepDigitado = inputCep.value;
        const validaCep = fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
        validaCep.then(resolucao => {
            resolucao.json().then((body) => {
                if (resolucao.status === 200) {
                    cepBuscado.classList.add('ativo');
                    console.log(body.cep);
                    rua.value = body.logradouro;
                    bairro.value = body.bairro;
                    cidade.value = body.localidade;
                    estado.value = body.uf;
                    ddd.value = body.ddd;
                }
            });
        });
    }
    btnBuscarCep.addEventListener('click', buscarCep);
}
