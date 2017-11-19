var kmNum = 0;
var ltrNum = 0;
function control(id) {
    if (id.value == "")
        id.value = "0";
    
    
    if (id.id == "km") {
        km();
    } else {
        ltr();
    }

    var out = document.getElementById("out");
    out.innerHTML = "Der verbrauch ist <b>" + (ltrNum / kmNum) * 100 + "</b> Liter pro Kilometer";
}
function km() {
    kmNum = document.getElementById("km").value;
}
function ltr() {
    ltrNum = document.getElementById("ltr").value;
}

window.onload = control("km");