// Função para exibir uma mensagem surpresa e lançar os confetes
function surpriseMessage() {
    alert("Você é muito importante para mim! Amo muito você <3! Ahh.. Coma bolo por mim, ok? Essa música é para você...! Se chama Birthday Prayer, 'Oração de Aniversário' e tem uma parte que diz 'Por favor, Deus, cuida de mim, entra em mim para que eu possa ser livre, ajuda-me a respirar devagar, sem medo

'");

    // Tocar a música após o clique
    const audio = document.getElementById('birthdaySong');

    // Tocar a música sem esperar
    if (audio.paused) {
        audio.play().catch((error) => {
            console.log("Erro ao tentar tocar a música:", error);
            alert("A música não pôde ser reproduzida. Por favor, verifique o arquivo de áudio.");
        });
    }

    // Gerar confetes
    launchConfetti();
}

// Função para lançar confetes na tela com cores personalizadas
function launchConfetti() {
    var duration = 15 * 1000; // duração em milissegundos (15 segundos)
    var animationEnd = Date.now() + duration;
    
    var colors = ['#FF007F', '#FFBF00', '#00BFFF', '#32CD32', '#FF1493', '#FF6347']; // Cores vibrantes
    
    var interval = setInterval(function () {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors, // Definindo as cores
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors, // Definindo as cores
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
