document.addEventListener('DOMContentLoaded', function() {
    // Detectar mobile para ajustes futuros se necessário
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Lógica do Efeito Ripple (Onda ao clicar nos botões)
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Cria o elemento da onda
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            // Pega a posição do clique relativo ao botão
            const rect = button.getBoundingClientRect();
            
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');

            // Remove a onda anterior se existir (opcional, mas bom para cliques rápidos)
            const ripple = button.getElementsByClassName('ripple')[0];
            if (ripple) {
                ripple.remove();
            }

            button.appendChild(circle);
        });
    });

    // Animação simples de entrada para os cards (Stagger effect)
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease-out forwards ${index * 0.1}s`;
    });
});