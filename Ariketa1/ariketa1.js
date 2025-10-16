const datuakEskatu = "Gehitu zenbaki bat.";

const galdera = "Beste zenbaki bat sartu nahi duzu?";

var datuakLortu = function {
    do {
        let datuak = [];
        datuak.push(prompt(datuakEskatu));
    } while (confirm(galdera))
    return datuak;
}

var datuakKalkulatu = function (array) {
    let emaitza
    let kopurua
    for (i = 0; i<array.length(); i++) {
        emaitza = + array[i];
        kopurua++;
    }
    emaitza = emaitza / kopurua;
    return emaitza;
}
let datuak = datuakLortu;
alert(datuakKalkulatu(datuak));
