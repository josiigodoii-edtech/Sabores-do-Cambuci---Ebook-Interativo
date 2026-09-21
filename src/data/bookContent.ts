import { Chapter, Recipe } from '../types';

export const BOOK_METADATA = {
  title: 'Sabores do Cambuci',
  subtitle: 'Uma experiência de descoberta pela culinária nativa brasileira',
  authors: 'Irmãs KAMU-SI',
  researchers: [
    'Jaqueline Ap. dos Santos',
    'Roseléa Ap. de Santana Fernandes',
    'Tatiane Monteiro de Godoi'
  ],
  institution: 'ETEC Presidente Vargas · Curso Técnico em Nutrição e Dietética',
  location: 'Mogi das Cruzes, Alto Tietê · São Paulo · Brasil',
  year: '2026',
  epigraph: 'Cozinhar é um ato de conhecimento. Conhecer o cambuci é um ato de preservação. Que este livro seja os dois.'
};

export const RECIPES_DATA: Recipe[] = [
  {
    id: 'macarrao-molho-cambuci',
    title: 'Macarrão com molho de cambuci',
    subtitle: 'Massa envolvida em molho cremoso aveludado e perfumado com a acidez natural e marcante do cambuci.',
    prepTime: '20 minutos',
    cookTimeMinutes: 20,
    yield: '4 porções',
    defaultServings: 4,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Vinho branco leve ou água aromatizada com ervas frescas',
    tags: ['Prato Principal', 'Molho Aveludado', '20 Minutos', 'Testado em Laboratório'],
    ingredients: [
      { item: 'Macarrão ninho', amount: 500, unit: 'g' },
      { item: 'Creme de leite', amount: 200, unit: 'g' },
      { item: 'Cambuci', amount: 40, unit: 'g', note: '1 unidade' },
      { item: 'Alho', amount: 1, unit: 'dente' },
      { item: 'Cheiro-verde', amount: 50, unit: 'g' },
      { item: 'Azeite', amount: 12, unit: 'g' },
      { item: 'Sal', note: 'A gosto' }
    ],
    steps: [
      'Cozinhe o macarrão em água fervente com sal até ficar al dente. Escorra e reserve.',
      'Bata no liquidificador o creme de leite, o alho, o cambuci (sem casca) e o cheiro-verde.',
      'Transfira o molho batido para uma panela em fogo baixo, mexendo até encorpar.',
      'Misture o molho quente ao macarrão cozido e sirva imediatamente.'
    ],
    tip: 'Para equilibrar a acidez, adicione o cambuci aos poucos até atingir a intensidade de sabor desejada.',
    curiosity: 'A acidez natural do cambuci atua cortando a untuosidade do creme de leite, conferindo frescor e leveza ao prato.'
  },
  {
    id: 'vinagrete-cambuci',
    title: 'Vinagrete de cambuci',
    subtitle: 'Vinagrete fresco e colorido onde a acidez viva e perfumada do cambuci substitui com distinção o vinagre comum.',
    prepTime: '15 minutos',
    cookTimeMinutes: 15,
    yield: '6 porções',
    defaultServings: 6,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Carnes grelhadas, peixes assados ou torradas artesanais',
    tags: ['Entrada Fresca', 'Sem Fogão', 'Cítrico & Crocante', '15 Minutos'],
    ingredients: [
      { item: 'Tomate', amount: 240, unit: 'g', note: '3 unidades' },
      { item: 'Pepino', amount: 130, unit: 'g', note: '1 unidade' },
      { item: 'Cambuci', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Cebola', amount: 60, unit: 'g', note: '1 unidade' },
      { item: 'Cheiro-verde', amount: 50, unit: 'g' },
      { item: 'Limão', amount: 30, unit: 'g', note: '1 unidade' },
      { item: 'Azeite', amount: 12, unit: 'g' },
      { item: 'Sal', note: 'A gosto' }
    ],
    steps: [
      'Lave bem todos os vegetais e o cambuci.',
      'Pique o tomate, o pepino, o cambuci e a cebola em cubos pequenos e uniformes.',
      'Pique o cheiro-verde finamente.',
      'Em uma tigela, junte todos os ingredientes picados e tempere com o limão, o azeite e o sal.',
      'Misture delicadamente e deixe descansar na geladeira por 15 minutos antes de servir.'
    ],
    tip: 'Sirva gelado. O descanso na geladeira permite que os sabores dos vegetais e a acidez do cambuci se integrem perfeitamente.',
    curiosity: 'O pH naturalmente ácido do cambuci (em torno de 2,7) faz dele um substituto perfeito para o vinagre tradicional em saladas.'
  },
  {
    id: 'torta-vegetariana-cambuci',
    title: 'Torta vegetariana',
    subtitle: 'Massa leve com tofu e recheio farto de legumes variados enriquecidos pela acidez única do cambuci.',
    prepTime: '50 minutos',
    cookTimeMinutes: 50,
    yield: '10 fatias',
    defaultServings: 10,
    category: 'salgado',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Salada de folhas verdes frescas e chá gelado',
    tags: ['Vegetariano', 'Massa de Tofu', 'Forno', 'Nutritivo'],
    ingredients: [
      { section: 'Massa', item: 'Leite de soja', amount: 360, unit: 'g', note: '2 xícaras' },
      { section: 'Massa', item: 'Óleo', amount: 180, unit: 'g', note: '1 xícara' },
      { section: 'Massa', item: 'Farinha de trigo', amount: 360, unit: 'g', note: '2 xícaras' },
      { section: 'Massa', item: 'Tofu', amount: 180, unit: 'g', note: '1 xícara' },
      { section: 'Massa', item: 'Amido de milho', amount: 20, unit: 'g' },
      { section: 'Massa', item: 'Fermento em pó', amount: 20, unit: 'g' },
      { section: 'Recheio', item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Recheio', item: 'Vagem', amount: 60, unit: 'g' },
      { section: 'Recheio', item: 'Mandioquinha', amount: 60, unit: 'g' },
      { section: 'Recheio', item: 'Cenoura', amount: 60, unit: 'g' },
      { section: 'Recheio', item: 'Tomate', amount: 160, unit: 'g' },
      { section: 'Recheio', item: 'Cebola', amount: 70, unit: 'g' },
      { section: 'Recheio', item: 'Pimentão', amount: 80, unit: 'g' },
      { section: 'Recheio', item: 'Repolho', amount: 40, unit: 'g' },
      { section: 'Recheio', item: 'Sal', note: 'A gosto' }
    ],
    steps: [
      'Preaqueça o forno a 180 °C e unte uma assadeira.',
      'Bata no liquidificador os ingredientes da massa (leite de soja, óleo, tofu, farinha de trigo, amido de milho e fermento em pó).',
      'Pique todos os legumes do recheio e o cambuci em pedaços pequenos e tempere com sal.',
      'Despeje metade da massa na assadeira untada, distribua todo o recheio e cubra com a massa restante.',
      'Leve ao forno por aproximadamente 35 a 40 minutos até dourar a superfície.'
    ],
    tip: 'Aguarde a torta amornar antes de fatiar para que as fatias fiquem bem firmes e estruturadas.',
    curiosity: 'O tofu na massa confere proteínas e textura macia, enquanto o cambuci no recheio realça o sabor doce natural da cenoura e mandioquinha.'
  },
  {
    id: 'torta-costela-cambuci',
    title: 'Torta de costela',
    subtitle: 'Costela desfiada e legumes em harmonia com o toque cítrico do cambuci, coberta por massa fofa dourada.',
    prepTime: '50 minutos',
    cookTimeMinutes: 50,
    yield: '10 porções',
    defaultServings: 10,
    category: 'salgado',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Vinho tinto seco ou suco natural gelado',
    tags: ['Recheio Suculento', 'Costela Desfiada', 'Forno', 'Almoço em Família'],
    ingredients: [
      { section: 'Massa', item: 'Leite', amount: 360, unit: 'g' },
      { section: 'Massa', item: 'Óleo', amount: 180, unit: 'g' },
      { section: 'Massa', item: 'Farinha de trigo', amount: 360, unit: 'g' },
      { section: 'Massa', item: 'Ovo', amount: 120, unit: 'g', note: '3 unidades' },
      { section: 'Massa', item: 'Amido de milho', amount: 20, unit: 'g' },
      { section: 'Massa', item: 'Fermento em pó', amount: 20, unit: 'g' },
      { section: 'Recheio', item: 'Costela', amount: 150, unit: 'g' },
      { section: 'Recheio', item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Recheio', item: 'Cenoura', amount: 60, unit: 'g' },
      { section: 'Recheio', item: 'Tomate', amount: 80, unit: 'g' },
      { section: 'Recheio', item: 'Cebola', amount: 70, unit: 'g' },
      { section: 'Recheio', item: 'Pimentão', amount: 80, unit: 'g' },
      { section: 'Recheio', item: 'Berinjela', amount: 120, unit: 'g' },
      { section: 'Recheio', item: 'Vagem', amount: 50, unit: 'g' },
      { section: 'Recheio', item: 'Coentro', amount: 30, unit: 'g' },
      { section: 'Recheio', item: 'Sal', note: 'A gosto' }
    ],
    steps: [
      'Preaqueça o forno a 180 °C e unte uma assadeira grande.',
      'Bata no liquidificador o leite, o óleo, os ovos, a farinha de trigo, o amido de milho e o fermento em pó até ficar homogêneo.',
      'Misture a costela desfiada com o cambuci picado, cenoura, tomate, cebola, pimentão, berinjela, vagem, coentro e sal.',
      'Disponha metade da massa na assadeira, espalhe o recheio de costela com legumes e cubra com o restante da massa.',
      'Asse por cerca de 40 minutos até dourar e firmar.'
    ],
    tip: 'A costela já deve estar previamente cozida e bem desfiada para garantir maciez em cada mordida.',
    curiosity: 'Na culinária caipira tradicional paulista, a combinação de carnes nobres com frutas ácidas regionais é consagrada pelo equilíbrio entre gordura e acidez.'
  },
  {
    id: 'antepasto-berinjela-cambuci',
    title: 'Antepasto de berinjela',
    subtitle: 'Berinjela refogada com pimentões, azeitonas e o toque perfumado e cítrico do cambuci fresco.',
    prepTime: '25 minutos',
    cookTimeMinutes: 25,
    yield: '350 g',
    defaultServings: 6,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Pães artesanais, torradas rústicas ou queijos de meia cura',
    tags: ['Entrada', 'Aperitivo', 'Conservas', 'Prático'],
    ingredients: [
      { item: 'Berinjela', amount: 120, unit: 'g', note: '1 unidade' },
      { item: 'Pimentão verde', amount: 80, unit: 'g', note: '1 unidade' },
      { item: 'Pimentão vermelho', amount: 80, unit: 'g', note: '1 unidade' },
      { item: 'Cebola', amount: 70, unit: 'g', note: '1 unidade' },
      { item: 'Alho', amount: 6, unit: 'g', note: '2 dentes' },
      { item: 'Cambuci', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Azeitona', amount: 100, unit: 'g' },
      { item: 'Azeite', note: 'A gosto' },
      { item: 'Coentro', note: 'A gosto' },
      { item: 'Sal', note: 'A gosto' }
    ],
    steps: [
      'Corte a berinjela, os pimentões, a cebola e o cambuci em cubos pequenos.',
      'Pique o alho em lâminas finas.',
      'Em uma panela com azeite, refogue o alho e a cebola até dourarem suavemente.',
      'Acrescente a berinjela e os pimentões, refogando até amolecerem.',
      'Adicione o cambuci picado, as azeitonas picadas, o coentro e o sal.',
      'Cozinhe por mais alguns minutos mexendo sempre. Deixe esfriar e sirva.'
    ],
    tip: 'Pode ser consumido morno ou gelado. Conserva-se muito bem na geladeira em recipiente com tampa por vários dias.',
    curiosity: 'O cambuci agrega notas florais aromáticas ao clássico antepasto de origem italiana.'
  },
  {
    id: 'suco-cambuci',
    title: 'Suco de cambuci',
    subtitle: 'Refresco puro e vibrante preparado com o fruto integral, conservando todos os óleos essenciais da casca verde.',
    prepTime: '10 minutos',
    cookTimeMinutes: 10,
    yield: '1,4 litros',
    defaultServings: 5,
    category: 'bebida',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Excelente para dias ensolarados com cubos de gelo',
    tags: ['Super Refrescante', 'Rico em Vitamina C', 'Casca Integral', '10 Minutos'],
    ingredients: [
      { item: 'Água', amount: 1200, unit: 'ml' },
      { item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar', amount: 120, unit: 'g', note: '6 colheres de sopa' }
    ],
    steps: [
      'Lave bem os cambucis em água corrente.',
      'Coloque no liquidificador a água, os cambucis picados com a casca e o açúcar.',
      'Bata por cerca de 1 minuto em velocidade alta até triturar bem.',
      'Coe com uma peneira e sirva bem gelado.'
    ],
    tip: 'Ajuste o açúcar conforme sua preferência. A casca do cambuci não amarga e concentra aromas cítricos especiais.',
    curiosity: 'Ao contrário de muitas frutas cítricas em que a casca é descartada, a casca do cambuci é comestível e riquíssima em vitamina C.'
  },
  {
    id: 'vitamina-cambuci',
    title: 'Vitamina de cambuci',
    subtitle: 'Bebida aveludada e encorpada onde o leite amacia as notas ácidas da fruta em uma textura cremosa.',
    prepTime: '10 minutos',
    cookTimeMinutes: 10,
    yield: '1,25 litros',
    defaultServings: 4,
    category: 'bebida',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Café da manhã nutritivo acompanhado de pão artesanal',
    tags: ['Bebida Nutritiva', 'Café da Manhã', 'Textura Aveludada', 'Fácil'],
    ingredients: [
      { item: 'Água', amount: 1000, unit: 'ml' },
      { item: 'Leite em pó', amount: 80, unit: 'g', note: '4 colheres de sopa' },
      { item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar', amount: 80, unit: 'g', note: '4 colheres de sopa' }
    ],
    steps: [
      'Higienize os cambucis e corte-os em pedaços com a casca.',
      'Coloque no liquidificador a água, o leite em pó, o cambuci e o açúcar.',
      'Bata em potência alta por 2 minutos até formar uma vitamina homogênea e cremosa.',
      'Sirva imediatamente em copos compridos.'
    ],
    tip: 'Bata com água bem gelada para uma bebida refrescante e encorpada.',
    curiosity: 'As proteínas do leite reagem sensorialmente com os ácidos da fruta, criando uma sensação aveludada sem talhar a preparação.'
  },
  {
    id: 'pao-cambuci',
    title: 'Pão de cambuci',
    subtitle: 'Pão artesanal de fermentação biológica com casca crocante e miolo enriquecido com farinha da casca do cambuci.',
    prepTime: '5 horas (com fermentação)',
    cookTimeMinutes: 300,
    yield: '10 pães',
    defaultServings: 10,
    category: 'panificacao',
    difficulty: 'Elaborado',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Manteiga da fazenda, queijo curado ou geleia de cambuci',
    tags: ['Panificação Artesanal', 'Fermentação Biológica', 'Farinha de Cambuci', 'Tradição'],
    ingredients: [
      { item: 'Farinha de trigo', amount: 700, unit: 'g' },
      { item: 'Farinha de cambuci', amount: 200, unit: 'g' },
      { item: 'Água morna', amount: 400, unit: 'ml' },
      { item: 'Fermento biológico', amount: 10, unit: 'g' },
      { item: 'Ovos', amount: 2, unit: 'unidades' },
      { item: 'Óleo', amount: 50, unit: 'ml' },
      { item: 'Açúcar', amount: 4, unit: 'colheres de sopa' },
      { item: 'Sal', amount: 1, unit: 'colher rasa' }
    ],
    steps: [
      'Dissolva o fermento biológico na água morna com o açúcar.',
      'Em uma tigela ampla, junte a farinha de trigo, a farinha de cambuci e o sal.',
      'Adicione os ovos, o óleo e a mistura do fermento líquido.',
      'Sove a massa vigorosamente até ficar lisa, elástica e homogênea.',
      'Deixe a massa descansar coberta por cerca de 4 horas para fermentar.',
      'Modele os pães, disponha em assadeira polvilhada e asse em forno médio (200 °C) até dourar.'
    ],
    tip: 'A farinha de cambuci pode ser obtida secando as cascas da fruta e triturando-as finamente.',
    curiosity: 'O aproveitamento integral da fruta na panificação é uma técnica sustentável que agrega fibras e aromas terrosos à massa.'
  },
  {
    id: 'pudim-cambuci',
    title: 'Pudim de cambuci',
    subtitle: 'Pudim clássico assado em banho-maria com textura sedosa e contraste perfeito entre calda de caramelo e acidez frutada.',
    prepTime: '50 minutos (+ geladeira)',
    cookTimeMinutes: 50,
    yield: '10 fatias',
    defaultServings: 10,
    category: 'doce',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Café passado na hora ou licor suave',
    tags: ['Sobremesa Clássica', 'Calda de Caramelo', 'Banho-Maria', 'Derrete na Boca'],
    ingredients: [
      { section: 'Pudim', item: 'Leite em pó', amount: 120, unit: 'g', note: '1 xícara' },
      { section: 'Pudim', item: 'Açúcar', amount: 120, unit: 'g', note: '1 xícara' },
      { section: 'Pudim', item: 'Ovos', amount: 160, unit: 'g', note: '4 unidades' },
      { section: 'Pudim', item: 'Leite', amount: 240, unit: 'ml', note: '2 xícaras' },
      { section: 'Pudim', item: 'Água', amount: 240, unit: 'ml', note: '2 xícaras' },
      { section: 'Pudim', item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Calda', item: 'Açúcar', amount: 40, unit: 'g', note: '2 colheres' }
    ],
    steps: [
      'Caramelize uma forma de pudim com furo central derretendo o açúcar da calda em fogo brando.',
      'No liquidificador, bata o leite em pó, o açúcar, os ovos, o leite, a água e o cambuci (sem casca) até obter um creme liso.',
      'Despeje o creme na forma caramelizada.',
      'Asse em banho-maria em forno pré-aquecido a 200 °C por aproximadamente 45 minutos.',
      'Espere esfriar completamente e leve à geladeira por algumas horas antes de desenformar.'
    ],
    tip: 'Desenforme o pudim somente quando estiver bem gelado para evitar que rache ou quebre.',
    curiosity: 'O cambuci equilibra o dulçor tradicional do pudim com uma leveza aromática inigualável.'
  },
  {
    id: 'geleia-cambuci-mel',
    title: 'Geleia de cambuci com mel',
    subtitle: 'Apenas dois ingredientes nobres: cambuci cozido lentamente com mel puro de abelha, sem conservantes ou gelatinas.',
    prepTime: '45 minutos',
    cookTimeMinutes: 45,
    yield: '385 g',
    defaultServings: 8,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Torradas de brioche, queijos frescos ou colheradas sobre iogurtes',
    tags: ['Apenas 2 Ingredientes', 'Pectina Natural', 'Zero Conservantes', '100% Artesanal'],
    ingredients: [
      { item: 'Cambuci', amount: 500, unit: 'g', note: '10 unidades' },
      { item: 'Mel', amount: 400, unit: 'g' }
    ],
    steps: [
      'Retire as cascas e as sementes dos cambucis e pique a polpa em pedaços.',
      'Coloque a polpa picada e o mel em uma panela de fundo espesso.',
      'Cozinhe em fogo baixo, mexendo periodicamente por cerca de 45 minutos.',
      'Quando a mistura ganhar consistência brilhante e espessa de geleia, retire do fogo.',
      'Armazene ainda quente em vidros limpos e esterilizados com tampa.'
    ],
    tip: 'Não precisa adicionar água nem pectina artificial: o próprio cambuci libera sumo abundante e pectina natural durante o cozimento.',
    curiosity: 'A alta concentração de pectina natural da fruta é suficiente para gelificar a geleia na presença dos açúcares do mel.'
  },
  {
    id: 'bolo-cambuci',
    title: 'Bolo de cambuci',
    subtitle: 'Bolo fofo e dourado preparado no liquidificador, com massa úmida e perfume cítrico inconfundível.',
    prepTime: '40 minutos',
    cookTimeMinutes: 40,
    yield: '10 fatias',
    defaultServings: 10,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Café coado fresco no lanche da tarde',
    tags: ['Bolo Caseiro', 'Massa Macia', 'Prático', 'Café da Tarde'],
    ingredients: [
      { item: 'Ovos', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar', amount: 180, unit: 'g', note: '1 xícara' },
      { item: 'Óleo', amount: 90, unit: 'g', note: '½ xícara' },
      { item: 'Cambuci', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Água', amount: 240, unit: 'ml' },
      { item: 'Farinha de trigo', amount: 380, unit: 'g', note: '2 xícaras' },
      { item: 'Fermento em pó', amount: 20, unit: 'g', note: '1 colher de sopa' }
    ],
    steps: [
      'Preaqueça o forno a 180 °C e unte uma forma redonda com furo central.',
      'Bata na batedeira ou liquidificador os ovos, o açúcar e o óleo até formar um creme.',
      'Bata o cambuci com a água no liquidificador e adicione à mistura.',
      'Acrescente a farinha de trigo aos poucos, misturando delicadamente.',
      'Incorpore o fermento em pó por último.',
      'Despeje na forma untada e asse por 30 a 35 minutos até dourar e passar no teste do palito.'
    ],
    tip: 'Peneirar a farinha de trigo antes de misturar confere uma aeração superior à massa do bolo.',
    curiosity: 'O teor de acidez da fruta ajuda a quebrar cadeias de amido, garantindo um miolo excepcionalmente úmido e macio.'
  },
  {
    id: 'brigadeiro-cambuci',
    title: 'Brigadeiro de cambuci',
    subtitle: 'Docinho de festa cremoso onde a doçura do leite condensado encontra o contraste vibrante do cambuci.',
    prepTime: '25 minutos',
    cookTimeMinutes: 25,
    yield: '9 unidades',
    defaultServings: 9,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Café espresso ou água mineral',
    tags: ['Docinho de Festa', 'Autoral', 'Leite Condensado', 'Fácil'],
    ingredients: [
      { item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Leite condensado', amount: 395, unit: 'g', note: '1 lata' },
      { item: 'Manteiga', amount: 20, unit: 'g', note: '1 colher de sopa' },
      { item: 'Água', amount: 25, unit: 'ml' },
      { item: 'Açúcar', note: 'Para enrolar' }
    ],
    steps: [
      'Bata no liquidificador o cambuci (sem casca) com a água até virar uma polpa líquida.',
      'Em uma panela, junte o leite condensado, a manteiga e a polpa de cambuci batida.',
      'Cozinhe em fogo médio-baixo, mexendo continuamente até a massa soltar do fundo da panela.',
      'Transfira para um prato untado e espere esfriar por completo.',
      'Unte as mãos, enrole as bolinhas de brigadeiro e passe no açúcar para finalizar.'
    ],
    tip: 'Cozinhe com espátula de silicone mexendo bem o fundo e as laterais para não grudar.',
    curiosity: 'O clássico doce brasileiro ganha uma versão sofisticada graças ao perfil aromático adstringente e cítrico da fruta da mata.'
  },
  {
    id: 'mousse-cambuci',
    title: 'Mousse de cambuci',
    subtitle: 'Mousse sedosa de apenas 2 ingredientes que firma naturalmente graças à reação biológica da fruta com o leite.',
    prepTime: '20 minutos (+ geladeira)',
    cookTimeMinutes: 20,
    yield: '3 porções',
    defaultServings: 3,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Sobremesa refrescante após refeições salgadas',
    tags: ['Apenas 2 Ingredientes', 'Sem Gelatina', 'Emulsão Natural', 'Cremoso'],
    ingredients: [
      { item: 'Cambuci', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Leite condensado', amount: 395, unit: 'g', note: '1 lata' }
    ],
    steps: [
      'Retire a casca e as sementes do cambuci.',
      'Coloque no liquidificador a polpa do cambuci e o leite condensado.',
      'Bata em velocidade máxima por cerca de 2 a 3 minutos até obter uma emulsão bem densa e homogênea.',
      'Distribua em taças individuais ou travessa.',
      'Leve à geladeira por pelo menos 2 horas antes de servir.'
    ],
    tip: 'Sirva bem gelado. Quanto mais tempo na geladeira, mais firme e agradável fica a consistência da mousse.',
    curiosity: 'Com apenas dois ingredientes e sem adicionar gelatina, o ácido natural do cambuci reage com as proteínas do leite condensado, firmando a sobremesa.'
  }
];

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 'apresentacao',
    number: 0,
    title: 'Apresentação',
    subtitle: 'Há frutas que carregam um lugar dentro delas.',
    readTimeMinutes: 3,
    sections: [
      {
        id: 'intro-lugar',
        title: 'O Cambuci é uma Delas',
        content: [
          'Pequeno, de casca verde e polpa esbranquiçada, com aquele sabor que oscila entre o ácido e o adstringente — e que surpreende quem não o conhece —, o cambuci (Campomanesia phaea) cresce nos remanescentes de Mata Atlântica do interior paulista como se soubesse exatamente onde pertence.',
          'Não migrou para outras regiões. Não se adaptou a outras paisagens. Ficou aqui.',
          'Este livro nasceu desse pertencimento. Nasceu do desejo de apresentar uma fruta pouco conhecida fora do seu território de origem — e de mostrar que conhecer o cambuci é, também, conhecer um pedaço da história alimentar do Brasil. Da memória dos quintais. Das feiras de bairro no Alto Tietê. Das cozinhas que guardam saberes que nenhum manual de gastronomia registrou.'
        ],
        callout: {
          type: 'quote',
          title: 'Um Convite das Irmãs KAMU-SI',
          text: 'As Irmãs KAMU-SI não escreveram um livro de receitas. Escreveram um convite: para que o leitor se aproxime dessa fruta pela porta que mais acolhe: a cozinha.'
        }
      },
      {
        id: 'intro-proposito',
        title: 'Cozinhar é Preservar',
        content: [
          'Para que experimente, erre, ajuste, coma. Para que depois se pergunte de onde ela vem, quem a cultiva, o que seria da Mata Atlântica sem as espécies que ainda resistem nela. Para que sinta, ao provar um brigadeiro de cambuci ou um antepasto agridoce, que há cultura ali — não apenas sabor.',
          'Cada receita deste livro foi testada com atenção e documentada com honestidade. As fotografias e testes são reais. Os resultados, também. Nenhuma preparação foi incluída apenas para impressionar: todas existem para ser feitas, repetidas e compartilhadas.',
          'Ao longo dos módulos, você vai encontrar informações sobre a fruta, seu ciclo, seu território, seus produtores, além de dicas de preparo e armazenamento.'
        ],
        callout: {
          type: 'tip',
          title: 'Princípio Norteador',
          text: 'Cozinhar é um ato de conhecimento. Conhecer o cambuci é um ato de preservação. Que este livro seja os dois.'
        }
      }
    ],
    quizId: 'quiz-apresentacao'
  },
  {
    id: 'capitulo-1',
    number: 1,
    title: 'Capítulo 1: Conhecendo o Cambuci',
    subtitle: 'Campomanesia phaea (O.Berg) Landrum · Família Myrtaceae',
    readTimeMinutes: 5,
    sections: [
      {
        id: 'cap1-origem',
        title: 'Origem & Ancestralidade',
        content: [
          'O cambuci existe no Brasil muito antes do Brasil ter esse nome.',
          'Seus registros mais antigos na literatura científica remontam ao século XIX, mas sua presença nas matas e nos quintais do interior paulista é anterior a qualquer catalogação colonial. Os povos originários que habitavam a região da Serra do Mar e do Alto Tietê já conheciam e colhiam a fruta.',
          'O próprio nome vem do tupi "kambuci", que pesquisadores associam à forma arredondada e achatada do fruto, semelhante a um pequeno pote de barro indígena utilizado para armazenar água e fermentados.',
          'A Campomanesia phaea pertence à família Myrtaceae, a mesma das goiabas, jabuticabas e pitangas. Uma família brasileira por excelência. Dentro dessa árvore genealógica botânica, o cambuci ocupa um galho particular: é estritamente endêmico do estado de São Paulo, o que significa que não ocorre espontaneamente em nenhum outro bioma do planeta.'
        ],
        callout: {
          type: 'alert',
          title: 'Responsabilidade Ecológica',
          text: 'Essa exclusividade não é mero detalhe biológico: é uma enorme responsabilidade de conservação para com o patrimônio vegetal do planeta.'
        }
      },
      {
        id: 'cap1-fruto-arvore',
        title: 'O Fruto & A Árvore',
        content: [
          'O fruto maduro mede entre 3 e 6 cm de diâmetro. Sua casca é perenemente verde — mesmo no ápice da maturação, ela não fica amarela ou vermelha, o que costuma desorientar quem a colhe pela primeira vez.',
          'A polpa é esbranquiçada, úmida, levemente fibrosa, pontilhada de pequenas sementes delicadas. Seu aroma é inconfundível: uma explosão floral com notas cítricas profundas. Seu paladar revela uma acidez limpa e adstringência singular que abre as papilas gustativas instantaneamente.',
          'O cambucizeiro atinge entre 6 e 12 metros de altura em ambiente silvestre. Suas folhas são opostas verde-escuras, e as flores alvas desabrocham perfumadas na primavera.',
          'De crescimento paciente, prefere solos úmidos e bem drenados em altitudes entre 600 e 1.200 metros — características que a Serra do Mar e o planalto do Alto Tietê ofertam com maestria.'
        ],
        callout: {
          type: 'field-note',
          title: 'Nota de Campo: A Safra Curta',
          text: 'O cambuci tem janela de colheita breve: amadurece entre dezembro e março, com pico em janeiro e fevereiro. Quem mora na região sabe: o cambuci tem hora marcada e ensina a esperar o tempo da terra.'
        }
      },
      {
        id: 'cap1-mata-atlantica',
        title: 'Importância para a Mata Atlântica & Nutrição',
        content: [
          'Restam atualmente menos de 12% da cobertura florestal original da Mata Atlântica. Cada espécie nativa preservada é um santuário de vida.',
          'Aves como o sabiá-laranjeira e o bem-te-vi alimentam-se do cambuci e dispersam suas sementes na mata. Insetos polinizadores frequentam suas flores em profusão, e raízes densas contêm a erosão de encostas íngremes.',
          'A árvore é um bioindicador ecológico refinado: onde o cambucizeiro floresce vigoroso, sabe-se que o ar e as águas da mata mantêm sua saúde.',
          'Nutricionalmente, o cambuci é uma fortaleza: altíssima concentração de vitamina C, fibras dietéticas e compostos fenólicos com potente capacidade antioxidante. Seus ácidos cítrico e málico naturais (com pH entre 2,5 e 3,0) superam com frequência a acidez do limão comercial.'
        ],
        callout: {
          type: 'curiosity',
          title: 'Curiosidade Urbana: Bairro Cambuci',
          text: 'O célebre bairro Cambuci, na capital paulista, herdou seu nome dos extensos cambucizais que margeavam os córregos da cidade antes do avanço do asfalto.'
        }
      }
    ],
    quizId: 'quiz-capitulo-1'
  },
  {
    id: 'capitulo-2',
    number: 2,
    title: 'Capítulo 2: Muito além de uma fruta',
    subtitle: 'Patrimônio Alimentar, Território e Biodiversidade',
    readTimeMinutes: 4,
    sections: [
      {
        id: 'cap2-patrimonio',
        title: 'Patrimônio Cultural Imaterial',
        content: [
          'O conceito de patrimônio alimentar engloba não apenas a matéria orgânica, mas os modos de fazer, a identidade regional e a memória afetiva de uma comunidade.',
          'Ao contrário de frutas domesticadas para o monocultivo global (como caju, maracujá ou açaí industrial), o cambuci manteve sua integridade silvestre. Sua produção preserva a escala artesanal, familiar e comunitária.',
          'Em 2016, a fruta do cambuci foi oficialmente tombada como Patrimônio Cultural Imaterial do município de Mogi das Cruzes, garantindo fomento à preservação desse elo biológico e cultural.'
        ],
        callout: {
          type: 'tip',
          title: 'Integridade Genética',
          text: 'O cambuci nunca foi submetido a alterações genéticas agroindustriais. Seu sabor hoje é exatamente o mesmo que os indígenas degustavam séculos atrás.'
        }
      },
      {
        id: 'cap2-economia-ecologia',
        title: 'Economia Familiar e Agroecologia',
        content: [
          'A maior concentração de árvores cultivadas reside no Alto Tietê: Mogi das Cruzes, Biritiba Mirim, Salesópolis e Guararema.',
          'Os produtores operam pequenas propriedades rurais de subsistência (sítios de 5 a 30 alqueires), consorciando o cambuci com banana, palmito pupunha e verduras frescas.',
          'Ao comprar derivados de cambuci de procedência rastreada, você remunera diretamente as famílias guardiãs da floresta e estimula o plantio ex situ de uma árvore classificada como vulnerável à extinção em diversas listagens estaduais.'
        ],
        callout: {
          type: 'quote',
          title: 'Voto no Prato',
          text: 'Cada fruta consumida com consciência é um argumento vivo contra o desaparecimento de uma espécie.'
        }
      }
    ],
    quizId: 'quiz-capitulo-2'
  },
  {
    id: 'capitulo-3',
    number: 3,
    title: 'Capítulo 3: Na Cozinha',
    subtitle: 'Ciência dos Sabores, Armazenamento e Técnicas de Preparo',
    readTimeMinutes: 5,
    sections: [
      {
        id: 'cap3-selecao-conserva',
        title: 'Como Escolher & Armazenar',
        content: [
          'Como o cambuci não muda de cor ao amadurecer, esqueça o critério visual clássico das prateleiras. O melhor termômetro é o olfato: quando pronto, ele exala um perfume floral inebriante e cítrico.',
          'O toque deve ser firme, sem manchas escuras ou consistência mole. Frutos com 4 a 5 cm de diâmetro costumam ser os mais equilibrados em fibra e suco.',
          'In natura, consome-se em até 3 a 5 dias em temperatura ambiente ou 10 dias refrigerado (sempre sem lavar antes de guardar para não reter umidade).',
          'Para estender a safra o ano todo, bata a polpa no liquidificador com mínimo de água e congele em porções: resiste por até 12 meses mantendo acidez e notas aromáticas. A farinha feita com as cascas desidratadas dura até 6 meses em pote hermético escuro.'
        ],
        callout: {
          type: 'tip',
          title: 'Dica de Chef: Água e Sal',
          text: 'Para atenuar a acidez cortante em preparos crus, deixe as fatias descascadas repousarem em água com uma pitada de sal por 10 minutos. O sódio equilibra a percepção papilar sem adulterar a complexidade do sabor.'
        }
      },
      {
        id: 'cap3-quimica-paleta',
        title: 'A Paleta Sensorial & Harmonizações',
        content: [
          'O perfil gustativo do cambuci combina: Ácido · Adstringente · Cítrico · Floral · Levemente amargo · Persistente.',
          'Possui o que a enologia e gastronomia intitulam de "finish longo": sua memória residual no palato permanece por minutos após a degustação.',
          'Harmoniza divinamente com:',
          '• Laticínios: A gordura e as proteínas de queijos, creme de leite e leite agem como tampão molecular para a acidez pontiaguda.',
          '• Mel Silvestre: O açúcar invertido e o buquê floral do mel casam perfeitamente com a adstringência da polpa.',
          '• Carnes Gordurosas: O ácido cítrico corta a untuosidade de costelas, pernis e copas-lombo.',
          '• Chocolate Amargo (70%+): Contraste suntuoso entre os flavonoides amargos do cacau e a vivacidade da fruta.',
          '• Ervas Frescas: Coentro, cheiro-verde, tomilho e manjericão ampliam a dimensão herbal da casca.'
        ],
        callout: {
          type: 'nutrition',
          title: 'Com Casca vs Sem Casca',
          text: 'Com casca: concentre nos sucos, vitaminas e farinhas onde os óleos essenciais aromáticos são bem-vindos. Sem casca: reserve para mousses, geleias e molhos acetinados.'
        }
      }
    ],
    quizId: 'quiz-capitulo-3'
  },
  {
    id: 'capitulo-4',
    number: 4,
    title: 'Capítulo 4: Caderno de Receitas',
    subtitle: '13 Criações Testadas: do Salgado ao Doce, do Simples ao Nobre',
    readTimeMinutes: 7,
    sections: [
      {
        id: 'cap4-intro-receitas',
        title: 'O Laboratório da Cozinha Nativa',
        content: [
          'As treze receitas reunidas foram elaboradas e documentadas com rigor técnico nos laboratórios de Nutrição e Dietética da ETEC Presidente Vargas.',
          'Elas demonstram como um fruto endêmico de alta acidez pode atuar tanto como acidulante salgado (substituindo o vinagre ou o tamarindo) quanto como protagonista de sobremesas cremosas onde a pectina e os ácidos geram emulsões naturais dispensando espessantes químicos artificiais.'
        ],
        callout: {
          type: 'tip',
          title: 'Modo Interativo',
          text: 'Utilize o dimensionador de porções abaixo de cada receita para recalcular automaticamente as gramaturas conforme o número de convidados.'
        }
      }
    ],
    recipes: RECIPES_DATA,
    quizId: 'quiz-capitulo-4'
  },
  {
    id: 'capitulo-5',
    number: 5,
    title: 'Capítulo 5: Produtores e Iniciativas',
    subtitle: 'Vozes da Terra, Redes de Apoio e a Marca KAMU-SI',
    readTimeMinutes: 4,
    sections: [
      {
        id: 'cap5-guardioes',
        title: 'Os Guardiões do Alto Tietê',
        content: [
          'O cambuci que alcança sua mesa nasce no trabalho silente de agricultores em Biritiba Mirim, Salesópolis e Guararema.',
          'São famílias que compreendem a maturidade pelo toque e pelo faro, que leem os voos das aves para estimar o início da safra e mantêm um saber transmitido oralmente de geração para geração.',
          'Iniciativas de peso fortalecem esse ecossistema:',
          '• Festival do Cambuci de Mogi das Cruzes: celebração cultural e gastronômica regional anual.',
          '• Pesquisa Universitária: estudos comprobatórios de flavonoides e ação funcional da fruta em universidades paulistas.',
          '• Gastronomia Autoral: chefs renomados trazendo o ingrediente para pratos contemporâneos de vanguarda.'
        ],
        callout: {
          type: 'tip',
          title: 'Significado do Nome KAMU-SI',
          text: 'O nome celebra a fruta e agrega o sufixo -si, em honra às raízes linguísticas e cosmovisão tupi-guarani da serra paulista.'
        }
      },
      {
        id: 'cap5-encerramento',
        title: 'Encerramento: Uma Semente Plantada',
        content: [
          'Ao concluir a navegação deste ebook, o cambuci deixa de ser uma fruta anônima.',
          'Você agora compreende que ela permanece verde quando madura. Que tem nome indígena. Que floresce nas névoas da Serra do Mar e precisa das aves para se multiplicar.',
          'Cozinhar é também uma forma de lembrar. E lembrar é a forma mais perene de preservar.'
        ],
        callout: {
          type: 'quote',
          title: 'Palavra das Autoras',
          text: 'Da próxima vez que encontrar uma fruta verde estranha e aromática em uma feira, pare, cheire, e leve para casa. Há uma história centenária viva ali dentro.'
        }
      }
    ],
    quizId: 'quiz-capitulo-5'
  }
];
