// Função para exibir uma mensagem surpresa
function surpriseMessage() {
    alert("Você é muito importante para mim! Amo muito você, espero que eu veja você crescer mais e mais!");
    
    // Tocar a música após o clique
    document.getElementById('birthdaySong').play();
}

// Espera a página carregar completamente antes de executar qualquer código
window.onload = () => {
    // Adicionar o evento ao botão para mostrar a surpresa
    document.getElementById('surpriseBtn').addEventListener('click', surpriseMessage);
};
