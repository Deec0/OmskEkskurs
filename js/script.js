
// Animation
// const animItems = document.querySelectorAll('._anim-items');
// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			console.log(animItemOffset)
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active');
// 			} else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_active');
// 				}
// 			}
// 		}
// 	}

// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}

// 	animOnScroll();
// }

// Fixed Header
window.onscroll = function showHeader() {
	if (window.pageYOffset > 200) {
		header.classList.add('header-fixed');
	} else {
		header.classList.remove('header-fixed');
	}
}




$(document).ready(function () {
	// Инициализируем Swiper
	new Swiper('.news__container', {
		// Стрелки
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev'
		// },
		// Навигация
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// dynamicBullets: true,
			renderBullet: function (index, className) {
				return '<span class = "' + className + '">' + (index + 1) + '</span>';
			},
		},
		slidesPerView: 1,
		simulateTouch: false,
		spaceBetween: 0,
	});

	// Инициализируем Swiper
	new Swiper('.tours__container', {
		// Стрелки
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev'
		// },
		// Навигация
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// dynamicBullets: true,
			renderBullet: function (index, className) {
				return '<span class = "' + className + '">' + (index + 1) + '</span>';
			},
		},
		slidesPerView: 1,
		simulateTouch: false,
		spaceBetween: 0,
	});

	let menu = $("#menu");

	// Burger
	$('.choose-form__choose').click(function (event) {
		$('.choose-form__choose').toggleClass('active-choose');
	})

	// Choose
	$('.icon-wrap__icon').click(function (event) {
		$('.icon-wrap__icon,.menu__body').toggleClass('active');
		$('#bar').toggleClass('_active-bar');
		$('body').toggleClass('lock');
	})

	//Ibg
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	// Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		menu.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset + 1
		}, 700);
	});
});