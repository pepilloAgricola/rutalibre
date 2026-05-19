// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });

function observeFadeIn(root = document) {
  root.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

observeFadeIn();

const WHATSAPP_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.5l5.799-1.52A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-4.997-1.373l-.359-.213-3.722.976.993-3.628-.234-.373A9.757 9.757 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>';

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function routeT(route, suffix) {
  return tt(`routes_${route.key}_${suffix}`, '');
}

function routeAlt(route) {
  const lang = window.I18N?.current || 'es';
  return route.alt?.[lang] || route.alt?.es || routeT(route, 'title');
}

function buildRouteWhatsappUrl(route) {
  const lang = window.I18N?.current || 'es';
  const title = routeT(route, 'title');

  const copies = {
    es: route.buttonType === 'airport'
      ? `Hola RutaLibre! Necesito un traslado al aeropuerto ✈️\n\nPor favor indíquenme disponibilidad y precio según mi zona.`
      : `Hola RutaLibre! Quiero reservar un viaje 🚗\n\n*Ruta:* ${title}\n\nPor favor indíquenme disponibilidad y precio.`,
    en: route.buttonType === 'airport'
      ? `Hello RutaLibre! I need an airport transfer ✈️\n\nPlease send me availability and price for my area.`
      : `Hello RutaLibre! I want to book a trip 🚗\n\n*Route:* ${title}\n\nPlease send me availability and price.`,
    fr: route.buttonType === 'airport'
      ? `Bonjour RutaLibre ! Je souhaite réserver un transfert aéroport ✈️\n\nMerci de m'indiquer la disponibilité et le prix selon ma zone.`
      : `Bonjour RutaLibre ! Je souhaite réserver un trajet 🚗\n\n*Itinéraire :* ${title}\n\nMerci de m'indiquer la disponibilité et le prix.`,
  };

  const phone = window.RL_ROUTES?.phone || '5355335946';
  return `https://wa.me/${phone}?text=${encodeURIComponent(copies[lang] || copies.es)}`;
}

function buildRouteCard(route) {
  const idAttr = route.id ? ` id="${escapeHTML(route.id)}"` : '';
  const featuredClass = route.featured ? ' featured' : '';
  const imgClass = route.imageClass ? ` class="${escapeHTML(route.imageClass)}"` : '';
  const imageSizeAttrs = route.imageWidth && route.imageHeight
    ? ` width="${escapeHTML(route.imageWidth)}" height="${escapeHTML(route.imageHeight)}"`
    : '';
  const category = route.categories.join(' ');
  const buttonKey = route.buttonType === 'airport' ? 'dest_btn_airport' : 'dest_btn_wa';

  const pills = Array.from({ length: route.pillCount }, (_, index) => {
    const pillNumber = index + 1;
    const blueClass = route.bluePills?.includes(pillNumber) ? ' blue' : '';
    return `<span class="dest-pill${blueClass}">${escapeHTML(routeT(route, `pill_${pillNumber}`))}</span>`;
  }).join('');

  return `
    <article class="dest-card${featuredClass} fade-in"${idAttr} data-category="${escapeHTML(category)}" data-route-key="${escapeHTML(route.key)}">
      <div class="dest-img-wrap">
        <img src="${escapeHTML(route.image)}" alt="${escapeHTML(routeAlt(route))}" loading="lazy" decoding="async" sizes="(max-width: 900px) 100vw, 50vw"${imageSizeAttrs}${imgClass}>
        <div class="dest-img-overlay"></div>
        <span class="dest-badge">${escapeHTML(routeT(route, 'badge'))}</span>
        <span class="dest-time-badge">${escapeHTML(routeT(route, 'time'))}</span>
      </div>
      <div class="dest-content">
        <h2>${escapeHTML(routeT(route, 'title'))}</h2>
        <div class="dest-pills">${pills}</div>
        <p>${escapeHTML(routeT(route, 'desc'))}</p>
        <a href="${buildRouteWhatsappUrl(route)}" class="dest-btn" target="_blank" rel="noopener">
          ${WHATSAPP_ICON}
          <span class="dest-btn-label">${escapeHTML(tt(buttonKey, 'Reservar por WhatsApp'))}</span>
        </a>
      </div>
    </article>
  `;
}

function getActiveRouteFilter() {
  return document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
}

function updateFallbackRouteCount(visible) {
  const countEl = document.getElementById('routeCount');
  if (!countEl) return;

  const isFiltered = getActiveRouteFilter() !== 'all';
  if (!isFiltered) {
    countEl.textContent = `${visible} rutas y traslados disponibles · Todas salen desde La Habana salvo indicación`;
    return;
  }

  countEl.textContent = visible + ' ' + (visible === 1 ? 'ruta encontrada' : 'rutas encontradas');
}

function applyRouteFilter(filter = getActiveRouteFilter()) {
  const cards = document.querySelectorAll('.dest-card');
  let visible = 0;

  cards.forEach(card => {
    const cats = card.dataset.category || '';
    const shouldShow = filter === 'all' || cats.split(' ').includes(filter);
    card.classList.toggle('hidden', !shouldShow);
    if (shouldShow) visible++;
  });

  if (window.I18N?.updateRouteCount) {
    window.I18N.updateRouteCount();
  } else {
    updateFallbackRouteCount(visible);
  }
}

function renderRouteCards() {
  const grid = document.getElementById('routesGrid');
  const routes = window.RL_ROUTES?.items;
  if (!grid || !routes) return;

  grid.innerHTML = routes.map(buildRouteCard).join('');
  observeFadeIn(grid);
  applyRouteFilter();
}

renderRouteCards();

// Filtro de rutas
const filterButtons = document.querySelectorAll('.filter-btn');
if (filterButtons.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyRouteFilter(btn.dataset.filter);
    });
  });
}

