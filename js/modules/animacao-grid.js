export default function initGridAnimacao() {
    const gridAnimacao = document.querySelector('#gridAnimacao');
    setTimeout(() => {
        gridAnimacao.classList.add('ativo');
    }, 500);
}