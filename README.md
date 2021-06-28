<h2>💻 Projeto</h2>
  <h3 align="center">⚡ NLW Valoriza</h3>
  <p align="center" style="font-family: Roboto">NLW Valoriza, api desenvolvida durante a sexta edição da nexlevelweek.</p>
  
  ![image](https://user-images.githubusercontent.com/63478331/123519273-888c8300-d680-11eb-8b78-48717ba6653d.png)


<h2>✨ Tecnologias</h2>
<p>Esse projeto foi desenvolvido com as seguintes techs:</p>

   - Typescript
   - Express
   - TypeORM
   - Jest
   - Jwtwebtoken
   - Bcryptjs

<h2>🚀 Como usar</h2>
<p>Autenticação</p>

   + Cadastro:
     - http://localhost/users
       + Faça uma requisição POST enviado o seguinte body:
        
              {
                  "email": "seu email",
                  "password": "sua senha"
              }

   + Obter token jwt:
     - http://localhost/login
        + Faça uma requisição POST enviando o seguinte body: 
           
              {
                  "email": "email cadastrado acima",
                  "password": "senha cadastrada acima"
              }
          
        + Após isso você irá receber seu token jwt
              
<p>Elogios</p>
 
  + Pesquisar elogios
     - http://localhost/tags/:elogio:
        + Faça uma requisição GET e vai receber informações sobre a tag.
     
  + Enviar um elogio
     - http://localhost/tags/compliments
        + Faça uma requisição POST com esse body:
          
              {
                "tag_id": "id do elogio",
                "user_receiver": " id do usuário que vai receber ",
                "message": " messagem que vocẽ deseja enviar "
              }
            
<h2>🔥 Como executar</h2>
  <h3>🐘 Migrations</h3>
    
   + Clone o projeto em sua maquina: 

          $ git clone https://github.com/Al3xsandro/nlwValoriza.git
  
   + Apos isso configure o arquivo dotenv
        - é possível encontrar o arquivo na raiz de seu projeto
            
              .env.example
        
       - Preencha as credenciais e execute esse comando em sua maquina:

             $ yarn typeorm migrations:run
         
       - Aguarde retornar as migrações foram geradas com sucesso, e faça as próximas etapas.
     
      
  <h3>🧶Com yarn</h3>
  
   + Clone o projeto em sua maquina: 

          $ git clone https://github.com/Al3xsandro/nlwValoriza.git

   + Verifique se você tem o node e yarn instalado em sua maquina

           $ node -v;yarn -v // vai retornar a versão dos dois

   + Digite o comando abaixo para instalar as dependencias do projeto:

           $ yarn

   + Por fim execute:

          $ yarn dev

   - Agora você já pode acessar a api em seu navegador ou proxy!
  
