onload = () => {
  const c = setTimeout(() => {
	document.body.classList.remove("not-loaded");
	// Añadir clases para activar animaciones a elementos específicos
	document.querySelectorAll('.fade-in-target').forEach(el => el.classList.add('fade-in'));
	document.querySelectorAll('.slide-in-target').forEach(el => el.classList.add('slide-in'));
	clearTimeout(c);
  }, 1000);
};
