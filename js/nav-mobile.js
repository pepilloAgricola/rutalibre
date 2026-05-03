/* ═══════════════════════════════════════════════════════════════
   RutaLibre · nav-mobile.js
   Menú hamburguesa + drawer lateral para móvil
   Inyecta el botón hamburger y el drawer en el DOM existente
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  function isHomePage() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    return page === 'index.html';
  }

  function homeSectionHref(hash) {
    return isHomePage() ? hash : `index.html${hash}`;
  }

  function bookingHref() {
    return document.getElementById('travelForm') ? '#travelForm' : homeSectionHref('#travelForm');
  }

  function resolveHref(link) {
    return link.homeSection ? homeSectionHref(link.href) : link.href;
  }

  // Links del nav (icono + texto + href)
  const NAV_LINKS = [
    { icon: '👥', labelKey: 'nav_nosotros',    label: 'Nosotros',     href: '#nosotros', homeSection: true },
    { icon: '🛎️', labelKey: 'nav_servicios',   label: 'Servicios',    href: '#servicios', homeSection: true },
    { icon: '✅', labelKey: 'nav_como_funciona', label: 'Cómo funciona', href: '#como-funciona', homeSection: true },
    { icon: '🚗', labelKey: 'nav_carro',       label: 'El Carro',     href: '#carro', homeSection: true },
    { icon: '👨‍✈️', labelKey: 'nav_conductores', label: 'Conductores',  href: '#conductores', homeSection: true },
    { icon: '🗺️', labelKey: 'nav_rutas',       label: 'Rutas',        href: 'rutas.html' },
    { icon: '❔', labelKey: 'nav_preguntas',   label: 'Preguntas',    href: '#preguntas', homeSection: true },
  ];

  const CTA = { labelKey: 'nav_reservar', label: 'Reservar ahora', href: '#travelForm' };

  /* ── Helpers de traducción ── */
  function t(key, fallback) {
    if (window.I18N) return window.I18N.t(key, fallback);
    return fallback;
  }

  /* ── Construir el drawer ── */
  function buildDrawer() {
    const drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.id = 'navDrawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', t('nav_menu_label', 'Menú de navegación'));

    const linksHTML = NAV_LINKS.map(link => `
      <li>
        <a href="${resolveHref(link)}" class="drawer-link">
          <span class="drawer-icon">${link.icon}</span>
          <span data-i18n="${link.labelKey}">${t(link.labelKey, link.label)}</span>
        </a>
      </li>
    `).join('');

    drawer.innerHTML = `
      <div class="nav-drawer-backdrop" id="drawerBackdrop"></div>
      <div class="nav-drawer-panel" id="drawerPanel">
        <div class="nav-drawer-header">
          <div class="nav-drawer-logo">Ruta<span>Libre</span></div>
          <button class="nav-drawer-close" id="drawerClose" aria-label="${t('nav_menu_close', 'Cerrar menú')}">✕</button>
        </div>
        <ul class="nav-drawer-links">
          ${linksHTML}
        </ul>
        <div class="nav-drawer-cta">
          <a href="${bookingHref()}" id="drawerCTA">
            📱 <span data-i18n="${CTA.labelKey}">${t(CTA.labelKey, CTA.label)}</span>
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(drawer);
    return drawer;
  }

  /* ── Construir botón hamburger ── */
  function buildHamburger() {
    const btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.id = 'navHamburger';
    btn.setAttribute('aria-label', t('nav_menu_open', 'Abrir menú'));
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'navDrawer');
    btn.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    // Insertar en el nav, antes del selector de idioma o al final
    const nav = document.querySelector('nav');
    if (!nav) return btn;
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
      nav.insertBefore(btn, langSelector);
    } else {
      nav.appendChild(btn);
    }
    return btn;
  }

  /* ── Estado del drawer ── */
  let isOpen = false;
  let scrollY = 0;

  function updateA11yLabels(hamburger, drawer) {
    drawer.setAttribute('aria-label', t('nav_menu_label', 'Menú de navegación'));
    hamburger.setAttribute('aria-label', isOpen
      ? t('nav_menu_close', 'Cerrar menú')
      : t('nav_menu_open', 'Abrir menú')
    );
    document.getElementById('drawerClose')?.setAttribute('aria-label', t('nav_menu_close', 'Cerrar menú'));
  }

  function trapFocus(event, drawer) {
    if (event.key !== 'Tab' || !isOpen) return;

    const focusable = Array.from(drawer.querySelectorAll('a[href], button:not([disabled])'));
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function open(hamburger, drawer) {
    if (isOpen) return;
    isOpen = true;

    // Bloquear scroll del body
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    drawer.style.display = 'block';
    // Forzar reflow para que la transición funcione
    drawer.offsetHeight;
    drawer.classList.add('is-open');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    updateA11yLabels(hamburger, drawer);

    // Focus trap — primer enlace del drawer
    const firstLink = drawer.querySelector('.drawer-link');
    if (firstLink) setTimeout(() => firstLink.focus(), 350);
  }

  function close(hamburger, drawer, restoreFocus = true) {
    if (!isOpen) return;
    isOpen = false;

    drawer.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    updateA11yLabels(hamburger, drawer);

    // Restaurar scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);

    setTimeout(() => { drawer.style.display = 'none'; }, 350);

    if (restoreFocus) hamburger.focus();
  }

  /* ── Inicializar ── */
  function init() {
    const drawer    = buildDrawer();
    const hamburger = buildHamburger();

    // Abrir
    hamburger.addEventListener('click', () => {
      isOpen ? close(hamburger, drawer) : open(hamburger, drawer);
    });

    // Cerrar con botón X
    document.getElementById('drawerClose')?.addEventListener('click', () =>
      close(hamburger, drawer)
    );

    // Cerrar con backdrop
    document.getElementById('drawerBackdrop')?.addEventListener('click', () =>
      close(hamburger, drawer)
    );

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) close(hamburger, drawer);
      trapFocus(e, drawer);
    });

    // Cerrar al hacer click en cualquier link interno
    drawer.querySelectorAll('.drawer-link, #drawerCTA').forEach(link => {
      link.addEventListener('click', () => {
        close(hamburger, drawer, false);
      });
    });

    // Actualizar labels cuando cambia el idioma
    document.addEventListener('langChange', () => {
      drawer.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = window.I18N?.t(key);
        if (val) el.textContent = val;
      });
      updateA11yLabels(hamburger, drawer);
    });

    // Cerrar el drawer si se redimensiona a desktop
    const mq = window.matchMedia('(min-width: 901px)');
    mq.addEventListener('change', (e) => {
      if (e.matches && isOpen) close(hamburger, drawer);
    });
  }

  /* ── Esperar al DOM ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
