/**
 * Curriculum data for "Aprenda Português" – an English-to-Brazilian-Portuguese learning app.
 * Content inspired by CEFR A1→C1 vocabulary and
 * https://wisc.pb.unizin.org/portuguese/chapter/licao-1/
 *
 * Each exercise has a `type` field:
 *   'multiple-choice' | 'translation' | 'word-bank' | 'matching' | 'fill-blank' | 'flashcard' | 'quiz'
 */

const curriculum = [
  // ─────────────────────────────────────────────────────────────────────────────
  // UNIT 1 – Absolute Beginner (A1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit1',
    title: 'Absolute Beginner',
    level: 'A1',
    emoji: '🌱',
    color: '#58CC02',
    badge: 'Beginner',
    lessons: [
      // ------------------------------------------------------------------
      // Unit 1, Lesson 1 – Greetings & Introductions
      // ------------------------------------------------------------------
      {
        id: 'u1l1',
        title: 'Greetings & Introductions',
        subtitle: 'Cumprimentos e Apresentações',
        emoji: '👋',
        xpReward: 20,
        exercises: [
          {
            type: 'flashcard',
            front: 'Hello / Hi',
            back: 'Olá / Oi',
            pronunciation: 'oh-LAH / oy',
          },
          {
            type: 'flashcard',
            front: 'Good morning',
            back: 'Bom dia',
            pronunciation: 'bong JEE-ah',
          },
          {
            type: 'flashcard',
            front: 'Good afternoon',
            back: 'Boa tarde',
            pronunciation: 'BOH-ah TAR-jee',
          },
          {
            type: 'flashcard',
            front: 'Good night / Good evening',
            back: 'Boa noite',
            pronunciation: 'BOH-ah NOY-chee',
          },
          {
            type: 'multiple-choice',
            question: 'What does "Olá" mean?',
            options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "Good morning" in Portuguese?',
            options: ['Boa noite', 'Boa tarde', 'Bom dia', 'Até logo'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'How are you?',
            answer: 'Como vai você?',
            alternatives: ['Como vai?', 'Como você está?', 'Tudo bem?'],
            hint: 'KOH-moo VYE voh-SAY',
          },
          {
            type: 'translation',
            prompt: 'My name is João.',
            answer: 'Meu nome é João.',
            hint: 'MEH-oo NOH-mee EH zhoo-OW',
          },
          {
            type: 'fill-blank',
            sentence: '___ nome é Maria. (My)',
            answer: 'Meu',
            hint: 'Possessive – my = Meu (masc.) / Minha (fem.)',
          },
          {
            type: 'word-bank',
            prompt: 'Arrange: "Nice to meet you"',
            words: ['Muito', 'prazer', 'em', 'conhecê-lo'],
            answer: ['Muito', 'prazer', 'em', 'conhecê-lo'],
          },
          {
            type: 'matching',
            pairs: [
              { en: 'Hello', pt: 'Olá' },
              { en: 'Good morning', pt: 'Bom dia' },
              { en: 'How are you?', pt: 'Como vai?' },
              { en: 'Nice to meet you', pt: 'Muito prazer' },
              { en: 'Goodbye', pt: 'Tchau' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'What does "Boa tarde" mean?', options: ['Good morning', 'Good night', 'Good afternoon', 'Hello'], correct: 2 },
              { q: '"Tchau" means?', options: ['Hi', 'Bye', 'Please', 'Sorry'], correct: 1 },
              { q: 'How do you say "Please" in Portuguese?', options: ['Obrigado', 'Por favor', 'De nada', 'Com licença'], correct: 1 },
              { q: '"Desculpe" means?', options: ['Welcome', 'Excuse me / Sorry', 'Thank you', 'You\'re welcome'], correct: 1 },
              { q: 'What is "You\'re welcome" in Portuguese?', options: ['Por favor', 'Obrigado', 'De nada', 'Oi'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 1, Lesson 2 – Numbers 1–20
      // ------------------------------------------------------------------
      {
        id: 'u1l2',
        title: 'Numbers 1–20',
        subtitle: 'Números 1–20',
        emoji: '🔢',
        xpReward: 20,
        exercises: [
          {
            type: 'flashcard',
            front: '1 – 5',
            back: 'um, dois, três, quatro, cinco',
            pronunciation: 'oom, doysh, traysh, KWAH-troo, SEEN-koo',
          },
          {
            type: 'flashcard',
            front: '6 – 10',
            back: 'seis, sete, oito, nove, dez',
            pronunciation: 'saysh, SEH-chee, OY-too, NOH-vee, desh',
          },
          {
            type: 'flashcard',
            front: '11 – 15',
            back: 'onze, doze, treze, catorze, quinze',
            pronunciation: 'ON-zee, DOH-zee, TRAY-zee, kah-TOR-zee, KEEN-zee',
          },
          {
            type: 'flashcard',
            front: '16 – 20',
            back: 'dezesseis, dezessete, dezoito, dezenove, vinte',
            pronunciation: 'deh-zeh-SAYSH, deh-zeh-SEH-chee, deh-ZOY-too, deh-zeh-NOH-vee, VEEN-chee',
          },
          {
            type: 'multiple-choice',
            question: 'What is "três"?',
            options: ['Two', 'Three', 'Thirteen', 'Thirty'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "fifteen" in Portuguese?',
            options: ['Cinquenta', 'Cinquenta e cinco', 'Quinze', 'Cinco'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'I have two brothers.',
            answer: 'Eu tenho dois irmãos.',
            hint: 'EH-oo TEN-yoo doysh eer-MOW-sh',
          },
          {
            type: 'fill-blank',
            sentence: 'Eu tenho ___ anos. (I am twenty years old)',
            answer: 'vinte',
            hint: 'twenty = vinte',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'one', pt: 'um' },
              { en: 'five', pt: 'cinco' },
              { en: 'ten', pt: 'dez' },
              { en: 'fifteen', pt: 'quinze' },
              { en: 'twenty', pt: 'vinte' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I have three cats"',
            words: ['Eu', 'tenho', 'três', 'gatos'],
            answer: ['Eu', 'tenho', 'três', 'gatos'],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'What is "doze"?', options: ['Two', 'Twelve', 'Twenty', 'Seven'], correct: 1 },
              { q: '"Sete" means?', options: ['Six', 'Seventeen', 'Seven', 'Sixteen'], correct: 2 },
              { q: 'How do you say 11?', options: ['Onze', 'Um', 'Dez', 'Doze'], correct: 0 },
              { q: '"Dezoito" means?', options: ['Eight', 'Eighteen', 'Eight teen', 'Eighty'], correct: 1 },
              { q: 'What number is "quinze"?', options: ['5', '50', '15', '51'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 1, Lesson 3 – Colors
      // ------------------------------------------------------------------
      {
        id: 'u1l3',
        title: 'Colors',
        subtitle: 'As Cores',
        emoji: '🎨',
        xpReward: 20,
        exercises: [
          {
            type: 'flashcard',
            front: 'red / blue / yellow',
            back: 'vermelho / azul / amarelo',
            pronunciation: 'ver-MEH-lyoo / ah-ZOOL / ah-mah-REH-loo',
          },
          {
            type: 'flashcard',
            front: 'green / white / black',
            back: 'verde / branco / preto',
            pronunciation: 'VER-jee / BRAN-koo / PREH-too',
          },
          {
            type: 'flashcard',
            front: 'orange / pink / purple',
            back: 'laranja / rosa / roxo',
            pronunciation: 'lah-RAN-zhah / HOH-zah / HOH-shoo',
          },
          {
            type: 'multiple-choice',
            question: 'What colour is "azul"?',
            options: ['Red', 'Green', 'Blue', 'Yellow'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "green" in Portuguese?',
            options: ['Azul', 'Verde', 'Amarelo', 'Laranja'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'The sky is blue.',
            answer: 'O céu é azul.',
            hint: 'oo SEH-oo EH ah-ZOOL',
          },
          {
            type: 'fill-blank',
            sentence: 'A banana é ___. (yellow)',
            answer: 'amarela',
            hint: 'Yellow (feminine) = amarela',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'red', pt: 'vermelho' },
              { en: 'blue', pt: 'azul' },
              { en: 'green', pt: 'verde' },
              { en: 'white', pt: 'branco' },
              { en: 'black', pt: 'preto' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "The flag is green and yellow"',
            words: ['A', 'bandeira', 'é', 'verde', 'e', 'amarela'],
            answer: ['A', 'bandeira', 'é', 'verde', 'e', 'amarela'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Vermelho" means?', options: ['Green', 'Red', 'Orange', 'Pink'], correct: 1 },
              { q: 'What is "white" in Portuguese?', options: ['Preto', 'Cinza', 'Branco', 'Bege'], correct: 2 },
              { q: '"Roxo" is?', options: ['Orange', 'Brown', 'Purple', 'Gray'], correct: 2 },
              { q: 'What colour is "laranja"?', options: ['Pink', 'Orange', 'Red', 'Yellow'], correct: 1 },
              { q: '"Cinza" means?', options: ['Silver', 'Gray', 'Gold', 'Beige'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 1, Lesson 4 – Days & Months
      // ------------------------------------------------------------------
      {
        id: 'u1l4',
        title: 'Days & Months',
        subtitle: 'Dias e Meses',
        emoji: '📅',
        xpReward: 20,
        exercises: [
          {
            type: 'flashcard',
            front: 'Mon – Wed',
            back: 'segunda-feira – terça-feira – quarta-feira',
            pronunciation: 'seh-GOON-dah – TER-sah – KWAR-tah',
          },
          {
            type: 'flashcard',
            front: 'Thu – Sun',
            back: 'quinta-feira – sexta-feira – sábado – domingo',
            pronunciation: 'KEEN-tah – SESH-tah – SAH-bah-doo – doh-MEEN-goo',
          },
          {
            type: 'flashcard',
            front: 'Jan – Jun',
            back: 'janeiro – fevereiro – março – abril – maio – junho',
            pronunciation: 'zhah-NAY-roo – feh-veh-RAY-roo – MAR-soo – ah-BREEL – MY-oo – ZHOO-nyoo',
          },
          {
            type: 'flashcard',
            front: 'Jul – Dec',
            back: 'julho – agosto – setembro – outubro – novembro – dezembro',
            pronunciation: 'ZHOO-lyoo – ah-GOS-too – seh-TEM-broo – oo-TOO-broo – noh-VEM-broo – deh-ZEM-broo',
          },
          {
            type: 'multiple-choice',
            question: 'What is "Wednesday" in Portuguese?',
            options: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'What month is "março"?',
            options: ['May', 'March', 'April', 'February'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'Today is Monday.',
            answer: 'Hoje é segunda-feira.',
            hint: 'OH-zhee EH seh-GOON-dah-FAY-rah',
          },
          {
            type: 'fill-blank',
            sentence: 'O meu aniversário é em ___. (December)',
            answer: 'dezembro',
            hint: 'deh-ZEM-broo',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'Monday', pt: 'Segunda-feira' },
              { en: 'Friday', pt: 'Sexta-feira' },
              { en: 'Sunday', pt: 'Domingo' },
              { en: 'January', pt: 'Janeiro' },
              { en: 'July', pt: 'Julho' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Sábado" is?', options: ['Sunday', 'Monday', 'Saturday', 'Friday'], correct: 2 },
              { q: 'What is "April" in Portuguese?', options: ['Abril', 'Agosto', 'Março', 'Maio'], correct: 0 },
              { q: '"Domingo" means?', options: ['Saturday', 'Sunday', 'Monday', 'Wednesday'], correct: 1 },
              { q: 'What month is "outubro"?', options: ['August', 'September', 'November', 'October'], correct: 3 },
              { q: '"Quinta-feira" is?', options: ['Tuesday', 'Thursday', 'Friday', 'Wednesday'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 1, Lesson 5 – Family Members
      // ------------------------------------------------------------------
      {
        id: 'u1l5',
        title: 'Family Members',
        subtitle: 'A Família',
        emoji: '👨‍👩‍👧‍👦',
        xpReward: 20,
        exercises: [
          {
            type: 'flashcard',
            front: 'father / mother',
            back: 'pai / mãe',
            pronunciation: 'pie / mah-ee (nasal)',
          },
          {
            type: 'flashcard',
            front: 'brother / sister',
            back: 'irmão / irmã',
            pronunciation: 'eer-MOW / eer-MAH (nasal)',
          },
          {
            type: 'flashcard',
            front: 'grandfather / grandmother',
            back: 'avô / avó',
            pronunciation: 'ah-VOH / ah-VOH (different tones)',
          },
          {
            type: 'multiple-choice',
            question: 'What does "irmã" mean?',
            options: ['Mother', 'Aunt', 'Sister', 'Grandmother'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "husband" in Portuguese?',
            options: ['Esposa', 'Marido', 'Filho', 'Tio'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'I have a big family.',
            answer: 'Eu tenho uma família grande.',
            hint: 'EH-oo TEN-yoo OO-mah fah-MEE-lyah GRAN-jee',
          },
          {
            type: 'fill-blank',
            sentence: 'O meu ___ tem 65 anos. (grandfather)',
            answer: 'avô',
            hint: 'grandfather = avô',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'father', pt: 'pai' },
              { en: 'mother', pt: 'mãe' },
              { en: 'son', pt: 'filho' },
              { en: 'daughter', pt: 'filha' },
              { en: 'uncle', pt: 'tio' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "My mother is a teacher"',
            words: ['A', 'minha', 'mãe', 'é', 'professora'],
            answer: ['A', 'minha', 'mãe', 'é', 'professora'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Filho" means?', options: ['Uncle', 'Son', 'Daughter', 'Brother'], correct: 1 },
              { q: 'What is "wife" in Portuguese?', options: ['Marido', 'Namorada', 'Esposa', 'Irmã'], correct: 2 },
              { q: '"Primo" means?', options: ['Brother', 'Father', 'Cousin', 'Friend'], correct: 2 },
              { q: 'What is "aunt" in Portuguese?', options: ['Tio', 'Tia', 'Avó', 'Sobrinha'], correct: 1 },
              { q: '"Neto" means?', options: ['Nephew', 'Grandson', 'Son', 'Uncle'], correct: 1 },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // UNIT 2 – Elementary (A2)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit2',
    title: 'Elementary',
    level: 'A2',
    emoji: '📚',
    color: '#1CB0F6',
    badge: 'Elementary',
    lessons: [
      // ------------------------------------------------------------------
      // Unit 2, Lesson 1 – Common Verbs
      // ------------------------------------------------------------------
      {
        id: 'u2l1',
        title: 'Common Verbs',
        subtitle: 'Verbos Comuns – ser, estar, ter, ir',
        emoji: '🔤',
        xpReward: 25,
        exercises: [
          {
            type: 'flashcard',
            front: 'to be (permanent) – ser',
            back: 'eu sou / você é / ele é / nós somos / vocês são',
            pronunciation: 'EH-oo SOH / voh-SAY EH / EH-lee EH / NOH-sh SOH-moosh / voh-SAYSH SOW',
          },
          {
            type: 'flashcard',
            front: 'to be (temporary) – estar',
            back: 'eu estou / você está / ele está / nós estamos / vocês estão',
            pronunciation: 'EH-oo esh-TOH / voh-SAY esh-TAH / NOH-sh esh-TAH-moosh',
          },
          {
            type: 'flashcard',
            front: 'to have – ter',
            back: 'eu tenho / você tem / ele tem / nós temos / vocês têm',
            pronunciation: 'TEN-yoo / teng / teng / TEH-moosh / TAY-ing',
          },
          {
            type: 'flashcard',
            front: 'to go – ir',
            back: 'eu vou / você vai / ele vai / nós vamos / vocês vão',
            pronunciation: 'voh / vye / vye / VAH-moosh / VOW',
          },
          {
            type: 'multiple-choice',
            question: 'Which form of "ser" means "I am"?',
            options: ['Sou', 'Somos', 'São', 'É'],
            correct: 0,
          },
          {
            type: 'multiple-choice',
            question: '"Estou" is the first person singular of which verb?',
            options: ['Ser', 'Ir', 'Estar', 'Ter'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'She is happy.',
            answer: 'Ela está feliz.',
            hint: 'Use "estar" for temporary states',
          },
          {
            type: 'translation',
            prompt: 'We are going to the beach.',
            answer: 'Nós vamos à praia.',
            hint: 'NOH-sh VAH-moosh ah PRY-ah',
          },
          {
            type: 'fill-blank',
            sentence: 'Eu ___ brasileiro. (I am Brazilian – permanent)',
            answer: 'sou',
            hint: 'Use "ser" for nationality',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'I am (permanent)', pt: 'eu sou' },
              { en: 'I am (temporary)', pt: 'eu estou' },
              { en: 'I have', pt: 'eu tenho' },
              { en: 'I go', pt: 'eu vou' },
              { en: 'We go', pt: 'nós vamos' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'I am a teacher (permanent). Use?', options: ['Estou', 'Sou', 'Vou', 'Tenho'], correct: 1 },
              { q: '"Ela tem 20 anos" means?', options: ['She is 20', 'She has 20 years old', 'She goes at 20', 'She was 20'], correct: 1 },
              { q: '"Vocês vão" means?', options: ['You all have', 'You all are', 'You all go', 'You all want'], correct: 2 },
              { q: '"Nós estamos" uses which verb?', options: ['Ser', 'Ter', 'Ir', 'Estar'], correct: 3 },
              { q: '"Eu vou" means?', options: ['I am', 'I have', 'I go', 'I want'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 2, Lesson 2 – Food & Drinks
      // ------------------------------------------------------------------
      {
        id: 'u2l2',
        title: 'Food & Drinks',
        subtitle: 'Comida e Bebida',
        emoji: '🍽️',
        xpReward: 25,
        exercises: [
          {
            type: 'flashcard',
            front: 'bread / rice / beans',
            back: 'pão / arroz / feijão',
            pronunciation: 'pow / ah-HOSH / fay-ZHOW',
          },
          {
            type: 'flashcard',
            front: 'meat / chicken / fish',
            back: 'carne / frango / peixe',
            pronunciation: 'KAR-nee / FRAN-goo / PAY-shee',
          },
          {
            type: 'flashcard',
            front: 'water / juice / coffee',
            back: 'água / suco / café',
            pronunciation: 'AH-gwah / SOO-koo / kah-FEH',
          },
          {
            type: 'flashcard',
            front: 'fruit: banana / orange / mango',
            back: 'banana / laranja / manga',
            pronunciation: 'bah-NAH-nah / lah-RAN-zhah / MAN-gah',
          },
          {
            type: 'multiple-choice',
            question: 'What is "pão"?',
            options: ['Rice', 'Bread', 'Beans', 'Corn'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "coffee" in Portuguese?',
            options: ['Chá', 'Suco', 'Leite', 'Café'],
            correct: 3,
          },
          {
            type: 'translation',
            prompt: 'I want a glass of water, please.',
            answer: 'Eu quero um copo de água, por favor.',
            hint: 'keh-ROO / KOH-poo / AH-gwah',
          },
          {
            type: 'fill-blank',
            sentence: 'O prato típico brasileiro é arroz com ___. (beans)',
            answer: 'feijão',
            hint: 'fay-ZHOW',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'bread', pt: 'pão' },
              { en: 'water', pt: 'água' },
              { en: 'chicken', pt: 'frango' },
              { en: 'coffee', pt: 'café' },
              { en: 'fruit', pt: 'fruta' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I like rice and beans"',
            words: ['Eu', 'gosto', 'de', 'arroz', 'e', 'feijão'],
            answer: ['Eu', 'gosto', 'de', 'arroz', 'e', 'feijão'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Frango" means?', options: ['Fish', 'Pork', 'Chicken', 'Beef'], correct: 2 },
              { q: 'What is "milk" in Portuguese?', options: ['Leite', 'Suco', 'Água', 'Café'], correct: 0 },
              { q: '"Carne" means?', options: ['Fish', 'Meat', 'Fruit', 'Vegetable'], correct: 1 },
              { q: 'What is "orange juice" in Portuguese?', options: ['Suco de laranja', 'Suco de manga', 'Água de laranja', 'Chá de laranja'], correct: 0 },
              { q: '"Queijo" means?', options: ['Cake', 'Egg', 'Cheese', 'Bread'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 2, Lesson 3 – At the Market
      // ------------------------------------------------------------------
      {
        id: 'u2l3',
        title: 'At the Market',
        subtitle: 'No Mercado',
        emoji: '🛒',
        xpReward: 25,
        exercises: [
          {
            type: 'flashcard',
            front: 'How much does it cost?',
            back: 'Quanto custa?',
            pronunciation: 'KWAN-too KOOS-tah',
          },
          {
            type: 'flashcard',
            front: 'It costs five reais.',
            back: 'Custa cinco reais.',
            pronunciation: 'KOOS-tah SEEN-koo heh-AH-ish',
          },
          {
            type: 'flashcard',
            front: 'expensive / cheap',
            back: 'caro / barato',
            pronunciation: 'KAH-roo / bah-RAH-too',
          },
          {
            type: 'multiple-choice',
            question: 'How do you ask "How much does it cost?"',
            options: ['Onde fica?', 'Quanto custa?', 'Como vai?', 'Tudo bem?'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'What does "barato" mean?',
            options: ['Expensive', 'Free', 'Cheap', 'Price'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'I want to buy two kilos of apples.',
            answer: 'Eu quero comprar dois quilos de maçã.',
            hint: 'keh-ROO kohm-PRAR / KEE-loosh / mah-SAH',
          },
          {
            type: 'fill-blank',
            sentence: 'Esse produto é muito ___! (expensive)',
            answer: 'caro',
            hint: 'KAH-roo',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'price', pt: 'preço' },
              { en: 'market', pt: 'mercado' },
              { en: 'to buy', pt: 'comprar' },
              { en: 'expensive', pt: 'caro' },
              { en: 'change (money)', pt: 'troco' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Ask: "Do you have tomatoes?"',
            words: ['Vocês', 'têm', 'tomates?'],
            answer: ['Vocês', 'têm', 'tomates?'],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'What does "mercado" mean?', options: ['Market', 'Restaurant', 'Bank', 'Hospital'], correct: 0 },
              { q: '"Comprar" means?', options: ['To sell', 'To pay', 'To buy', 'To want'], correct: 2 },
              { q: 'How do you say "receipt"?', options: ['Nota fiscal', 'Cartão', 'Dinheiro', 'Preço'], correct: 0 },
              { q: '"Troco" means?', options: ['Price', 'Payment', 'Change (money)', 'Credit card'], correct: 2 },
              { q: 'What is "cash" in Portuguese?', options: ['Cartão', 'Cheque', 'Dinheiro', 'Pix'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 2, Lesson 4 – Telling the Time
      // ------------------------------------------------------------------
      {
        id: 'u2l4',
        title: 'Telling the Time',
        subtitle: 'Que Horas São?',
        emoji: '⏰',
        xpReward: 25,
        exercises: [
          {
            type: 'flashcard',
            front: 'What time is it?',
            back: 'Que horas são?',
            pronunciation: 'kee OH-rahs SOW',
          },
          {
            type: 'flashcard',
            front: 'It is one o\'clock.',
            back: 'É uma hora.',
            pronunciation: 'EH OO-mah OH-rah',
          },
          {
            type: 'flashcard',
            front: 'It is two thirty.',
            back: 'São duas e meia.',
            pronunciation: 'SOW DOO-ahsh ee MAY-ah',
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "It is three o\'clock"?',
            options: ['É uma hora', 'São três horas', 'É meio-dia', 'São duas horas'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'What does "meio-dia" mean?',
            options: ['Midnight', 'Noon / Midday', 'Evening', 'Morning'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'The meeting is at half past four.',
            answer: 'A reunião é às quatro e meia.',
            hint: 'reh-oo-nee-OW / KWAR-troo ee MAY-ah',
          },
          {
            type: 'fill-blank',
            sentence: 'O trem parte às ___ e quinze. (nine)',
            answer: 'nove',
            hint: 'nine = nove',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'noon', pt: 'meio-dia' },
              { en: 'midnight', pt: 'meia-noite' },
              { en: 'quarter past', pt: 'e quinze' },
              { en: 'half past', pt: 'e meia' },
              { en: 'quarter to', pt: 'menos quinze' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "It is a quarter past ten"',
            words: ['São', 'dez', 'e', 'quinze'],
            answer: ['São', 'dez', 'e', 'quinze'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Que horas são?" means?', options: ['What day is it?', 'What time is it?', 'Where are you?', 'How old are you?'], correct: 1 },
              { q: '"São cinco horas" means?', options: ['It\'s 5:15', 'It\'s 5:00', 'It\'s 5:30', 'It\'s 4:00'], correct: 1 },
              { q: 'How do you say "in the morning"?', options: ['De tarde', 'De noite', 'De manhã', 'De dia'], correct: 2 },
              { q: '"Meia-noite" means?', options: ['Midnight', 'Noon', 'Evening', 'Half hour'], correct: 0 },
              { q: '"São dez para as três" means?', options: ['Ten past three', 'Three ten', 'Ten to three', 'Three thirty'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 2, Lesson 5 – Describing People & Things
      // ------------------------------------------------------------------
      {
        id: 'u2l5',
        title: 'Describing People & Things',
        subtitle: 'Descrevendo Pessoas e Coisas',
        emoji: '🗣️',
        xpReward: 25,
        exercises: [
          {
            type: 'flashcard',
            front: 'tall / short',
            back: 'alto/a / baixo/a',
            pronunciation: 'AL-too / BY-shoo',
          },
          {
            type: 'flashcard',
            front: 'young / old',
            back: 'jovem / velho/a',
            pronunciation: 'ZHOH-veng / VEH-lyoo',
          },
          {
            type: 'flashcard',
            front: 'beautiful / ugly',
            back: 'bonito/a / feio/a',
            pronunciation: 'boo-NEE-too / FAY-oo',
          },
          {
            type: 'multiple-choice',
            question: 'What does "alto" mean?',
            options: ['Short', 'Fat', 'Tall', 'Old'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "She is beautiful"?',
            options: ['Ela é alta', 'Ela é bonita', 'Ela é jovem', 'Ela é rica'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'He is a tall, strong man.',
            answer: 'Ele é um homem alto e forte.',
            hint: 'EH-lee EH oom OH-meng AL-too ee FOR-chee',
          },
          {
            type: 'fill-blank',
            sentence: 'A casa é muito ___. (big)',
            answer: 'grande',
            hint: 'GRAN-jee',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'big', pt: 'grande' },
              { en: 'small', pt: 'pequeno/a' },
              { en: 'new', pt: 'novo/a' },
              { en: 'old', pt: 'velho/a' },
              { en: 'fast', pt: 'rápido/a' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "This book is very interesting"',
            words: ['Este', 'livro', 'é', 'muito', 'interessante'],
            answer: ['Este', 'livro', 'é', 'muito', 'interessante'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Gordo" means?', options: ['Thin', 'Fat', 'Tall', 'Short'], correct: 1 },
              { q: 'What is "slow" in Portuguese?', options: ['Rápido', 'Devagar', 'Forte', 'Fraco'], correct: 1 },
              { q: '"Inteligente" means?', options: ['Happy', 'Funny', 'Intelligent', 'Strong'], correct: 2 },
              { q: '"Simpático" means?', options: ['Simple', 'Nice/Friendly', 'Sad', 'Quiet'], correct: 1 },
              { q: 'What is "tired" in Portuguese?', options: ['Feliz', 'Triste', 'Cansado', 'Animado'], correct: 2 },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // UNIT 3 – Pre-Intermediate (B1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit3',
    title: 'Pre-Intermediate',
    level: 'B1',
    emoji: '🚀',
    color: '#CE82FF',
    badge: 'Pre-Intermediate',
    lessons: [
      // ------------------------------------------------------------------
      // Unit 3, Lesson 1 – Past Tense
      // ------------------------------------------------------------------
      {
        id: 'u3l1',
        title: 'Past Tense',
        subtitle: 'Pretérito Perfeito',
        emoji: '📖',
        xpReward: 30,
        exercises: [
          {
            type: 'flashcard',
            front: 'I spoke – falar (to speak)',
            back: 'eu falei / você falou / ele falou / nós falamos / vocês falaram',
            pronunciation: 'fah-LAY / fah-LOH / fah-LAH-moosh / fah-LAH-rowm',
          },
          {
            type: 'flashcard',
            front: 'I ate – comer (to eat)',
            back: 'eu comi / você comeu / ele comeu / nós comemos / vocês comeram',
            pronunciation: 'koh-MEE / koh-MEH-oo / koh-MEH-moosh / koh-MEH-rowm',
          },
          {
            type: 'flashcard',
            front: 'I went – ir (to go)',
            back: 'eu fui / você foi / ele foi / nós fomos / vocês foram',
            pronunciation: 'FOO-ee / foy / foy / FOH-moosh / FOH-rowm',
          },
          {
            type: 'multiple-choice',
            question: 'What is "I spoke" in Portuguese?',
            options: ['Eu falo', 'Eu falei', 'Eu falava', 'Eu falarei'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: '"Ela comeu" means?',
            options: ['She eats', 'She will eat', 'She was eating', 'She ate'],
            correct: 3,
          },
          {
            type: 'translation',
            prompt: 'Yesterday I went to the market.',
            answer: 'Ontem eu fui ao mercado.',
            hint: 'ON-teng / FOO-ee / OW mer-KAH-doo',
          },
          {
            type: 'translation',
            prompt: 'We traveled to São Paulo last year.',
            answer: 'Nós viajamos para São Paulo no ano passado.',
            hint: 'vee-ah-ZHAH-moosh / PAH-rah / AH-noo pah-SAH-doo',
          },
          {
            type: 'fill-blank',
            sentence: 'Eu ___ muito ontem. (I slept a lot)',
            answer: 'dormi',
            hint: 'dormir → dormi (I slept)',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'I spoke', pt: 'eu falei' },
              { en: 'she ate', pt: 'ela comeu' },
              { en: 'we went', pt: 'nós fomos' },
              { en: 'they arrived', pt: 'eles chegaram' },
              { en: 'you worked', pt: 'você trabalhou' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Eu fui" means?', options: ['I go', 'I went', 'I will go', 'I was going'], correct: 1 },
              { q: 'Past of "fazer" (to do) – 1st person?', options: ['Fiz', 'Faço', 'Fazia', 'Farei'], correct: 0 },
              { q: '"Eles vieram" means?', options: ['They go', 'They came', 'They left', 'They arrived'], correct: 1 },
              { q: 'Past of "ver" (to see) – 1st person?', options: ['Vejo', 'Vi', 'Via', 'Verei'], correct: 1 },
              { q: '"Ontem" means?', options: ['Today', 'Tomorrow', 'Yesterday', 'Last year'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 3, Lesson 2 – Travel & Directions
      // ------------------------------------------------------------------
      {
        id: 'u3l2',
        title: 'Travel & Directions',
        subtitle: 'Viagem e Direções',
        emoji: '🗺️',
        xpReward: 30,
        exercises: [
          {
            type: 'flashcard',
            front: 'turn left / turn right',
            back: 'vire à esquerda / vire à direita',
            pronunciation: 'VEE-ree ah esh-KER-dah / ah jee-RAY-tah',
          },
          {
            type: 'flashcard',
            front: 'straight ahead / the corner',
            back: 'em frente / a esquina',
            pronunciation: 'eng FREN-chee / ah esh-KEE-nah',
          },
          {
            type: 'flashcard',
            front: 'airport / train station / bus stop',
            back: 'aeroporto / estação de trem / ponto de ônibus',
            pronunciation: 'ah-eh-roh-POR-too / esh-tah-SOW / PON-too',
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "turn left"?',
            options: ['Vire à direita', 'Siga em frente', 'Vire à esquerda', 'Pare aqui'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'What does "aeroporto" mean?',
            options: ['Train station', 'Bus stop', 'Airport', 'Harbour'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'Excuse me, where is the hotel?',
            answer: 'Com licença, onde fica o hotel?',
            hint: 'kong lee-SEN-sah / ON-jee FEE-kah / oh-TEL',
          },
          {
            type: 'translation',
            prompt: 'How far is the beach?',
            answer: 'Qual é a distância até a praia?',
            hint: 'kwal EH / jis-TAN-see-ah / ah-TEH ah PRY-ah',
          },
          {
            type: 'fill-blank',
            sentence: 'O hotel fica a dois quarteirões ___. (from here)',
            answer: 'daqui',
            hint: 'daqui = from here',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'street', pt: 'rua' },
              { en: 'avenue', pt: 'avenida' },
              { en: 'square', pt: 'praça' },
              { en: 'bridge', pt: 'ponte' },
              { en: 'neighbourhood', pt: 'bairro' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Onde fica?" means?', options: ['How much?', 'Where is?', 'How far?', 'When is?'], correct: 1 },
              { q: '"Siga em frente" means?', options: ['Turn left', 'Turn right', 'Go straight', 'Stop here'], correct: 2 },
              { q: 'What is "bus" in Portuguese?', options: ['Metrô', 'Trem', 'Ônibus', 'Avião'], correct: 2 },
              { q: '"À direita" means?', options: ['On the left', 'Straight ahead', 'On the right', 'Behind'], correct: 2 },
              { q: 'What is "map" in Portuguese?', options: ['Mapa', 'Rua', 'Bússola', 'Guia'], correct: 0 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 3, Lesson 3 – Weather & Seasons
      // ------------------------------------------------------------------
      {
        id: 'u3l3',
        title: 'Weather & Seasons',
        subtitle: 'Tempo e Estações',
        emoji: '🌦️',
        xpReward: 30,
        exercises: [
          {
            type: 'flashcard',
            front: 'What\'s the weather like?',
            back: 'Como está o tempo?',
            pronunciation: 'KOH-moo esh-TAH oo TEM-poo',
          },
          {
            type: 'flashcard',
            front: 'It is sunny / rainy / cloudy',
            back: 'Está ensolarado / chuvoso / nublado',
            pronunciation: 'eng-soh-lah-RAH-doo / shoo-VOH-zoo / noo-BLAH-doo',
          },
          {
            type: 'flashcard',
            front: 'spring / summer / autumn / winter',
            back: 'primavera / verão / outono / inverno',
            pronunciation: 'pree-mah-VEH-rah / veh-ROW / oo-TOH-noo / een-VER-noo',
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "It is raining"?',
            options: ['Está nevando', 'Está chovendo', 'Está ventando', 'Está quente'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'What is "summer" in Portuguese?',
            options: ['Inverno', 'Primavera', 'Outono', 'Verão'],
            correct: 3,
          },
          {
            type: 'translation',
            prompt: 'It is very hot in Brazil in summer.',
            answer: 'Está muito quente no Brasil no verão.',
            hint: 'esh-TAH / KWEN-chee / noo BRAH-zeel / veh-ROW',
          },
          {
            type: 'fill-blank',
            sentence: 'No ___ cai neve nas montanhas. (winter)',
            answer: 'inverno',
            hint: 'een-VER-noo',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'hot', pt: 'quente' },
              { en: 'cold', pt: 'frio' },
              { en: 'wind', pt: 'vento' },
              { en: 'rain', pt: 'chuva' },
              { en: 'sun', pt: 'sol' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "Today it is cold and windy"',
            words: ['Hoje', 'está', 'frio', 'e', 'ventoso'],
            answer: ['Hoje', 'está', 'frio', 'e', 'ventoso'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Chuva" means?', options: ['Sun', 'Wind', 'Rain', 'Snow'], correct: 2 },
              { q: 'What is "temperature" in Portuguese?', options: ['Tempo', 'Temperatura', 'Clima', 'Estação'], correct: 1 },
              { q: '"Está nevando" means?', options: ['It\'s raining', 'It\'s snowing', 'It\'s windy', 'It\'s cloudy'], correct: 1 },
              { q: 'What is "autumn" in Portuguese?', options: ['Verão', 'Inverno', 'Primavera', 'Outono'], correct: 3 },
              { q: '"Frio" means?', options: ['Hot', 'Warm', 'Cold', 'Cool'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 3, Lesson 4 – Health & Body Parts
      // ------------------------------------------------------------------
      {
        id: 'u3l4',
        title: 'Health & Body Parts',
        subtitle: 'Saúde e Partes do Corpo',
        emoji: '🏥',
        xpReward: 30,
        exercises: [
          {
            type: 'flashcard',
            front: 'head / hair / eye / ear / nose / mouth',
            back: 'cabeça / cabelo / olho / orelha / nariz / boca',
            pronunciation: 'kah-BEH-sah / kah-BEH-loo / OH-lyoo / oh-REH-lyah / nah-REESH / BOH-kah',
          },
          {
            type: 'flashcard',
            front: 'arm / hand / leg / foot',
            back: 'braço / mão / perna / pé',
            pronunciation: 'BRAH-soo / MOW / PER-nah / peh',
          },
          {
            type: 'flashcard',
            front: 'I am not feeling well.',
            back: 'Não estou me sentindo bem.',
            pronunciation: 'NOW esh-TOH mee sen-CHIN-doo beng',
          },
          {
            type: 'multiple-choice',
            question: 'What does "cabeça" mean?',
            options: ['Arm', 'Leg', 'Head', 'Back'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "I have a headache"?',
            options: ['Estou com febre', 'Estou com dor de cabeça', 'Estou cansado', 'Tenho tosse'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'I need to see a doctor.',
            answer: 'Preciso ver um médico.',
            hint: 'preh-SEE-zoo / VER / oom MEH-jee-koo',
          },
          {
            type: 'fill-blank',
            sentence: 'O paciente tem ___ alta. (fever)',
            answer: 'febre',
            hint: 'febre = fever',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'heart', pt: 'coração' },
              { en: 'lung', pt: 'pulmão' },
              { en: 'stomach', pt: 'estômago' },
              { en: 'tooth', pt: 'dente' },
              { en: 'skin', pt: 'pele' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I have a sore throat"',
            words: ['Estou', 'com', 'dor', 'de', 'garganta'],
            answer: ['Estou', 'com', 'dor', 'de', 'garganta'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Dor" means?', options: ['Doctor', 'Medicine', 'Pain', 'Illness'], correct: 2 },
              { q: 'What is "pharmacy" in Portuguese?', options: ['Hospital', 'Clínica', 'Farmácia', 'Pronto-socorro'], correct: 2 },
              { q: '"Remédio" means?', options: ['Doctor', 'Medicine/remedy', 'Treatment', 'Exam'], correct: 1 },
              { q: 'What is "pregnant" in Portuguese?', options: ['Grávida', 'Doente', 'Saudável', 'Cansada'], correct: 0 },
              { q: '"Alergia" means?', options: ['Surgery', 'Allergy', 'Infection', 'Virus'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 3, Lesson 5 – Hobbies & Free Time
      // ------------------------------------------------------------------
      {
        id: 'u3l5',
        title: 'Hobbies & Free Time',
        subtitle: 'Hobbies e Tempo Livre',
        emoji: '🎮',
        xpReward: 30,
        exercises: [
          {
            type: 'flashcard',
            front: 'to play / to read / to listen',
            back: 'jogar / ler / escutar (ouvir)',
            pronunciation: 'zhoh-GAR / ler / esh-koo-TAR',
          },
          {
            type: 'flashcard',
            front: 'football / music / cinema',
            back: 'futebol / música / cinema',
            pronunciation: 'foo-chee-BOL / MOO-zee-kah / see-NEH-mah',
          },
          {
            type: 'multiple-choice',
            question: 'What does "futebol" mean?',
            options: ['Basketball', 'Football/Soccer', 'Tennis', 'Volleyball'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "I like to read"?',
            options: ['Eu gosto de jogar', 'Eu gosto de ler', 'Eu gosto de cantar', 'Eu gosto de dançar'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'What do you like to do in your free time?',
            answer: 'O que você gosta de fazer no seu tempo livre?',
            hint: 'oo keh voh-SAY GOS-tah / fah-ZER / TEM-poo LEE-vree',
          },
          {
            type: 'fill-blank',
            sentence: 'Eu ___ de ouvir música clássica. (I like)',
            answer: 'gosto',
            hint: 'gostar de = to like',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'to dance', pt: 'dançar' },
              { en: 'to paint', pt: 'pintar' },
              { en: 'to travel', pt: 'viajar' },
              { en: 'to cook', pt: 'cozinhar' },
              { en: 'to swim', pt: 'nadar' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I love playing football with my friends"',
            words: ['Eu', 'adoro', 'jogar', 'futebol', 'com', 'meus', 'amigos'],
            answer: ['Eu', 'adoro', 'jogar', 'futebol', 'com', 'meus', 'amigos'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Dançar" means?', options: ['To run', 'To jump', 'To dance', 'To sing'], correct: 2 },
              { q: 'What is "hobby" in Portuguese?', options: ['Passatempo', 'Trabalho', 'Estudo', 'Descanso'], correct: 0 },
              { q: '"Ler" means?', options: ['To write', 'To read', 'To study', 'To speak'], correct: 1 },
              { q: 'What is "concert" in Portuguese?', options: ['Show', 'Concerto', 'Peça', 'Cinema'], correct: 1 },
              { q: '"Pintar" means?', options: ['To sculpt', 'To draw', 'To paint', 'To photograph'], correct: 2 },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // UNIT 4 – Intermediate (B2)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit4',
    title: 'Intermediate',
    level: 'B2',
    emoji: '⭐',
    color: '#FF9600',
    badge: 'Intermediate',
    lessons: [
      // ------------------------------------------------------------------
      // Unit 4, Lesson 1 – Future & Conditional
      // ------------------------------------------------------------------
      {
        id: 'u4l1',
        title: 'Future & Conditional',
        subtitle: 'Futuro e Condicional',
        emoji: '🔮',
        xpReward: 35,
        exercises: [
          {
            type: 'flashcard',
            front: 'Future tense – falar',
            back: 'eu falarei / você falará / ele falará / nós falaremos / vocês falarão',
            pronunciation: 'fah-lah-REY / fah-lah-RAH / fah-lah-REH-moosh / fah-lah-ROW',
          },
          {
            type: 'flashcard',
            front: 'Near future – ir + infinitive',
            back: 'Eu vou falar / Você vai comer / Nós vamos viajar',
            pronunciation: 'voh fah-LAR / vye koh-MER / VAH-moosh vee-ah-ZHAR',
          },
          {
            type: 'flashcard',
            front: 'Conditional – falar',
            back: 'eu falaria / você falaria / nós falaríamos',
            pronunciation: 'fah-lah-REE-ah / fah-lah-REE-ah-moosh',
          },
          {
            type: 'multiple-choice',
            question: '"Eu comerei" means?',
            options: ['I ate', 'I eat', 'I will eat', 'I would eat'],
            correct: 2,
          },
          {
            type: 'multiple-choice',
            question: 'What is the conditional of "ir" – 1st person singular?',
            options: ['Irei', 'Iria', 'Fui', 'Vou'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'Tomorrow I will travel to Rio de Janeiro.',
            answer: 'Amanhã eu viajarei para o Rio de Janeiro.',
            hint: 'ah-mah-NYAH / vee-ah-zhah-REY / pah-rah oo HEE-oo',
          },
          {
            type: 'fill-blank',
            sentence: 'Se eu tivesse dinheiro, ___ uma casa nova. (I would buy)',
            answer: 'compraria',
            hint: 'comprar → compraria (conditional)',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'I will speak', pt: 'eu falarei' },
              { en: 'she will eat', pt: 'ela comerá' },
              { en: 'we will go', pt: 'nós iremos' },
              { en: 'I would like', pt: 'eu gostaria' },
              { en: 'they would come', pt: 'eles viriam' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I would travel if I had money"',
            words: ['Eu', 'viajaria', 'se', 'tivesse', 'dinheiro'],
            answer: ['Eu', 'viajaria', 'se', 'tivesse', 'dinheiro'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Nós vamos comer" means?', options: ['We ate', 'We are eating', 'We will eat', 'We would eat'], correct: 2 },
              { q: 'What tense is "eu faria"?', options: ['Present', 'Past', 'Future', 'Conditional'], correct: 3 },
              { q: '"Ele viajará" means?', options: ['He traveled', 'He will travel', 'He would travel', 'He travels'], correct: 1 },
              { q: '"Amanhã" means?', options: ['Yesterday', 'Today', 'Tomorrow', 'Later'], correct: 2 },
              { q: 'Future of "ter" – 1st person?', options: ['Tinha', 'Tenho', 'Terei', 'Teria'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 4, Lesson 2 – Shopping & Money
      // ------------------------------------------------------------------
      {
        id: 'u4l2',
        title: 'Shopping & Money',
        subtitle: 'Compras e Dinheiro',
        emoji: '🛍️',
        xpReward: 35,
        exercises: [
          {
            type: 'flashcard',
            front: 'I would like to try this on.',
            back: 'Eu gostaria de experimentar isso.',
            pronunciation: 'goosh-tah-REE-ah / esh-peh-ree-men-TAR',
          },
          {
            type: 'flashcard',
            front: 'Do you accept credit cards?',
            back: 'Vocês aceitam cartão de crédito?',
            pronunciation: 'ah-SAY-tang / kar-TOW / KREH-jee-too',
          },
          {
            type: 'multiple-choice',
            question: 'What does "desconto" mean?',
            options: ['Price', 'Discount', 'Receipt', 'Change'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "I am just looking"?',
            options: ['Estou procurando', 'Só estou olhando', 'Quero comprar', 'Posso experimentar?'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'Can I pay in instalments?',
            answer: 'Posso pagar em prestações?',
            hint: 'POH-soo pah-GAR / preh-stah-SOYSH',
          },
          {
            type: 'fill-blank',
            sentence: 'O produto custa cem ___ . (reais)',
            answer: 'reais',
            hint: 'Brazilian currency = Real (pl. reais)',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'sale', pt: 'promoção' },
              { en: 'size', pt: 'tamanho' },
              { en: 'fitting room', pt: 'provador' },
              { en: 'queue / line', pt: 'fila' },
              { en: 'receipt', pt: 'recibo' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "I want to exchange this product"',
            words: ['Eu', 'quero', 'trocar', 'este', 'produto'],
            answer: ['Eu', 'quero', 'trocar', 'este', 'produto'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Promoção" means?', options: ['Product', 'Promotion/Sale', 'Price', 'Payment'], correct: 1 },
              { q: 'What is "credit card" in Portuguese?', options: ['Dinheiro', 'Cheque', 'Cartão de crédito', 'Pix'], correct: 2 },
              { q: '"Troco" means?', options: ['Exchange', 'Change (money)', 'Discount', 'Bill'], correct: 1 },
              { q: 'What is "shopping mall" in Portuguese?', options: ['Loja', 'Mercado', 'Shopping', 'Feira'], correct: 2 },
              { q: '"Parcelado" means?', options: ['Cash only', 'In instalments', 'Paid', 'Free'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 4, Lesson 3 – Work & Professions
      // ------------------------------------------------------------------
      {
        id: 'u4l3',
        title: 'Work & Professions',
        subtitle: 'Trabalho e Profissões',
        emoji: '💼',
        xpReward: 35,
        exercises: [
          {
            type: 'flashcard',
            front: 'doctor / nurse / teacher / engineer',
            back: 'médico/a – enfermeiro/a – professor/a – engenheiro/a',
            pronunciation: 'MEH-jee-koo / eng-fer-MAY-roo / proh-feh-SOR / eng-zhen-YAY-roo',
          },
          {
            type: 'flashcard',
            front: 'lawyer / journalist / chef / driver',
            back: 'advogado/a – jornalista – chef (cozinheiro/a) – motorista',
            pronunciation: 'ah-dvoh-GAH-doo / zhor-nah-LEES-tah / shef / moh-toh-REES-tah',
          },
          {
            type: 'multiple-choice',
            question: 'What does "advogado" mean?',
            options: ['Doctor', 'Lawyer', 'Engineer', 'Accountant'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "I work in a hospital"?',
            options: ['Eu trabalho em casa', 'Eu trabalho em um hospital', 'Eu estudo medicina', 'Eu sou médico'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'What is your profession?',
            answer: 'Qual é a sua profissão?',
            hint: 'kwal EH ah SOO-ah proh-fee-SOW',
          },
          {
            type: 'fill-blank',
            sentence: 'Ela trabalha como ___ numa escola. (teacher)',
            answer: 'professora',
            hint: 'female teacher = professora',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'firefighter', pt: 'bombeiro' },
              { en: 'police officer', pt: 'policial' },
              { en: 'dentist', pt: 'dentista' },
              { en: 'architect', pt: 'arquiteto' },
              { en: 'accountant', pt: 'contador' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "My brother is an engineer"',
            words: ['O', 'meu', 'irmão', 'é', 'engenheiro'],
            answer: ['O', 'meu', 'irmão', 'é', 'engenheiro'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Emprego" means?', options: ['Profession', 'Job/Employment', 'Salary', 'Company'], correct: 1 },
              { q: 'What is "salary" in Portuguese?', options: ['Emprego', 'Empresa', 'Salário', 'Trabalho'], correct: 2 },
              { q: '"Reunião" means?', options: ['Office', 'Meeting', 'Boss', 'Employee'], correct: 1 },
              { q: 'What is "retirement" in Portuguese?', options: ['Aposentadoria', 'Demissão', 'Contrato', 'Benefício'], correct: 0 },
              { q: '"Chefe" means?', options: ['Chef (cook)', 'Boss/Chief', 'Client', 'Colleague'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 4, Lesson 4 – Brazilian Culture & Festivals
      // ------------------------------------------------------------------
      {
        id: 'u4l4',
        title: 'Brazilian Culture & Festivals',
        subtitle: 'Cultura e Festas Brasileiras',
        emoji: '🎉',
        xpReward: 35,
        exercises: [
          {
            type: 'flashcard',
            front: 'Carnaval',
            back: 'The biggest festival in Brazil – four days of samba, parades, and costumes before Lent.',
            pronunciation: 'kar-nah-VAL',
          },
          {
            type: 'flashcard',
            front: 'Festa Junina',
            back: 'June festival celebrating rural culture with forró music, quadrilha dancing, and corn-based foods.',
            pronunciation: 'FES-tah zhoo-NEE-nah',
          },
          {
            type: 'flashcard',
            front: 'Capoeira / Samba / Forró / Axé',
            back: 'Famous Brazilian art forms and music genres',
            pronunciation: 'kah-poo-AY-rah / SAM-bah / foh-HOH / ah-SHEH',
          },
          {
            type: 'multiple-choice',
            question: 'What is "Carnaval"?',
            options: ['A Brazilian dance only', 'A pre-Lent festival with parades', 'A June harvest festival', 'A Christmas celebration'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'What music is associated with Festa Junina?',
            options: ['Samba', 'Axé', 'Forró', 'Funk'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'Brazil is known for its cultural diversity.',
            answer: 'O Brasil é conhecido pela sua diversidade cultural.',
            hint: 'koh-nyeh-SEE-doo / jee-ver-see-DAH-jee / kool-too-RAL',
          },
          {
            type: 'fill-blank',
            sentence: 'A ___ é o maior festival popular do Brasil. (Carnaval)',
            answer: 'Carnaval',
            hint: 'kar-nah-VAL',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'parade', pt: 'desfile' },
              { en: 'costume', pt: 'fantasia' },
              { en: 'samba school', pt: 'escola de samba' },
              { en: 'drum', pt: 'tambor' },
              { en: 'celebration', pt: 'celebração' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "The parade is very beautiful"',
            words: ['O', 'desfile', 'é', 'muito', 'bonito'],
            answer: ['O', 'desfile', 'é', 'muito', 'bonito'],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'What is the national sport of Brazil?', options: ['Capoeira', 'Futebol', 'Vôlei', 'Jiu-Jítsu'], correct: 1 },
              { q: '"Batuque" refers to?', options: ['A dance', 'A type of drum rhythm', 'A festival food', 'A costume'], correct: 1 },
              { q: 'Where is the biggest Carnaval held?', options: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'], correct: 2 },
              { q: '"Caipirinha" is?', options: ['A food', 'A dance', 'A cocktail', 'A carnival costume'], correct: 2 },
              { q: '"Feijoada" is?', options: ['A festival', 'A black bean stew', 'A music style', 'A dance'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 4, Lesson 5 – Opinions & Debates
      // ------------------------------------------------------------------
      {
        id: 'u4l5',
        title: 'Opinions & Debates',
        subtitle: 'Opiniões e Debates',
        emoji: '🗣️',
        xpReward: 35,
        exercises: [
          {
            type: 'flashcard',
            front: 'In my opinion… / I think that…',
            back: 'Na minha opinião… / Eu acho que…',
            pronunciation: 'nah MEE-nyah oh-pee-nee-OW / EH-oo AH-shoo kee',
          },
          {
            type: 'flashcard',
            front: 'I agree / I disagree',
            back: 'Concordo / Discordo',
            pronunciation: 'kong-KOR-doo / jis-KOR-doo',
          },
          {
            type: 'flashcard',
            front: 'On the other hand… / However…',
            back: 'Por outro lado… / No entanto…',
            pronunciation: 'por OH-troo LAH-doo / noo eng-TAN-too',
          },
          {
            type: 'multiple-choice',
            question: 'How do you say "I think that"?',
            options: ['Eu sei que', 'Eu acho que', 'Eu espero que', 'Eu prefiro que'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: '"Discordo" means?',
            options: ['I agree', 'I understand', 'I disagree', 'I propose'],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'In my opinion, education is the most important investment.',
            answer: 'Na minha opinião, a educação é o investimento mais importante.',
            hint: 'eh-doo-kah-SOW / een-ves-tee-MEN-too / mais eem-por-TAN-chee',
          },
          {
            type: 'fill-blank',
            sentence: 'Eu ___ com a sua decisão. (I agree)',
            answer: 'concordo',
            hint: 'kong-KOR-doo',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'in my opinion', pt: 'na minha opinião' },
              { en: 'I believe that', pt: 'Acredito que' },
              { en: 'it seems to me', pt: 'parece-me' },
              { en: 'without doubt', pt: 'sem dúvida' },
              { en: 'on the contrary', pt: 'ao contrário' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Sem dúvida" means?', options: ['With doubt', 'Without doubt', 'I doubt', 'Doubtful'], correct: 1 },
              { q: '"No entanto" means?', options: ['Therefore', 'However', 'In addition', 'For example'], correct: 1 },
              { q: 'How do you say "I prefer"?', options: ['Eu prefiro', 'Eu quero', 'Eu gosto', 'Eu acho'], correct: 0 },
              { q: '"Além disso" means?', options: ['However', 'Therefore', 'Furthermore', 'Although'], correct: 2 },
              { q: '"Por exemplo" means?', options: ['For that reason', 'For example', 'For now', 'For sure'], correct: 1 },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // UNIT 5 – Advanced / Pro (C1)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit5',
    title: 'Advanced / Pro',
    level: 'C1',
    emoji: '🏆',
    color: '#FF4B4B',
    badge: 'Pro',
    lessons: [
      // ------------------------------------------------------------------
      // Unit 5, Lesson 1 – Subjunctive Mood
      // ------------------------------------------------------------------
      {
        id: 'u5l1',
        title: 'Subjunctive Mood',
        subtitle: 'Modo Subjuntivo',
        emoji: '🧠',
        xpReward: 40,
        exercises: [
          {
            type: 'flashcard',
            front: 'Present Subjunctive – falar',
            back: 'que eu fale / que você fale / que ele fale / que nós falemos / que vocês falem',
            pronunciation: 'FAH-lee / FAH-lee / FAH-lee / fah-LEH-moosh / FAH-leng',
          },
          {
            type: 'flashcard',
            front: 'Imperfect Subjunctive – falar',
            back: 'se eu falasse / se você falasse / se nós falássemos',
            pronunciation: 'fah-LAH-see / fah-LAH-see / fah-LAH-see-moosh',
          },
          {
            type: 'multiple-choice',
            question: '"Espero que ele venha" means?',
            options: ['I hope he came', 'I hope he comes', 'He came', 'He will come'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'Which trigger typically introduces the subjunctive?',
            options: ['porque', 'embora', 'enquanto', 'quando (indicative)'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'I want him to study more.',
            answer: 'Eu quero que ele estude mais.',
            hint: 'quero que + subjunctive: esh-TOO-jee',
          },
          {
            type: 'fill-blank',
            sentence: 'É importante que você ___ a tempo. (arrive – chegar)',
            answer: 'chegue',
            hint: 'chegar → chegue (present subjunctive)',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'I hope that', pt: 'Espero que' },
              { en: 'It is necessary that', pt: 'É necessário que' },
              { en: 'although', pt: 'embora' },
              { en: 'provided that', pt: 'desde que' },
              { en: 'unless', pt: 'a menos que' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "It is important that he be honest"',
            words: ['É', 'importante', 'que', 'ele', 'seja', 'honesto'],
            answer: ['É', 'importante', 'que', 'ele', 'seja', 'honesto'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Embora" requires which mood?', options: ['Indicative', 'Subjunctive', 'Imperative', 'Infinitive'], correct: 1 },
              { q: '"Tomara que" expresses?', options: ['Fear', 'Hope/wish', 'Doubt', 'Certainty'], correct: 1 },
              { q: 'Subjunctive of "ser" – 1st person?', options: ['Sou', 'Seria', 'Seja', 'Fui'], correct: 2 },
              { q: '"Duvido que ele saiba" uses?', options: ['Indicative', 'Conditional', 'Subjunctive', 'Imperative'], correct: 2 },
              { q: '"Desde que" means?', options: ['Although', 'Unless', 'Provided that', 'Before'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 5, Lesson 2 – Idioms & Slang
      // ------------------------------------------------------------------
      {
        id: 'u5l2',
        title: 'Idiomatic Expressions & Slang',
        subtitle: 'Expressões Idiomáticas e Gírias',
        emoji: '😎',
        xpReward: 40,
        exercises: [
          {
            type: 'flashcard',
            front: 'Saudade',
            back: 'A deep nostalgic longing for something or someone; untranslatable concept.',
            pronunciation: 'sow-DAH-jee',
          },
          {
            type: 'flashcard',
            front: 'Que saudade! / Saudade de você',
            back: 'I miss it so much! / I miss you',
            pronunciation: 'kee sow-DAH-jee / sow-DAH-jee jee voh-SAY',
          },
          {
            type: 'flashcard',
            front: 'Mó / Mó legal / Mó saudade',
            back: 'Informal intensifier: "really cool" / "really miss"',
            pronunciation: 'moh / moh lee-GAL',
          },
          {
            type: 'multiple-choice',
            question: '"Que legal!" means?',
            options: ['How legal!', 'How cool / awesome!', 'How expensive!', 'How boring!'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: '"Dar um jeito" means?',
            options: ['To give a gift', 'To find a way / improvise', 'To turn right', 'To take a rest'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'He always finds a way to fix things. (use: dar um jeito)',
            answer: 'Ele sempre dá um jeito de resolver as coisas.',
            hint: 'DAH oom ZHAY-too / reh-zol-VER',
          },
          {
            type: 'fill-blank',
            sentence: '"Estou com ___!" (I\'m broke – informal)',
            answer: 'o bolso vazio',
            hint: 'bolso vazio = empty pocket (broke)',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'to be broke', pt: 'estar duro/a' },
              { en: 'to chat (informal)', pt: 'bater papo' },
              { en: 'cool / awesome', pt: 'massa / legal' },
              { en: 'to be annoyed', pt: 'estar de saco cheio' },
              { en: 'to miss someone', pt: 'ter saudade de' },
            ],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Bater papo" means?', options: ['To fight', 'To chat casually', 'To clap', 'To work hard'], correct: 1 },
              { q: '"Cara" as slang means?', options: ['Face', 'Dude/Man/Guy', 'Car', 'Expensive'], correct: 1 },
              { q: '"Vixe!" expresses?', options: ['Anger', 'Surprise/Dismay', 'Agreement', 'Joy'], correct: 1 },
              { q: '"Tá bom" means?', options: ['It\'s bad', 'It\'s okay / alright', 'It\'s great', 'It\'s difficult'], correct: 1 },
              { q: '"Pisar na bola" means?', options: ['To step on the ball', 'To score a goal', 'To mess up', 'To run fast'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 5, Lesson 3 – News & Current Events
      // ------------------------------------------------------------------
      {
        id: 'u5l3',
        title: 'News & Current Events',
        subtitle: 'Notícias e Atualidades',
        emoji: '📰',
        xpReward: 40,
        exercises: [
          {
            type: 'flashcard',
            front: 'according to / the government announced',
            back: 'de acordo com / o governo anunciou',
            pronunciation: 'jee ah-KOR-doo kong / oh goh-VER-noo ah-noon-see-OH',
          },
          {
            type: 'flashcard',
            front: 'inflation / unemployment / economy',
            back: 'inflação / desemprego / economia',
            pronunciation: 'een-flah-SOW / jeh-zeng-PREH-goo / eh-koh-noh-MEE-ah',
          },
          {
            type: 'multiple-choice',
            question: 'What does "notícia" mean?',
            options: ['Notice', 'News item', 'Newspaper', 'Headline'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: '"Eleições" means?',
            options: ['Selection', 'Elections', 'Legislation', 'Policy'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'The president declared a state of emergency.',
            answer: 'O presidente declarou estado de emergência.',
            hint: 'preh-zee-DEN-chee / deh-klah-ROH / eh-STAH-doo / eh-mer-ZHEN-see-ah',
          },
          {
            type: 'fill-blank',
            sentence: 'A taxa de ___ caiu para 8%. (unemployment)',
            answer: 'desemprego',
            hint: 'jeh-zeng-PREH-goo',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'headline', pt: 'manchete' },
              { en: 'journalist', pt: 'jornalista' },
              { en: 'report', pt: 'reportagem' },
              { en: 'breaking news', pt: 'notícia de última hora' },
              { en: 'editorial', pt: 'editorial' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "The economy grew by three percent"',
            words: ['A', 'economia', 'cresceu', 'três', 'por', 'cento'],
            answer: ['A', 'economia', 'cresceu', 'três', 'por', 'cento'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Mídia" means?', options: ['Middle', 'Media', 'Mediocre', 'Mayor'], correct: 1 },
              { q: '"Crise" means?', options: ['Crime', 'Crisis', 'Growth', 'Policy'], correct: 1 },
              { q: '"Manifestação" means?', options: ['Manifestation', 'Demonstration/Protest', 'Management', 'Map'], correct: 1 },
              { q: '"Reforma" means?', options: ['Reforestation', 'Reform', 'Report', 'Referendum'], correct: 1 },
              { q: '"Senado" means?', options: ['Mayor', 'President', 'Senate', 'Congress'], correct: 2 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 5, Lesson 4 – Complex Grammar
      // ------------------------------------------------------------------
      {
        id: 'u5l4',
        title: 'Complex Grammar',
        subtitle: 'Gramática Avançada – Voz Passiva & Discurso Indireto',
        emoji: '📝',
        xpReward: 40,
        exercises: [
          {
            type: 'flashcard',
            front: 'Passive Voice – ser + past participle',
            back: 'A carta foi escrita por Maria. (The letter was written by Maria.)',
            pronunciation: 'ah KAR-tah foy esh-KREE-tah por mah-REE-ah',
          },
          {
            type: 'flashcard',
            front: 'Reported Speech – present → past',
            back: '"Eu gosto de café." → Ela disse que gostava de café.',
            pronunciation: 'EH-lah JEE-see kee goosh-TAH-vah',
          },
          {
            type: 'multiple-choice',
            question: 'Identify the passive sentence:',
            options: [
              'Maria escreveu o relatório.',
              'O relatório foi escrito por Maria.',
              'Maria vai escrever o relatório.',
              'Maria estava escrevendo o relatório.',
            ],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'In reported speech, "Eu tenho fome" becomes?',
            options: [
              'Ele disse que tenho fome.',
              'Ele disse que tem fome.',
              'Ele disse que tinha fome.',
              'Ele disse que terá fome.',
            ],
            correct: 2,
          },
          {
            type: 'translation',
            prompt: 'The book was published in 1990.',
            answer: 'O livro foi publicado em 1990.',
            hint: 'LEE-vroo / foy / poo-blee-KAH-doo',
          },
          {
            type: 'fill-blank',
            sentence: 'O prédio ___ construído em dois anos. (was built – passive)',
            answer: 'foi',
            hint: 'ser (foi) + past participle for passive',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'was written', pt: 'foi escrito' },
              { en: 'was built', pt: 'foi construído' },
              { en: 'was said', pt: 'foi dito' },
              { en: 'was seen', pt: 'foi visto' },
              { en: 'was done', pt: 'foi feito' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Say "The car was repaired by the mechanic"',
            words: ['O', 'carro', 'foi', 'consertado', 'pelo', 'mecânico'],
            answer: ['O', 'carro', 'foi', 'consertado', 'pelo', 'mecânico'],
          },
          {
            type: 'quiz',
            questions: [
              { q: 'Past participle of "fazer"?', options: ['Fazendo', 'Feito', 'Fez', 'Fazia'], correct: 1 },
              { q: '"Foi descoberto" uses which voice?', options: ['Active', 'Passive', 'Reflexive', 'Middle'], correct: 1 },
              { q: 'In reported speech "vou" becomes?', options: ['Foi', 'Vai', 'Ia', 'Iria'], correct: 2 },
              { q: 'Past participle of "ver" (to see)?', options: ['Vendo', 'Viu', 'Visto', 'Via'], correct: 2 },
              { q: '"Se constrói muito nessa cidade" uses?', options: ['Active voice', 'Reflexive passive (voz passiva reflexiva)', 'Conditional', 'Future'], correct: 1 },
            ],
          },
        ],
      },

      // ------------------------------------------------------------------
      // Unit 5, Lesson 5 – Formal Writing & Business
      // ------------------------------------------------------------------
      {
        id: 'u5l5',
        title: 'Formal Writing & Business',
        subtitle: 'Escrita Formal e Português Empresarial',
        emoji: '🏛️',
        xpReward: 40,
        exercises: [
          {
            type: 'flashcard',
            front: 'Dear Sir/Madam, (formal letter opening)',
            back: 'Prezado(a) Senhor(a),',
            pronunciation: 'preh-ZAH-doo seh-NYOR',
          },
          {
            type: 'flashcard',
            front: 'I am writing to inform you that…',
            back: 'Escrevo para informá-lo(a) de que…',
            pronunciation: 'esh-KREH-voo / een-for-MAH-loo / jee kee',
          },
          {
            type: 'flashcard',
            front: 'Yours faithfully / Yours sincerely',
            back: 'Atenciosamente, / Respeitosamente,',
            pronunciation: 'ah-ten-see-oh-zah-MEN-chee / hesh-pay-toh-zah-MEN-chee',
          },
          {
            type: 'multiple-choice',
            question: 'How do you open a formal email in Portuguese?',
            options: ['Oi tudo bem?', 'Prezado senhor,', 'Olá cara,', 'E aí?'],
            correct: 1,
          },
          {
            type: 'multiple-choice',
            question: 'What does "encaminho em anexo" mean?',
            options: ['I delete the attachment', 'I forward the attachment / Please find attached', 'I received your attachment', 'The attachment is missing'],
            correct: 1,
          },
          {
            type: 'translation',
            prompt: 'I look forward to your reply.',
            answer: 'Aguardo a sua resposta.',
            hint: 'ah-GWAR-doo / ah SOO-ah / hesh-POS-tah',
          },
          {
            type: 'fill-blank',
            sentence: 'Em ___ ao seu pedido, enviamos o orçamento. (response)',
            answer: 'resposta',
            hint: 'em resposta = in response',
          },
          {
            type: 'matching',
            pairs: [
              { en: 'meeting agenda', pt: 'pauta da reunião' },
              { en: 'invoice', pt: 'fatura' },
              { en: 'contract', pt: 'contrato' },
              { en: 'proposal', pt: 'proposta' },
              { en: 'board of directors', pt: 'conselho de administração' },
            ],
          },
          {
            type: 'word-bank',
            prompt: 'Write: "I am available for a meeting next week"',
            words: ['Estou', 'disponível', 'para', 'uma', 'reunião', 'na', 'próxima', 'semana'],
            answer: ['Estou', 'disponível', 'para', 'uma', 'reunião', 'na', 'próxima', 'semana'],
          },
          {
            type: 'quiz',
            questions: [
              { q: '"Atenciosamente" at end of email means?', options: ['Regards', 'Sincerely/Yours faithfully', 'See you', 'Best'], correct: 1 },
              { q: '"Prazo" means?', options: ['Prize', 'Deadline/Term', 'Plate', 'Price'], correct: 1 },
              { q: '"Reunião de diretoria" means?', options: ['Staff meeting', 'Board meeting', 'Team meeting', 'Sales meeting'], correct: 1 },
              { q: '"Orçamento" means?', options: ['Payment', 'Receipt', 'Budget/Quote', 'Invoice'], correct: 2 },
              { q: '"Conforme acordado" means?', options: ['As agreed', 'As noted', 'As requested', 'As planned'], correct: 0 },
            ],
          },
        ],
      },
    ],
  },
];

export default curriculum;
