var max = 1000;
var tentativas = 10;
var fim = false;

var objetivo = Math.floor(Math.random() * (max+1));

function getElement(id) {
	return document.getElementById(id);
}

function changeRatio(value, oldMin, oldMax, newMin, newMax) {
	return ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

function Chutar() {
	if (!fim) {
		let dica_atual = getElement("dica_atual");
		let resultado = getElement('resultado');
	
		let guess = parseInt(getElement('valor').value);
		guess = isNaN(guess) ? 0 : guess;
	
		if (guess < 0 || guess > max) {
			resultado.innerHTML = 'Valor fora dos limites!';
			return;
		}
		else {
			let percent = (1 - Math.abs(guess - objetivo) / max)*100;
			dica_atual.style.width = percent + '%';
			getElement('porcentagem').innerHTML = percent.toFixed(2)+'%';

			if (guess == objetivo) {
				fim = true;
				resultado.style.color = 'green';
				resultado.innerHTML = 'ENCONTROU EM ' + (10-tentativas) +' TENTATIVAS!';
			}
			else {
				tentativas--;
				resultado.innerHTML = "FALTAM " + tentativas + " TENTATIVAS.";
				if (tentativas == 1) fim = true;
			}
		}
	}
	else if (fim && tentativas==1) {
		resultado.innerHTML = 'ACABOU AS TENTATIVAS! PERDESTE :(';
	}

}