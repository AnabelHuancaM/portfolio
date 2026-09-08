const initializeReveal = () => {
	const revealElements = document.querySelectorAll('[data-reveal]');

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		revealElements.forEach((element) => element.classList.add('is-visible'));
	} else {
		const revealObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });

		revealElements.forEach((element) => revealObserver.observe(element));
 	}
};

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
	initializeReveal();
}
