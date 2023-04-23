Cypress.Commands.add('dataDeNascimento',  () => {

    var data = new Date();
    var dia = String(data.getDate()-10).padStart(2,0);
    var mes = String(data.getMonth()-1).padStart(2,0);
    var ano = String(data.getFullYear()-20)
    var dataDeNascimento = (dia+"/"+mes+"/"+ano);
    return dataDeNascimento;

});