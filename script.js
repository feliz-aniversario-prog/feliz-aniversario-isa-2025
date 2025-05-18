// Função para exibir uma mensagem surpresa, lançar confetes e mostrar o vídeo do YouTube
function surpriseMessage() {
    alert("Você é muito importante para mim! Amo muito você <3! Ahh.. Coma bolo por mim, ok? Quando você clicar em 'Ok' vai aparecer um vídeo com a música que escolhi pra você...! Se chama Birthday Prayer, 'Oração de Aniversário' e tem uma parte que diz 'Por favor, Deus, cuida de mim, entra em mim para que eu possa ser livre, ajuda-me a respirar devagar, sem medo'! Espero que goste <3");

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

    // Exibir o vídeo do YouTube após o clique
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('surpriseVideo');
    
    // Substitua o link abaixo pelo URL do vídeo que você quer exibir do YouTube
    const videoURL = "https://www.youtube.com/embed/IiNZeHV0an4";  // Link do YouTube no formato embed
    
    video.src = videoURL + "?autoplay=1"; // O parâmetro ?autoplay=1 faz o vídeo começar automaticamente
    videoContainer.style.display = 'block'; // Torna o vídeo visível
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
