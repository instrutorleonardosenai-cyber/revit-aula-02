# Revit 40 Horas - Aula 02: Configurando Níveis e Eixos de Projeto

## 📚 Introdução

Bem-vindo à **Aula 02** do curso de Revit 40 horas! Nesta aula, você aprenderá a configurar a estrutura fundamental de qualquer projeto BIM: os **níveis** (levels) e os **eixos** (grids). Esses elementos são a base para toda a modelagem que virá a seguir, garantindo precisão, coordenação e facilidade na documentação.

### Por que Níveis e Eixos são Essenciais?

| Elemento | Função | Importância |
|----------|--------|-------------|
| **Níveis** | Definem os andares/pavimentos do projeto | Controla a altura dos elementos; essencial para projetos multi-pavimentos |
| **Eixos** | Estabelecem a malha estrutural de referência | Garante alinhamento de pilares, paredes e componentes estruturais |

Os níveis e eixos funcionam como um **sistema de coordenadas** que permite que toda a equipe de projeto trabalhe de forma sincronizada. Sem eles, seria impossível manter a coerência entre diferentes disciplinas (arquitetura, estrutura, instalações).

---

## 🎯 Objetivo da Aula

Ao final desta aula, você será capaz de:

- ✅ Abrir e navegar vistas de elevação no Revit
- ✅ Renomear níveis com nomenclatura profissional
- ✅ Ajustar elevações de níveis com precisão
- ✅ Criar eixos (grids) verticais e horizontais
- ✅ Configurar propriedades de eixos
- ✅ Importar referências CAD (DWG) como base de projeto
- ✅ Salvar e gerenciar versões do projeto

---

## 📦 Entregável

Ao final desta aula, você terá um **projeto Revit estruturado** com:

- Dois níveis nomeados: **Térreo** (0.00m) e **Cobertura** (2.80m)
- Eixos verticais: **A**, **B**, **C** (espaçamento de 5.00m)
- Eixos horizontais: **1**, **2**, **3**, **4** (espaçamento variável: 8.00m, 5.00m, 10.00m)
- Arquivo salvo e versionado

---

## 💡 Dica do Professor

> **Nomenclatura Profissional:** Em projetos residenciais térreas, use a convenção: **Térreo (0.00m)** para o nível do piso acabado e **Cobertura (2.80m)** para a altura total até o telhado. Isso facilita a comunicação com construtoras e fornecedores.

---

## 🔧 Passo a Passo Detalhado

### Passo 1: Abrir Vista de Elevação

#### Objetivo
Acessar a vista de elevação para visualizar e configurar os níveis do projeto.

#### Procedimento

1. **Localize o Project Browser** no lado esquerdo da tela (se não estiver visível, pressione **Alt + P** ou vá em **View > User Interface > Project Browser**)

2. **Expanda a árvore de navegação:**
   - Clique na seta ao lado de **Views (all)**
   - Clique na seta ao lado de **Elevations (Building Elevation)**

3. **Abra a elevação sul:**
   - Dê **duplo clique** em **South Elevation** (ou clique direito e selecione **Open**)

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **Alt + P** | Abre/fecha Project Browser |
| **Duplo clique** | Abre a vista selecionada |
| **Ctrl + Tab** | Alterna entre vistas abertas |

#### Contextualização Técnica

A **vista de elevação** é uma projeção ortogonal que mostra a altura do projeto. Diferente de uma perspectiva 3D, ela permite editar com precisão os níveis e suas cotas. O Revit cria automaticamente elevações para os quatro lados do projeto (North, South, East, West).

#### O que você verá

Na tela, você verá:
- Uma linha horizontal vermelha representando o **Level 1** (piso térreo)
- Uma segunda linha horizontal representando o **Level 2** (cobertura)
- Cotas verticais mostrando as distâncias entre os níveis
- A geometria do projeto (paredes, portas, janelas) projetada

---

### Passo 2: Renomear Level 1 para "Térreo"

#### Objetivo
Substituir o nome genérico "Level 1" por um nome descritivo que reflita a função do nível.

#### Procedimento

1. **Clique no texto "Level 1"** na vista de elevação (o texto que aparece à esquerda da linha de nível)

