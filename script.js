// Função para exibir uma mensagem surpresa e lançar os confetes
function surpriseMessage() {
    alert("Você é muito importante para mim! Amo muito você, espero que eu veja você crescer mais e mais!");
    
    // Tocar a música após o clique
    const audio = document.getElementById('birthdaySong');
    audio.play().catch((error) => {
        console.log("Erro ao tentar tocar a música:", error);
        alert("A música não pôde ser reproduzida. Por favor, verifique o arquivo de áudio.");
    });

    // Gerar confetes
    launchConfetti();
}

// Função para lançar confetes na tela
function launchConfetti() {
    var duration = 15 * 1000; // duração em milissegundos (15 segundos)
    var animationEnd = Date.now() + duration;
    
    var interval = setInterval(function () {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() > animationEnd) {
            clearInterval(interval);
        }
    }, 100);
}

// Espera a página carregar completamente antes de executar qualquer código
window.onload = () => {
    // Adicionar o evento ao botão para mostrar a surpresa
    document.getElementById('surpriseBtn').addEventListener('click', surpriseMessage);
};
