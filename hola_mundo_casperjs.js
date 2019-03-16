//'https://www.eltiempo.com/bogota';
// 'https://www.peru.gob.pe/directorio/pep_directorio_detalle_institucion.asp?cod_institucion=13705';
var URL = 'https://www.eltiempo.com/bogota';
var links = [];

casper.test.begin('Insertar datos de web', 1, function (test) {
    casper.start( URL , function(){
        
        getFile(this.getPageContent());
        test.assertExists('table.style1', "Tabla disponible");
        console.log(" info del selector")

    })

    /*
    casper.then(function() {
        // aggregate results for the 'casperjs' search
        links = this.evaluate(getLinks);
        // now search for 'phantomjs' by filling the form again
        console.log(links);
    });
    */

    

    casper.run(function () {
        test.done()
    })
})

function getFile(packageHtml) {
    var path = './files/outputNews.txt';
    var content = packageHtml;
    fs.write(path, content, 'a');
}

function getLinks() {
    var links = document.querySelectorAll('table.style1 tbody');
    return Array.prototype.map.call(links, function(e) {
        console.log("que pasa :"+e);
        return e.getAttribute('tr').html();
    });
}
