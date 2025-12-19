// Fade-in suave
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade').forEach(el => {
  observer.observe(el);
});

// Copiar Discord
function copyDiscord() {
  const discord = document.getElementById('discord').innerText;
  navigator.clipboard.writeText(discord);
  alert('Discord copiado: ' + discord);
}
