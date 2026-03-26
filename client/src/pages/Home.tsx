import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, BookOpen, Zap, AlertCircle, Code2, GraduationCap } from 'lucide-react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Abrir Vista de Elevação',
      duration: '5 min',
      difficulty: 'Fácil',
      description: 'Acesse a vista de elevação através do Project Browser',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-01-project-browser-TuC3rdhWFyqv6X3ZNJKqH9.webp',
      shortcuts: ['Alt + P', 'Duplo clique'],
      content: `
        1. Localize o Project Browser no lado esquerdo
        2. Expanda Views (all) > Elevations (Building Elevation)
        3. Dê duplo clique em South Elevation
      `
    },
    {
      id: 2,
      title: 'Renomear Level 1 para Térreo',
      duration: '3 min',
      difficulty: 'Fácil',
      description: 'Substitua o nome genérico por um nome descritivo',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-03-rename-level-j88MNpEZvdgrbygn5NyiWV.webp',
      shortcuts: ['F2', 'Enter'],
      content: `
        1. Clique no texto "Level 1" na vista de elevação
        2. Digite "Térreo"
        3. Pressione Enter
        4. Confirme clicando "Yes" na caixa de diálogo
      `
    },
    {
      id: 3,
      title: 'Renomear e Ajustar Level 2',
      duration: '5 min',
      difficulty: 'Fácil',
      description: 'Configure o nível de cobertura com elevação de 2.80m',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-02-elevation-view-WTFTL6Yp7R4kGErY4Z8HtZ.webp',
      shortcuts: ['Duplo clique na cota'],
      content: `
        1. Clique no texto "Level 2"
        2. Digite "Cobertura"
        3. Pressione Enter e confirme
        4. Duplo clique na cota de altura
        5. Altere para 2.80m
      `
    },
    {
      id: 4,
      title: 'Criar Eixos Verticais',
      duration: '10 min',
      difficulty: 'Médio',
      description: 'Estabeleça a malha estrutural vertical (A, B, C)',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-04-floor-plan-2tBRFoGZbJgxvVzYPDGanK.webp',
      shortcuts: ['G', 'Architecture > Datum > Grid'],
      content: `
        1. Abra a planta baixa do Térreo
        2. Vá para Architecture > Datum > Grid
        3. Desenhe 3 linhas verticais espaçadas em 5.00m
        4. Renomeie para A, B, C
      `
    },
    {
      id: 5,
      title: 'Criar Eixos Horizontais',
      duration: '10 min',
      difficulty: 'Médio',
      description: 'Configure os eixos horizontais (1, 2, 3, 4)',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-04-floor-plan-2tBRFoGZbJgxvVzYPDGanK.webp',
      shortcuts: ['G', 'Tab para alternar modo'],
      content: `
        1. Com a ferramenta Grid ativa
        2. Desenhe 4 linhas horizontais
        3. Espaçamento: 8.00m, 5.00m, 10.00m
        4. Renomeie para 1, 2, 3, 4
      `
    },
    {
      id: 6,
      title: 'Configurar Propriedades dos Eixos',
      duration: '5 min',
      difficulty: 'Médio',
      description: 'Ajuste as propriedades avançadas dos eixos',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-05-grid-properties-UVYeqFHhVv7cEiV4Jp9vjC.webp',
      shortcuts: ['Clique no eixo > Properties'],
      content: `
        1. Clique em um eixo para selecioná-lo
        2. Abra o painel Properties (direita)
        3. Explore: Name, Offset, Extent
        4. Configure Bubble Location e outros parâmetros
      `
    },
    {
      id: 7,
      title: 'Importar DWG (Opcional)',
      duration: '10 min',
      difficulty: 'Avançado',
      description: 'Importe um arquivo CAD como referência',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-04-floor-plan-2tBRFoGZbJgxvVzYPDGanK.webp',
      shortcuts: ['Insert > Link CAD'],
      content: `
        1. Vá para Insert > Link CAD
        2. Selecione o arquivo DWG
        3. Configure Colors e Layers
        4. Posicione na origem (0, 0)
      `
    },
    {
      id: 8,
      title: 'Salvar o Projeto',
      duration: '2 min',
      difficulty: 'Fácil',
      description: 'Salve o arquivo com versionamento',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663093060607/9vjX3MNnj7993jcazykmmK/revit-interface-01-project-browser-TuC3rdhWFyqv6X3ZNJKqH9.webp',
      shortcuts: ['Ctrl + S', 'Ctrl + Shift + S'],
      content: `
        1. Pressione Ctrl + S
        2. Nomeie: Residência_Térrea_Aula02_v01
        3. Salve frequentemente
        4. Use versionamento (v01, v02, etc)
      `
    }
  ];

  const exercises = [
    {
      id: 1,
      title: 'Criar um Projeto do Zero',
      time: '30 min',
      level: 'Iniciante',
      description: 'Pratique todos os passos em um novo projeto',
      tasks: [
        'Crie um novo projeto',
        'Configure 2 níveis com nomes descritivos',
        'Crie 4 eixos verticais (A, B, C, D)',
        'Crie 5 eixos horizontais (1, 2, 3, 4, 5)',
        'Salve com versionamento'
      ]
    },
    {
      id: 2,
      title: 'Importar e Referenciar um DWG',
      time: '45 min',
      level: 'Intermediário',
      description: 'Importe um arquivo CAD e alinhe com a malha',
      tasks: [
        'Prepare um arquivo DWG',
        'Importe para o Revit',
        'Alinhe com os eixos',
        'Verifique dimensões',
        'Documente com capturas de tela'
      ]
    },
    {
      id: 3,
      title: 'Criar uma Malha Complexa',
      time: '60 min',
      level: 'Avançado',
      description: 'Crie uma malha para edifício de 4 andares',
      tasks: [
        'Configure 5 eixos verticais e 5 horizontais',
        'Crie 5 níveis com elevações corretas',
        'Configure propriedades avançadas',
        'Visualize em 3D',
        'Exporte uma captura 3D'
      ]
    }
  ];

  const shortcuts = [
    { key: 'Ctrl + S', action: 'Salvar arquivo' },
    { key: 'Ctrl + Z', action: 'Desfazer' },
    { key: 'Ctrl + Y', action: 'Refazer' },
    { key: 'Alt + P', action: 'Abrir/fechar Project Browser' },
    { key: 'G', action: 'Ativar ferramenta Grid' },
    { key: 'Ctrl + 3', action: 'Abrir vista 3D' },
    { key: 'Tab', action: 'Alternar modo de desenho' },
    { key: 'Esc', action: 'Sair do modo atual' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-100 text-green-800';
      case 'Médio': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      case 'Iniciante': return 'bg-blue-100 text-blue-800';
      case 'Intermediário': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Revit 40h</h1>
                <p className="text-lg text-slate-400">Aula 02: Níveis e Eixos</p>
              </div>
            </div>
            <Badge className="bg-blue-600 hover:bg-blue-700">Curso Completo</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
      <section className="mb-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-4">📌 Por que Níveis e Eixos são Essenciais no Revit?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">🏢 Níveis (Levels)</h3>
            <p className="text-base leading-relaxed">
              Os níveis definem os pavimentos e andares do seu projeto. Cada nível representa uma altura específica (como Térreo a 0.00m, Pavimento 1 a 3.50m, etc.). Eles são fundamentais para:
            </p>
            <ul className="text-base mt-3 space-y-2 ml-4">
              <li>✓ Organizar a estrutura vertical do projeto</li>
              <li>✓ Controlar a altura de elementos arquitetônicos</li>
              <li>✓ Facilitar a coordenação entre disciplinas</li>
              <li>✓ Gerar plantas baixas automáticas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">📐 Eixos (Grids)</h3>
            <p className="text-base leading-relaxed">
              Os eixos estabelecem a malha estrutural de referência do projeto. Eles garantem alinhamento preciso entre pilares, vigas e componentes estruturais. São essenciais para:
            </p>
            <ul className="text-base mt-3 space-y-2 ml-4">
              <li>✓ Alinhar elementos estruturais (pilares, vigas)</li>
              <li>✓ Manter coordenação entre disciplinas</li>
              <li>✓ Facilitar a documentação técnica</li>
              <li>✓ Padronizar o projeto</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded">
          <p className="text-base text-slate-200">
            <strong>💡 Dica Profissional:</strong> Níveis e eixos são como o "esqueleto" do seu projeto BIM. Sem eles bem definidos, toda a modelagem fica desorganizada e difícil de coordenar com outras disciplinas. Invista tempo nesta etapa para evitar problemas futuros!
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Configurando Níveis e Eixos de Projeto
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Aprenda a estruturar a base de qualquer projeto BIM. Níveis e eixos são os elementos fundamentais que garantem precisão, coordenação e facilidade na documentação.
            </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Baixar PDF
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">8 passos detalhados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-white text-lg">Atalhos profissionais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <span className="text-white text-lg">3 exercícios práticos</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-400" />
                  <span className="text-white text-lg">Dicas de especialista</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <Tabs defaultValue="steps" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border border-slate-700">
            <TabsTrigger value="steps" className="data-[state=active]:bg-blue-600">
              Passo a Passo
            </TabsTrigger>
            <TabsTrigger value="exercises" className="data-[state=active]:bg-blue-600">
              Exercícios
            </TabsTrigger>
            <TabsTrigger value="shortcuts" className="data-[state=active]:bg-blue-600">
              Atalhos
            </TabsTrigger>
          </TabsList>

          {/* Steps Tab */}
          <TabsContent value="steps" className="space-y-6 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Steps List */}
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <Card
                    key={step.id}
                    className={`cursor-pointer transition-all border-l-4 ${
                      activeStep === index
                        ? 'border-l-blue-500 bg-slate-700/50 border border-slate-600'
                        : 'border-l-slate-600 bg-slate-800/30 border border-slate-700 hover:bg-slate-800/50'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                  <CardTitle className="text-lg text-white">
                    Passo {step.id}: {step.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-400">
                    {step.duration} • {step.difficulty}
                  </CardDescription>
                        </div>
                        <Badge className={getDifficultyColor(step.difficulty)}>
                          {step.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Step Details */}
              <div>
                <Card className="bg-slate-800 border-slate-700 sticky top-24">
                  <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {steps[activeStep].title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {steps[activeStep].description}
                  </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Step Image */}
                    <div className="rounded-lg overflow-hidden border border-slate-700">
                      <img
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Shortcuts */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Atalhos
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {steps[activeStep].shortcuts.map((shortcut, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-200 text-base px-3 py-2">
                            {shortcut}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Instruções</h4>
                      <ol className="space-y-2 text-slate-300 text-base">
                        {steps[activeStep].content
                          .split('\n')
                          .filter(line => line.trim())
                          .map((line, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="font-semibold text-blue-400 flex-shrink-0 text-lg">
                                {idx + 1}.
                              </span>
                              <span className="text-base">{line.replace(/^\d+\.\s*/, '')}</span>
                            </li>
                          ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Exercises Tab */}
          <TabsContent value="exercises" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {exercises.map((exercise) => (
                <Card key={exercise.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-white">{exercise.title}</CardTitle>
                      <Badge className={`${getDifficultyColor(exercise.level)} text-base`}>
                        {exercise.level}
                      </Badge>
                    </div>
                    <CardDescription className="text-base text-slate-400">
                      ⏱️ {exercise.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 text-base">{exercise.description}</p>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Tarefas:</h4>
                      <ul className="space-y-2">
                        {exercise.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-base">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4 text-base py-3">
                      Iniciar Exercício
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Shortcuts Tab */}
          <TabsContent value="shortcuts" className="mt-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Atalhos Profissionais do Revit</CardTitle>
                <CardDescription>
                  Memorize esses atalhos para aumentar sua produtividade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {shortcuts.map((shortcut, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors"
                    >
                      <span className="text-slate-300 text-base">{shortcut.action}</span>
                      <Badge className="bg-blue-600 font-mono text-sm px-3 py-2">
                        {shortcut.key}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Important Notes */}
        <section className="mt-16 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <div className="flex gap-4">
            <AlertCircle className="w-7 h-7 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">⚠️ Importante</h3>
              <p className="text-slate-300 text-lg">
                Salve seu arquivo (Ctrl+S) após cada etapa concluída. Em caso de dúvida, consulte o docente antes de prosseguir. Use versionamento no nome do arquivo para manter histórico de mudanças.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-16 border-t border-slate-700 pt-8">
          <div className="text-center mb-6">
            <p className="text-slate-400 mb-4 text-lg">
              Pronto para começar? Escolha um passo acima e siga as instruções detalhadas.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 text-base px-6 py-3">
                Voltar ao Índice
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-base px-6 py-3">
                Próxima Aula (Aula 03)
              </Button>
            </div>
          </div>
          
          {/* Footer with Professor Info */}
          <div className="mt-12 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-base mb-2">
              Caderno de Tarefas - Revit 40 Horas | Aula 02: Configurando Níveis e Eixos de Projeto
            </p>
            <p className="text-slate-500 text-lg font-semibold">
              Professor: <span className="text-cyan-400">Cleverson Leonardo</span>
            </p>
            <p className="text-slate-600 text-base mt-3">
              © 2026 - Todos os direitos reservados
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
