
let musicas = [
    {titulo: 'Olhos de Tigre', artista: 'Djonga', src:'musicas/Djonga.mp3', img:'imagens/rap.jpg'},
    {titulo: 'Deep Down', artista: 'Alok', src:'musicas/Alok x Ella Eyre.mp3', img:'imagens/alok-2021.png'},
    {titulo: 'Good Feeling', artista: 'Flo Rida', src:'musicas/Flo Rida.mp3', img:'imagens/florida.jpg'},
];

let musica = document.querySelector('audio');
let dMusica = document.querySelector('.fim');
let IndexMusica = 0;

//EVENTOS

document.querySelector('.botao-play').addEventListener("click", tocarMusica);
document.querySelector('.botao-pause').addEventListener("click", pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
dMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(IndexMusica)

document.querySelector('.anterior').addEventListener('clik', () => {
    IndexMusica--;
    if(IndexMusica < 0){
        IndexMusica = 2;
    }
    renderizarMusica(IndexMusica);
});

document.querySelector('.proxima').addEventListener('clik', () => {
    IndexMusica++;
    if(IndexMusica > 2){
        IndexMusica = 0;
    }
    renderizarMusica(IndexMusica);
});



//Funçoes
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        dMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}


