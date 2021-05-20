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
//Tempesto20
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

	// Валидация e-mail
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	document.getElementById('bottom__button-text').onclick = function(e) {
		e.preventDefault();
		const email = document.getElementById("bottom__email-2");

		if (validateEmail(email.value)) {
			email.classList.remove('error');
			email.classList.add('ok');
		} else {
			email.classList.remove('ok');
			email.classList.add('error');
		}
		
		return false;
	}
//Tempesto20
	// ------------------

	// Плавные якоря
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			
			const blockID = anchor.getAttribute('href').substr(1);

			if (blockID !== '') {
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}

		})
	}
	// ---------------
//Tempesto20

	// Сортировка

	let cats = [
		{
			price: 30000,
			img: 'img/30000.jpg',
			discount: 40,
			isSell: false,
			isFavorite: false
		},
		{
			price: 40000,
			img: 'img/40000.jpg',
			discount: 0,
			isSell: true,
			isFavorite: true
		},
		{
			price: 20000,
			img: 'img/20000.jpg',
			discount: 0,
			isSell: false,
			isFavorite: false
		},
		{
			price: 25000,
			img: 'img/25000.jpg',
			discount: 0,
			isSell: false,
			isFavorite: false
		},
		{
			price: 30000,
			img: 'img/30000-1.jpg',
			discount: 40,
			isSell: false,
			isFavorite: false
		},
		{
			price: 10000,
			img: 'img/10000.jpg',
			discount: 0,
			isSell: true,
			isFavorite: false
		},
	];
//Tempesto20
	const oldCats = [...cats]; // деструктуризация массива

	let currentSort = '';

	function renderCats() {
		let catsHTML = ``;

		if (currentSort === 'cheaper') {
			cats = cats.sort(function(a, b) {
				return a.price - b.price;
			});

			// cats = cats.sort((a, b) => a.price - b.price); // Упрощенный вид
		}
		else if (currentSort === 'expensive') {
			cats = cats.sort(function(a, b) {
				return b.price - a.price;
			});

			// cats = cats.sort((a, b) => b.price - a.price); // Упрощенный вид
		}
		else {
			cats = [...oldCats]; // деструктуризация массива
		}
	
		for (let i = 0; i < cats.length; i++) {
	
			catsHTML += `
			<div class="card__cat" id="gallery">
				<div class="card">
					<div class="card__img">
						<img src="${cats[i].img}" alt="" class="card__cat-30000">`;
	
			if (cats[i].discount !== 0) {
				catsHTML += `<div class="card__discount">
				<p class="discount">-${cats[i].discount}%</p>
				</div>`;
			}

			if (cats[i].isFavorite) {
				catsHTML += `<div class="card__like" data-like="${i}">
				<img src="img/svg/like2.svg" alt="">
				</div>`;
			}
			else {
				catsHTML += `<div class="card__like" data-like="${i}">
				<img src="img/svg/like.svg" alt="">
				</div>`;
			}

			catsHTML += `
					</div>
					<div class="card__background">
						<h2 class="card__title">Кот полосатый</h2>
						<div class="card__cat-row">
							<img src="img/svg/line.svg" alt="" class="line">
							<p class="color__cat">
								Коричневый
								<br>
								окрас
							</p>
							<div class="cat_year">
								<p class="years__cat">
									2 мес
								</p>
								<p class="years__cat-1">
									Возраст
								</p>
							</div>
							<div class="cat__quantity">
								<p class="old__cat">
								4 
								</p>
								<p class="quantity__cat">
									Кол-во лап
								</p>
							</div>
						</div>
						<h3 class="price__cat"> 
							${cats[i].price} руб. 
							</h3>
					</div>`;

					if (cats[i].isSell) {
						catsHTML += `<div class="buy__cat sold">
							<a href="#" class="byu__cat-1">Продан</a>
						</div>`
					}
					else {
						catsHTML += `<div class="buy__cat">
							<a href="#" class="byu__cat-1">Купить</a>
						</div>`
					}


				catsHTML += `</div>
				</div>
			`;

			document.getElementById('cat_cards').innerHTML = catsHTML;
		}

		// Избранное

		document.querySelectorAll('.card__like').forEach(function(userItem) {
			userItem.onclick = function() {
				const target = userItem.getAttribute('data-like');
				cats[target].isFavorite = cats[target].isFavorite ? false : true;
				renderCats();
			};
		});

		// ---------------
	}
//Tempesto20
	document.getElementById("sort_price").onchange = function(e) {
		currentSort = e.target.value;
		renderCats();
	}

	renderCats();

	// ---------------
};
