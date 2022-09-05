function getElement(id) {
    return document.getElementById(id);
}

function calcNota() {
    let n1 = parseFloat(getElement('nota-1').value.replace(',', '.'));
    let n2 = parseFloat(getElement('nota-2').value.replace(',', '.'));
    let n3 = parseFloat(getElement('nota-3').value.replace(',', '.'));
    let n4 = parseFloat(getElement('nota-4').value.replace(',', '.'));

    let media = (n1+n2+n3+n4)/4;

    media = isNaN(media) ? 0 : media;
    media = media.toFixed(1);

    getElement('nota').innerHTML = media;

    if(media >= 6) {
        getElement('passed').hidden = false
        getElement('reproved').hidden = true
    }
    else {
        getElement('reproved').hidden = false
        getElement('passed').hidden = true
    }
}

// getElement('passed').hidden = false
// getElement('reproved').hidden = false