2. **Digite o novo nome:** Apague o texto existente e escreva **Térreo**

3. **Pressione Enter** para confirmar

4. **Confirme a renomeação em massa:**
   - Uma caixa de diálogo aparecerá perguntando: *"Rename corresponding views and levels?"*
   - Clique **Yes** para renomear também a planta baixa correspondente

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **F2** | Edita o texto selecionado (em alguns casos) |
| **Enter** | Confirma a edição |
| **Esc** | Cancela a edição |

#### Por que isso importa?

Renomear níveis é uma **prática essencial em BIM**. Nomes descritivos:
- Facilitam a comunicação entre disciplinas
- Evitam confusões em projetos grandes
- Melhoram a legibilidade de documentos
- Permitem filtros e buscas mais eficientes

#### Exemplo de Nomenclatura Profissional

Para um edifício de 5 andares:
- Nível -1: Subsolo
- Nível 0: Térreo
- Nível 1: Pavimento Tipo 1
- Nível 2: Pavimento Tipo 2
- Nível 3: Cobertura

---

### Passo 3: Renomear e Ajustar Level 2 para "Cobertura"

#### Objetivo
Renomear o segundo nível e ajustar sua elevação para 2.80m (altura padrão para residência térrea).

#### Procedimento

1. **Clique no texto "Level 2"** na vista de elevação

2. **Digite o novo nome:** **Cobertura**

3. **Pressione Enter** e confirme a renomeação em massa clicando **Yes**

4. **Ajuste a elevação:**
   - Clique na **cota vertical** que mostra a altura do Level 2
   - Edite o valor para **2.80m** (ou 2800mm, dependendo das unidades do projeto)
   - Pressione Enter para confirmar

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **Duplo clique na cota** | Edita o valor da dimensão |
| **Tab** | Navega entre campos de entrada |

#### Contextualização Técnica

A **elevação do nível** é a altura em relação ao nível de referência (0.00m). Em projetos residenciais:
- Térreo: 0.00m (nível do piso acabado)
- Cobertura: 2.80m (altura padrão de pé-direito de 2.80m)

Essa altura inclui:
- Piso acabado: ~10cm
- Estrutura (laje): ~20cm
- Pé-direito: ~2.50m

#### Possibilidades Avançadas

- **Níveis de referência:** Use níveis com elevações negativas para representar subsolos
- **Níveis estruturais vs. arquitetônicos:** Crie níveis para diferentes disciplinas
- **Fases de construção:** Associe níveis a fases específicas do projeto

---

### Passo 4: Criar Eixos (Grids)

#### Objetivo
Estabelecer a malha estrutural que servirá como referência para toda a modelagem.

#### Procedimento

1. **Acesse a planta baixa do Térreo:**
   - No Project Browser, expanda **Floor Plans**
   - Dê duplo clique em **Térreo** (ou **Floor Plan: Térreo**)

2. **Acesse a ferramenta de eixos:**
   - Vá para o menu **Architecture**
   - Clique em **Datum** (ou procure por **Grid**)
   - Selecione **Grid** (ou **Eixo** em versões em português)

3. **Você está agora no modo de desenho de eixos**
   - O cursor mudará para uma ferramenta de desenho
   - A barra de propriedades mostrará opções para o eixo

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **G** | Atalho rápido para Grid (em algumas versões) |
| **Esc** | Sai do modo de desenho |
| **Tab** | Alterna entre modos de desenho (linha, arco) |

#### Contextualização Técnica

Um **eixo (grid)** no Revit é um elemento de referência que:
- Aparece em todas as vistas (plantas, elevações, 3D)
- Serve como guia para alinhamento de elementos
- Facilita a coordenação estrutural
- Pode ser associado a pilares e vigas

Os eixos são **bidimensionais** em cada vista, mas se comportam como **tridimensionais** no modelo.

---

### Passo 5: Configurar Eixos Verticais (A, B, C)

#### Objetivo
Criar três eixos verticais espaçados em 5.00m cada.

#### Procedimento

