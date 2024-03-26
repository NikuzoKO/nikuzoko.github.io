document.addEventListener('DOMContentLoaded', function() {

	var modifyOnMouse = document.getElementById('modifyOnMouse');
	var isMouseOver = false;

	modifyOnMouse.addEventListener('mouseover', function() {
		if (!isMouseOver) {
			isMouseOver = true;
			removeAllChildNodes(modifyOnMouse);
			var motherSection = document.createElement('section');
			var titleSpan = document.createElement('span');
			titleSpan.setAttribute('class', 'title');
			titleSpan.innerText = 'Dogma 2';
			motherSection.appendChild(titleSpan);
			var brLine1 = document.createElement('br');
			motherSection.appendChild(brLine1);
			var brLine2 = document.createElement('br');
			motherSection.appendChild(brLine2);
			var subTitleSpan = document.createElement('span');
			subTitleSpan.setAttribute('class', 'subTitle');
			subTitleSpan.innerText = 'Duda de todo, incluso de lo que crees saber.';
			motherSection.appendChild(subTitleSpan);
			modifyOnMouse.appendChild(motherSection);
		}
	});

	modifyOnMouse.addEventListener('mouseout', function() {
		isMouseOver = false;
		removeAllChildNodes(modifyOnMouse);
		var motherSection = document.createElement('section');
		var subTitleSpan = document.createElement('span');
		subTitleSpan.setAttribute('class', 'subTitle');
		subTitleSpan.innerText = 'Bienvenid al salón de los misterios, donde un debe olvidar para poder entender, pero no olviden sus dogmas, pues nada es lo que parece.';
		motherSection.appendChild(subTitleSpan);
		modifyOnMouse.appendChild(motherSection);
	});

	modifyOnMouse.addEventListener('click', function() {
		window.open('dogmaPage2.html', '_self');
	});

	function removeAllChildNodes(parent) {
	    while (parent.firstChild) {
	        parent.removeChild(parent.firstChild);
	    }
	}

});