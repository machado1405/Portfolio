export default function initValidaForm() {
    // Declaração de variáveis, seleção de elementos do cadastro
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    const cadastrar = document.querySelector('[data-cadastrar="cadastrar"]');
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');
    const repetirSenha = document.querySelector('#repetirSenha');
    const errorMessage = document.querySelector('[data-errorMessage="cadastro"]');
    const successMessage = document.querySelector('[data-successMessage="cadastro"]');
    const emailArrayLogin = [];
    const senhaArrayLogin = [];
    // Fim da declaração de variáveis, seleção de elementos do cadastro

    // Declaração de variáveis, seleção de elementos login
    const botaoLogin = document.querySelector('[data-modal="abrirLogin"]');
    const botaoFecharLogin = document.querySelector('[data-modal="fecharLogin"]');
    const containerModalLogin = document.querySelector('[data-modal="containerLogin"]');
    const botaoEntrar = document.querySelector('[data-entrar="entrar"]');
    const emailLogin = document.querySelector('#emailLogin');
    const senhaLogin = document.querySelector('#senhaLogin');
    const errorMessageLogin = document.querySelector('[data-errorMessage="login"]');
    const successMessageLogin = document.querySelector('[data-successMessage="login"]');
    // Fim declaração de variáveis, seleção de elementos login

    // Adiciona a classe ativo ao container da modal, assim abrindo ou fechando
    if (botaoAbrir && botaoFechar && containerModal) {
        function toggleModal() {
            containerModal.classList.toggle('ativo');
            successMessage.innerHTML = '';
            errorMessage.innerHTML = '';
        }
        // Verificação de dados do formulário
        function submeterForm(event) {
            if (senha.value !== repetirSenha.value) {
                errorMessage.innerHTML = 'As senhas devem ser iguais';
                event.preventDefault();
            } else if (senha.value === '' && repetirSenha.value === '') {
                errorMessage.innerHTML = 'Você deve digitar uma senha válida';
                event.preventDefault();
            } else if (senha.value !== '' && repetirSenha.value === '') {
                errorMessage.innerHTML = 'Repita a senha por favor';
            } else {
                event.preventDefault();
                successMessage.innerHTML = 'Cadastrado com sucesso';
                emailArrayLogin.push(email.value);
                senhaArrayLogin.push(senha.value);
                email.value = '';
                senha.value = '';
                repetirSenha.value = '';
                setTimeout(() => {
                    containerModal.classList.toggle('ativo');
                }, 2000);
            }
        }
        // Fim da verificação de dados do formulário

        // Chamada de eventos aos botões para abrir/fechar ou submeter o formulário
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        cadastrar.addEventListener('click', submeterForm);
    }
    // Abre fecha modal de login
    function toggleModalLogin() {
        containerModalLogin.classList.toggle('ativo');
        emailLogin.value = '';
        senhaLogin.value = '';
        errorMessageLogin.innerHTML = '';
        successMessageLogin.innerHTML = '';
    }
    // Submete o formulário de login
    function submeterLogin(event) {
        let percorreEmail = '';
        let percorreSenha = '';
        emailArrayLogin.forEach((el) => {
            percorreEmail = el;
            if (emailLogin.value !== el) {
                event.preventDefault();
                errorMessageLogin.innerHTML = 'Usuário não encontrado';
            }
        });
        senhaArrayLogin.forEach((index) => {
            percorreSenha = index;
            if (senhaLogin.value !== index) {
                event.preventDefault();
                errorMessageLogin.innerHTML = 'Senha incorreta';
            }
        });
        if (emailLogin.value !== percorreEmail && senhaLogin.value !== percorreSenha) {
            event.preventDefault();
            errorMessageLogin.innerHTML = 'Usuário não encontrado'
        }
    }
    // Chamada de eventos aos botões para abrir fechar o formulário
    botaoLogin.addEventListener('click', toggleModalLogin);
    botaoFecharLogin.addEventListener('click', toggleModalLogin);
    botaoEntrar.addEventListener('click', submeterLogin);


    // async function puxarDados() {
    //     const cadastrarDados = fetch('./dados.json');
    //     const jsonDados = await (await cadastrarDados).json();
    //     jsonDados[0].email = emailArrayLogin[0];
    //     jsonDados[0].senha = senhaArrayLogin[0];
    //     console.log(jsonDados);
    // }
    // puxarDados();
}