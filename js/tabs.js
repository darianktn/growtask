document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs__wrap');
	const tabsContents = document.querySelectorAll('.tabs__content');
	const tabBtns = document.querySelectorAll('.tabs__btn');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabBtns.forEach((btn) => {
					btn.setAttribute(
						'aria-selected',
						btn === e.target ? 'true' : 'false'
					);
				});
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabBtns.forEach((btn) => {
			btn.classList.remove('tabs__btn--active');
		});
		document
			.querySelector(`[data-tabs-path="${path}"]`)
			.classList.add('tabs__btn--active');

		tabsContents.forEach((content) => {
			content.classList.remove('tabs__content--active');
			content.setAttribute('aria-expanded', 'false');
			content.setAttribute('aria-hidden', 'true');
		});

		const target = document.querySelector(`[data-tabs-target="${path}"]`);
		target.classList.add('tabs__content--active');
		target.setAttribute('aria-expanded', 'true');
		target.setAttribute('aria-hidden', 'false');
	};
});
