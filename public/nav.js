// Nav
const sliding = () => {
	const navList = document.querySelector('.nav_ul');
	const button = document.querySelector('.burger_menu');

	button.addEventListener('click', () => {
		navList.classList.toggle('nav_ul_active');
	});
};
sliding();

// Index desplegable
$('#quienes_somos_button').click(function() {
	$('#que_es_queso_info').toggle();
});