1. **Desenhe o primeiro eixo vertical (Eixo A):**
   - Com a ferramenta Grid ativa, clique em um ponto na esquerda da planta
   - Clique em outro ponto diretamente acima (ou abaixo) para criar uma linha vertical
   - Pressione Esc para finalizar o desenho

2. **Renomeie o eixo:**
   - Clique no texto do eixo (que aparece como "Grid 1")
   - Digite **A**
   - Pressione Enter

3. **Desenhe o segundo eixo (Eixo B):**
   - Ative novamente a ferramenta Grid
   - Desenhe uma linha vertical a **5.00m** de distância do Eixo A
   - Renomeie para **B**

4. **Desenhe o terceiro eixo (Eixo C):**
   - Repita o processo, posicionando a **5.00m** do Eixo B
   - Renomeie para **C**

#### Dica Profissional

Para garantir o espaçamento correto:
- Use a **ferramenta de cota** para medir a distância entre eixos
- Ou use o painel de propriedades para definir o **Offset** (deslocamento) do eixo

#### Possibilidades Avançadas

- **Eixos curvos:** O Revit permite criar eixos em arco para projetos com geometria complexa
- **Eixos radiais:** Úteis para projetos circulares ou em leque
- **Extensão de eixos:** Configure a altura dos eixos para que se estendam de um nível a outro

---

### Passo 6: Configurar Eixos Horizontais (1, 2, 3, 4)

#### Objetivo
Criar quatro eixos horizontais com espaçamento variável.

#### Procedimento

1. **Desenhe o primeiro eixo horizontal (Eixo 1):**
   - Ative a ferramenta Grid
   - Desenhe uma linha horizontal na parte inferior da planta
   - Renomeie para **1**

2. **Desenhe o segundo eixo (Eixo 2):**
   - Desenhe uma linha horizontal a **8.00m** de distância do Eixo 1
   - Renomeie para **2**

3. **Desenhe o terceiro eixo (Eixo 3):**
   - Desenhe uma linha horizontal a **5.00m** de distância do Eixo 2
   - Renomeie para **3**

4. **Desenhe o quarto eixo (Eixo 4):**
   - Desenhe uma linha horizontal a **10.00m** de distância do Eixo 3
   - Renomeie para **4**

#### Visualização da Malha

Após concluir, você terá uma malha estrutural assim:

```
     A        B        C
     |        |        |
  +--+--------+--------+--+  1
  |  |        |        |  |
  +--+--------+--------+--+  2 (8.00m do Eixo 1)
  |  |        |        |  |
  +--+--------+--------+--+  3 (5.00m do Eixo 2)
  |  |        |        |  |
  +--+--------+--------+--+  4 (10.00m do Eixo 3)
```

---

### Passo 7: Importar DWG (Opcional)

#### Objetivo
Importar um arquivo CAD como referência ou base para o projeto.

#### Procedimento

1. **Acesse o menu Insert:**
   - Vá para **Insert** > **Link CAD** (ou **Import CAD**)

2. **Selecione o arquivo DWG:**
   - Navegue até a pasta onde o arquivo está armazenado
   - Selecione o arquivo e clique **Open**

3. **Configure a importação:**
   - Na caixa de diálogo, escolha as opções:
     - **Colors:** Mantenha as cores originais ou converta para escala de cinza
     - **Layers:** Importe todas as camadas ou selecione específicas
     - **Positioning:** Escolha **Auto - Center to Center** ou **Manual**

4. **Posicione na origem:**
   - Se escolheu **Manual**, clique no ponto de origem (0, 0) do seu projeto Revit
   - Clique no ponto correspondente no arquivo DWG

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **Ctrl + I** | Abre o diálogo de importação (em algumas versões) |

#### Contextualização Técnica

Importar um DWG permite:
- Usar plantas arquitetônicas existentes como base
- Manter referências de projetos anteriores
- Coordenar com projetos de outras disciplinas
- Rastrear mudanças e versões

#### Diferença entre Link e Import

| Operação | Vantagem | Desvantagem |
|----------|----------|-------------|
| **Link** | Mantém conexão com arquivo original; atualizações automáticas | Arquivo externo necessário |
| **Import** | Incorpora dados ao projeto; não depende de arquivo externo | Não atualiza automaticamente |

