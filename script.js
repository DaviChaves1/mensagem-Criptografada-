const cta = document.getElementById('cta');
const container = document.getElementById('container');
const question = document.getElementById('question');
const btnNao = document.getElementById('btnNao');
const btnSim = document.getElementById('btnSim');
const telaFinal = document.getElementById('telaFinal');
const digitandoTexto = document.getElementById('digitandoTexto');
const digitandoPadrao = document.getElementById('digitandoPadrao');
const pedido = document.getElementById('pedido');
const creditos = document.getElementById('creditos');
const easterEgg = document.getElementById('easterEgg');

const finalBtns = document.querySelectorAll('.final-btn');

let naoClickCount = 0;

cta.addEventListener('click', () => {
  cta.style.display = 'none';
  question.style.display = 'block';
  container.style.background = 'linear-gradient(to bottom, #bae6fd, #fbcfe8, #14532d, #0a1e0a)';
});

btnNao.addEventListener('click', () => {
  naoClickCount++;
  btnNao.style.transform = `scale(${Math.max(0, 1 - naoClickCount * 0.1)})`;
  if (naoClickCount >= 5) {
    btnNao.style.display = 'none';
  }
  btnSim.classList.add('glow');
});

btnSim.addEventListener('click', () => {
  question.style.display = 'none';
  telaFinal.style.display = 'flex';
  let frase = 'Você... Realmente disse sim ? 🥹';
  let i = 0;
  digitandoTexto.style.width = 'auto';
  digitandoTexto.textContent = '';

  function digitaTexto() {
    if (i < frase.length) {
      digitandoTexto.textContent += frase[i];
      i++;
      setTimeout(digitaTexto, 100);
    } else {
      setTimeout(apagarTexto, 1000);
    }
  }

  function apagarTexto() {
    let apagar = setInterval(() => {
      digitandoTexto.textContent = digitandoTexto.textContent.slice(0, -1);
      if (digitandoTexto.textContent.length === 0) {
        clearInterval(apagar);
        digitandoTexto.style.display = 'none';
        digitandoPadrao.style.display = 'block';
        setTimeout(() => {
          digitandoPadrao.style.display = 'none';
          mostrarPedido();
        }, 6000);
      }
    }, 50);
  }

  digitaTexto();
});

function mostrarPedido() {
  telaFinal.style.display = 'none';
  pedido.style.display = 'flex';
}

finalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    pedido.style.display = 'none';
    explosaoRomantica();
  });
});

function explosaoRomantica() {
  container.style.transition = 'background 1.5s ease';
  container.style.background = 'radial-gradient(circle at center, #f9a8d4 0%, #14532d 100%)';

  const fraseCentro = document.createElement('div');
  fraseCentro.textContent = 'Agora somos caos misturado com amor.';
  fraseCentro.style.position = 'absolute';
  fraseCentro.style.top = '50%';
  fraseCentro.style.left = '50%';
  fraseCentro.style.transform = 'translate(-50%, -50%)';
  fraseCentro.style.color = 'white';
  fraseCentro.style.fontSize = '2rem';
  fraseCentro.style.textAlign = 'center';
  fraseCentro.style.zIndex = '20';
  fraseCentro.style.opacity = '0';
  fraseCentro.style.transition = 'opacity 2s ease';
  container.appendChild(fraseCentro);

  setTimeout(() => {
    fraseCentro.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    fraseCentro.style.opacity = '0';
  }, 4000);

  setTimeout(() => {
    container.removeChild(fraseCentro);
    iniciarCreditos();
  }, 6000);
}

function iniciarCreditos() {
  creditos.style.display = 'block';
  creditos.style.position = 'absolute';
  creditos.style.width = '80%';
  creditos.style.left = '50%';
  creditos.style.top = '100%';
  creditos.style.transform = 'translateX(-50%)';
  creditos.style.fontFamily = "'Courier New', Courier, monospace";
  creditos.style.color = '#ffeb3b';
  creditos.style.fontSize = '1.2rem';
  creditos.style.whiteSpace = 'pre-wrap';

  let pos = 100;
  const velocidade = 0.3;

  function scrollCreditos() {
    pos -= velocidade;
    creditos.style.top = pos + '%';
    if (pos > -200) {
      requestAnimationFrame(scrollCreditos);
    } else {
      creditos.style.display = 'none';
      telaPretaFinal();
    }
  }
  scrollCreditos();
}

function telaPretaFinal() {
  container.style.background = 'black';

  const coracao = document.createElement('div');
  coracao.textContent = '❤️';
  coracao.style.position = 'fixed';
  coracao.style.top = '50%';
  coracao.style.left = '50%';
  coracao.style.transform = 'translate(-50%, -50%) scale(1)';
  coracao.style.fontSize = '5rem';
  coracao.style.opacity = '0';
  coracao.style.transition = 'opacity 1s ease-in-out';
  container.appendChild(coracao);

  let aparecer = true;
  let intervalo = setInterval(() => {
    if (aparecer) {
      coracao.style.opacity = '1';
    } else {
      coracao.style.opacity = '0';
    }
    aparecer = !aparecer;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalo);
    coracao.style.opacity = '0';
    container.removeChild(coracao);
  }, 10000);
}

easterEgg.addEventListener('mouseenter', () => {
  easterEgg.title = 'Vírus detectado: Amor inevitável';
});

function criarCoracao() {
  const cores = ['🩷', '🩵', '🖤', '💚'];
  const coracao = document.createElement('div');
  coracao.textContent = cores[Math.floor(Math.random() * cores.length)];
  coracao.style.position = 'fixed';
  coracao.style.fontSize = `${Math.random() * 20 + 10}px`;
  coracao.style.top = `${Math.random() * 90 + 5}%`;
  coracao.style.left = `${Math.random() * 90 + 5}%`;
  coracao.style.opacity = '0';
  coracao.style.transition = 'opacity 0.5s ease';
  coracao.style.pointerEvents = 'none';
  document.body.appendChild(coracao);
  setTimeout(() => {
    coracao.style.opacity = '1';
  }, 10);
  setTimeout(() => {
    coracao.style.opacity = '0';
  }, 1600);
  setTimeout(() => {
    document.body.removeChild(coracao);
  }, 2100);
}

setInterval(criarCoracao, 3000);
