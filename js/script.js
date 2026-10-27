const barra = document.getElementById('progresso');
const botaoTopo = document.getElementById('topo');
const itens = document.querySelectorAll('h2, .imagem, .texto, .conclusao');

for (const item of itens) {
    item.classList.add('reveal');
}

function aoRolar() {
    const rolou = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.width = (rolou / total) * 100 + '%';

    if (rolou > 400) {
        botaoTopo.classList.add('mostrar');
    } else {
        botaoTopo.classList.remove('mostrar');
    }

    for (const item of itens) {
        const distanciaDoTopo = item.getBoundingClientRect().top;
        if (distanciaDoTopo < window.innerHeight - 80) {
            item.classList.add('visivel');
        }
    }
}

window.addEventListener('scroll', aoRolar);
aoRolar();

botaoTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});