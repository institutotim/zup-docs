---
title: Relatórios
permalink: /knowledge/record/
---


Os relatórios do ZUP permite criar diversas métricas composta, cada uma delas, por um gráfico e um período no tempo (opcional). Com os relatórios criados e disponibilizados para um ou mais grupos no sistema visualizar, será possível extrair informações para diversas áreas/setores que necessitam consultar os dados no sistema.

## Criando um relatório

O relatório do sistema ZUP é composto por gráficos, período de tempo (opcional), título, descrições (opcional) e legenda (opcional). Para acessar a página de relatórios é necessário que o usuário que está acessando esteja em um grupo que possui a permissão Gerenciar Relatórios.
Para entrar nos relatórios, siga os passos abaixo:
1. Entre com o seu **login** no painel;
2. Menu esquerdo, clique em **Relatórios**;
3. Uma listagem de relatórios já criados será exibida;
4. Do lado direito superior, clique no botão **+ Novo Relatório**;
5. Uma página se abrirá para você iniciar a construção do seu relatório.

Na página de construção do relatório, você pode:
* Adicionar um título ao relatório;
* Adicionar uma descrição do relatório;
* Adicionar um período padrão do relatório;
* Adicionar o título do gráfico;
* Adicionar um período para o gráfico;
* Adicionar uma descrição do gráfico;
* Pode ser adicionado um ou mais gráficos.

### - Período
O período é a fotografia/estado dos relatos em um determinado período. Existe o período padrão para o relatório inteiro e é opcional, se selecionado o período é automaticamente adicionado ao período dos gráficos que forem criados, mas é possível alterar para cada gráfico específico.

### - Editar ou excluir um gráfico
Para editar ou excluir um gráfico, você deve entrar no relatório que criou e passar o mouse em cima do gráfico escolhido e clicar no botão.

## Tipos de gráficos disponíveis

Os relatórios do ZUP possui 4 tipos de gráficos que poderá ser configurado com a métrica disponível no sistema, veja abaixo os tipos de gráficos:

### - Gráficos de coluna
Indicam, geralmente, um dado quantitativo sobre diferentes variáveis, lugares ou setores e não dependem de proporções. Os gráficos de colunas são uma boa forma de ver uma ou mais categorias de dados, especialmente se cada categoria tiver subcategorias. Esses gráficos permitem que você expresse visualmente a diferença entre os pontos de dados de cada categoria.

### - Gráficos em pizza
É um tipo de gráfico, também muito utilizado, indicado para expressar uma relação de proporcionalidade, em que todos os dados somados compõem o todo de um dado aspecto da realidade. Um gráfico de pizza permite a visualização de dados como "fatias de pizza", ou porções de um todo.

### - Gráficos de linhas
O gráfico de linha é utilizado para demonstrar uma sequência numérica de certo dado ao longo do tempo. É indicado para demonstrar evoluções (ou regressões) que ocorrem em sequência para que o comportamento dos fenômenos e suas transformações sejam observados.

### - Gráfico de área
Da mesma forma que um gráfico de linhas, um gráfico de área acompanha uma ou mais séries de dados graficamente e é especialmente útil para expressar alterações de valor entre categorias de dados.



## Métricas disponíveis

Os gráficos são compostos por uma métrica que deve ser selecionado no momento de criar o gráfico.

### - Total de relatos criados por categoria
Esta métrica exibirá o número total de relatos criados no sistema nas categorias de relato que foram selecionadas.

### - Total de relatos por estado
Esta métrica exibirá o número total de relatos criados no sistema separando-os pelo estado do relato (ex.: Em Aberto, Em Análise Técnica, Concluído, etc.) nas categorias de relato que foram selecionadas.

### - Total de relatos atrasados por categoria
Esta métrica exibirá os relatos que entraram em atraso por categoria de relato baseado nas quais foram selecionadas durante a criação do gráfico.

### - Total de relatos atrasados por quantidade de dias em atraso
Será exibido o total de relatos atrasados por categoria de relato baseado nas quais foram selecionadas durante a criação do gráfico, além de trazer a informação da média dos dias que estão em atraso da categoria selecionada.

