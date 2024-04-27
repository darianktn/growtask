document.addEventListener('DOMContentLoaded', () => {
	const modalsOverlay = document.querySelector('.modals-overlay');
	const modals = modalsOverlay.querySelectorAll('.modals__item');
	const body = document.body;
	let previousActiveElement;

	function openModal(path, e) {
		const modal = document.querySelector(`[data-modal="${path}"]`);
		console.log('modal');
		modal.classList.add('modals__item--visible');
		previousActiveElement = document.activeElement;
		modalsOverlay.classList.add('modals-overlay--visible');
		modalsOverlay.setAttribute('aria-hidden', 'false');
		body.classList.add('stop-scroll');
		modal.querySelector('.modals__close-btn').focus();
	}
	function closeModal() {
		modals.forEach((modal) => {
			modal.classList.remove('modals__item--visible');
		});
		modalsOverlay.classList.remove('modals-overlay--visible');
		modalsOverlay.setAttribute('aria-hidden', 'true');
		body.classList.remove('stop-scroll');
		if (previousActiveElement) {
			previousActiveElement.focus();
		}
	}

	function handleOverlayClick(e) {
		if (e.target === modalsOverlay) {
			closeModal();
		}
	}
	function handleKeydownEvent(event) {
		if (
			modalsOverlay.classList.contains('modals-overlay--visible') &&
			event.key === 'Escape'
		) {
			closeModal();
		} else if (
			modalsOverlay.classList.contains('modals-overlay--visible') &&
			event.key === 'Tab'
		) {
			event.preventDefault();
		}
	}

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('slider__btn')) {
			openModal(event.target.getAttribute('data-modal-btn'));
		} else {
			let closeButton = event.target.closest('.modals__close-btn');
			if (closeButton) {
				closeModal();
			}
		}
	});

	document.addEventListener('click', function (event) {
		const targetElement = event.target;

		if (targetElement) {
			const tagName = targetElement.tagName;
			const className = targetElement.className;

			console.log(`Тег: ${tagName}, Класс: ${className}`);
		}
	});

	modalsOverlay.addEventListener('click', handleOverlayClick);
	document.addEventListener('keydown', handleKeydownEvent);
});