---

### Passo 8: Salvar o Projeto

#### Objetivo
Garantir que todas as alterações sejam salvas e o projeto esteja versionado.

#### Procedimento

1. **Salve o arquivo:**
   - Pressione **Ctrl + S** (atalho mais rápido)
   - Ou vá para **File > Save**

2. **Nomeie o arquivo (se for a primeira vez):**
   - Digite um nome descritivo: **Residência_Térrea_Aula02_v01**
   - Escolha a pasta de destino
   - Clique **Save**

3. **Versionamento:**
   - Após mudanças significativas, salve com um novo número de versão
   - Exemplo: **Residência_Térrea_Aula02_v02**, **v03**, etc.

#### Atalhos Úteis

| Atalho | Função |
|--------|--------|
| **Ctrl + S** | Salva o arquivo |
| **Ctrl + Shift + S** | Salva como (Save As) |
| **Ctrl + Z** | Desfaz a última ação |
| **Ctrl + Y** | Refaz a ação desfeita |

#### Boas Práticas de Salvamento

- **Salve frequentemente:** A cada 15-20 minutos
- **Use versionamento:** Mantenha histórico de mudanças
- **Backup automático:** Configure o Revit para fazer backups automáticos
- **Nomes descritivos:** Inclua data, versão e descrição no nome do arquivo

#### Configurar Backup Automático

1. Vá para **File > Options > General**
2. Marque a opção **Save Backup Copy**
3. Defina a frequência (exemplo: a cada 15 minutos)

---

## 🎓 Exercício de Treinamento

### Exercício 1: Criar um Projeto do Zero

**Objetivo:** Praticar todos os passos aprendidos em um novo projeto.

**Instruções:**

1. **Crie um novo projeto:**
   - Vá para **File > New > Project**
   - Selecione um template (ou comece em branco)

2. **Configure os níveis:**
   - Renomeie Level 1 para "Pavimento Térreo"
   - Renomeie Level 2 para "Pavimento Tipo"
   - Ajuste a elevação do Level 2 para 3.20m

3. **Crie os eixos:**
   - Crie 4 eixos verticais (A, B, C, D) com espaçamento de 6.00m
   - Crie 5 eixos horizontais (1, 2, 3, 4, 5) com espaçamento de 4.00m

4. **Salve o projeto:**
   - Nomeie como **Exercício_01_Níveis_Eixos_v01**

**Tempo estimado:** 30 minutos

**Critério de sucesso:**
- ✅ Dois níveis renomeados e com elevações corretas
- ✅ Eixos criados e nomeados corretamente
- ✅ Arquivo salvo com nome descritivo

---

### Exercício 2: Importar e Referenciar um DWG

**Objetivo:** Praticar a importação de arquivos CAD e alinhamento com a malha de eixos.

**Instruções:**

1. **Prepare um arquivo DWG:**
   - Use um arquivo de planta baixa existente (ou crie um simples no AutoCAD)
   - Certifique-se de que tem dimensões reais (em metros)

2. **Importe para o Revit:**
   - Use **Insert > Link CAD**
   - Posicione na origem (0, 0)

3. **Alinhe com os eixos:**
   - Ajuste os eixos para corresponder aos pontos de referência do DWG
   - Use a ferramenta de cota para verificar alinhamento

4. **Documente:**
   - Tire uma captura de tela mostrando o DWG alinhado com os eixos
   - Salve o projeto como **Exercício_02_DWG_Importado_v01**

**Tempo estimado:** 45 minutos

**Critério de sucesso:**
- ✅ DWG importado sem erros
- ✅ Alinhamento visual com os eixos
- ✅ Arquivo salvo com anotações

---

### Exercício 3: Criar uma Malha Complexa

**Objetivo:** Praticar a criação de eixos com espaçamento variável e geometria mais complexa.

**Instruções:**

1. **Crie uma malha estrutural para um edifício de escritórios:**
   - Eixos verticais: A (0m), B (6m), C (12m), D (18m), E (24m)
   - Eixos horizontais: 1 (0m), 2 (8m), 3 (16m), 4 (24m), 5 (32m)

