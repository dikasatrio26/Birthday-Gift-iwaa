const startBtn = document.getElementById('startBtn');
const sections = ['letterSection', 'giftSection', 'gallerySection', 'musicSection', 'footerSection'];

startBtn.addEventListener('click', () => {
  sections.forEach((id, index) => {
    const section = document.getElementById(id);
    section.classList.remove('hidden');
    section.style.animationDelay = `${index * 120}ms`;
  });
  startBtn.textContent = 'Hadiah terbuka ♡';
  startBtn.disabled = true;
  document.getElementById('letterSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const giftBtn = document.getElementById('giftBtn');
giftBtn.addEventListener('click', () => {
  giftBtn.classList.add('open');
  document.getElementById('giftMessage').classList.remove('hidden');
  giftBtn.setAttribute('aria-label', 'Hadiah sudah dibuka');
  burstHearts();
});

const audio = document.getElementById('birthdayAudio');
const musicBtn = document.getElementById('musicBtn');
const musicNote = document.getElementById('musicNote');
musicBtn.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicBtn.textContent = 'Ⅱ Jeda musik';
      musicNote.textContent = 'Musik sedang diputar.';
    } catch (error) {
      musicNote.textContent = 'File musik belum ditemukan. Tambahkan music/lagu.mp3 lalu coba lagi.';
    }
  } else {
    audio.pause();
    musicBtn.textContent = '▶ Putar musik';
    musicNote.textContent = 'Musik dijeda.';
  }
});

const layer = document.getElementById('floatingLayer');
const symbols = ['♡', '✿', '🌸', '♥'];
function floatOne() {
  const el = document.createElement('span');
  el.className = 'float';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = `${Math.random() * 100}%`;
  el.style.fontSize = `${14 + Math.random() * 18}px`;
  el.style.animationDuration = `${7 + Math.random() * 7}s`;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 14500);
}
setInterval(floatOne, 850);

function burstHearts() {
  for (let i = 0; i < 18; i++) {
    setTimeout(floatOne, i * 55);
  }
}
