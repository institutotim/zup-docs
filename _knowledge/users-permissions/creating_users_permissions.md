---
title: Grupos, permissões e usuários
permalink: /knowledge/creating_users_permissions/
---

Nesta categoria você encontrará conteúdos relacionados aos grupos, usuários e suas respectivas permissões do sistema.

## Acessando a tela de usuários do sistema

Para acessar a página de usuários, acesse **Usuários** localizado no menu esquerdo do sistema ZUP. Na listagem de usuários, você pode:
* Buscar um usuário, basta digitar no campo de busca e aguardar;
* Listar os usuários por um grupo específico, selecione ao lado direito superior;
* Deletar um usuário, se você tiver permissão;
* Editar um usuário se você tiver permissão;
* Cadastrar um novo usuário, se você tiver permissão, basta clicar no botão **+ Novo Usuário**;
* Acessar os dados do usuário clicando sobre o nome;

## Criando um grupo e atribuindo permissões

O acesso e permissões ao sistema ZUP se dá através do Grupo, é no grupo que será definido o que os usuários podem ou não fazer no sistema. É importante que apenas usuários experientes e familiarizados com o ZUP tenham privilégios de acessar esta parte do sistema.

O grupo pode ser um departamento ou uma secretaria de uma prefeitura, dentro do grupo é necessário adicionar os usuários para que os mesmos possam herdar as permissões.

Relacionamos abaixo o que é necessário para que os usuários possam entrar no sistema:
* Cadastrar os usuários;
* Dar o nome ao grupo;
* Adicionar os usuários ao grupo;
* Adicionar as permissões ao grupo;

Após cadastrar os usuários, o passo 2 é acessar a interface de grupos e criar o grupo em si, para isso, siga os passos abaixo:

1. Acesse o painel ZUP;
2. Se você tiver os privilégios necessários, aparecerá **Grupos** no menu lateral;
3. Clique em **Grupos** e a tela com todos os grupos do sistema irá aparecer;
4. Para cadastrar um novo grupo, clique na opção **+ Novo Grupo** localizado ao lado direito superior;
5. Ao clicar, o sistema solicitará o nome, dê o nome que desejar ao grupo;
6. Uma vez que você clicar no botão **Criar Grupo**, o sistema o redirecionará para dentro do grupo.

## Adicionando usuários ao grupo

Para que seus usuários possam ter acesso ao painel com os devidos privilégios, é obrigatório que os usuários sejam vinculados ao grupo. Para isso, você deve acessar a página **Grupos**, localizado no menu lateral do ZUP.

Para adicionar os usuários ao grupo:

1. Localize o grupo que deseja vinculares usuários na lista, utilize a busca caso necessário;
2. Se o grupo não existe, crie um grupo;
3. Ao localizar o grupo, clique sobre o nome para entrar no grupo escolhido;
4. Clique no botão **Adicionar usuários** localizado no lado direito superior;
5. Uma nova interface será aberta, você poderá vincular um ou mais usuários;
6. Utilize a busca ou o filtro por grupo para localizar os usuários que deseja vincular ao grupo;
7. Clique no botão **Adicionar** nos usuários escolhidos;
8. Uma vez que tenha concluído, clique no botão **Salvar usuários**, localizado no lado direito superior;




## Permissões sobre Grupos e Usuários

Para adicionar as permissões listadas abaixo, você deve seguir os seguintes passos:
1. Entre no ZUP;
2. Clique em **Grupos** localizado no menu lateral;
3. Na listagem de grupos, escolha o grupo que você deseja editar as permissões;
4. Ao entrar na página do grupo, clique no botão **Gerenciar permissões** localizado no lado direito superior;

### - Gerenciar todos os usuários
Ao ativar essa opção, será permitido que este grupo possa ver, adicionar e remover todos os usuários dos grupos às quais tem permissão de visualizar.

**Privilégios:**

