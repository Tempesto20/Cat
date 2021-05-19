window.onload = function () {
	document.querySelector('.js-header__burger').onclick = function () {
		const html = document.querySelector('html');
		const body = document.querySelector('body');
		const burger = document.querySelector('.js-header__burger');
		const nav = document.querySelector('.js-header__nav');
		html.classList.toggle('lock');
		body.classList.toggle('lock');
		burger.classList.toggle('active');
		nav.classList.toggle('active');
	};

	// Кнопка наверх
	function trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('back-to-top__show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back-to-top__show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

	var goTopBtn = document.querySelector('.back-to-top');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);

	// ---------------

	// Плавные якоря
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
		e.preventDefault()
			
			const blockID = anchor.getAttribute('href').substr(1);

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
	// ---------------
};
