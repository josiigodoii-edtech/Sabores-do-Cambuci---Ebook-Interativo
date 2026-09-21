import { ConceptNode, ConceptEdge } from '../types';

export const CONCEPT_NODES: ConceptNode[] = [
  {
    id: 'cambuci-core',
    label: 'Cambuci (Campomanesia phaea)',
    category: 'botanica',
    description: 'Fruta nativa brasileira da família Myrtaceae, estritamente endêmica do estado de São Paulo.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'Permanece verde mesmo quando totalmente maduro; diâmetro entre 3 e 6 cm.',
    x: 50,
    y: 50
  },
  {
    id: 'mata-atlantica',
    label: 'Mata Atlântica & Ecologia',
    category: 'botanica',
    description: 'Bioma com menos de 12% de cobertura original onde o cambuci atua como bioindicador de saúde ambiental.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'Raízes contêm erosão em encostas de 600 a 1.200m de altitude.',
    x: 22,
    y: 28
  },
  {
    id: 'fauna-dispersora',
    label: 'Dispersão Silvestre',
    category: 'botanica',
    description: 'Aves nativas como sabiá-laranjeira e bem-te-vi alimentam-se da fruta e disseminam as sementes.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'A árvore depende de insetos polinizadores na primavera para frutificar no verão.',
    x: 12,
    y: 15
  },
  {
    id: 'origem-tupi',
    label: 'Origem Tupi & Pote de Barro',
    category: 'historia',
    description: 'O nome "kambuci" deriva do formato do fruto, semelhante ao pote de argila dos povos originários.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'Usado milenarmente antes da invasão colonial nos planaltos da Serra do Mar.',
    x: 22,
    y: 72
  },
  {
    id: 'bairro-cambuci',
    label: 'Memória Paulistana & Bairro',
    category: 'historia',
    description: 'O bairro Cambuci na cidade de São Paulo homenageia a abundância secular histórica da espécie.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'Árvores margeavam os cursos d\'água da capital antes da urbanização acelerada.',
    x: 10,
    y: 85
  },
  {
    id: 'alto-tiete',
    label: 'Polo do Alto Tietê',
    category: 'socioambiental',
    description: 'Mogi das Cruzes, Biritiba Mirim, Salesópolis e Guararema concentram a maior produção familiar do país.',
    relatedChapterId: 'capitulo-2',
    keyFact: 'Reconhecido como Patrimônio Cultural Imaterial em 2016 em Mogi das Cruzes.',
    x: 50,
    y: 88
  },
  {
    id: 'produtores-familiares',
    label: 'Agricultura Familiar & Sítios',
    category: 'socioambiental',
    description: 'Propriedades de 5 a 30 alqueires onde o cambuci cresce consorciado com banana e palmito.',
    relatedChapterId: 'capitulo-5',
    keyFact: 'Saberes orais transmitidos por gerações leem o ponto da safra pelo aroma e toque.',
    x: 68,
    y: 82
  },
  {
    id: 'quimica-acidez',
    label: 'pH 2,5 - 3,0 & Ácidos Orgânicos',
    category: 'ciencia',
    description: 'Altíssima concentração de ácido cítrico e málico, superando limões convencionais em testes de acidez.',
    relatedChapterId: 'capitulo-1',
    keyFact: 'Atua como acidulante salgado (em vinagretes e tortas) e estabilizador de emulsões.',
    x: 50,
    y: 18
  },
  {
    id: 'pectina-vitaminac',
    label: 'Vitamina C & Pectina Natural',
    category: 'ciencia',
    description: 'Rico em antioxidantes fenólicos e pectina solúvel na casca e sementes.',
    relatedChapterId: 'capitulo-3',
    keyFact: 'Permite criar geleias consistentes com apenas 2 ingredientes (fruta + mel), sem aditivos.',
    x: 75,
    y: 20
  },
  {
    id: 'harmonizacao-laticinios',
    label: 'Efeito Tampão em Laticínios',
    category: 'culinaria',
    description: 'Gorduras e caseínas do leite suavizam a percepção da acidez criando texturas aveludadas.',
    relatedChapterId: 'capitulo-3',
    keyFact: 'Base para o brigadeiro autoral, mousse sem gelatina e molhos cremosos.',
    x: 78,
    y: 42
  },
  {
    id: 'aproveitamento-casca',
    label: 'Casca Integral & Farinha Seca',
    category: 'culinaria',
    description: 'A casca concentra aromas florais e óleos essenciais únicos. Não é amarga!',
    relatedChapterId: 'capitulo-3',
    keyFact: 'Desidratada a 60°C e moída vira farinha amarelo-esverdeada para panificação artesanal.',
    x: 85,
    y: 60
  },
  {
    id: 'caderno-receitas',
    label: '13 Receitas ETEC / KAMU-SI',
    category: 'culinaria',
    description: 'Caderno gastronômico testado cientificamente pelo curso de Nutrição e Dietética.',
    relatedChapterId: 'capitulo-4',
    keyFact: 'Do clássico pudim com calda dourada à torta de costela marinada e vinagrete cru.',
    x: 72,
    y: 66
  }
];

export const CONCEPT_EDGES: ConceptEdge[] = [
  { source: 'cambuci-core', target: 'mata-atlantica', label: 'Endemismo nativo' },
  { source: 'mata-atlantica', target: 'fauna-dispersora', label: 'Cadeia trófica' },
  { source: 'cambuci-core', target: 'origem-tupi', label: 'Etimologia e pote' },
  { source: 'origem-tupi', target: 'bairro-cambuci', label: 'Memória espacial' },
  { source: 'cambuci-core', target: 'alto-tiete', label: 'Território produtivo' },
  { source: 'alto-tiete', target: 'produtores-familiares', label: 'Guardiões agroecológicos' },
  { source: 'cambuci-core', target: 'quimica-acidez', label: 'Perfil molecular' },
  { source: 'quimica-acidez', target: 'pectina-vitaminac', label: 'Compostos funcionais' },
  { source: 'quimica-acidez', target: 'harmonizacao-laticinios', label: 'Reação molecular' },
  { source: 'cambuci-core', target: 'aproveitamento-casca', label: 'Aproveitamento total' },
  { source: 'aproveitamento-casca', target: 'caderno-receitas', label: 'Aplicações didáticas' },
  { source: 'harmonizacao-laticinios', target: 'caderno-receitas', label: 'Mousses & brigadeiros' },
  { source: 'produtores-familiares', target: 'caderno-receitas', label: 'Ingrediente direto da roça' }
];
