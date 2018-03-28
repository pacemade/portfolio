const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => {
    if (panel.classList.contains('open')) {
      panel.classList.remove('open')
      panel.classList.remove('open-active')
    }
  });
  this.classList.toggle('open');
  this.classList.toggle('open-active')
}

// function toggleActive(e) {
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active')
//   }
// }

panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen))
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