document.addEventListener('langChange', renderRouteCards);

const FORM_FIELDS = ['nombre', 'telefono', 'origen', 'destino', 'fecha', 'notas'];
const NOTES_LIMIT = 280;
const PHONE_MIN_DIGITS = 8;
const PHONE_MAX_DIGITS = 15;

function tt(key, fallback) {
  return window.I18N?.t(key, fallback) || fallback;
}

function getTravelFormFields() {
  return {
    nombre: document.getElementById('nombre'),
    telefono: document.getElementById('telefono'),
    origen: document.getElementById('origen'),
    destino: document.getElementById('destino'),
    fecha: document.getElementById('fecha'),
    hora: document.getElementById('hora'),
    servicio: document.getElementById('servicio'),
    notas: document.getElementById('notas'),
  };
}

function getTodayISO() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return today.toISOString().split('T')[0];
}

function isPastDate(value) {
  if (!value) return false;
  const today = new Date(`${getTodayISO()}T00:00:00`);
  const selected = new Date(`${value}T00:00:00`);
  return selected < today;
}

function isValidPhone(value) {
  return new RegExp(`^\\d{${PHONE_MIN_DIGITS},${PHONE_MAX_DIGITS}}$`).test(value.trim());
}

function allowOnlyPhoneDigits(event) {
  if (!event.data) return;
  if (/\D/.test(event.data)) event.preventDefault();
}

function ensureFieldError(field) {
  const group = field?.closest('.form-group');
  if (!group) return null;

  let error = group.querySelector('.form-error');
  if (!error) {
    error = document.createElement('div');
    error.className = 'form-error';
    error.id = `${field.id}-error`;
    error.setAttribute('aria-live', 'polite');
    group.appendChild(error);
  }

  field.setAttribute('aria-describedby', error.id);
  return error;
}

function setFieldError(field, error, show) {
  if (!field) return;

  const group = field.closest('.form-group');
  const errorEl = ensureFieldError(field);
  const message = error ? tt(error.key, error.fallback) : '';

  field.setCustomValidity(message);
  field.setAttribute('aria-invalid', error ? 'true' : 'false');
  group?.classList.toggle('has-error', Boolean(error && show));

  if (errorEl) {
    errorEl.textContent = show ? message : '';
    errorEl.classList.toggle('is-visible', Boolean(error && show));
  }
}

function getFieldError(name, fields) {
  const value = fields[name]?.value.trim() ?? '';

  if (name === 'nombre') {
    if (!value) return { key: 'form_error_name_required', fallback: 'Escribe tu nombre.' };
    if (value.length < 2) return { key: 'form_error_name_short', fallback: 'El nombre debe tener al menos 2 caracteres.' };
  }

  if (name === 'telefono') {
    if (!value) return { key: 'form_error_contact_required', fallback: 'Escribe tu teléfono.' };
    if (!isValidPhone(value)) return { key: 'form_error_contact_format', fallback: 'Usa solo números: entre 8 y 15 dígitos.' };
  }

  if (name === 'origen') {
    if (!value) return { key: 'form_error_origin_required', fallback: 'Indica desde dónde sales.' };
    if (value.length < 2) return { key: 'form_error_origin_short', fallback: 'El origen debe tener al menos 2 caracteres.' };
  }

  if (name === 'destino') {
    if (!value) return { key: 'form_error_destination_required', fallback: 'Indica hacia dónde vas.' };
    if (value.length < 2) return { key: 'form_error_destination_short', fallback: 'El destino debe tener al menos 2 caracteres.' };

    const origen = fields.origen?.value.trim().toLowerCase() ?? '';
    if (origen && origen === value.toLowerCase()) {
      return { key: 'form_error_same_route', fallback: 'El origen y el destino no pueden ser iguales.' };
    }
  }

  if (name === 'fecha' && isPastDate(value)) {
    return { key: 'form_error_date_past', fallback: 'La fecha no puede ser anterior a hoy.' };
  }

  if (name === 'notas' && value.length > NOTES_LIMIT) {
    return { key: 'form_error_notes_long', fallback: `Las notas no deben pasar de ${NOTES_LIMIT} caracteres.` };
  }

  return null;
}

