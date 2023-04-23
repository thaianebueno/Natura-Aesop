const el = require('./elementsPage').ELEMENTS;
const dados = require('./dadosCadastro').dados;
let dataDeNascimento 

before(() => {

    cy.dataDeNascimento(0, 0).then((valor) => { dataDeNascimento = valor })
    
})

class Cadastro{

    siteNatura(){
        cy.visit(`${Cypress.env("urls").urlNatura}`)  
    }

    siteAesop(){
        cy.visit(`${Cypress.env("urls").urlAesop}`)  
    }

    aceitarCookies(){
        cy.get(el.cookies).click() 
    }

    itens(){
        cy.get(el.itens).click() 
    }

    cadastrar(){
        cy.contains(el.cadastro).click({force:true}) 
    }

    loginNaruta(){
        cy.get(el.loginNatura).click() 
    }

    loginAesop(){
        cy.get(el.loginAesop).click() 
    }

    primeiroNome(){
        cy.get(el.primeiroNome).type(dados.name) 
    }
    
    sobrenome(){
        cy.get(el.sobrenome).type(dados.sobrenome) 
    }

    email(){
        cy.get(el.email).type(dados.email) 
    }

    senha(){
        cy.get(el.senha).type(dados.senha) 
    }

    repetirSenha(){
        cy.get(el.repetirSenha).type(dados.senha) 
    }

    cpf(){
        cy.get(el.cpf).type(dados.cpf) 
    }

    dataDeNascimento(){
        cy.get(el.dataDeNascimento).type(dataDeNascimento) 
    }

    genero(){
        cy.get(el.genero).click() 
    }

    celular(){
        cy.get(el.celular).type(dados.celular) 
    }

    termos(){
        cy.get(el.termos).click() 
    }

    termosNovidades(){
        cy.get(el.termosNovidades).click() 
    }

    termosInformacoes(){
        cy.get(el.termosInformacoes).click() 
    }

    enviar(){
        cy.get(el.enviar).click({force:true});
    }
    
    criterios(){
        cy.get(el.criterios).should('be.visible').click();
         
    }

    cadastroComSucesso(){
        cy.get(el.cadastroSucesso).should('contain', `Olá, ${dados.name}`)
         
    }

    emailLogin(){
        cy.get(el.emailLogin).type(dados.email)
         
    }

    senhaLogin(){
        cy.get(el.senhaLogin).type(dados.senha)
         
    }

    entrar(){
        cy.get(el.entrar).should('be.visible').click()
         
    }
}

export default new Cadastro