document.addEventListener('DOMContentLoaded', function () {
	const validation = new window.JustValidate('#form');

	validation
		.addField('#question', [
			{
				rule: 'minLength',
				value: 5,
				errorMessage: 'Введи минимум пять символов'
			},
			{
				rule: 'maxLength',
				value: 100,
				errorMessage: 'Введи максимум 100 символов'
			},
			{
				rule: 'required',
				errorMessage: 'Введи свой вопрос'
			}
		])
		.addField('#contact', [
			{
				rule: 'minLength',
				value: 15
			},
			{
				rule: 'required',
				errorMessage: 'Введи номер телефона или почту'
			}
		])
		.addField('#name', [
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Введи минимум два символа'
			},
			{
				rule: 'maxLength',
				value: 15,
				errorMessage: 'Введи максимум 15 символов'
			},
			{
				rule: 'required',
				errorMessage: 'Введи своё имя'
			}
		])
		.onSuccess((event) => {
			console.log('Validation passes and form submitted', event);

			let formData = new FormData(event.target);

			console.log(...formData);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			};

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			event.target.reset();
		});

	const inputs = document.querySelectorAll('.form__input');

	inputs.forEach((input) => {
		input.addEventListener('input', () => {
			if (input.value.trim() !== '') {
				input.style.fontWeight = 700;
			} else {
				input.style.fontWeight = normal;
			}
		});
	});
});
