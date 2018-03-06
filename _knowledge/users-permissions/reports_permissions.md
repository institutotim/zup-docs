---
title: Permissões de relato
permalink: /knowledge/reports_permissions/
---

Para adicionar as permissões listadas abaixo, você deve seguir os seguintes passos:
1. Entre no ZUP;
2. Clique em Grupos localizado no menu lateral;
3. Na listagem de grupos, escolha o grupo que você deseja editar as permissões;
4. Ao entrar na página do grupo, clique no botão Gerenciar permissões localizado no lado direito superior.

### - Gerenciar todas as categorias
Selecionada esta opção, o grupo obtém todas as permissões de edição sobre todas as categorias de relato existentes, sobre novas categorias adicionadas no futuro, e sobre todos os relatos criados pertencentes a todas as categorias. Também permite a visualização e edição de dados dos relatos, buscar, deletar e adicionar relatos.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Usuários desta permissão poderão ver todos os relatos criados para todas as categorias;
* Usuários desta permissão poderão editar e deletar todos os relatos criados para as categorias;
* Usuários terão acesso aos detalhes dos relatos criados;
* Botão + Novo Relato será exibido na interface;
* Botão "Gerenciar Categorias" ficará visível no canto direito superior;
  * Botão 'deletar' e 'editar' estará ativo na listagem de categorias;
* Na listagem de "Gerenciar Categorias", o botão "+ Nova Categoria" será exibido.

### - Editar as categorias
Permite sobre as categorias selecionadas: a visualização e edição de dados dos relatos, buscar, deletar e adicionar relatos. Permite a edição dos parâmetros das categorias selecionadas.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Botão "Gerenciar Categorias" ficará visível no canto direito superior;
  * Será possível deletar apenas as categorias de relato selecionadas;
  * Será possível editar apenas as categorias de relato selecionadas;
* Usuários desta permissão poderão ver todos os relatos criados para as categorias selecionadas;
* Usuários desta permissão poderão editar e deletar todos os relatos criados para as categorias selecionadas;
* Usuários terão acesso aos detalhes dos relatos criados.

**Funcionalidades e botões que não estará presente nesta permissão:**
* Na listagem de "Gerenciar Categorias", o botão "+ Nova Categoria" não deve ser exibido;
* Dentro da interface "Gerenciar Categoria" o sistema não exibirá outras categorias de relato, apenas as selecionadas;
* Na listagem de relatos não será exibido relatos de outras categorias, apenas das categorias selecionadas.

### - Remover relatos
Permite visualizar e deletar os relatos das categorias selecionadas.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Usuários desta permissão poderão ver todos os relatos criados para as categorias selecionadas;
* Usuários poderão visualizar os detalhes de todos os relatos do sistema para as categorias selecionadas;
* Usuários poderão visualizar a listagem de relatos do sistema para as categorias selecionadas;
* Usuários desta permissão poderão excluir os relatos das categorias de relato selecionadas
* O botão de deletar na listagem será exibido;
* O botão de deletar dentro do relato em si será exibido;
* Ao ativar Remover relatos, a permissão Visualizar relatos deve ser adicionada.

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão "Gerenciar Categoria" não ficará visível no canto direito superior;
* Botão "Editar" não ficará visível na listagem de relatos
* Botões de "Editar" campos dentro dos relatos não devem aparecer:
  * Alterar status do chamado;
  * Alterar endereço do chamado;
  * Alterar a categoria de relato;
  * Alterar descrição;
  * Alterar Referência.

### - Editar relatos

