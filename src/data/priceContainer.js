import { v4 as uuidv4 } from "uuid";

export const wemanRoom = {
  lebel: "Женский зал",
  attrs: [
    {
      id: uuidv4(),
      selectName: "Парикмахерский зал",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "Услуги по покраске волос",
          // additionalInfo: {},
          services: {
            attributes: [
              {
                name: "Довжина",
                price: "1-2 / 3-5",
                label: "special",
              },
              {
                name: "мелірування волосся",
                price: "750-950 / 1000-1300",
              },
              {
                name: "фарбування волосся matrix/lakme (аміачний барвник)",
                price: "800-900 / 950-1200",
              },
              {
                name: "фарбування коренів matrix/lakme (аміачний барвник)",
                price: "500-700",
              },
              {
                name: "фарбування волосся matrix/lakme (безаміачний барвник)",
                price: "900-1000 / 1100-1400",
              },
              {
                name: "фарбування коренів matrix/lakme (безаміачний барвник)",
                price: "650-800",
              },
              {
                name: "фарбування волосся фарбою клієнта",
                price: "400-600",
              },
              {
                name: "складне фарбування ombre/air touch/шатуш",
                price: "1200-1400 / 1600-2300",
              },
              {
                name: "декапірування/ блонд-миття",
                price: "500-600 / 800-1000",
              },
            ],
          },
        },
        {
          id: uuidv4(),
          subCategorie: "Лечение и уход за волоссами",
          services: {
            attributes: [
              {
                name: "холодна терапія(rolland)",
                price: "600-700 / 800-1000",
              },
              {
                name: "екранування волосся (estel)",
                price: "300-400 / 500-750",
              },
              {
                name: "ботокс Inoar.",
                price: "1200-1500 / 1900-25",
              },
            ],
          },
        },
        {
          id: uuidv4(),
          subCategorie: "Стрижка и укладка волос",
          services: {
            attributes: [
              {
                name: "мелірування волосся",
                price: "",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Зал нігтьової естетики",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "Манікюр",
          services: {
            attributes: [
              {
                name: "обрізний/комбінований/апаратний",
                price: "190/220/240",
              },
              {
                name: "корекція (обрізний)",
                price: "150",
              },
            ],
          },
        },
        {
          id: uuidv4(),
          subCategorie: "Педикюр",
          services: {
            attributes: [
              {
                name: "обрізний/комбінований",
                price: "330/38",
              },
              {
                name: "обрізний/ комбінований/ апаратний (пальці).",
                price: "280/310/330",
              },
              {
                name: "кислотний педикюр",
                price: "380",
              },
              {
                name: "комплекс (основа + лак + закріпити + сушка)",
                price: "70",
              },
              {
                name: "покриття гель лаком (френч +50 грн) ",
                price: "200",
              },
              {
                name: "дизайн нігтів (1 ніготь)",
                price: "від 20 ",
              },
              {
                name: "холодний парафін (рук/ніг)",
                price: "80/100",
              },
              {
                name: "гарячий парафін (рук/ніг)",
                price: "100/1500",
              },
              {
                name: "зняття гель лаку (фольгою)",
                price: "60",
              },
              {
                name: "зняття гель лаку (фрейзером)",
                price: "80",
              },
              {
                name: "зняття лаку",
                price: "10",
              },
              {
                name: "покриття лаком",
                price: "50",
              },
              {
                name: "підпил/запил",
                price: "50",
              },
              {
                name: "масаж рук/ніг.",
                price: "50/70",
              },
              {
                name: "нарощування нігтів гелем (френч + 50 грн).",
                price: "600-700",
              },
              {
                name: "корекція нігтів гелем ( від 3-ьох тижнів + 100 грн)",
                price: "450",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Макіяж",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "денний, діловий",
                price: "600",
              },
              {
                name: "вечірній",
                price: "900",
              },
              {
                name: "весільний",
                price: "1100",
              },
              {
                name: "дитячий макіяж",
                price: "400",
              },
              {
                name: "пробний макіяж (від вартості макіяжу)",
                price: "-25%",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Татуаж",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "брови",
                price: "2700",
              },
              {
                name: "контур губ + часткове заповнення (омбре)",
                price: "2700",
              },
              {
                name: "щільне заповнення губ",
                price: "2700",
              },
              {
                name: "повіки  (ряд між віями)",
                price: "2700",
              },
              {
                name: "повіки (ряд між віями + класична стрілка)",
                price: "2700",
              },
              {
                name: "пудра, піксель, напилення",
                price: "2700",
              },
              {
                name: "корекція татуажу (нашого майстра)",
                price: "1500",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Брови та вії",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "біозавивка/ламінування вій (+фарбування)",
                price: "450/550",
              },
              {
                name: "ламінування брів (+фарбування)",
                price: "400",
              },
              {
                name: "фарбування брів (фарба)",
                price: "100",
              },
              {
                name: "фарбування брів (хна)",
                price: "150 ",
              },
              {
                name: "корекція/форма брів",
                price: "50-100",
              },
              {
                name: "комплекс фарба (шампунь + скраб + фарбування + форма + укладка)",
                price: "270",
              },
              {
                name: "комплекс хна (шампунь + скраб + фарбування + форма + укладка)",
                price: "300",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Депиляция",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "Воск",
          services: {
            attributes: [
              {
                name: "гомілки",
                price: "180",
              },
              {
                name: "ноги повністю",
                price: "320",
              },
              {
                name: "бікіні класичне",
                price: "250",
              },
              {
                name: "бікіні глибоке",
                price: "320",
              },
              {
                name: "руки до ліктя",
                price: "110",
              },
              {
                name: "руки повністю",
                price: "180",
              },
              {
                name: "над губою",
                price: "70",
              },
              {
                name: "підборіддя",
                price: "80",
              },
              {
                name: "обличчя",
                price: "120",
              },
              {
                name: "пальці",
                price: "70",
              },
              {
                name: "пахви",
                price: "120",
              },
            ],
          },
        },
        {
          id: uuidv4(),
          subCategorie: "Шугаринг",
          services: {
            attributes: [
              {
                name: "гомілки",
                price: "240",
              },
              {
                name: "ноги повністю",
                price: "400",
              },
              {
                name: "бікіні класичне",
                price: "290",
              },
              {
                name: "бікіні глибоке",
                price: "350",
              },
              {
                name: "руки до ліктя",
                price: "160",
              },
              {
                name: "руки повністю",
                price: "240",
              },
              {
                name: "над губою",
                price: "90",
              },
              {
                name: "підборіддя",
                price: "100",
              },
              {
                name: "обличчя",
                price: "160",
              },
              {
                name: "пальці",
                price: "90",
              },
              {
                name: "пахви",
                price: "160",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Косметологія",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "масаж обличчя",
                price: "450",
              },
              {
                name: "поживний догляд для відновлення корнео-баланса шкіри",
                price: "750",
              },
              {
                name: "колагеновий стимулюючий догляд",
                price: "від 1200",
              },
              {
                name: "процедура для вікової, сухої, чутливої шкіри",
                price: "800",
              },
              {
                name: "процедура «трансформація»",
                price: "1200",
              },
              {
                name: "оновлююча процедура для всіх типів шкіри",
                price: "750",
              },
              {
                name: "карбоксітерапія",
                price: "900",
              },
              {
                name: "пептидна ANTI-AGE терапія",
                price: "від 900",
              },
              {
                name: "біоревіталізуючий догляд з мезо-ефектом ",
                price: "750",
              },
              {
                name: "догляд з кисневою відновлюючою маскою",
                price: "900",
              },
              {
                name: "антикуперозний догляд",
                price: "600",
              },
              {
                name: "комплексний догляд ANTI-AGE терапія",
                price: "від 700",
              },
              {
                name: "догляд з чисткою обличчя для жирної і комбінованої шкіри",
                price: "700",
              },
              {
                name: "профілактичний детокс-догляд для контролю себорегуляції",
                price: "від 600",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Пілінги",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "мигдальний пілінг",
                price: "700",
              },
              {
                name: "пілінг з азелаїновою кислотою ",
                price: "700",
              },
              {
                name: "хіральний пілінг",
                price: "850",
              },
              {
                name: "пілінг T35 PRX",
                price: "1300",
              },
              {
                name: "комбі-пілінг освітлюючий",
                price: "900",
              },
              {
                name: "комбі-пілінг",
                price: "800",
              },
              {
                name: "хрома-пілінг",
                price: "900",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "Масажи",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "масаж ШВЗ (30 хвилин)",
                price: "300-400",
              },
              {
                name: "масаж спини (40 хвилин)",
                price: "350-450",
              },
              {
                name: "класичний масаж всього тіла (1 година)",
                price: "450-550",
              },
              {
                name: "класичний масаж всього тіла (1,30 години)",
                price: "550-650",
              },
              {
                name: "антицелюлітний масаж (1 година)",
                price: "500",
              },
              {
                name: "лімфодренажний масаж (1 година)",
                price: "550-650",
              },
              {
                name: "релаксуючий масаж (1,30  години)",
                price: "700-800",
              },
              {
                name: "шоколадний масаж (1,30 години)",
                price: "700",
              },
              {
                name: "медовий масаж всього тіла (1 година)",
                price: "700-800",
              },
              {
                name: "медовий масаж спини (1 година)",
                price: "450-550",
              },
              {
                name: "сегментарний масаж голови (30 хвилин)",
                price: "300",
              },
              {
                name: "сегментарний масаж рук (30 хвилин)",
                price: "300",
              },
              //
              {
                name: "сегментарний масаж ніг (30 хвилин)",
                price: "400",
              },
              {
                name: "стоун масаж (2 години)",
                price: "800",
              },
              {
                name: "фітнес масаж (1 година)",
                price: "550-650",
              },
              {
                name: "вакуумний масаж (40 хвилин)",
                price: "550-650",
              },
            ],
          },
        },
      ],
    },
    {
      id: uuidv4(),
      selectName: "SPA процедури",
      subCategories: [
        {
          id: uuidv4(),
          subCategorie: "",
          services: {
            attributes: [
              {
                name: "термо-обгортання (1 година)",
                price: "500-600",
              },
              {
                name: "холодне-обгортання (1 година)",
                price: "500-600",
              },
              {
                name: "шоколадне обгортання (1 година)",
                price: "400",
              },
              {
                name: "медове обгортання (1 година)",
                price: "400-500",
              },
              {
                name: "скрабування(пілінг) всього тіла (1 година)",
                price: "500-600",
              },
            ],
          },
        },
      ],
    },
  ],
};

export const manRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [{ id: uuidv4(), subCategorie: "Стрижка", services: [] }],
  },
  {
    id: uuidv4(),
    selectName: "Зал ногтевой эстетики",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Маникюр",
        services: {
          attributes: [
            {
              name: "мелірування волосся",
              price: "",
            },
          ],
        },
      },
      {
        id: uuidv4(),
        subCategorie: "Педикюр",
        services: {
          attributes: [
            {
              name: "мелірування волосся",
              price: "",
            },
          ],
        },
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Массажи",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: {
          attributes: [
            {
              name: "мелірування волосся",
              price: "",
            },
          ],
        },
      },
    ],
  },
];

export const childRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Стрижка",
        services: {
          attributes: [
            {
              name: "мелірування волосся",
              price: "",
            },
          ],
        },
      },
    ],
  },
];
