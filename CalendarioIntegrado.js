// ✅ Selección de días del calendario
const dayButtons = document.querySelectorAll('.grid button');
dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    dayButtons.forEach(btn => btn.querySelector('div').classList.remove('bg-[#0c7ff2]', 'text-slate-50'));
    const div = button.querySelector('div');
    div.classList.add('bg-[#0c7ff2]', 'text-slate-50');
  });
});

// ✅ Modal para nuevo evento
const modal = document.getElementById('modal');
const newEventBtn = document.querySelector('button:has(span.truncate)');
const closeModal = document.getElementById('close-modal');
const saveEvent = document.getElementById('save-event');

if (newEventBtn && modal && closeModal && saveEvent) {
  newEventBtn.addEventListener('click', () => modal.classList.remove('hidden'));
  closeModal.addEventListener('click', () => modal.classList.add('hidden'));
  saveEvent.addEventListener('click', () => {
    const title = document.getElementById('modal-title').value.trim();
    const time = document.getElementById('modal-time').value.trim();
    if (title && time) {
      alert(`Evento "${title}" a las ${time} guardado`);
      modal.classList.add('hidden');
    } else {
      alert('Completa todos los campos');
    }
  });
}

// ✅ Filtros de checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    const name = cb.nextElementSibling.innerText.trim();
    console.log(`Filtro ${name}: ${cb.checked}`);
  });
});

// ✅ Flechas para cambiar mes
document.querySelectorAll('button:has(svg path[d*="165.66"])').forEach(btn => {
  btn.addEventListener('click', () => alert('Ir al mes anterior'));
});
document.querySelectorAll('button:has(svg path[d*="181.66"])').forEach(btn => {
  btn.addEventListener('click', () => alert('Ir al mes siguiente'));
});
