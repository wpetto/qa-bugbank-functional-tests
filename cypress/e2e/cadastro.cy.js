describe('Funcionalidade: Cadastro de novo usuário', () => {
  beforeEach('',() => {
    //Arrange → Preparar o ambiente 
    cy.visit('/')
  })

    it('Validação de campos obrigatórios no formulário de cadastro', () => {
      cy.get('.ihdmxA').click()
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get(':nth-child(2) > .input__warging').should('include.text', 'É campo obrigatório') 
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging').should('include.text', 'É campo obrigatório')
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging').should('include.text', 'É campo obrigatório')
    })

    it('Cadastro com "Criar conta com saldo" ativo', () => {
      //Act → Executar a ação
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro(email, 'joão Pedro' , '@JoãoPedro.123', '@JoãoPedro.123')
      //Assert → Verificar o resultado esperado
      cy.get('#modalText').should('include.text', 'A conta').and('include.text', 'foi criada com sucesso')
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0').should('be.visible')
    })

    it('Cadastro com "Criar conta com saldo" desativado', () => {
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro_semSaldo(email, 'joão Pedro' , '@JoãoPedro.123', '@JoãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('#modalText').should('include.text', 'A conta').and('include.text', 'foi criada com sucesso')
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0').should('be.visible')
    })

    it('Cadastro com campo "nome" vazio', () => {
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro_nomeVazio(email,'@JoãoPedro.123', '@JoãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('#modalText').should('include.text', 'Nome não pode ser vazio.')
    })

    it('Cadastro com campo "email" vazio', () => {
      cy.preencherCadastro_emailVazio('João Pedro','@JoãoPedro.123', '@JoãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('.styles__ContainerContent-sc-8zteav-1').should('include.text', 'Email não pode ser vazio.')
    })

    it('Cadastro com campo "senha" vazio', () => {
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro_senhaVazio(email,'João Pedro', '@JoãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('.styles__ContainerContent-sc-8zteav-1').should('include.text', 'Senha não pode ser vazio.')
    })

    it('Cadastro com campo "Confirmação senha" vazio', () => {
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro_confirmaçãoSenha(email,'João Pedro', '@JoãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('.styles__ContainerContent-sc-8zteav-1').should('include.text', 'Confirmação senha não pode ser vazio.')
    })

    it('Cadastro com senhas não coincidentes', () => {
      var email = `joaopedro${Date.now()}@email.com`
      cy.preencherCadastro_senhasDiferentes(email,'João Pedro', '@JoãoPedro.123', '@joãoPedro.123')
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
      cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible').and('include.text','As senhas não são iguais.')
    })
})