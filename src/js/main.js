import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import $ from 'jquery';
import '../scss/dkdk.scss';

// BEGIN POPUPS
$('.popup-open').on('click', function () {
	$('.popup-fade').fadeIn();
	return false;
});

$('.popup-close').on('click', function () {
	$(this).parents('.popup-fade').fadeOut();
	return false;
});

$(document).keydown(function (e) {
	if (e.keyCode === 27) {
		e.stopPropagation();
		$('.popup-fade').fadeOut();
	}
});

$('.popup-fade').on('click', function (e) {
	if ($(e.target).closest('.popup').length == 0) {
		$(this).fadeOut();
	}
});

$('.popup-my-open').on('click', function () {
	$('.my-popup').fadeIn();
	return false;
});
$('.popka-close').on('click', function () {
	$(this).parents('.my-popup').fadeOut();
	return false;
});
$(document).keydown(function (e) {
	if (e.keyCode === 27) {
		e.stopPropagation();
		$('.my-popup').fadeOut();
	}
});
$('.my-popup').on('click', function (e) {
	if ($(e.target).closest('.popka').length == 0) {
		$(this).fadeOut();
	}
});

// END POPUPS

// BEGIN BURGER

$('.menu-burger__header').click(function () {
	$('.menu-burger__header').toggleClass('open-menu');
	$('.header__nav').toggleClass('open-menu');
});

// END BURGER

/* TOOGLE THEME BEGIN */

$('.temka').on('click', () => {
	$('.body').attr('data-theme', 'dark');
	$('.temka').attr('class', 'dark-temka');
	alert('dkkdk');
});
$('.dark-temka').on('click', () => {
	$('.body').attr('data-theme', 'light');
	$('.dark-temka').attr('class', 'light-temka');
	alert('dkkdsafasdfdk');
});

/* TOOGLE THEME END */
