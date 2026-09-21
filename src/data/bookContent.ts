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
    subtitle: 'Um molho branco sedoso com acidez cítrica viva: o cambuci transforma o clássico fettuccine em uma experiência gastronômica memorável.',
    prepTime: '20 minutos',
    cookTimeMinutes: 20,
    yield: '4 porções',
    defaultServings: 4,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Vinho Branco Sauvignon Blanc ou Chardonnay amanteigado · Parmesão Reggiano ralado na hora',
    tags: ['Prato Principal', 'Molho Aveludado', '20 Minutos', 'Favorito do Chef'],
    ingredients: [
      { item: 'Macarrão ninho', amount: 500, unit: 'g' },
      { item: 'Creme de leite fresco ou lata', amount: 200, unit: 'g' },
      { item: 'Cambuci fresco (sem casca)', amount: 40, unit: 'g', note: 'Aproximadamente 1 unidade madura' },
      { item: 'Alho laminado', amount: 1, unit: 'dente' },
      { item: 'Cheiro-verde bem fresco', amount: 50, unit: 'g' },
      { item: 'Azeite de oliva extravirgem', amount: 12, unit: 'g' },
      { item: 'Parmesão, mix de temperos e flor de sal', note: 'A gosto' }
    ],
    steps: [
      'Ferva 2 litros de água abundante com sal e cozinhe o macarrão até atingir o ponto al dente perfeito. Escorra e reserve.',
      'No liquidificador, bata o creme de leite, o dente de alho, o cambuci (sem casca) e o cheiro-verde até obter um molho verde-claro aveludado e homogêneo.',
      'Transfira o molho para uma frigideira em fogo baixo, mexendo com frequência, até encorpar suavemente — cerca de 5 a 7 minutos.',
      'Junte a massa ainda quente ao molho, envolva cada fio com delicadeza e sirva fumegante.'
    ],
    tip: 'Sirva com queijo parmesão ralado na hora. A gordura do queijo equilibra a acidez do cambuci e arredonda o sabor do molho.',
    curiosity: 'A acidez do cambuci age como o limão em um molho alla piccata: ela corta a gordura do creme de leite e traz vivacidade ao prato. Por isso, comece com menos fruta e ajuste ao seu gosto.'
  },
  {
    id: 'vinagrete-cambuci',
    title: 'Vinagrete de cambuci',
    subtitle: 'Crocante, ultra colorido e energizante. O cambuci substitui o vinagre industrial com suprema elegância aromática.',
    prepTime: '15 minutos',
    cookTimeMinutes: 15,
    yield: '6 porções',
    defaultServings: 6,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Pão de fermentação natural tostado · Churrasco caipira · Peixe grelhado na brasa',
    tags: ['Entrada Fresca', 'Sem Fogão', 'Vegano', 'Crocante & Cítrico'],
    ingredients: [
      { item: 'Tomates maduros e firmes', amount: 240, unit: 'g', note: '3 unidades' },
      { item: 'Pepino japonês crocante', amount: 130, unit: 'g', note: '1 unidade' },
      { item: 'Cambuci descascado em cubinhos', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Cebola roxa picadinha', amount: 60, unit: 'g', note: '1 unidade' },
      { item: 'Cheiro-verde picadinho', amount: 50, unit: 'g' },
      { item: 'Suco de limão taiti', amount: 30, unit: 'g', note: '1 unidade' },
      { item: 'Azeite de oliva extravirgem', amount: 12, unit: 'g' },
      { item: 'Flor de sal e pimenta moída', note: 'A gosto' }
    ],
    steps: [
      'Lave todos os legumes frescos em água corrente abundante.',
      'Corte o tomate, o pepino, o cambuci e a cebola em cubos pequenos e uniformes (brunoise de cerca de 1 cm).',
      'Pique o cheiro-verde bem fino com faca afiada.',
      'Tempere a mistura com suco de limão, azeite extravirgem generoso e flor de sal. Mexa suavemente.',
      'Mantenha na geladeira por pelo menos 15 minutos antes de levar à mesa.'
    ],
    tip: 'Sirva gelado, acompanhando carnes grelhadas, peixes ou como entrada com pão artesanal. O vinagrete ganha ainda mais sabor no dia seguinte.',
    curiosity: 'O cambuci tem pH entre 2,5 e 3,0 — mais ácido que o limão em muitas medições. Essa acidez natural faz dele um ingrediente cru perfeito para vinagretes e saladas, dispensando o vinagre industrial.'
  },
  {
    id: 'torta-vegetariana-cambuci',
    title: 'Torta vegetariana de horta com cambuci',
    subtitle: 'Massa leve e dourada à base de tofu, repleta de legumes coloridos onde o cambuci entra como o acidulante aromático da estação.',
    prepTime: '50 minutos',
    cookTimeMinutes: 50,
    yield: '10 fatias',
    defaultServings: 10,
    category: 'salgado',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Salada de folhas verdes com nozes · Cerveja artesanal tipo Saison ou Blonde Ale',
    tags: ['Forno & Afeto', 'Vegetariano', 'Massa Leve de Tofu', 'Brunch'],
    ingredients: [
      { section: 'Massa Leve', item: 'Leite de soja ou vegetal', amount: 360, unit: 'g', note: '2 xícaras' },
      { section: 'Massa Leve', item: 'Óleo vegetal de milho ou girassol', amount: 180, unit: 'g', note: '1 xícara' },
      { section: 'Massa Leve', item: 'Farinha de trigo selecionada', amount: 360, unit: 'g', note: '2 xícaras' },
      { section: 'Massa Leve', item: 'Tofu fresco drenado', amount: 180, unit: 'g', note: '1 xícara' },
      { section: 'Massa Leve', item: 'Amido de milho', amount: 20, unit: 'g' },
      { section: 'Massa Leve', item: 'Fermento em pó químico', amount: 20, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Cambuci descascado picadinho', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Recheio de Horta', item: 'Vagem tenra picadinha', amount: 60, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Mandioquinha macia em cubos', amount: 60, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Cenoura ralada', amount: 60, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Tomates maduros em pedaços', amount: 160, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Cebola douradinha picada', amount: 70, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Pimentão vermelho e amarelo', amount: 80, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Repolho finamente fatiado', amount: 40, unit: 'g' },
      { section: 'Recheio de Horta', item: 'Sal e orégano fresco', note: 'A gosto' }
    ],
    steps: [
      'Pré-aqueça o forno a 180 °C e unte uma assadeira refratária com azeite e farinha.',
      'Prepare a massa: no liquidificador ou com fuê, bata o tofu com os líquidos e incorpore as farinhas até obter um creme sedoso.',
      'Prepare o recheio de horta: misture todos os legumes frescos picados com o cambuci em uma tigela grande e tempere.',
      'Na assadeira, verta metade da massa, espalhe todo o recheio farto e finalize cobrindo com o restante da massa.',
      'Asse por 35 a 40 minutos a 180 °C até dourar a crosta. Deixe repousar 10 minutos antes de fatiar.'
    ],
    tip: 'A massa à base de tofu fica mais firme após esfriar. Se preferir fatias mais definidas, aguarde 10 minutos antes de cortar.',
    curiosity: 'O cambuci no recheio salgado funciona como um acidulante natural: ele realça os sabores dos outros legumes sem dominar o prato, da mesma forma que o tamarindo ou o limão verde em cozinhas asiáticas.'
  },
  {
    id: 'torta-costela-cambuci',
    title: 'Torta de costela desfiada com cambuci',
    subtitle: 'Costela bovina lentamente desfiada abraçada pela acidez perfumada do cambuci nativo.',
    prepTime: '50 minutos',
    cookTimeMinutes: 50,
    yield: '10 porções',
    defaultServings: 10,
    category: 'salgado',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Vinho Tinto Syrah ou Cabernet Franc encorpado · Cerveja IPA artesanal',
    tags: ['Carne de Panela', 'Comida Afetiva', 'Dourada & Suculenta', 'Almoço de Domingo'],
    ingredients: [
      { section: 'Massa Dourada', item: 'Leite', amount: 360, unit: 'g' },
      { section: 'Massa Dourada', item: 'Óleo', amount: 180, unit: 'g' },
      { section: 'Massa Dourada', item: 'Farinha de trigo', amount: 360, unit: 'g' },
      { section: 'Massa Dourada', item: 'Ovos caipiras inteiros', amount: 120, unit: 'g', note: '3 unidades' },
      { section: 'Massa Dourada', item: 'Amido de milho', amount: 20, unit: 'g' },
      { section: 'Massa Dourada', item: 'Fermento químico', amount: 20, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Costela bovina cozida e desfiada suculenta', amount: 150, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Cambuci picadinho sem casca', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Recheio de Costela', item: 'Cenoura raladinha', amount: 60, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Tomate maduro', amount: 80, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Cebola picada', amount: 70, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Pimentão vermelho picado', amount: 80, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Berinjela em cubinhos', amount: 120, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Vagem tenra', amount: 50, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Coentro fresco picado', amount: 30, unit: 'g' },
      { section: 'Recheio de Costela', item: 'Sal e pimenta do reino moída', note: 'A gosto' }
    ],
    steps: [
      'Aqueça o forno a 180 °C e unte uma travessa generosa com manteiga e farinha.',
      'Misture os ovos, óleo, leite e farinhas com fuê até atingir textura cremosa e homogênea.',
      'Misture a costela desfiada com todos os legumes e o cambuci fresco picado, ajustando o tempero.',
      'Monte camadas alternadas de massa e recheio suculento, finalizando com a massa por cima.',
      'Asse por 35 a 40 minutos até a casca ficar crocante, dourada e perfumar a casa inteira.'
    ],
    tip: 'Para a costela ficar mais saborosa no recheio, cozinhe-a no dia anterior com alho, cebola e louro. A carne fria desfia com mais facilidade e absorve melhor os temperos.',
    curiosity: 'A combinação de carne de boi com frutas ácidas tem raízes profundas na culinária paulista caipira — era comum usar frutas do quintal para marinar e amaciar cortes mais firmes. O cambuci ocupa esse papel com elegância.'
  },
  {
    id: 'antepasto-berinjela-cambuci',
    title: 'Antepasto rústico de berinjela e cambuci',
    subtitle: 'Fusão irresistível entre o antepasto mediterrâneo e a mata paulista: berinjelas aveludadas, pimentões tostados e a acidez floral da fruta.',
    prepTime: '25 minutos',
    cookTimeMinutes: 25,
    yield: '350 g',
    defaultServings: 6,
    category: 'salgado',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Torradas de ciabatta rústica · Queijo de cabra cremoso ou brie morno · Taça de Prosecco',
    tags: ['Petisco Chic', 'Bruschetta', 'Conservas de Charme', 'Happy Hour'],
    ingredients: [
      { item: 'Berinjela média cortada em cubos', amount: 120, unit: 'g', note: '1 unidade' },
      { item: 'Pimentão verde picado', amount: 80, unit: 'g', note: '1 unidade' },
      { item: 'Pimentão vermelho picado', amount: 80, unit: 'g', note: '1 unidade' },
      { item: 'Cebola picadinha', amount: 70, unit: 'g', note: '1 unidade' },
      { item: 'Alho fatiado em lâminas', amount: 6, unit: 'g', note: '2 dentes' },
      { item: 'Cambuci fresco sem casca', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Azeitonas verdes ou pretas picadas', amount: 100, unit: 'g' },
      { item: 'Azeite extravirgem generoso, coentro e sal', note: 'A gosto' }
    ],
    steps: [
      'Pique a berinjela, pimentões, cebola e cambuci em cubos proporcionais.',
      'Aqueça um bom fio de azeite numa panela pesada de ferro ou fundo triplo.',
      'Refogue o alho laminado e a cebola até dourarem suavemente e soltarem aroma.',
      'Acrescente a berinjela e pimentões. Cozinhe por 10 minutos mexendo para absorver o azeite.',
      'Incorpore o cambuci e as azeitonas. Deixe cozinhar por mais 5 minutos em fogo brando.',
      'Finalize com folhas de coentro frescas e flor de sal. Sirva com pão quente.'
    ],
    tip: 'Sirva sobre bruschetta de pão artesanal, como acompanhamento de queijos curados ou como recheio de wrap. Conserva bem na geladeira por até 4 dias em pote fechado.',
    curiosity: 'O nome "antepasto" vem do italiano e significa literalmente "antes da refeição". Mas esse preparo funciona também como prato principal leve — especialmente quando servido com pão rústico e um copo de vinho branco seco.'
  },
  {
    id: 'suco-cambuci',
    title: 'Suco gelado de cambuci com casca integral',
    subtitle: 'Puro, refrescante e translúcido. A casca do fruto empresta óleos essenciais que perfumam a sala toda.',
    prepTime: '10 minutos',
    cookTimeMinutes: 10,
    yield: '1,4 litros',
    defaultServings: 5,
    category: 'bebida',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Ideal para tardes quentes de verão na piscina ou varanda com folhas de hortelã fresca',
    tags: ['Super Refrescante', 'Rico em Vitamina C', 'Casca Integral', '10 Minutos'],
    ingredients: [
      { item: 'Água mineral bem gelada', amount: 1200, unit: 'ml' },
      { item: 'Cambucis frescos inteiros e bem lavados', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar demerara, mascavo ou mel', amount: 120, unit: 'g', note: '6 colheres de sopa' }
    ],
    steps: [
      'Lave muito bem as cascas verdes dos frutos em água fria.',
      'Coloque a água gelada, os cambucis picados com a casca e o açúcar no liquidificador.',
      'Bata na velocidade máxima por 1 minuto até emulsionar totalmente.',
      'Coe numa peneira fina para um suco cristalino, ou sirva integral para beber com a polpa.',
      'Sirva com muito gelo e uma rodela de fruta na borda da taça.'
    ],
    tip: 'Reduza o açúcar progressivamente até encontrar o ponto que agrada seu paladar. Muitas pessoas descobrem que gostam da acidez pura da fruta — sem adoçante nenhum.',
    curiosity: 'O cambuci pode ser batido com a casca — ela concentra boa parte do aroma e dos compostos funcionais da fruta. Isso o diferencia da maioria das frutas cítricas, cujas cascas têm sabor amargo ou adstringente demais para consumo direto.'
  },
  {
    id: 'vitamina-cambuci',
    title: 'Vitamina aveludada de cambuci',
    subtitle: 'O encontro cremoso do leite com a acidez viva da fruta: o efeito tampão biológico cria uma bebida que lembra um yogurt smoothie sofisticado.',
    prepTime: '10 minutos',
    cookTimeMinutes: 10,
    yield: '1,25 litros',
    defaultServings: 4,
    category: 'bebida',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Pães artesanais quentinhos na manteiga ou bolo de fubá no café da manhã',
    tags: ['Smoothie Cremoso', 'Café da Manhã', 'Energia Matinal', 'Super Suave'],
    ingredients: [
      { item: 'Água mineral gelada', amount: 1000, unit: 'ml' },
      { item: 'Leite em pó integral cremoso (ou leite de coco)', amount: 80, unit: 'g', note: '4 colheres cheias' },
      { item: 'Cambuci maduro fatiado com casca', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar ou mel silvestre', amount: 80, unit: 'g', note: '4 colheres de sopa' }
    ],
    steps: [
      'Higienize os cambucis e retire apenas o cabinho central.',
      'Junte no liquidificador a água gelada, o leite em pó cremoso, a fruta fatiada e o açúcar.',
      'Bata por 2 minutos até criar uma espuma aveludada e homogênea.',
      'Sirva em copos compridos imediatamente com pedras de gelo.'
    ],
    tip: 'Substitua o leite em pó por leite vegetal de coco para uma versão mais perfumada. A gordura do coco combina muito bem com a acidez do cambuci.',
    curiosity: 'A proteína do leite reage quimicamente com os ácidos da fruta, suavizando a percepção de acidez sem alterar o pH da bebida. É o mesmo princípio que torna o iogurte mais palatável que o leite fermentado puro — a gordura e a proteína atuam como tampão sensorial.'
  },
  {
    id: 'pao-cambuci',
    title: 'Pão rústico artesanal de cambuci',
    subtitle: 'Casca dourada e crocante, miolo macio tingido de verde-dourado com aroma inebriante da farinha feita com as cascas da fruta.',
    prepTime: '5 horas (fermentação lenta)',
    cookTimeMinutes: 300,
    yield: '10 pães médios',
    defaultServings: 10,
    category: 'panificacao',
    difficulty: 'Elaborado',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Manteiga da fazenda com flor de sal · Geleia de cambuci com queijo minas curado',
    tags: ['Panificação Raiz', 'Casca Desidratada', 'Aroma de Forno', 'Herança Ancestral'],
    ingredients: [
      { item: 'Farinha de trigo especial para pães', amount: 700, unit: 'g' },
      { item: 'Farinha de casca de cambuci desidratada', amount: 200, unit: 'g' },
      { item: 'Água morna (cerca de 36°C)', amount: 400, unit: 'ml' },
      { item: 'Fermento biológico seco', amount: 10, unit: 'g' },
      { item: 'Ovos caipiras', amount: 2, unit: 'unidades' },
      { item: 'Óleo vegetal', amount: 50, unit: 'ml' },
      { item: 'Açúcar cristal', amount: 4, unit: 'colheres de sopa' },
      { item: 'Sal marinho fino', amount: 1, unit: 'colher rasa' }
    ],
    steps: [
      'Ative o fermento: dissolva-o na água morna com o açúcar e aguarde 10 minutos até borbulhar.',
      'Em uma gamela grande, misture as farinhas de trigo e de cambuci com o sal.',
      'Adicione os ovos, o óleo e o fermento ativado, misturando do centro para as bordas.',
      'Sove a massa sobre a bancada por 12 a 15 minutos até ficar elástica, acetinada e macia.',
      'Deixe crescer em tigela coberta por 4 horas em local aconchegante.',
      'Modele os pães, disponha em assadeira polvilhada e asse a 220 °C por 20 a 25 minutos até dourarem.'
    ],
    tip: 'A farinha de cambuci pode ser feita em casa: basta desidratar as cascas da fruta em forno baixo (60 °C por 4 horas) e moer em liquidificador potente. O resultado é uma farinha com aroma intenso e cor amarelo-esverdeada.',
    curiosity: 'O uso de farinhas de frutas nativas em pães é uma prática milenar em diversas culturas indígenas brasileiras. A incorporação de farinha de cambuci a pães contemporâneos é uma forma de resgatar esse conhecimento dentro da linguagem da panificação moderna.'
  },
  {
    id: 'pudim-cambuci',
    title: 'Pudim de cambuci com calda dourada',
    subtitle: 'A sobremesa mais amada do Brasil ganha um toque cítrico sublime: calda de caramelo brilhante e textura que derrete na boca.',
    prepTime: '50 minutos (+ resfriamento)',
    cookTimeMinutes: 50,
    yield: '10 fatias',
    defaultServings: 10,
    category: 'doce',
    difficulty: 'Médio',
    imageUrl: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Café espresso curto encorpado ou licor digestivo de cambuci',
    tags: ['Clássico Brasileiro', 'Calda de Caramelo', 'Banho-Maria', 'Derrete na Boca'],
    ingredients: [
      { item: 'Leite em pó integral cremoso', amount: 120, unit: 'g', note: '1 xícara' },
      { item: 'Açúcar cristal para o pudim', amount: 120, unit: 'g', note: '1 xícara' },
      { item: 'Ovos caipiras inteiros', amount: 160, unit: 'g', note: '4 unidades' },
      { item: 'Leite integral fresco', amount: 240, unit: 'ml', note: '2 xícaras' },
      { item: 'Água filtrada', amount: 240, unit: 'ml', note: '2 xícaras' },
      { item: 'Polpa fresca de cambuci sem casca', amount: 80, unit: 'g', note: '2 unidades' },
      { section: 'Calda de Caramelo', item: 'Açúcar cristal para a calda', amount: 40, unit: 'g', note: '2 colheres cheias' }
    ],
    steps: [
      'Caramelize a forma: derreta o açúcar em fogo médio direto na forma de pudim até atingir um caramelo âmbar translúcido. Espalhe no fundo.',
      'No liquidificador, bata o leite em pó, ovos, açúcar, leite, água e polpa de cambuci até virar um creme aveludado.',
      'Despeje o creme passado pela peneira sobre o caramelo frio.',
      'Asse em banho-maria em forno pré-aquecido a 200 °C por cerca de 40 a 45 minutos até firmar.',
      'Espere esfriar totalmente e refrigere por pelo menos 4 horas antes do momento solene de desenformar.'
    ],
    tip: 'Para verificar o ponto do pudim sem abrir o forno, agite levemente a forma: o centro deve tremer levemente, como uma gelatina, mas as bordas devem estar firmes. Se ainda estiver muito líquido, deixe mais 10 minutos.',
    curiosity: 'O pudim é provavelmente a sobremesa mais democrática do Brasil — presente em todas as regiões, em todas as classes sociais. Ao incorporar o cambuci, este pudim carrega também essa memória coletiva, enquanto apresenta a fruta a quem talvez nunca tenha ouvido falar dela.'
  },
  {
    id: 'geleia-cambuci-mel',
    title: 'Geleia dourada de cambuci com mel silvestre',
    subtitle: 'Apenas dois ingredientes da floresta: o azedinho aromático do cambuci e a doçura pura do mel de abelhas nativas.',
    prepTime: '45 minutos',
    cookTimeMinutes: 45,
    yield: '385 g (2 potes)',
    defaultServings: 8,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Queijo da Canastra maduro, torradas de brioche ou colheradas sobre sorvete de baunilha',
    tags: ['Apenas 2 Ingredientes', 'Pectina Natural', 'Zero Espessantes', 'Presente Gourmet'],
    ingredients: [
      { item: 'Cambuci picado sem casca nem sementes', amount: 500, unit: 'g', note: 'Aprox. 10 frutos maduros' },
      { item: 'Mel puro de abelha silvestre', amount: 400, unit: 'g' }
    ],
    steps: [
      'Corte o cambuci em cubos médios retirando as sementes.',
      'Numa panela de fundo grosso, coloque a fruta picada e o mel puro.',
      'Ligue o fogo em temperatura baixa e mexa de vez em quando por 40 a 45 minutos.',
      'Não adicione água: a fruta se desmancha liberando todo o seu sumo rico em pectina gelatinosa.',
      'Teste o ponto: coloque uma colher de geleia num prato gelado; se não escorrer, está pronta.',
      'Transfira ainda quente para potes de vidro esterilizados, tampe e inverta para criar vácuo.'
    ],
    tip: 'Use mel de abelhas nativas sem ferrão, produzido no próprio Alto Tietê, se disponível. A combinação de mel local com cambuci local cria uma geleia com identidade de território inigualável.',
    curiosity: 'A pectina presente naturalmente na casca e nas sementes do cambuci ajuda a geleia a firmar sem necessidade de adicionar espessantes industriais. É por isso que a receita funciona com apenas dois ingredientes — a química da própria fruta faz o trabalho.'
  },
  {
    id: 'bolo-cambuci',
    title: 'Bolo fofo de cambuci com perfume de quintal',
    subtitle: 'Massa úmida e fofinha que enche a cozinha com notas cítricas florais enquanto assa no forno.',
    prepTime: '40 minutos',
    cookTimeMinutes: 40,
    yield: '10 fatias generosas',
    defaultServings: 10,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Ganache de chocolate amargo 70% cacau ou xícara de café coado passado na hora',
    tags: ['Chá da Tarde', 'Massa Macia & Úmida', 'Perfume de Bolo', 'Fácil de Fazer'],
    ingredients: [
      { item: 'Ovos caipiras inteiros', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Açúcar cristal', amount: 180, unit: 'g', note: '1 xícara' },
      { item: 'Óleo de milho ou girassol', amount: 90, unit: 'g', note: '½ xícara' },
      { item: 'Cambuci sem casca picadinho', amount: 120, unit: 'g', note: '3 unidades' },
      { item: 'Água mineral', amount: 240, unit: 'ml' },
      { item: 'Farinha de trigo peneirada', amount: 380, unit: 'g', note: '2 xícaras' },
      { item: 'Fermento químico em pó para bolos', amount: 20, unit: 'g', note: '1 colher de sopa' }
    ],
    steps: [
      'Pré-aqueça o forno a 180 °C. Unte e enfarinhe uma forma redonda com furo central.',
      'Na batedeira, bata os ovos, açúcar e óleo por 3 minutos até virar um creme claro e aerado.',
      'Bata a polpa de cambuci com a água no liquidificador até homogeneizar.',
      'Junte o líquido à batedeira e bata por mais 2 minutos.',
      'Peneire a farinha aos poucos, envolvendo suavemente com espátula de fora para dentro.',
      'Adicione o fermento por último com carinho e despeje na forma.',
      'Asse por 30 a 35 minutos até dourar e o palito sair limpo e seco.'
    ],
    tip: 'Para uma versão mais sofisticada, cubra o bolo com uma ganache de chocolate amargo: a amargura do cacau e a acidez do cambuci na massa criam um contraste que eleva o resultado a outro nível.',
    curiosity: 'A acidez do cambuci interfere na reação do fermento durante o forneamento — por isso é importante não exagerar na quantidade de fruta. A proporção desta receita foi calculada para garantir crescimento adequado sem comprometer a estrutura do bolo.'
  },
  {
    id: 'brigadeiro-cambuci',
    title: 'Brigadeiro gourmet de cambuci com raspas cítricas',
    subtitle: 'A reinvenção do doce mais icônico do Brasil: textura aveludada, acidez surpreendente e cobertura perfumada de limão.',
    prepTime: '25 minutos',
    cookTimeMinutes: 25,
    yield: '9 unidades grandes',
    defaultServings: 9,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Champagne Brut gelado ou café descafeinado de torra média',
    tags: ['Docinho Gourmet', 'Festa Especial', 'Autoral & Exclusivo', 'Sucesso Garantido'],
    ingredients: [
      { item: 'Cambuci sem casca', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Leite condensado de boa qualidade', amount: 395, unit: 'g', note: '1 lata/caixa' },
      { item: 'Manteiga de primeira qualidade', amount: 20, unit: 'g', note: '1 colher de sopa' },
      { item: 'Água filtrada', amount: 25, unit: 'ml' },
      { item: 'Açúcar cristal com raspas finas de limão taiti', note: 'Para enrolar' }
    ],
    steps: [
      'No liquidificador, bata o cambuci sem casca com a água até virar uma polpa líquida e lisa.',
      'Em uma panela de fundo grosso, junte o leite condensado, a manteiga e a polpa da fruta.',
      'Cozinhe em fogo médio-baixo, mexendo continuamente com espátula de silicone.',
      'Cozinhe até a massa desgrudar com firmeza do fundo da panela (cerca de 15 a 20 minutos).',
      'Despeje num prato untado com manteiga, cubra com filme plástico rente à massa e deixe esfriar.',
      'Enrole com as mãos untadas e passe pelo açúcar aromatizado com raspas de limão taiti.'
    ],
    tip: 'Passe o brigadeiro em raspas de casca de limão-taiti misturadas ao açúcar cristal. A combinação cítrica realça o aroma do cambuci e adiciona uma camada extra de sofisticação ao doce.',
    curiosity: 'O brigadeiro surgiu no Brasil na década de 1940, criado a partir do leite condensado, que era abundante na época. Ele é hoje o doce mais replicado e adaptado da confeitaria brasileira. Esta versão com cambuci é um pequeno ato de reinvenção de um clássico — e de valorização do que cresce na nossa mata.'
  },
  {
    id: 'mousse-cambuci',
    title: 'Mousse aveludada de cambuci em taça',
    subtitle: 'Apenas 2 ingredientes: a química natural da fruta cria uma mousse leve, densa e sedosa sem precisar de gelatina industrial.',
    prepTime: '20 minutos (+ geladeira)',
    cookTimeMinutes: 20,
    yield: '3 taças elegantes',
    defaultServings: 3,
    category: 'doce',
    difficulty: 'Fácil',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    pairing: 'Vinho de sobremesa colheita tardia ou fatias finas de frutas frescas da estação',
    tags: ['Apenas 2 Ingredientes', 'Sem Gelatina', 'Sobremesa de Restaurante', 'Sedosa'],
    ingredients: [
      { item: 'Cambuci fresco sem casca e sem sementes', amount: 80, unit: 'g', note: '2 unidades' },
      { item: 'Leite condensado integral', amount: 395, unit: 'g', note: '1 lata' },
      { item: 'Folhinhas de hortelã fresca para decorar', note: 'Opcional' }
    ],
    steps: [
      'No liquidificador, coloque a polpa do cambuci e o leite condensado.',
      'Bata em potência alta por 2 a 3 minutos ininterruptos: você verá a emulsão firmar quase como mágica.',
      'Distribua em taças de cristal ou ramequins elegantes.',
      'Leve à geladeira por ao menos 2 horas antes de servir para ganhar firmeza gelada.',
      'Decore com uma folhinha de hortelã ou raspas de casca antes de servir.'
    ],
    tip: 'Para uma mousse mais aerada, incorpore 200 ml de creme de leite fresco batido em ponto de neve antes de levar à geladeira. O resultado fica mais próximo de uma mousse tradicional francesa — leve, cremoso e com volume.',
    curiosity: 'Com apenas dois ingredientes, esta mousse demonstra o potencial do cambuci como protagonista culinário. A acidez da fruta reage com as proteínas do leite condensado durante o batimento, criando uma emulsão naturalmente estável — sem gelatina, sem espessantes.'
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
