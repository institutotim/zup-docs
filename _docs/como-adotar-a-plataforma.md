---
title: Como adotar a plataforma
permalink: /docs/implement/
---

O ZUP oferece funcionalidades úteis para diversos tipos de instituições – públicas e privadas – e, devido a flexibilidade da plataforma, diversos setores dentro destas podem se beneficiar das ferramentas de organização e da visibilidade proporcionada pelo uso delas.
Listamos aqui as etapas mínimas necessárias para se colocar em produção o sistema, seja com todas as funcionalidades habilitadas, ou apenas com parte delas.

## Componentes essenciais
Independente de quais aplicativos forem selecionados para uso pela organização, dois componentes são necessários para operar o sistema: a API e o Painel Administrativo. A API, também conhecida como backend, é responsável pelo armazenamento e roteamento de informações e implementa a lógica de negócio dos diferentes módulos do sistema através de uma interface exposta via HTTP. Este componente deve rodar em um servidor acessível ao Painel Administrativo e a todos os outros aplicativos escolhidos, seja isso na internet pública ou na rede privada.
O Painel Administrativo é a principal ferramenta para manipulação e uso do sistema e possui acesso a todas funcionalidades disponíveis na plataforma. Se sua organização necessita usar a aplicação no backoffice através de notebooks ou desktops, a instalação e configuração destes dois componentes é tudo que você precisa.

 - [Realize a instalação e configuração da plataforma com o guia neste site](installation_docker.md).
 - [Entenda e configure grupos de usuários e permissões com a documentação da base de conhecimento](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203948149-Criando-um-grupo-e-atribuindo-permiss%C3%B5es).
 - Crie [categorias de relato](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203925815-Criando-a-categoria-de-relato) e [categorias de inventário](https://zeladoriaurbana.zendesk.com/hc/pt-br/articles/203925215-O-que-%C3%A9-uma-categoria-de-invent%C3%A1rio-).
 - [Conheça as outras funcionalidades que o sistema oferece e que pode ser útil na sua organização](https://zeladoriaurbana.zendesk.com/hc/pt-br).

## Uso em campo
O ZUP Técnico permite agentes em campo interagir com o sistema de forma quase tão abrangente quanto o Painel Administrativo. Funcionalidades que tratem de criação e configuração de categorias de inventários, relatos, visualização de relatórios e outras ferramentas administrativas não estão disponíveis no aplicativo. Entretanto a criação, edição e consumo de itens já configurados no sistema pode ser utilizada, até sem conexão com a internet (no caso de relatos e itens de inventário) – o que torna o aplicativo ideal para uso em fiscalização,  vistoria e outras formas de trabalho em campo.

 - [Baixe, configure e distribua a aplicação técnica seguindo as instruções no repositório do componente.](https://github.com/institutotim/zup-android-tecnico)

## Usuários externos e aplicativos móveis
Finalmente, o sistema também conta com aplicativos móveis destinados a permitir o consumo de informações sobre itens de inventário, a gestão de relatos pessoais e ao consumo de informações públicas sobre relatos de terceiros para usuários que podem ou não pertencer a organização.  Estes aplicativos foram feitos para smartphones e tem como público alvo principal atores que farão uso casual do sistema.

  - [Baixe, configure e distribua a aplicação iOS seguindo as instruções no repositório do componente.](https://github.com/institutotim/zup-ios-cidadao)
  - [Baixe, configure e distribua a aplicação Android seguindo as instruções no repositório do componente.](https://github.com/institutotim/zup-android-cidadao)
