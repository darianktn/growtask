const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const btnToTop = document.querySelector('.to-top');

const closeNav = () => {
	burger.setAttribute('aria-expanded', 'false');
	document.body.classList.remove('stop-scroll');
	nav.classList.remove('nav--visible');
	burger.classList.remove('burger--active');
};

burger.addEventListener('click', () => {
	const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
	burger.setAttribute('aria-expanded', !expanded);
	document.body.classList.toggle('stop-scroll');
	nav.classList.toggle('nav--visible');
	burger.classList.toggle('burger--active');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		closeNav();
	});
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeNav();
		nav.classList.remove('nav--visible');
	}
});

btnToTop.addEventListener('click', goTop);

function goTop() {
	if (window.scrollY > 0) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
