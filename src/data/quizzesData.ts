import { ChapterQuiz } from '../types';

export const CHAPTER_QUIZZES: Record<string, ChapterQuiz> = {
  'quiz-apresentacao': {
    id: 'quiz-apresentacao',
    chapterId: 'apresentacao',
    chapterTitle: 'Apresentação: Sabores do Cambuci',
    badgeRewardId: 'badge-iniciante',
    questions: [
      {
        id: 'q-ap-1',
        question: 'Segundo as autoras Irmãs KAMU-SI, qual é a verdadeira natureza deste livro?',
        context: 'Reflexão sobre a proposta de valor do livro.',
        options: [
          {
            id: 'a',
            text: 'Um manual técnico industrial focado apenas em exportação de frutas exóticas.',
            isCorrect: false,
            explanation: 'O livro não visa a agroindústria massificada.'
          },
          {
            id: 'b',
            text: 'Um convite afetivo para conhecer a Mata Atlântica e sua preservação através da porta da cozinha.',
            isCorrect: true,
            explanation: 'Correto! Conhecer o cambuci na cozinha é um ato de preservação cultural e ecológica.'
          },
          {
            id: 'c',
            text: 'Um catálogo estritamente botânico sem receitas ou aplicações práticas.',
            isCorrect: false,
            explanation: 'O livro alia botânica com 13 receitas testadas e saberes locais.'
          }
        ]
      },
      {
        id: 'q-ap-2',
        question: 'Qual é o lema que sintetiza o propósito do livro?',
        options: [
          {
            id: 'a',
            text: 'Cozinhar é um ato de conhecimento. Conhecer o cambuci é um ato de preservação.',
            isCorrect: true,
            explanation: 'Exato! A síntese da obra reforça que degustar com consciência preserva a floresta nativa.'
          },
          {
            id: 'b',
            text: 'A pressa é aliada da boa colheita moderna.',
            isCorrect: false,
            explanation: 'Pelo contrário: o cambuci ensina a esperar o tempo certo da terra.'
          },
          {
            id: 'c',
            text: 'Quanto mais doce a fruta nativa, mais valor comercial ela possui.',
            isCorrect: false,
            explanation: 'O cambuci destaca-se pela sua acidez e adstringência equilibradas, não pela doçura pura.'
          }
        ]
      }
    ]
  },
  'quiz-capitulo-1': {
    id: 'quiz-capitulo-1',
    chapterId: 'capitulo-1',
    chapterTitle: 'Capítulo 1: Conhecendo o Cambuci',
    badgeRewardId: 'badge-botanica',
    questions: [
      {
        id: 'q-c1-1',
        question: 'O que o nome indígena tupi "kambuci" originariamente significa ou evoca?',
        options: [
          {
            id: 'a',
            text: 'Espinho verde da montanha.',
            isCorrect: false,
            explanation: 'Essa não é a raiz etimológica tupi da fruta.'
          },
          {
            id: 'b',
            text: 'Pote de barro achatado e arredondado, utilizado pelos povos originários.',
            isCorrect: true,
            explanation: 'Correto! A morfologia arredondada e achatada do fruto remete aos potes de cerâmica indígena.'
          },
          {
            id: 'c',
            text: 'Gotas de chuva ácida do planalto.',
            isCorrect: false,
            explanation: 'Incorreto.'
          }
        ]
      },
      {
        id: 'q-c1-2',
        question: 'O que costuma desorientar quem colhe o cambuci maduro pela primeira vez?',
        options: [
          {
            id: 'a',
            text: 'A fruta permanece com a casca verde mesmo quando está perfeitamente madura.',
            isCorrect: true,
            explanation: 'Correto! Diferente de bananas ou goiabas, a casca não amarela nem avermelha. O aroma é o verdadeiro indicador de maturação.'
          },
          {
            id: 'b',
            text: 'A fruta cai da árvore antes de desenvolver sabor.',
            isCorrect: false,
            explanation: 'Ela amadurece na árvore mantendo a coloração verde esmeralda.'
          },
          {
            id: 'c',
            text: 'Ela se torna doce como mel sem qualquer acidez.',
            isCorrect: false,
            explanation: 'O cambuci maduro mantém acidez viva, cítrica e adstringente singular.'
          }
        ]
      },
      {
        id: 'q-c1-3',
        question: 'Qual a janela de safra do cambuci e sua faixa de pH natural característica?',
        options: [
          {
            id: 'a',
            text: 'Safra de inverno (julho-agosto) e pH neutro 7.0.',
            isCorrect: false,
            explanation: 'O cambuci é colhido no verão e possui alta acidez.'
          },
          {
            id: 'b',
            text: 'Safra de dezembro a março (pico jan/fev) e pH entre 2,5 e 3,0.',
            isCorrect: true,
            explanation: 'Excelente! É um fruto de verão com safra curta e acidez marcante (pH 2,5-3,0), rico em ácido cítrico e málico.'
          },
          {
            id: 'c',
            text: 'Safra anual contínua sem sazonalidade e pH 5.5.',
            isCorrect: false,
            explanation: 'O cambuci tem sazonalidade estrita e não foi modificado para produzir o ano inteiro.'
          }
        ]
      }
    ]
  },
  'quiz-capitulo-2': {
    id: 'quiz-capitulo-2',
    chapterId: 'capitulo-2',
    chapterTitle: 'Capítulo 2: Muito além de uma fruta',
    badgeRewardId: 'badge-territorio',
    questions: [
      {
        id: 'q-c2-1',
        question: 'Em que ano a fruta do cambuci foi reconhecida como Patrimônio Cultural Imaterial em Mogi das Cruzes?',
        options: [
          {
            id: 'a',
            text: 'Em 1988, com a Constituição.',
            isCorrect: false,
            explanation: 'O tombamento municipal imaterial ocorreu mais recentemente.'
          },
          {
            id: 'b',
            text: 'Em 2016, fortalecendo a visibilidade e proteção da tradição e de seus produtores.',
            isCorrect: true,
            explanation: 'Exato! Em 2016, Mogi das Cruzes oficializou o cambuci como Patrimônio Cultural Imaterial.'
          },
          {
            id: 'c',
            text: 'Em 2024, após campanha digital.',
            isCorrect: false,
            explanation: 'O marco legal foi no ano de 2016.'
          }
        ]
      },
      {
        id: 'q-c2-2',
        question: 'Por que a restrição geográfica do cambuci é considerada uma virtude pelas autoras?',
        options: [
          {
            id: 'a',
            text: 'Porque garantiu que a espécie mantivesse sua integridade biológica sem modificações genéticas da grande indústria.',
            isCorrect: true,
            explanation: 'Perfeito! A fruta continua exatamente o que sempre foi: pura, silvestre e cultivada por mãos de pequenos sítios familiares.'
          },
          {
            id: 'b',
            text: 'Porque impede qualquer pessoa de fora de São Paulo de consumi-la.',
            isCorrect: false,
            explanation: 'Polpas e farinhas permitem que ela atravesse fronteiras sem perder sua identidade artesanal.'
          },
          {
            id: 'c',
            text: 'Porque a fruta só sobrevive em estufas climatizadas com defensivos agrícolas.',
            isCorrect: false,
            explanation: 'O cambuci cresce espontaneamente na Mata Atlântica e em consórcio agroecológico.'
          }
        ]
      }
    ]
  },
  'quiz-capitulo-3': {
    id: 'quiz-capitulo-3',
    chapterId: 'capitulo-3',
    chapterTitle: 'Capítulo 3: Na Cozinha',
    badgeRewardId: 'badge-sensorial',
    questions: [
      {
        id: 'q-c3-1',
        question: 'Qual técnica de preparo é indicada para atenuar a acidez do cambuci em receitas cruas?',
        options: [
          {
            id: 'a',
            text: 'Ferver a fruta em água com bicarbonato por 30 minutos.',
            isCorrect: false,
            explanation: 'Isso destruiria os aromas e a textura fresca.'
          },
          {
            id: 'b',
            text: 'Deixar a fruta descascada fatiada em água com uma pitada de sal por 10 minutos.',
            isCorrect: true,
            explanation: 'Correto! O sal atenua a percepção da acidez na língua sem alterar o perfil aromático nativo.'
          },
          {
            id: 'c',
            text: 'Embeber em vinagre de maçã concentrado.',
            isCorrect: false,
            explanation: 'Isso aumentaria ainda mais a carga ácida total.'
          }
        ]
      },
      {
        id: 'q-c3-2',
        question: 'Como a gordura e a proteína de laticínios reagem ao encontrar o cambuci?',
        options: [
          {
            id: 'a',
            text: 'Atuam como tampão sensorial, equilibrando a acidez cortante e criando preparações suaves e redondas.',
            isCorrect: true,
            explanation: 'Isso mesmo! A caseína e os lipídios suavizam o impacto ácido, resultando em cremes macios e molhos elegantes.'
          },
          {
            id: 'b',
            text: 'Inutilizam a receita causando amargor imediato.',
            isCorrect: false,
            explanation: 'Pelo contrário, laticínios são uma das melhores harmonizações para o cambuci!'
          },
          {
            id: 'c',
            text: 'Transformam o cambuci em álcool fermentado espontâneo.',
            isCorrect: false,
            explanation: 'Não há fermentação alcoólica imediata.'
          }
        ]
      }
    ]
  },
  'quiz-capitulo-4': {
    id: 'quiz-capitulo-4',
    chapterId: 'capitulo-4',
    chapterTitle: 'Capítulo 4: Receitas Especiais',
    badgeRewardId: 'badge-chef',
    questions: [
      {
        id: 'q-c4-1',
        question: 'Por que a Mousse de Cambuci do livro adquire consistência e firmeza usando apenas 2 ingredientes (fruta + leite condensado)?',
        options: [
          {
            id: 'a',
            text: 'Porque leva gelatina em pó sem sabor oculta.',
            isCorrect: false,
            explanation: 'A receita expressamente dispensa espessantes artificiais ou gelatina.'
          },
          {
            id: 'b',
            text: 'Porque o ácido natural do cambuci reage com as proteínas do leite condensado durante o batimento, formando uma emulsão estável.',
            isCorrect: true,
            explanation: 'Sensacional! A química alimentar natural da fruta coagula as proteínas lácteas, criando textura sedosa e firme sem nenhum aditivo.'
          },
          {
            id: 'c',
            text: 'Porque é congelada em freezer a -20 °C.',
            isCorrect: false,
            explanation: 'Ela firma em geladeira convencional sem necessidade de congelamento.'
          }
        ]
      },
      {
        id: 'q-c4-2',
        question: 'Como a casca do cambuci é aproveitada para fazer o rústico Pão de Cambuci?',
        options: [
          {
            id: 'a',
            text: 'Desidratada em forno baixo (60 °C por 4h) e moída em liquidificador potente para gerar uma farinha aromática amarelo-esverdeada.',
            isCorrect: true,
            explanation: 'Exato! A farinha das cascas desidratadas resgata práticas ancestrais de panificação indígena e tinge a massa com sabor e aroma únicos.'
          },
          {
            id: 'b',
            text: 'Frita em óleo quente até virar pururuca.',
            isCorrect: false,
            explanation: 'A técnica recomendada é a desidratação branda para preservar óleos essenciais.'
          },
          {
            id: 'c',
            text: 'A casca é sempre descartada por ser tóxica.',
            isCorrect: false,
            explanation: 'A casca do cambuci é perfeitamente comestível e riquíssima em aromas florais e nutrientes!'
          }
        ]
      }
    ]
  },
  'quiz-capitulo-5': {
    id: 'quiz-capitulo-5',
    chapterId: 'capitulo-5',
    chapterTitle: 'Capítulo 5: Produtores & Iniciativas',
    badgeRewardId: 'badge-defensor',
    questions: [
      {
        id: 'q-c5-1',
        question: 'O que representa o sufixo "-si" no nome da marca editorial "KAMU-SI"?',
        options: [
          {
            id: 'a',
            text: 'Uma sigla em inglês para sustentabilidade internacional.',
            isCorrect: false,
            explanation: 'KAMU-SI tem raízes estritamente nativas.'
          },
          {
            id: 'b',
            text: 'Uma referência e homenagem às raízes linguísticas e culturais tupi-guarani da região.',
            isCorrect: true,
            explanation: 'Correto! Unindo "kambuci" com a terminação "-si", preserva-se o eco da ancestralidade indígena paulista.'
          },
          {
            id: 'c',
            text: 'O sobrenome europeu dos colonizadores do Alto Tietê.',
            isCorrect: false,
            explanation: 'Incorreto.'
          }
        ]
      },
      {
        id: 'q-c5-2',
        question: 'De que maneira os produtores tradicionais do Alto Tietê reconhecem que a safra de cambuci está começando?',
        options: [
          {
            id: 'a',
            text: 'Pelo comportamento das aves locais e pelo perfume que sobe da mata, e não pela mudança de cor dos frutos.',
            isCorrect: true,
            explanation: 'Perfeito! Como a cor permanece verde, a observação da fauna e o olfato são a bússola viva transmitida por gerações de agricultores.'
          },
          {
            id: 'b',
            text: 'Por sensores digitais de satélite de agricultura de precisão.',
            isCorrect: false,
            explanation: 'A colheita é familiar, ancestral e artesanal.'
          },
          {
            id: 'c',
            text: 'Quando as folhas de todas as árvores caem completamente.',
            isCorrect: false,
            explanation: 'O cambucizeiro não perde suas folhas para frutificar.'
          }
        ]
      }
    ]
  }
};
