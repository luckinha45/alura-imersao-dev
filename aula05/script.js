var games = []



function getElement(id) {
	return document.getElementById(id);
}

function addCapa() {
	let divCapas = getElement('div_capas');
	let inptLink = getElement('link_img');
	let inptName = getElement('name_game');

	if (!games.includes({ 'link': inptLink.value, 'name': inptName.value })) {
		games.push({ 'link': inptLink.value, 'name': inptName.value});
		carregaGames(divCapas);
	}
	else {
		alert('Essa capa já foi incluída!');
	}

	inptLink.value = '';
	inptName.value = '';
}

function carregaGames(divCapas) {
	let div = ''
	games.forEach((game, idx) => {
		div += `
			<div class='capa_game_container'>
				<img class='capa_game_fecha' src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onclick='fechaImg(${idx})'>
				<img class='capa_game_img' src='${game.link}'>
				<p class='capa_game_name'>${game.name}</p>
			</div>
		`;
	});
	
	divCapas.innerHTML = div
}

function fechaImg(idx) {
	games.splice(idx, 1);
	carregaGames(getElement('div_capas'));
}
