## Visão geral do repositório

Este repositório é um pequeno curso/template do GitHub "Code with Copilot". A documentação canônica está no `README.md` (cabeçalho do curso, notas do autor e instruções de início). Os exemplos de código ficam em arquivos JavaScript simples como `skills.js`.

Fatos importantes que um agente de IA deve saber antecipadamente:
- Este é um repositório de template/curso (não um aplicativo completo). Mudanças devem preservar os blocos de metadados do curso encontrados no `README.md` (comentários HTML de cabeçalho/rodapé) e manter a estrutura de alto nível intacta.
- Não há package.json, sistema de build ou test runner na raiz do repositório. Trate edições como pequenas mudanças diretas em JS ou Markdown, a menos que o PR descreva a adição de um novo workflow.

## O que editar vs manter inalterado
- Editar: pequenos helpers JS, código de exemplo e texto explicativo no `README.md` para esclarecer os passos do curso.
- Evitar mudar: os comentários de cabeçalho e blocos de notas do autor no `README.md` (eles contêm instruções de templating e da plataforma). Também não substitua a referência à licença MIT no rodapé.

## Padrões de código e exemplos
- Os exemplos JavaScript são mínimos, trechos de arquivo único. Siga a nomenclatura e estilo existentes: nomes descritivos curtos (ex: `CalculateNumbers`) e exemplos com funções como primeiro recurso.
- Exemplo deste repositório: `skills.js` contém funções simples de nível superior. Ao adicionar código, prefira trechos simples sem módulos CommonJS/ES, a menos que a mudança claramente exija módulos.

## Orientação de commits e PRs para agentes de IA
- Mantenha mudanças mínimas e focadas em uma mudança lógica por PR (atualização de documentação, correção de arquivo único ou pequena adição de exemplo).
- Ao expandir o repositório (adicionando workflows, testes ou dependências), inclua uma pequena adição ao README explicando como executá-los localmente e por que foram adicionados.

## Quando adicionar automação (Actions) ou arquivos de pacote
- Adicione GitHub Actions ou `package.json` apenas se o usuário solicitar exemplos executáveis ou testes. Se você adicionar CI, inclua uma seção no README com os comandos exatos para executar o workflow localmente.

## Exemplos de edições úteis
- Melhorar a clareza dos passos de início do curso no `README.md` (preservar blocos de comentários do template).
- Adicionar uma pequena função helper ao `skills.js` e mostrar um exemplo de uso no `README.md`.

## Orientação de merge (se este arquivo já existir)
- Preserve qualquer texto existente que documente workflows específicos do projeto. Faça merge mantendo orientações únicas e não conflitantes, e anexando novas notas específicas do repositório sob um subtítulo claro.

Se algo aqui não estiver claro ou você quiser que o agente siga um estilo diferente (por exemplo, mudar para módulos ES ou adicionar testes), me diga qual convenção preferir e atualizarei este arquivo.
