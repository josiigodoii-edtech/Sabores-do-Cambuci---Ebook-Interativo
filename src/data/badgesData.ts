import { Badge } from '../types';

export const BADGES_DATA: Badge[] = [
  {
    id: 'badge-iniciante',
    title: 'O Primeiro Convite',
    description: 'Iniciou a jornada de leitura e conheceu o manifesto afetivo das Irmãs KAMU-SI.',
    category: 'Jornada',
    iconName: 'Compass',
    requiredChapterId: 'apresentacao'
  },
  {
    id: 'badge-botanica',
    title: 'Guardião da Mata Atlântica',
    description: 'Compreendeu o endemismo da Campomanesia phaea, seu papel de bioindicador e sua safra de verão.',
    category: 'Ecologia',
    iconName: 'TreePine',
    requiredChapterId: 'capitulo-1'
  },
  {
    id: 'badge-territorio',
    title: 'Herança Ancestral',
    description: 'Conheceu as origens do pote tupi, o tombamento imaterial de Mogi e a agricultura familiar do Alto Tietê.',
    category: 'Cultura',
    iconName: 'Landmark',
    requiredChapterId: 'capitulo-2'
  },
  {
    id: 'badge-sensorial',
    title: 'Mestre Alquimista do Palato',
    description: 'Dominou o pH de 2,5 a 3,0, o efeito tampão com laticínios e a farinha nutritiva da casca integral.',
    category: 'Ciência dos Sabores',
    iconName: 'FlaskConical',
    requiredChapterId: 'capitulo-3'
  },
  {
    id: 'badge-chef',
    title: 'Chef da Terra Nativa',
    description: 'Explorou as 13 receitas autorais testadas pela ETEC Presidente Vargas.',
    category: 'Gastronomia',
    iconName: 'UtensilsCrossed',
    requiredChapterId: 'capitulo-4'
  },
  {
    id: 'badge-defensor',
    title: 'Voz da Agroecologia',
    description: 'Descobriu as redes de produtores do Alto Tietê e compreendeu o consumo como ato de preservação.',
    category: 'Comunidade',
    iconName: 'HeartHandshake',
    requiredChapterId: 'capitulo-5'
  },
  {
    id: 'badge-culinario-ativo',
    title: 'Cozinheiro Prático',
    description: 'Experimentou ou marcou uma receita nativa no caderno de culinária para preparar.',
    category: 'Prática',
    iconName: 'Sparkles'
  },
  {
    id: 'badge-mestre-ouro',
    title: 'Kambuci de Ouro (Mestre LXD)',
    description: 'Completou todos os módulos e atingiu pontuação máxima nos testes de fixação de conhecimento.',
    category: 'Maestria',
    iconName: 'Award',
    requiredQuizScore: 100
  }
];
