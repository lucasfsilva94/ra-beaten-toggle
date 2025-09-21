function toggleUserBeatenSetsVisibility() {
  const checkbox = document.getElementById('hide-user-beaten-sets-checkbox');
  const root = document.querySelector('#completedgames');
  if (!checkbox || !root) return;

  const isChecked = checkbox.checked;
  localStorage.setItem('ra-hide-beaten', isChecked ? 'true' : 'false');

  const markers = root.querySelectorAll('[title*="Beaten"]');
  const containers = new Set();

  markers.forEach(marker => {
    const container = marker.closest('tr');
    if (container) containers.add(container);
  });

  containers.forEach(el => {
    el.style.display = isChecked ? 'none' : '';
  });
}

function mountBeatenToggleBlock() {
  const root = document.querySelector('#completedgames');
  if (!root) return;

  root.querySelectorAll(`#hide-user-completed-sets-checkbox, a[href*="/progress"]`).forEach(el => {
    const parent = el.closest('label, a');
    if (parent) parent.remove();
  });

  if (document.getElementById('hide-user-beaten-sets-checkbox')) return;

  const inner = root.querySelector('div') || root;

  const container = document.createElement('div');
  container.className = 'w-full flex justify-between mb-2';

  const checkCol = document.createElement('div');
  checkCol.className = 'flex flex-col gap-y-1';

  const labelCompleted = document.createElement('label');
  labelCompleted.className = 'flex items-center gap-x-1 select-none transition lg:active:scale-95 cursor-pointer';

  const inputCompleted = document.createElement('input');
  inputCompleted.type = 'checkbox';
  inputCompleted.id = 'hide-user-completed-sets-checkbox';
  inputCompleted.autocomplete = 'off';
  inputCompleted.className = 'cursor-pointer';
  inputCompleted.checked = true;
  inputCompleted.setAttribute('onchange', 'toggleUserCompletedSetsVisibility()');

  labelCompleted.appendChild(inputCompleted);
  labelCompleted.appendChild(document.createTextNode(' Hide completed games'));
  checkCol.appendChild(labelCompleted);

  const labelBeaten = document.createElement('label');
  labelBeaten.className = 'flex items-center gap-x-1 select-none transition lg:active:scale-95 cursor-pointer';

  const inputBeaten = document.createElement('input');
  inputBeaten.type = 'checkbox';
  inputBeaten.id = 'hide-user-beaten-sets-checkbox';
  inputBeaten.autocomplete = 'off';
  inputBeaten.className = 'cursor-pointer';

  const saved = localStorage.getItem('ra-hide-beaten');
  if (saved === 'true') inputBeaten.checked = true;

  labelBeaten.appendChild(inputBeaten);
  labelBeaten.appendChild(document.createTextNode(' Hide beaten games'));
  checkCol.appendChild(labelBeaten);  

  const moreLink = document.createElement('a');
  moreLink.href = window.location.pathname + '/progress';
  moreLink.textContent = 'more...';
  moreLink.className = 'self-start';

  container.appendChild(checkCol);
  container.appendChild(moreLink);

  inner.prepend(container);

  inputBeaten.addEventListener('change', toggleUserBeatenSetsVisibility);

  toggleUserBeatenSetsVisibility();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountBeatenToggleBlock);
} else {
  mountBeatenToggleBlock();
}
