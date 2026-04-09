/* ==========================================================================
   WIDDE — Main JavaScript (defer loaded)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  loadCasePosts();
  loadBlogPosts();
  initIntegrationCarousel();
});

/* ==========================================================================
   Mobile Navigation Toggle (com aria-expanded para acessibilidade)
   ========================================================================== */
function initMobileNav() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha menu ao clicar em um link
  links.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

/* ==========================================================================
   Task 2 — Cards de cases dinâmicos
   Estruturado como role="listitem" para acessibilidade
   ========================================================================== */
function loadCasePosts() {
  var posts = [
    {
      bg: 'linear-gradient(135deg, #C8A97E, #8B6B4A)',
      category: 'Case Study',
      title: 'Construindo narrativas com Video Commerce',
      desc: '\u201CO que mais me surpreendeu foi a quantidade de visualização. As clientes gostaram muito dos vídeos.\u201D',
      link: '#'
    },
    {
      bg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      category: 'Resultado',
      title: 'Agregando valor ao produto com Video Commerce',
      desc: '\u201CCom a Widde recebemos comentários dos clientes e fomos formatando o conteúdo que trazia mais engajamento.\u201D',
      link: '#'
    },
    {
      bg: 'linear-gradient(135deg, #2d1b69, #4a1583, #6b21a8)',
      category: 'Estratégia',
      title: 'Desafios da moda festa no e-commerce',
      desc: '\u201COs vídeos que fazemos para a Widde usamos nas redes sociais também \u2014 virou nosso padrão.\u201D',
      link: '#'
    }
  ];

  var grid = document.getElementById('cases-grid');
  if (!grid) return;

  grid.innerHTML = posts.map(function (post) {
    return (
      '<article class="case-card-v2" role="listitem">' +
        '<div class="case-thumb" style="background:' + post.bg + ';">' +
          '<div class="case-thumb-overlay"></div>' +
          '<span class="case-card-tag">' + post.category + '</span>' +
        '</div>' +
        '<div class="case-card-body">' +
          '<h3 class="case-card-headline">' + post.title + '</h3>' +
          '<p class="case-card-desc">' + post.desc + '</p>' +
          '<a href="' + post.link + '" class="case-card-link">Ver case \u2192</a>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

/* ==========================================================================
   Task 4 — Cards de blog dinâmicos
   ========================================================================== */
function loadBlogPosts() {
  var posts = [
    {
      bg: 'linear-gradient(135deg,#0A0A0A,#2667F8)',
      category: 'Relatório',
      title: 'Report Video Commerce Brasil 2025',
      desc: 'Dados reais de operações brasileiras e projeções sobre o papel do vídeo na jornada de compra.',
      link: '#'
    },
    {
      bg: 'linear-gradient(135deg,#1a1a1a,#444)',
      category: 'Checklist',
      title: '5 ajustes no seu e-commerce para ganhar vantagem competitiva',
      desc: 'Em 2026, crescer não será apenas uma questão de tráfego, mas de experiência e conversão.',
      link: '#'
    },
    {
      bg: 'linear-gradient(135deg,#2667F8,#003AB9)',
      category: 'Estratégia',
      title: 'Como fidelizar clientes no e-commerce',
      desc: 'As pessoas não seguem mais um caminho previsível entre descobrir uma marca, avaliar e comprar.',
      link: '#'
    }
  ];

  var grid = document.getElementById('blog-grid');
  if (!grid) return;

  grid.innerHTML = posts.map(function (post) {
    return (
      '<article class="blog-card" role="listitem">' +
        '<div class="blog-thumb" style="background:' + post.bg + ';"></div>' +
        '<div class="blog-body">' +
          '<span class="blog-tag">' + post.category + '</span>' +
          '<h3 class="blog-title">' + post.title + '</h3>' +
          '<p class="blog-desc">' + post.desc + '</p>' +
          '<a href="' + post.link + '" class="blog-link">Saiba mais \u2192</a>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

/* ==========================================================================
   Task 3 — Carrossel de integrações (duplicar para loop infinito)
   ========================================================================== */
function initIntegrationCarousel() {
  var inner = document.getElementById('int-carousel');
  if (!inner) return;

  var items = Array.from(inner.children);
  items.forEach(function (item) {
    var clone = item.cloneNode(true);
    inner.appendChild(clone);
  });
}
