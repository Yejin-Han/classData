const swiper = new Swiper('.swiper', {
	speed: 400,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});