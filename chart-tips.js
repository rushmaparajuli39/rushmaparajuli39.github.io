// Hover/focus tooltips for chart marks: any element with data-tip inside a .viz.
document.querySelectorAll('.viz').forEach((viz) => {
  const tip = document.createElement('div');
  tip.className = 'tip';
  tip.hidden = true;
  tip.setAttribute('role', 'status');
  viz.append(tip);

  function show(mark) {
    const box = viz.getBoundingClientRect();
    const r = mark.getBoundingClientRect();
    tip.textContent = mark.dataset.tip;
    tip.style.left = `${r.left - box.left + r.width / 2}px`;
    tip.style.top = `${r.top - box.top}px`;
    tip.hidden = false;
  }

  viz.querySelectorAll('[data-tip]').forEach((mark) => {
    mark.addEventListener('pointerenter', () => show(mark));
    mark.addEventListener('focus', () => show(mark));
    mark.addEventListener('click', () => show(mark));
    mark.addEventListener('pointerleave', () => { tip.hidden = true; });
    mark.addEventListener('blur', () => { tip.hidden = true; });
  });
});