* Menu "Usuários" será visível no menu lateral;
* Listagem de todos os grupos do sistema estará visível;
* Será possível deletar todos os usuários de qualquer grupo;
* Será possível editar todos os usuários de qualquer grupo;
* Será possível adicionar novos/editar/deletar qualquer usuário do sistema de qualquer grupo;
* Acessar a lista de usuários;
* Buscar usuários na listagem de usuários

**Funcionalidades e botões que não estará presente nesta permissão:**

* Se essa opção não estiver ativa, menu Usuários não deve aparecer no menu lateral;

### - Gerenciar todos os grupos
Selecionada esta opção, o grupo obtém todas as permissões de edições sobre todos os grupos existentes, sobre novos grupos adicionados no futuro, e sobre todos os usuários pertencentes a todos os grupos. Também permite a visualização e edição de dados dos usuários, buscar, deletar e adicionar usuários.

**Privilégios:**
* Menu "Grupos" será visível no menu lateral;
* Menu "Usuários" será visível no menu lateral;
* Dentro do menu "Usuários", será possível visualizar editar de dados dos usuários, * buscar, deletar e adicionar usuários;
* Listagem de todos os grupos do sistema estará visível;
* Será possível deletar todos os grupos do sistema;
* Será possível editar todos os grupos do sistema;
* Será possível adicionar novos grupos;
* Acessar a lista de usuários dentro do grupo:
* Buscar todos os grupos do sistema;
* Botão Adicionar usuários no menu superior direito deverá ser exibido;
* Botão Editar nome do grupo no menu superior direito deverá ser exibido;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Se essa opção não estiver ativa, menu Grupos não deve aparecer no menu lateral;
* Se essa opção não estiver ativa, menu Usuários não deve aparecer no menu lateral;

### - Editar e visualizar o grupo
Permite sobre os grupos selecionados: a visualização e edição de dados dos usuários, buscar, deletar e adicionar usuários. Permite a edição das permissões dos grupos selecionados.

**Privilégios:**
* Menu "Grupos" será visível;
* Menu "Usuários" será visível;
* Dentro do menu "Usuários", será possível visualizar editar de dados dos usuários, buscar, deletar e adicionar usuários apenas dos grupos selecionados;
* Lista de grupos estará visível - apenas grupos selecionados;
* Será possível deletar os grupos - apenas grupos selecionados;
* Será possível editar as permissões dos grupos - apenas grupos selecionados;
* Buscar grupos;
* Acessar a lista de usuários dentro do grupo - apenas grupos selecionados:
* Botão Adicionar usuários no menu superior direito deverá ser exibido;
* Botão Editar nome no menu superior direito deverá ser exibido;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão + Novo Grupo não deve ser exibido;
* Se nenhum grupo é selecionado, o Grupo no menu lateral do ZUP deverá ser ocultado;
* Se nenhum grupo é selecionado, o Usuário no menu lateral do ZUP deverá ser ocultado;

### - Visualizar o grupo
Permite acessar a listagem de grupos selecionados, visualizar quais os usuários estão dentro do grupo. Nesta permissão o usuário não tem permissão de adicionar, deletar ou editar os grupos, usuários e permissões.

**Privilégios:**
* Menu "Grupos" será visível no menu lateral;
* Menu "Usuários" será visível;
* Dentro do menu "Usuários", será possível visualizar os dados dos usuários apenas dos grupos selecionados;
* Na listagem de grupos, deverão ser exibidos os grupos selecionados;
* Acessar a lista de usuários dentro do grupo;
* Buscar grupos;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão + Novo Grupo não deve ser exibido;
* Botão editar grupo na listagem;
* Botão deletar grupo na listagem;
* Botão editar usuário na listagem de usuários não será exibido;
* Botão deletar usuário na listagem de usuários não será exibida;
* Ocultar botão "Gerenciar Permissões", no canto direito superior, na listagem de usuários do grupo;
* Se nenhum grupo é selecionado, o Grupo no menu lateral do ZUP deverá ser ocultado;
* Se nenhum grupo é selecionado, o Usuário no menu lateral do ZUP deverá ser ocultado;
 
