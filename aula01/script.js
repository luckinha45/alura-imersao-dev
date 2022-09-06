function getElement(id) {
    return document.getElementById(id);
}

function mudaCalc() {
    let e = getElement('slct_pagina').value;

    switch (e) {
        case 'temp':
            getElement('calc_media').hidden = true;
            getElement('covert_temp').hidden = false;
            break;

        case 'media':
            getElement('calc_media').hidden = false;
            getElement('covert_temp').hidden = true;
            break;
    }
}


function calcNota() {
    let n1 = parseFloat(getElement('nota-1').value.replace(',', '.'));
    let n2 = parseFloat(getElement('nota-2').value.replace(',', '.'));
    let n3 = parseFloat(getElement('nota-3').value.replace(',', '.'));
    let n4 = parseFloat(getElement('nota-4').value.replace(',', '.'));
    n1 = isNaN(n1) ? 0 : n1;
    n2 = isNaN(n2) ? 0 : n2;
    n3 = isNaN(n3) ? 0 : n3;
    n4 = isNaN(n4) ? 0 : n4;

    let media = (n1+n2+n3+n4)/4;

    // media = isNaN(media) ? 0 : media;
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

function convTemp() {
    let c = parseFloat(getElement('temp_celcius').value.replace(',', '.'));
    let f = '';
    if (!isNaN(c)) {
        f = (c*1.8)+32;
    }

    getElement('temp_fhrnt').innerHTML = f;

}

