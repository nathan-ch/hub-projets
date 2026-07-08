(function() {
  // Éviter les injections multiples
  if (document.getElementById('back-to-projects-hub')) return;

  // Création du bouton/lien
  const link = document.createElement('a');
  link.id = 'back-to-projects-hub';
  link.href = 'https://nathan-ch.github.io/hub-projets/';
  link.title = 'Retour au Hub de Projets';
  link.innerHTML = '&larr; Hub';
  
  // Styles CSS minimalistes injectés (indépendant du design du site hôte)
  link.style.cssText = `
    position: fixed;
    bottom: 15px;
    left: 15px;
    z-index: 99999;
    background-color: #161b22;
    color: #c9d1d9;
    border: 1px solid #30363d;
    padding: 6px 12px;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  `;

  // Gestion dynamique du survol (hover)
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#21262d';
    link.style.borderColor = '#58a6ff';
    link.style.color = '#58a6ff';
  });
  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '#161b22';
    link.style.borderColor = '#30363d';
    link.style.color = '#c9d1d9';
  });

  // Injection dans le DOM du site hôte
  document.body.appendChild(link);
})();
