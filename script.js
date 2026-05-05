const dice = document.getElementById('dice');
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

const faceRotations = [
  { face: 1, x: 0,   y: 0   },
  { face: 2, x: 0,   y: 90  },
  { face: 3, x: 0,   y: 180 },
  { face: 4, x: 0,   y: -90 },
  { face: 5, x: -90, y: 0   },
  { face: 6, x: 90,  y: 0   },
];

let totalX = 0;
let totalY = 0;
let spinning = false;

function rodando() {
    if (spinning) return;
    spinning = true;
    btn.disabled = true;
    resultado.textContent = 'Girando...';
    
  const target = faceRotations[Math.floor(Math.random() * 6)];
  
  totalX = totalX + 720 + (target.x - (totalX % 360));
  totalY = totalY + 720 + (target.y - (totalY % 360));
  
  dice.style.transform = `rotateX(${totalX}deg) rotateY(${totalY}deg)`;
  
  setTimeout(() => {
      resultado.textContent = `Resultado: ${target.face}`;
      spinning = false;
      btn.disabled = false;
    }, 1300);
};

btn.addEventListener('click', rodando)
