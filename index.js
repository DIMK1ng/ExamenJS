function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {
    var entrada;
    var resultat;
    for (var i = 1; i <= document.getElementById('n').value; i++) {
        factorial *= i;
    }
    document.getElementById('factorial').value = factorial;
    _id("resultatFactorial") = innerHTML
}

function calculaIVA() {
    var preuAmbIVA = $("input[name=preuAmbIVA]").val();
    var IVA = (preuAmbIVA * tasa) / 100;
    $("input[name=total]").val(parseInt(preuAmbIVA) + parseInt(iva));
}

function canviaFons(tipus) {
    var colorFondo;
    var colorTexto;
    if (tipus == "random") {
        var red = Math.floor(Math.random() * 255);
        colorFondo = "rgb(" + red + "," + red + "," + red + ")";
    }
    else if (tipus == "clear") {
        colorFondo = "white";
        colorTexto = "black";
    }
    _id("cuerpo").style.backgroundColor = colorFondo;
    _id("cuerpo").style.color = colorTexto;
}