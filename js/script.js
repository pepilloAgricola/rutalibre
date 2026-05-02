// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Filtro de rutas
const filterButtons = document.querySelectorAll('.filter-btn');
if (filterButtons.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.dest-card');
      let visible = 0;

      cards.forEach(card => {
        const cats = card.dataset.category || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
          visible++;
        } else {
          card.classList.add('hidden');
        }
      });

      const countEl = document.getElementById('routeCount');
      if (countEl) {
        countEl.textContent = visible + (visible === 1 ? ' ruta encontrada' : ' rutas encontradas');
      }
    });
  });
}

// Enviar formulario a WhatsApp
function enviarWhatsApp() {
  const nombre   = document.getElementById('nombre')?.value.trim() ?? '';
  const telefono = document.getElementById('telefono')?.value.trim() ?? '';
  const origen   = document.getElementById('origen')?.value.trim() ?? '';
  const destino  = document.getElementById('destino')?.value.trim() ?? '';
  const fecha    = document.getElementById('fecha')?.value ?? '';
  const hora     = document.getElementById('hora')?.value ?? '';
  const servicio = document.getElementById('servicio')?.value ?? '';
  const notas    = document.getElementById('notas')?.value.trim() ?? '';

  if (!nombre || !origen || !destino) {
    alert('Por favor completa al menos tu nombre, origen y destino.');
    return;
  }

  let fechaTexto = '';
  if (fecha) {
    const d = new Date(fecha + 'T12:00:00');
    fechaTexto = d.toLocaleDateString('es-ES', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
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
  msg += '_Enviado desde rutalibre.cu_';

  window.open(`https://wa.me/5355335946?text=${encodeURIComponent(msg)}`, '_blank');
}
