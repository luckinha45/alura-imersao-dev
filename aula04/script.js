var filmes = [
	
]



function getElement(id) {
	return document.getElementById(id);
}

function addCapa() {
	let divCapas = getElement('capas');
	let inptLink = getElement('link_img');

	if(!filmes.includes(inptLink.value)) {
		filmes.push(inptLink.value);
		carregaFilmes(divCapas);
	}
	else {
		alert('Essa capa já foi incluída!');
	}
	
	inptLink.value = '';
}

function carregaFilmes(divCapas) {
	divCapas.innerHTML = '';
	filmes.forEach(img => {
		divCapas.innerHTML += `<img src=${img}>`;
	});
}