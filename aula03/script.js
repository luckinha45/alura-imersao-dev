function getElement(id) {
    return document.getElementById(id);
}

function mudaConv() {
    let e = getElement('slct_pagina').value;

    switch (e) {
        case 'moeda':
            getElement('slct_moeda').hidden = false;
            getElement('slct_dist').hidden = true;
            getElement('slct_bitcoin').hidden = true;
            getElement('slct_temp').hidden = true;
            break;

        case 'dist':
            getElement('slct_moeda').hidden = true;
            getElement('slct_dist').hidden = false;
            getElement('slct_bitcoin').hidden = true;
            getElement('slct_temp').hidden = true;
            break;
        
        case 'bitcoin':
            getElement('slct_moeda').hidden = true;
            getElement('slct_dist').hidden = true;
            getElement('slct_bitcoin').hidden = false;
            getElement('slct_temp').hidden = true;
            break;

        case 'temp':
            getElement('slct_moeda').hidden = true;
            getElement('slct_dist').hidden = true;
            getElement('slct_bitcoin').hidden = true;
            getElement('slct_temp').hidden = false;
            break;
    }
}

function ConverterDist() {
    let anosLuz = getElement('valor_dist').value;
    anosLuz = isNaN(anosLuz) ? 0 : anosLuz;

    let km = anosLuz * 9.461e+12;
    getElement('valor_result').innerHTML = km.toExponential() + ' km';
}

function converterTemp() {
    let c = parseFloat(getElement('temp_celcius').value.replace(',', '.'));
    let f = '';
    let k = '';
    if (!isNaN(c)) {
        f = (c*1.8)+32;
        k = c+273.15;
    }

    getElement('temp_fhrnt').innerHTML = f;
    getElement('temp_kelvin').innerHTML = k;
}

async function ConverterMoeda() {
    let c1 = getElement('select_currency1').value;
    let c2 = getElement('select_currency2').value;
    let valorC1 = getElement('valor').value;
    valorC1 = isNaN(valorC1) ? 0 : valorC1;
    
    // Usa uma API para pegar o peso das moedas com relação à primeira moeda colocada
    let result = await (await fetch(`https://api.exchangerate-api.com/v4/latest/${c1}`)).json();

    let valorC2 = result.rates[c2] * valorC1;
    getElement('valorConvertido').innerHTML = `${c2} ` + valorC2.toFixed(2);
}