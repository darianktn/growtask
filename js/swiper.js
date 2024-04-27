let swiper = new Swiper('.swiper', {
	a11y: {
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд'
	},

	navigation: {
		prevEl: '.swiper-button-next',
		nextEl: '.swiper-button-prev'
	},

	breakpoints: {
		375: {
			spaceBetween: 14,
			slidesPerView: 1.27,
			slidesOffsetAfter: 15
		},

		376: {
			spaceBetween: 15,
			slidesPerView: 2.1,
			slidesOffsetAfter: 15
		},

		576: {
			spaceBetween: 15,
			slidesPerView: 2.6,
			slidesOffsetAfter: 15
		},

		769: {
			spaceBetween: 15,
			slidesPerView: 4.1,
			slidesOffsetAfter: 45
		},

		1367: {
			spaceBetween: 20,
			slidesPerView: 4.7,
			slidesOffsetAfter: 250
		}
	}
});
