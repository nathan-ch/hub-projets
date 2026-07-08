(function() {
  // Éviter les injections multiples
  if (document.getElementById('back-to-projects-hub')) return;

  // Création du bouton/lien
  const link = document.createElement('a');
  link.id = 'back-to-projects-hub';
  link.href = 'https://nathan-ch.github.io/hub-projets/';
  link.title = 'Retour à la liste des projets';
  link.innerHTML = '&larr; Mes autres projets';
  
  // Styles CSS minimalistes injectés (indépendant du design du site hôte)
  link.style.cssText = `
    position: fixed;
    bottom: 15px;
    left: 15px;
    z-index: 99999;
    color: #6e7681;
    background: transparent;
    border: none;
    padding: 4px 8px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 11px;
    text-decoration: none;
    opacity: 0.65;
    transition: opacity 0.2s, color 0.2s;
  `;

  // Gestion dynamique du survol (hover)
  link.addEventListener('mouseenter', () => {
    link.style.opacity = '1';
    link.style.color = '#58a6ff';
    link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseleave', () => {
    link.style.opacity = '0.65';
    link.style.color = '#6e7681';
    link.style.textDecoration = 'none';
  });

  // Injection dans le DOM du site hôte
  document.body.appendChild(link);
})();
