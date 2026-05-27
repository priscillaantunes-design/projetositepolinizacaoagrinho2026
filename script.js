document.addEventListener('DOMContentLoaded', () => {
    const pledgeForm = document.getElementById('pledgeForm');
    const counterElement = document.getElementById('counter');
    const successMessage = document.getElementById('successMessage');

    // Valor inicial do contador puxado do texto
    let currentCount = parseInt(counterElement.innerText.replace(',', ''));

    pledgeForm.addEventListener('submit', (e) => {
        // Evita que a página recarregue ao enviar o formulário
        e.preventDefault();

        // Captura os dados (podem ser enviados para uma API no futuro)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const profile = document.getElementById('profile').value;

        if (name && email && profile) {
            // Incrementa o contador de apoiadores
            currentCount++;
            
            // Atualiza a exibição com formatação de milhar simples
            counterElement.innerText = currentCount.toLocaleString('pt-BR');

            // Esconde o formulário e exibe a mensagem de sucesso
            pledgeForm.reset();
            pledgeForm.style.display = 'none';
            successMessage.classList.remove('hidden');
        }
    });
});