document.addEventListener('DOMContentLoaded', () => {
    // Obtenção de elementos do DOM
    const btnCadastro = document.getElementById('btn-cadastro');
    const btnLogin = document.getElementById('btn-login');
    const cadastroModal = document.getElementById('cadastroModal');
    const loginModal = document.getElementById('loginModal');
    const closeButtons = document.querySelectorAll('.close-button'); // Seleciona todos os botões de fechar

    const cadastroForm = document.getElementById('cadastroForm');
    const loginForm = document.getElementById('loginForm');

    // Função para abrir o modal
    function openModal(modal) {
        modal.style.display = 'flex'; // Usamos flex para centralizar
        document.body.style.overflow = 'hidden'; // Impede o scroll da página principal
    }

    // Função para fechar o modal
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura o scroll da página principal
    }

    // Event Listeners para abrir os modais
    btnCadastro.addEventListener('click', () => {
        openModal(cadastroModal);
    });

    btnLogin.addEventListener('click', () => {
        openModal(loginModal);
    });

    // Event Listeners para fechar os modais (usando forEach para múltiplos botões)
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Encontra o modal pai do botão clicado
            const modal = event.target.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Fechar modal clicando fora
    window.addEventListener('click', (event) => {
        if (event.target == cadastroModal) {
            closeModal(cadastroModal);
        }
        if (event.target == loginModal) {
            closeModal(loginModal);
        }
    });

    // Lógica de envio do formulário de Cadastro (exemplo)
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        const nome = document.getElementById('cadastro-nome').value;
        const email = document.getElementById('cadastro-email').value;
        const telefone = document.getElementById('cadastro-telefone').value;

        console.log('Dados de Cadastro:', { nome, email, telefone });
        alert(`Cadastro realizado com sucesso, ${nome}! Entraremos em contato.`);
        cadastroForm.reset(); // Limpa o formulário
        closeModal(cadastroModal); // Fecha o modal após o envio
        // Aqui você enviaria os dados para um servidor (backend)
    });

    // Lógica de envio do formulário de Login (exemplo)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        const nome = document.getElementById('login-nome').value;
        const email = document.getElementById('login-email').value;
        const telefone = document.getElementById('login-telefone').value;

        console.log('Dados de Login:', { nome, email, telefone });
        alert(`Bem-vindo(a) de volta, ${nome}!`);
        loginForm.reset(); // Limpa o formulário
        closeModal(loginModal); // Fecha o modal após o envio
        // Aqui você validaria os dados com um servidor (backend)
    });
});