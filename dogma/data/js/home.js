document.addEventListener('DOMContentLoaded', function() {

	var menu = document.getElementById('startMenu');
	menu.addEventListener('change', function(e) {
		if (menu.value == 'Jugar') {
			window.open('data/pages/dogmaPage1.html', '_self');
		} else if (menu.value == 'Opciones') {
			window.open('data/pages/dogmaOptions.html', '_self');
		} else if (menu.value == 'Contacto') {
			window.open('data/pages/dogmaContact.html', '_self');
		} else if (menu.value == 'Créditos') {
			window.open('data/pages/dogmaCredits.html', '_self');
		} else {
			window.open('#', '_self');
		}
	});

});