2. **Configure propriedades dos eixos:**
   - Abra o painel de propriedades de um eixo
   - Explore as opções: Name, Offset, Extent, Bubble Location

3. **Crie níveis para um edifício de 4 andares:**
   - Térreo: 0.00m
   - Pavimento 1: 3.50m
   - Pavimento 2: 7.00m
   - Pavimento 3: 10.50m
   - Cobertura: 14.00m

4. **Visualize em 3D:**
   - Pressione **Ctrl + 3** ou vá para **View > 3D View > Default 3D View**
   - Observe como os eixos se estendem através de todos os níveis

**Tempo estimado:** 60 minutos

**Critério de sucesso:**
- ✅ Malha estrutural completa e bem nomeada
- ✅ Todos os níveis configurados
- ✅ Visualização 3D mostrando a estrutura completa

---

## ⚠️ Importante: Boas Práticas e Dicas

### Salvamento Regular

> **Salve seu arquivo (Ctrl+S) após cada etapa concluída.** Em caso de travamento ou erro, você perderá apenas o trabalho desde o último salvamento.

### Nomenclatura Consistente

Use uma convenção de nomenclatura consistente:
- **Níveis:** Português descritivo (Térreo, Pavimento Tipo, Cobertura)
- **Eixos:** Letras (A, B, C...) para verticais; números (1, 2, 3...) para horizontais
- **Projetos:** Nome_Descrição_Data_Versão

### Alinhamento Preciso

- Use a **ferramenta de cota** para verificar distâncias
- Use **Snap** para alinhamento automático (pressione **S** para ativar/desativar)
- Use **Grid Snap** para alinhamento à malha

### Documentação

- Crie uma **legenda de eixos** na planta baixa
- Anote elevações dos níveis em um **schedule**
- Mantenha um **log de versões** do projeto

---

## 🔍 Solução de Problemas

### Problema: Não consigo ver os eixos na planta

**Solução:**
1. Verifique se a camada (layer) dos eixos está visível
2. Vá para **View > Visibility/Graphics > Grids**
3. Certifique-se de que a opção está marcada

### Problema: Os eixos não se alinham com o DWG importado

**Solução:**
1. Verifique as unidades do DWG (metros vs. pés)
2. Use a ferramenta **Align** para alinhar manualmente
3. Considere usar **Link CAD** em vez de **Import CAD** para maior flexibilidade

### Problema: Não consigo renomear um nível

**Solução:**
1. Clique diretamente no **texto do nível** (não na linha)
2. Se aparecer uma caixa de diálogo, clique **Yes** para renomear vistas associadas
3. Se ainda não funcionar, tente clicar com o botão direito e selecionar **Rename**

---

## 📖 Referências e Recursos Adicionais

### Documentação Oficial
- [Autodesk Revit Help - Levels](https://help.autodesk.com/view/RVT/2024/ENU/)
- [Autodesk Revit Help - Grids](https://help.autodesk.com/view/RVT/2024/ENU/)

### Comunidades
- [Revit Forum - Autodesk](https://forums.autodesk.com/t5/revit/ct-p/area-p127)
- [BIM Forum Brasil](https://www.bimforum.com.br/)

### Próxima Aula
Na **Aula 03**, aprenderemos a criar **componentes arquitetônicos** (paredes, portas, janelas) usando a malha de eixos e níveis como base.

---

## ✅ Checklist de Conclusão

Antes de passar para a próxima aula, certifique-se de que você:

- [ ] Abriu uma vista de elevação com sucesso
- [ ] Renomeou os níveis com nomes descritivos
- [ ] Ajustou as elevações dos níveis para valores corretos
- [ ] Criou eixos verticais e horizontais
- [ ] Configurou as propriedades dos eixos
- [ ] (Opcional) Importou um arquivo DWG
- [ ] Salvou o projeto com versionamento
- [ ] Completou pelo menos 2 dos 3 exercícios de treinamento

**Parabéns! Você completou a Aula 02!** 🎉

---

*Caderno de Tarefas - Revit 40 Horas | Aula 02: Configurando Níveis e Eixos de Projeto*
*Última atualização: 2026 | Versão 1.0*
