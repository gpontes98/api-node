# api-node - lista de linguagens de programação

Este projeto consiste em duas APIs desenvolvidas em Node.js com o objetivo de estudar a dockerização de aplicações. 

A primeira API é responsável por retornar uma lista de linguagens de programação a partir de um banco de dados SQLite. Ela roda na porta 8000 e foi dockerizada, sendo publicada no Docker Hub.

A segunda API, executada na porta 3000, faz uma requisição à primeira API para obter a lista de linguagens de programação. Essa segunda API também foi dockerizada e publicada no Docker Hub.

Para orquestrar e interligar as duas APIs, foi criado um arquivo docker-compose.yml. Nele, os serviços são definidos, as portas são mapeadas e uma rede chamada "tech-challenge" é criada. Essa rede permite a comunicação entre os dois serviços.

O objetivo desse projeto é demonstrar a dockerização de aplicações e a interação entre elas por meio de uma rede compartilhada.



## Como testar?

Basta executar o comando docker-compose up no diretório onde o arquivo docker-compose.yml está localizado e fazer o get na rota http://localhost:3000/languages

