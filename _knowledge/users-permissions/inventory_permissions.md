---
title: Permissões de Inventário
permalink: /knowledge/inventory_permissions/
---

Para adicionar as permissões listadas abaixo, você deve seguir os seguintes passos:
1. Entre no ZUP;
2. Clique em Grupos localizado no menu lateral;
3. Na listagem de grupos, escolha o grupo que você deseja editar as permissões;
4. Ao entrar na página do grupo, clique no botão Gerenciar permissões localizado no lado direito superior;

### - Gerenciar todas as categorias
Ativada esta opção, o grupo obtém todas as permissões de edição sobre todas as categorias de inventário existentes, sobre novas categorias adicionadas no futuro, e sobre todos os formulários pertencentes a todas as categorias. Também permite a visualização e edição de dados dos itens de inventário, buscar, deletar e adicionar itens de inventário.

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Botão "Gerenciar Categorias" ficará visível no canto direito superior;
* Usuários poderão editar todas as categorias de inventário;
* Usuários do grupo poderão ver todos os itens de inventário de todas as categorias;
* Será possível deletar qualquer categoria de inventário;
* Será possível editar qualquer categoria de inventário;
* Botão + Nova Categoria ficará visível no canto direito superior para os usuários criarem novas categorias;
* Aba Fórmulas será exibida na interface de edição da categoria de inventário;
* Botão + Novo Item deve ser exibido na interface no canto direito superior;


### - Editar a categoria
Permite sobre as categorias selecionadas: a visualização e edição de dados dos itens de inventário, buscar, deletar e adicionar itens de inventário. Permite a edição dos campos de formulários das categorias selecionadas.

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Botão "Gerenciar Categorias" ficará visível no canto direito superior;
* Usuários poderão editar categorias de inventário selecionadas;
* Usuários do grupo poderão ver todos os itens de inventário das categorias selecionadas;
* Usuários do grupo poderão ver editar ou deletar os itens das categorias selecionadas;
* Botão + Novo Item deve ser exibido na interface;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Na listagem de "Gerenciar Categorias", o botão "+ Nova Categoria" deve ser ocultado;
* Aba "Fórmulas" não deve ser exibida dentro da categoria de inventário;

### - Visualizar itens
Essa opção permitirá que os usuários deste grupo possam visualizar os itens de inventário de categorias de inventário selecionadas.

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Usuários do grupo poderão ver os itens de inventário das categorias selecionadas;
* Usuários so poderão ver as seções e campos nos quais possui permissão de visualizar.

**Funcionalidades e botões que não estará presente nesta permissão:**
* O botão "Gerenciar Categorias" deve ser ocultado;
* Botão + Novo Item deve ser ocultado na interface;
* Botão "Excluir" não ficará visível na listagem de itens;
* Botão "Excluir" não ficará visível no canto direito superior dentro do item;
* Botão "Editar" não ficará visível na listagem de item;
* Botão "Editar" não ficará visível dentro do item em si, no canto direito superior;

### - Editar itens
Ao selecionar quais categorias de inventário o grupo terá acesso, os usuários poderão visualizar e editar os itens de inventário das categorias selecionadas. Essa opção automaticamente ativará a permissão "Visualizar itens".

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Usuários do grupo poderão ver os itens de inventário das categorias selecionadas;
* Botão "Editar" ficará visível na listagem de item;
* Botão "Editar" ficará visível dentro do item em si, no canto direito superior;
*Ao ativar essa opção, a permissão "Visualizar itens" deverá ser contemplada automaticamente;
* Usuários so poderão ver as seções e campos nos quais possui permissão de visualizar e editar;

**Funcionalidades e botões que não estará presente nesta permissão:**
* O botão "Gerenciar Categorias" deve ser ocultado;
* Botão + Novo Item deve ser ocultado na interface;
* Botão "Excluir" não ficará visível na listagem de itens;
* Botão "Excluir" não ficará visível no canto direito superior dentro do item;

### - Remover itens
Ao selecionar quais categorias de inventário o grupo terá acesso, os usuários poderão visualizar e excluir os itens de inventário das categorias selecionadas. Essa opção automaticamente ativará a permissão "Visualizar itens".

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Usuários do grupo poderão ver os itens de inventário das categorias selecionadas;
* Botão "Excluir" ficará visível na listagem de item;
* Botão "Excluir" ficará visível dentro do item em si, no canto direito superior;
* Usuário poderá visualizar as seções e campos que ele tem permissão de acessar;
* Ao ativar essa opção, a permissão "Visualizar itens" deverá ser contemplada automaticamente;

**Funcionalidades e botões que não estará presente nesta permissão:**
* O botão "Gerenciar Categorias" deve ser ocultado;
* Botão + Novo Item deve ser ocultado na interface;
* Botão "Editar" não ficará visível na listagem de itens;
* Botão "Editar" não ficará visível no canto direito superior dentro do item;

### - Criar novos itens
Ao selecionar quais categorias de inventário o grupo terá acesso, os usuários poderão apenas adicionar itens de inventário sobre as categorias selecionadas, além de poder visualizar os itens que o próprio usuário criou.

**Privilégios:**
* Menu "Inventário" ficará visível no menu lateral;
* Usuários do grupo poderão adicionar itens de inventário que ele próprio criou para as categorias selecionadas;
* Botão + Novo Item deve ser exibido na interface;
* Usuários só poderão visualizar e adicionar informações nos campos que ele tem permissão de visualizar/editar;

**Funcionalidades e botões que não estará presente nesta permissão:**
* O botão "Gerenciar Categorias" deve ser ocultado;
* Botão "Excluir" não ficará visível na listagem de itens;
* Botão "Excluir" não ficará visível no canto direito superior dentro do item;
* Botão "Editar" não ficará visível na listagem de item;
* Botão "Editar" não ficará visível dentro do item em si, no canto direito superior;


### - Gerenciar fórmulas
Ao selecionar essa opção de fórmulas, este grupo poderá acessar o módulo de configuração de fórmulas que fica localizado dentro da categoria do inventário na aba fórmulas. Se você deseja que este grupo possa ver, editar ou excluir as fórmulas das categorias de inventário, ative essa opção. Ao escolher essa opção, você deve selecionar quais categorias de inventário este grupo poderá configurar.

**Privilégios:**
* Aba "Fórmulas" deve ser exibida dentro da categoria de inventário;
* Essa aba só funciona uma vez que os usuários tenham os privilégios para editar as categorias de inventário.
 
