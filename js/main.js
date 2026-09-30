document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

document.querySelectorAll('.pub-item').forEach(item => {
  const buttons = item.querySelectorAll('.btn-cite');
  const panels = item.querySelectorAll('.pub-panel');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.panel;
      const isActive = btn.classList.contains('active');

      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.hidden = true);

      if (!isActive) {
        btn.classList.add('active');
        item.querySelector(`.pub-panel[data-panel="${target}"]`).hidden = false;
      }
    });
  });
});