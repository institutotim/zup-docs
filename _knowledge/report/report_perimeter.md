---
title: Perímetros
permalink: /knowledge/report_perimeter/
---

Perímetro é a medida do contorno de um objeto bidimensional, ou seja, a soma de todos os lados de uma figura geométrica. O perímetro de um círculo é chamado de circunferência.

### - Como isto funciona no ZUP?

O sistema ZUP conta com uma poderosa ferramenta para importar estes perímetros para ser utilizado em conjunto com os relatos do sistema. Com esta funcionalidade é possível determinar que ao cair em um perímetro de um bairro específico, o sistema automaticamente atribuirá um grupo responsável automaticamente.

> **Exemplo**: Existe um perímetro cadastrado para o bairro do Higienópolis e quero determinar que um relato da categoria "Árvore caída", quando cair dentro deste perímetro, seja automaticamente enviado para uma secretaria de meio ambiente.

### - Como eu traço um perímetro na ferramenta?

Atualmente o ZUP não dá suporte para desenhar as áreas no mapa, para importar um perímetro para a ferramenta é necessário utilizar alguma ferramenta de GIS para traçar os polígonos. Uma das ferramentas mais populares é o **Google Earth**, neste software é possível exportar os dados em formato KMZ, portanto será necessário converter de KMZ para SHP (formato shapefile)

### - O que é um shapefile?

Shapefile é um formato popular de arquivo contendo dados geoespaciais em forma de vetor.

A ferramenta ZUP é compatível com este formato para a importação destes arquivos.

### - Como importar um arquivo shapefile para o ZUP?

Para importar um arquivo shapefile, você deve ter os privilégios de gerenciar categorias de relato, logar na ferramenta e seguir o procedimento abaixo:

1. Menu esquerdo, clique em **Relatos**;
2. Do lado direito superior, clique no botão **Gerenciar Categorias**;
3. Do lado direito superior, clique no botão **Gerenciar perímetros/regiões**;
4. Do lado direito superior, clique no botão **Cadastrar novo perímetro**;
5. Uma nova tela vai abrir com as seguintes informações;
* Selecione o arquivo **.shp**;
* Selecione o arquivo **.shx**;
* Cadastre o nome do perímetro/região;
* Defina o grupo solucionador padrão (opcional).

Todos os shapefiles possuem os arquivos **.shp** e **.shx**, será necessário adicionar a partir do seu computador. No campo "**Cadastre o nome do perímetro/região**" é possível dar qualquer nome ao perímetro, pode ser uma região de uma cidade, um bairro, uma zona ou qualquer nome que ajude a compreender que o relato se encontra dentro daquela área.

A definição de um grupo solucionador padrão é opcional porque há duas maneiras de vincular o grupo responsável no sistema, o primeiro é nesta tela de importação do shapefile, ao selecionar um grupo do sistema, qualquer relato de qualquer categoria do sistema, quando cair dentro do perímetro, automaticamente será vinculado ao grupo solucionador configurado nesta página. Se o desejo é vincular o shapefile por categoria de relato para que, dependendo da categoria seja enviado para um grupo solucionador diferente, basta deixar este campo em branco.

### - Status de importação

Quando um shapefile é importado no sistema, pode demorar alguns minutos para que o sistema realize o procedimento necessário. É possível acompanhar o status de importação para cada arquivo, os status são:

* **CADASTRADO COM SUCESSO** - O arquivo está pronto para ser usado;
* **ERRO: ARQUIVO INVÁLIDO** - Verifique se o arquivo não está corrompido e tente novamente;
* **EM PROCESSAMENTO** - O sistema está processando o arquivo, retorne nesta tela mais tarde.

### - Como vincular um shapefile a uma categoria específica?

Se existe a necessidade de que um arquivo shapefile tenha um grupo solucionador diferente para cada tipo de categoria, uma vez que o shapefile tenha sido importado no sistema, basta seguir os passos abaixo:

1. No menu esquerdo, clique em **Relatos**;
2. Do lado direito superior, clique no botão **Gerenciar Categorias**;
3. Ao clicar em Gerenciar Categorias, escolha a **categoria desejada**;
4. Ao entrar na tela de configuração da categoria, role a página até a seção "**Responsáveis pelo relato**";
5. Ative a opção "**Gerenciamento por perímetro**", caso esteja desativada;
6. Clique no botão "**Definir novo perímetro**";
7. Na opção "**Selecione o perímetro/região**", escolha o **nome do shapefile** que foi cadastrado;
8. Ao lado, no campo "**Selecione o grupo responsável**", selecione o grupo solucionador desejado;
9. Clique no botão **OK**.
