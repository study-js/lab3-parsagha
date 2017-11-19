var fasi = prompt('sheitane fasi');
if (fasi.includes("$")) {
    var del = fasi.slice(1);
    var dolari = del * 2.6;
    alert(dolari);
}

else {
    var washale = fasi.slice(1);
    var lari = washale / 2.6;
    alert(lari);

}