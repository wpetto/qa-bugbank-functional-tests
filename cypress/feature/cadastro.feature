Funcionalidade:  Cadastro de novo usuário

Eu, como futuro usuário ,
Quero me cadastrar no site do Banco Digital da Burbank,
Para realizar transferências e fazer pagamentos

@alta  @negativo
Cenário: Validação de campos obrigatórios no formulário de cadastro
Dado que o usuário acessa a página de cadastro
Quando deixar os campos "E-mail", "Nome", "Senha" e "Confirmação senha" em branco e clicar em "Cadastrar"                                                                 
Então cadastro não deve ser concluído.   
E o sistema deve exibir a mensagem "É campo obrigatório" para cada campo não preenchido

@alta  @positivo
Cenário: Cadastro com "Criar conta com saldo" ativado
Dado que o usuário acessa a página de cadastro
Quando preencher os campos "E-mail", "Nome", "Senha" e "Confirmação senha" com dados válidos, deixar ativo a opção "Criar conta com saldo" e clicar em "Cadastrar"
Então o cadastro deve ser concluído com saldo de R$1000,00
E o sistema deve exibir a mensagem "A conta X foi criada com sucesso" e redirecionado à página de login

@alta  @positivo
Cenário: Cadastro com "Criar conta com saldo" desativado
Dado que o usuário acessa a página de cadastro
Quando preencher os campos "E-mail", "Nome", "Senha" e "Confirmação senha" com dados válidos, deixar inativo a opção "Criar conta com saldo" e clicar em "Cadastrar"
Então o cadastro deve ser concluído sem saldo
E o sistema deve exibir a mensagem "A conta X foi criada com sucesso" e redirecionado à página de login

@alta  @negativo
Cenário: Cadastro com campo "email" vazio
Dado que o usuário acessa a página de cadastro
Quando deixar o campo “Email” vazio e preencher os campos "Nome", "Senha" e "Confirmação senha" com dados válidos e clicar em "Cadastrar"                                                                                                                         
Então o cadastro não deve ser concluído
E o sistema deve exibir a mensagem "Email não pode ser vazio"  

@alta  @negativo
Cenário: Cadastro com campo "nome" vazio
Dado que o usuário acessa a página de cadastro
Quando deixar o campo “Nome” vazio e preencher os campos “Email”, "Senha" e "Confirmação senha" com dados válidos e clicar em "Cadastrar"                                                                                                                         
Então o cadastro não deve ser concluído
E o sistema deve exibir a mensagem "Nome não pode ser vazio" 

@alta  @negativo
Cenário: Cadastro com campo "senha" vazio
Dado que o usuário acessa a página de cadastro
Quando deixar o campo “Senha” vazio e preencher os campos “Email”, “Nome” e "Confirmação senha" com dados válidos e clicar em "Cadastrar"                                                                                                                         
Então o cadastro não deve ser concluído
E o sistema deve exibir a mensagem "Senha não pode ser vazio"

@alta  @negativo
Cenário: Cadastro com campo "confirmação senha" vazio
Dado que o usuário acessa a página de cadastro
Quando deixar o campo “Confirmação senha” vazio e preencher os campos “Email”, “Nome” e "Senha" com dados válidos e clicar em "Cadastrar"                                                                                                                          
Então o cadastro não deve ser concluído.
E o sistema deve exibir a mensagem "Confirmar senha não pode ser vazio"

@alta  @negativo
Cenário: Cadastro com senhas não coincidentes
Dado que o usuário acessa a página de cadastro
Quando  preencher os campos "E-mail", "Nome", "Senha" e "Confirmação senha" com dados válidos e clicar em "Cadastrar"                                                                                                                           
Então o cadastro não deve ser concluído
E o sistema deve exibir uma mensagem de erro informando divergência entre as senhas.

@baixa @positivo
Cenário: Exibição do número da conta criada
Dado que o usuário acessa a página de cadastro
Quando preencher os campos "E-mail", "Nome", "Senha" e "Confirmação senha" com dados válidos e clicar em "Cadastrar"                                                                                                                           
Então o cadastro deve ser concluído
E o sistema envia um pop-up com o número da conta