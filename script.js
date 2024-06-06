// Seleciona todas as cards
const cards = document.querySelectorAll('.card');

// Função para remover a classe 'active' de todas as cards
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}

// Adiciona evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses(); // Remove a classe 'active' de todas as cards
        card.classList.add('active'); // Adiciona a classe 'active' ao card clicado
    });
});
