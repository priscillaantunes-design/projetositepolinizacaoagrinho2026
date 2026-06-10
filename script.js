let currentCount = parseInt(counterElement.innerText.replace(/\D/g, '')) || 0;
pledgeForm.addEventListener('submit', async (e) => { // Adicionado 'async'
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const profile = document.getElementById('profile').value;

    if (name && email && profile) {
        const formData = { name, email, profile };

        try {
            // Simulando o envio para uma API
            /*
            const response = await fetch('https://api.exemplo.com/pledge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error('Erro no servidor');
            */

            // O código abaixo só roda se o envio acima der certo:
            currentCount++;
            counterElement.innerText = currentCount.toLocaleString('pt-BR');

            pledgeForm.reset();
            pledgeForm.style.display = 'none';
            successMessage.classList.remove('hidden');

        } catch (error) {
            alert('Ops! Ocorreu um erro ao salvar seu apoio. Tente novamente.');
        }
    }
});