Permite visualizar e editar os relatos das categorias selecionadas.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Usuários desta permissão poderão ver todos os relatos criados para as categorias selecionadas;
* Usuários poderão visualizar os detalhes de todos os relatos do sistema para as categorias selecionadas;
* Usuários poderão visualizar a listagem de relatos do sistema para as categorias selecionadas;
* Usuários desta permissão poderão editar os relatos das categorias de relato selecionadas:
* Será exibido o botão de editar na listagem;
* Será exibido o botão de editar dentro do relato em si;
* Usuário pode editar status do chamado;
* Usuário pode editar endereço do chamado;
* Usuário pode editar a categoria de relato;
* Usuário pode editar a descrição;
* Usuário pode editar a referência;
* Ao ativar Editar relatos, a permissão Visualizar relatos será adicionada;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão "Gerenciar Categoria" não ficará visível no canto direito superior;
* Botão "Excluir" não ficará visível na listagem de relatos;
* Botão "Excluir" não ficará visível no canto direito superior dentro do relato;

### - Criar novos relatos
Permite que os usuários do painel possam adicionar novos relatos para as categorias selecionadas

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Botão + Novo Relato ficará visível no lado direito superior da página;
* Usuário tem acesso a interface de adicionar novos relatos;
* No select list para selecionar a categoria, ao adicionar um novo relato, o usuário só poderá ver aqueles que ele tem permissão de visualizar;
* Usuários deste grupo poderão ver todos os relatos que ele próprio criou para as categorias selecionadas;
* Usuários poderão visualizar os detalhes de todos os relatos que ele próprio criou do sistema para as categorias selecionadas;
* Usuários poderão visualizar a listagem de relatos do sistema para as categorias selecionadas.

**Funcionalidades e botões que não estarão presente nesta permissão:**
* Botão "Gerenciar Categoria" não ficará visível no canto direito superior;
* Botão "Excluir" não ficará visível na listagem de relatos;
* Botão "Excluir" não ficará visível no canto direito superior dentro do relato;
* Botão "Editar" não ficará visível na listagem de relatos.

### - Visualizar relatos parciais
A visualização de relato parcial é uma permissão que restringe o acesso às informações do relato, isto é, os usuários do grupo não poderão visualizar as observações internas, as respostas enviadas ao munícipe no modo privado, o protocolo e os dados do munícipe. Os usuários enxergarão todas as demais informações da tela.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Usuários deste grupo poderão ver todos os relatos criados para as categorias selecionadas;
* Usuários poderão visualizar os detalhes de todos os relatos do sistema;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão "Gerenciar Categoria" não ficará visível no canto direito superior;
* Botão "Excluir" não ficará visível na listagem de relatos
* Botão "Excluir" não ficará visível no canto direito superior dentro do relato
* Botão "Editar" não ficará visível na listagem de relatos
* Não pode ver Protocolo
* Observações Internas
* Resposta ao munícipe privada
* Dados do munícipe
* Botões de "Editar" campos dos relatos não devem aparecer:
* Não será possível alterar o status do chamado;
* Não será possível alterar o endereço do chamado;
* Não será possível alterar a categoria de relato;
* Não será possível alterar a descrição;
* Não será possível alterar a Referência;
* Não será possível alterar ou adicionar comentários;
* Não será possível alterar ou adicionar observações internas;

### - Visualizar relatos completo
Permite a visualização completa de todos os campos disponíveis nos relatos das categorias selecionadas.

**Privilégios:**
* Menu "Relatos" ficará visível no menu lateral;
* Usuários deste grupo poderão ver todos os relatos criados para as categorias selecionadas;
* Usuários poderão visualizar os detalhes de todos os relatos do sistema;

**Funcionalidades e botões que não estará presente nesta permissão:**
* Botão "Gerenciar Categoria" não ficará visível no canto direito superior;
* Botão "Excluir" não ficará visível na listagem de relatos
* Botão "Excluir" não ficará visível no canto direito superior dentro do relato
* Botão "Editar" não ficará visível na listagem de relatos
* Botões de "Editar" campos dos relatos não devem aparecer:
* Não será possível alterar o status do chamado;
* Não será possível alterar o endereço do chamado;
* Não será possível alterar a categoria de relato;
* Não será possível alterar a descrição;
* Não será possível alterar a referencia;
* Não será possível alterar ou adicionar comentários;
* Não será possível alterar ou adicionar observações internas;
