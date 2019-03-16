var _URL = 'https://www.peru.gob.pe/directorio/pep_directorio_detalle_institucion.asp?cod_institucion=10015'
var length;

casper.start(_URL);

casper.then(function() {
    this.waitForSelector('div#Funcionarios table');
});

function getCellContent(row, cell) {
    cellText = casper.evaluate(function(row, cell) {
        return document.querySelectorAll('table tbody tr')[row].childNodes[cell].innerText.trim();
    }, row, cell);
    return cellText;
}

casper.then(function() {
    var rows = casper.evaluate(function() {
        return document.querySelectorAll('table tbody tr');
    });
    length = rows.length;
    this.echo("table length: " + length);
});

// This part can be done nicer, but it's the way it should work ...
casper.then(function() {
    for (var i = 0; i < length; i++) {
        this.echo("Data: " + getCellContent(i, 1));
        this.echo("Magnitudo: " + getCellContent(i, 3));
        this.echo("Zona: " + getCellContent(i, 5));
        this.echo("Profondità: " + getCellContent(i, 7));
        this.echo("Latitudine: " + getCellContent(i, 9));
        this.echo("Longitudine: " + getCellContent(i, 11));
    }
});

















/*
casper.test.begin('DATALAFT PERU', 2, function (test) {

    casper.start(_URL, function () {

        test.assertExists('div#Funcionarios table', "LISTA DE FUNCIONARIOS DISPONIBLE");
        test.assertExists('#Funciones.switchcontent img', "Imagen funcionarios DISPONIBLE");
    })

    casper.then(function(){
      
        
        this.echo(JSON.stringify(info, undefined, 4));
        console.log(info+ " supongos")
        
    })

    casper.run(function () {
        test.done();
    })

})
*/