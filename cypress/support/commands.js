// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCadastro', (email, nome, senha, confirmaçãoSenha) => { 

      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('#toggleAddBalance').click({force:true})//"Criar conta com saldo" ativado
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

     Cypress.Commands.add('preencherCadastro_semSaldo', (email, nome, senha, confirmaçãoSenha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

     Cypress.Commands.add('preencherCadastro_nomeVazio', (email, senha, confirmaçãoSenha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default')
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

    Cypress.Commands.add('preencherCadastro_emailVazio', (nome, senha, confirmaçãoSenha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default')
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

    Cypress.Commands.add('preencherCadastro_senhaVazio', (email, nome, confirmaçãoSenha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

     Cypress.Commands.add('preencherCadastro_confirmaçãoSenha', (email, nome, senha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })

     Cypress.Commands.add('preencherCadastro_senhasDiferentes', (email, nome, senha, confirmaçãoSenha) => { 
      cy.get('.ihdmxA').click()
      cy.get(':nth-child(2) > .input__default').type(email, {force:true})
      cy.get(':nth-child(3) > .input__default').type(nome, {force:true})
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force:true})
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(confirmaçãoSenha, {force:true})
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    })