### - Total de relatos delegados por categoria
Esta métrica carece de informações, em breve este texto será substituído pela explicação de como funciona esta métrica.

### - Total de relatos que foram associados, por grupo
O objetivo desta métrica é exibir no gráfico o nome dos grupos que foram associados pelo sistema ou por alguém. Cada número do gráfico corresponderá a quantidade total de relatos que foram associados ao grupo.

### - Total de relatos que não foram delegados a nenhum usuário
Essa métrica exibirá o total de relatos, das categorias selecionadas que não foram associados a nenhum usuário do grupo responsável.

### - Média de tempo de resolução por categoria
O gráfico que tiver esta métrica irá exibir as categorias de relato com o tempo médio. O tempo calculado pelo sistema leva em consideração o período de dias que um relato ficou entre o estado inicial ao final, por exemplo, pode-se ter um estado inicial chamado **Em Aberto**, outros estados como **Em Andamento, Em Análise Técnica, etc.** e por fim um ou mais estados finais, como **Resolvido, Improcedente**, etc. Ao entrar no estado final como **Resolvido**, o relato é finalizado, então o sistema calcula o tempo que se levou do estado **"Em Aberto" até "Resolvido"**. Esta métrica exibirá o tempo médio da resolução de todos os relatos juntos, por categoria.

### - Média de tempo de resolução por grupo associado
Esta métrica irá exibir o tempo médio que cada grupo levou para resolver os relatos de todas as categorias de relatos que foram selecionadas. Caso seja necessário separar por tipos de relatos, você poderá criar dentro de um mesmo relatório vários gráficos com a mesma métrica e selecionar categorias diferentes.

### - Média de atraso por categoria
Esta métrica exibirá a média dos relatos que entraram em atraso, no gráfico será exibida cada categoria de relato. O cálculo do atraso será calculado pelo sistema se a funcionalidade estiver ativa na categoria de relato, chamada: "Tempo de resolução do relato"

> **Exemplo**: Se no "Tempo de resolução do relato" foi cadastrado 5 dias, quando um relato entrar no sistema, o sistema inicia a contagem. Ao passar dos 5 dias, se nenhum usuário do sistema alterou para algum estado que seja o final (ex.: Finalizado, Improcedente, Concluído, etc.), o sistema automaticamente colocará o relato em atraso.

### - Média de tempo de atraso por grupo
Esta métrica exibirá a média dos grupos que deixaram os relatos entraram em atraso nas categorias de relato selecionadas. O cálculo do atraso será calculado pelo sistema se a funcionalidade estiver ativada na categoria de relato, chamada: "Tempo de resolução do relato".

> **Exemplo**: Se no **"Tempo de resolução do relato"** foi cadastrado 5 dias, quando um relato entrar no sistema, o sistema inicia a contagem. Ao passar dos 5 dias, se nenhum usuário do sistema alterou para algum estado que seja o final (ex.: Finalizado, Improcedente, Concluído, etc.), o sistema automaticamente colocará o relato em atraso.

## Acessando um relatório

O acesso ao relatório depende se o usuário está em um grupo que tem um dos seguintes permissionamentos:
* Gerenciar relatórios: criar, excluir e visualizar todos os relatórios do sistema;
* Visualizar relatórios: visualizar relatórios específicos.

Se o usuário possui uma das permissões, siga os passos abaixo:
1. Entre com o seu **login** no painel;
2. Menu esquerdo, clique em **Relatórios**;
3. Uma listagem de relatórios já criados será exibida;
4. Escolha o relatório desejado.

Ao entrar no relatório, poderá ser visualizado todos os gráficos criados, ao passar o mouse em cima de cada gráfico, será exibido o número referente a métrica utilizada no gráfico e topo direito superior existe alguns botões de ações:
* Editar Relatório (este botão só irá aparecer se você tiver a permissão para "Gerenciar relatórios");
* Exportar em XLS;
* Imprimir.
