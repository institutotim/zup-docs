---
title: Campos de categoria de relatos
permalink: /knowledge/report_field_description/
---

## Categoria Principal:

Se for selecionada uma categoria principal, a categoria que esta sendo criada será uma subcategoria no sistema, permitindo que exista categoria e um nível de subcategoria.

## Categoria de inventário relacionada

O sistema ZUP é permitido vincular um relato a uma categoria de inventário, ao fazer isso, quando o usuário relatar um problema sobre essa categoria de relato, o sistema obrigará o usuário a escolher um item de inventário.

Isto permitirá que empresas e instituições possam ter um controle minucioso sobre itens de inventário, possibilitando que outros usuários contribuam indicando problemas ou informações dentro daquele item de inventário.

> **Exemplo prático**:
* Cria-se uma categoria de inventário chamado **Árvores**;
* Cria-se uma categoria de relato chamado **Árvore caída**;
* Quando o usuário fizer um relato de uma árvore caída, será necessário escolher qual árvore que está sendo relatada;

## Cor representativa do relato

A cor tem como objetivo representar graficamente a categoria de relato, sendo o fundo do ícone que será selecionado adiante.

**Onde a cor é exibida?**
* Na lista de itens de relatos;
* No modo mapa, cada relato é exibido com a cor selecionada;
* Nos filtros de busca do item relatos quando se escolhe o filtro **Com os estados...**.

## Ícone da categoria:

A categoria deverá ser representada através de um ícone, este ícone será exibido em diversos aplicativos. No ZUP são disponibilizados diversos ícones, mas é possível também enviar um ícone customizado.

**Onde o ícone é exibido?**
* Na lista de itens de inventário;
* No modo mapa, cada item de inventário da categoria em questão é exibido com o ícone enviado;
* No filtro dos aplicativos públicos, caso exista.

**Recomendações para envio do ícone:**
* Enviar um ícone no formato PNG com fundo transparente;
* Tamanho 60x60px.

## Tempo de resolução do relato

O tempo de resolução do relato determinará o SLA (Service Level Agreement) de atendimento para aquela categoria de relato, ao incluir este tipo de informação no painel ZUP, o sistema irá notificar o grupo de usuários responsável pela categoria caso o relato não seja atendido no tempo definido. Além disso, é possível deixar o SLA público, visível aos usuários que criarem o relato através dos aplicativos, ao ativar essa opção, quando o usuário concluir o relato, o sistema exibirá a mensagem que o relato será atendimento em até XX tempo.



## Estados (status) de relatos

Cada categoria de relato pode ter, individualmente, um estado que determinará em que situação um relato esta.

**Exemplo prático**:
* Usuário com permissão cria uma categoria de relato chamado "**Semáforo quebrado**";
* Criam-se os estados para este tipo de categoria, exemplo:
  * Em Aberto;
  * Em Andamento;
  * Equipe na rua;
  * Resolvido;
  * Cancelado;
* O usuário do painel ou dos aplicativos poderá sempre visualizar o estado do relato.

Para cadastrar os relatos, basta clicar no **Gerenciar estados**, uma janela irá se abrir. Nesta janela o usuário pode dar o nome ao Estado (ex.: Em andamento), definir o **Estado inicial** que determinará qual estado entrará por padrão no sistema quando o usuário criar o chamado. O **Estado final** determina quando o chamado é fechado. Na coluna **Ativado** é possível desativar/ativar o estado. Na coluna **Privado**, se ativado, o estado só estará disponível no painel ZUP e será ocultado para os usuários públicos e por último, deve-se definir a **Cor** do estado.


## Permitir criar relatos em pontos livres

Ao ativar essa opção, o usuário pode criar o relato em qualquer ponto do mapa.

## Feedback do usuário

Uma vez que essa opção esteja ativada, quando o relato for finalizado alterando o estado para algum que esteja setado como Estado final o usuário receberá um e-mail sendo convidado a dar um feedback sobre a resolução do chamado aberto. Se desativado, o usuário só receberá a notificação que o chamado foi fechado.

**Para o Solicitante**:

Quando o solicitante clica no link para dar o feedback, será aberto uma página web onde ele deverá selecionar se ele foi atendido ou não, neste caso existe a opção de positivo ou negativo, ele poderá adicionar também uma observação e imagens.

**Para o Gestor**:

Quando um feedback é realizado, o gestor poderá enxerga-lo dentro do próprio relato, vendo se o feedback foi positivo/negativo, as observações e possíveis imagens.




## Grupos Solucionadores

Grupo solucionadores são grupos disponíveis no sistema que poderão ser adicionado às categorias de relato para os usuários do painel com acesso aos chamados da categoria possam atribuir o protocolo/chamado a um grupo responsável. Ao adicionar um ou mais grupo solucionadores na categoria de relato, uma nova caixa será exibida chamada **Grupo padrão** e ao selecionar o grupo padrão, quando um relato for criado, automaticamente o sistema ZUP atribuirá a responsabilidade do relato ao grupo padrão selecionado na parametrização.

**Grupos solucionadores permitem:**
* Ao adicionar os grupos solucionadores, os usuários enxergarão na listagem de grupos apenas os que você adicionou na categoria;
* Que o relato seja encaminhado de um grupo para outro grupo responsável;
* Ao atribuir um grupo responsável dentro do relato, será possível atribuir o usuário do grupo;