function validateField(name, show = true) {
  const fields = getTravelFormFields();
  const field = fields[name];
  if (!field) return true;

  const error = getFieldError(name, fields);
  setFieldError(field, error, show);
  return !error;
}

function validateTravelForm(showErrors = true) {
  const fields = getTravelFormFields();
  let firstInvalid = null;

  FORM_FIELDS.forEach(name => {
    const field = fields[name];
    if (!field) return;

    if (showErrors) field.dataset.touched = 'true';
    const isValid = validateField(name, showErrors);
    if (!isValid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid && showErrors) {
    firstInvalid.focus({ preventScroll: true });
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return {
    isValid: !firstInvalid,
    values: {
      nombre: fields.nombre?.value.trim() ?? '',
      telefono: fields.telefono?.value.trim() ?? '',
      origen: fields.origen?.value.trim() ?? '',
      destino: fields.destino?.value.trim() ?? '',
      fecha: fields.fecha?.value ?? '',
      hora: fields.hora?.value ?? '',
      servicio: fields.servicio?.value ?? '',
      notas: fields.notas?.value.trim() ?? '',
    },
  };
}

function initTravelFormValidation() {
  const fields = getTravelFormFields();
  const form = document.getElementById('travelForm') || document.querySelector('.contact-form');
  if (!fields.nombre || !form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    enviarWhatsApp();
  });

  fields.nombre.setAttribute('required', 'required');
  fields.nombre.setAttribute('autocomplete', 'name');
  fields.nombre.setAttribute('maxlength', '80');

  fields.telefono?.setAttribute('required', 'required');
  fields.telefono?.setAttribute('autocomplete', 'tel');
  fields.telefono?.setAttribute('inputmode', 'numeric');
  fields.telefono?.setAttribute('maxlength', String(PHONE_MAX_DIGITS));
  fields.telefono?.setAttribute('pattern', `\\d{${PHONE_MIN_DIGITS},${PHONE_MAX_DIGITS}}`);

  fields.origen?.setAttribute('required', 'required');
  fields.origen?.setAttribute('maxlength', '120');
  fields.destino?.setAttribute('required', 'required');
  fields.destino?.setAttribute('maxlength', '120');
  fields.fecha?.setAttribute('min', getTodayISO());
  fields.notas?.setAttribute('maxlength', String(NOTES_LIMIT));

  FORM_FIELDS.forEach(name => {
    const field = fields[name];
    if (!field) return;

    ensureFieldError(field);

    field.addEventListener('blur', () => {
      field.dataset.touched = 'true';
      validateField(name, true);
    });

    if (name === 'telefono') {
      field.addEventListener('beforeinput', allowOnlyPhoneDigits);
      field.addEventListener('paste', e => {
        const pasted = e.clipboardData?.getData('text') ?? '';
        if (/\D/.test(pasted)) e.preventDefault();
      });
    }

    field.addEventListener('input', () => {
      const shouldShow = field.dataset.touched === 'true' || field.getAttribute('aria-invalid') === 'true';
      validateField(name, shouldShow);

      const shouldRefreshDestination =
        fields.destino?.dataset.touched === 'true' ||
        fields.destino?.getAttribute('aria-invalid') === 'true' ||
        fields.destino?.closest('.form-group')?.classList.contains('has-error');

      if (name === 'origen' && shouldRefreshDestination) {
        validateField('destino', true);
      }
    });
  });

  document.addEventListener('langChange', () => {
    FORM_FIELDS.forEach(name => {
      const field = fields[name];
      if (field?.closest('.form-group')?.classList.contains('has-error')) {
        validateField(name, true);
      }
    });
  });
}

initTravelFormValidation();

// Enviar formulario a WhatsApp
function enviarWhatsApp() {
  const validation = validateTravelForm(true);
  if (!validation.isValid) return;

  const { nombre, telefono, origen, destino, fecha, hora, servicio, notas } = validation.values;

  let fechaTexto = '';
  if (fecha) {
    const d = new Date(fecha + 'T12:00:00');
    const lang = window.I18N ? window.I18N.current : 'es';
    const locales = { es: 'es-ES', en: 'en-GB', fr: 'fr-FR' };
    fechaTexto = d.toLocaleDateString(locales[lang] || 'es-ES', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  let msg = '🚗 *NUEVA SOLICITUD DE VIAJE — RutaLibre*\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `👤 *Nombre:* ${nombre}\n`;
  if (telefono) msg += `📱 *Contacto:* ${telefono}\n`;
  msg += `📍 *Origen:* ${origen}\n`;
  msg += `🏁 *Destino:* ${destino}\n`;
  if (fechaTexto) msg += `📅 *Fecha:* ${fechaTexto}\n`;
  if (hora)       msg += `🕐 *Hora:* ${hora}\n`;
  if (servicio)   msg += `🗂️ *Servicio:* ${servicio}\n`;
  if (notas)      msg += `📝 *Notas:* ${notas}\n`;
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += '_Enviado desde https://pepilloagricola.github.io/rutalibre/_';

  window.open(`https://wa.me/5355335946?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

