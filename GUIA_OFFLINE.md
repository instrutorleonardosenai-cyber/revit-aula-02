# 📖 Guia de Uso Offline - Revit 40h Aula 02

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18+) - [Download aqui](https://nodejs.org/)
- **npm** ou **pnpm** (gerenciador de pacotes)

### Passos para Instalação

1. **Extraia o arquivo compactado**
   ```bash
   tar -xzf revit-course-lesson-02.tar.gz
   # ou
   unzip revit-course-lesson-02.zip
   ```

2. **Navegue até a pasta do projeto**
   ```bash
   cd revit-course-lesson-02
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   pnpm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

5. **Acesse no navegador**
   - Abra: `http://localhost:3000`
   - A página estará disponível localmente

### 📁 Estrutura de Pastas

```
revit-course-lesson-02/
├── client/                 # Código frontend (React)
│   ├── src/
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Componente principal
│   │   └── index.css      # Estilos globais
│   ├── index.html         # HTML principal
│   └── public/            # Arquivos estáticos
├── server/                # Código backend (Express)
├── package.json           # Dependências do projeto
└── GUIA_OFFLINE.md        # Este arquivo
```

### 🎨 Conteúdo Disponível

- **Passo a Passo Interativo**: 8 passos detalhados com imagens
- **Exercícios Práticos**: 3 exercícios de diferentes níveis
- **Atalhos Profissionais**: Tabela com 8 atalhos do Revit
- **Documento Completo**: Arquivo Markdown com toda a teoria

### 📝 Arquivo de Conteúdo

O arquivo `lesson-02-content.md` contém todo o conteúdo técnico detalhado:
- Introdução teórica
- Passo a passo completo
- Boas práticas
- Solução de problemas
- Exercícios de treinamento

### 🔧 Troubleshooting

**Problema**: "npm: command not found"
- **Solução**: Instale Node.js em https://nodejs.org/

**Problema**: Porta 3000 já está em uso
- **Solução**: Use `npm run dev -- --port 3001`

**Problema**: Imagens não carregam offline
- **Solução**: As imagens estão hospedadas na nuvem. Para uso totalmente offline, você precisará fazer download delas manualmente.

### 📧 Suporte

Para dúvidas ou problemas, entre em contato com o Professor Cleverson Leonardo.

---
**Versão**: 1.0 | **Data**: 2026 | **Curso**: Revit 40 Horas
