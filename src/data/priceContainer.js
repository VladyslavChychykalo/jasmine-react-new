import { v4 as uuidv4 } from "uuid";

export const wemanRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Услуги по покраске волос",
        services: [
          {
            name: "мелірування волосся",
            price: "",
          },
        ],
      },
      {
        id: uuidv4(),
        subCategorie: "Лечение и уход за волоссами",
        services: [],
      },
      { id: uuidv4(), subCategorie: "Стрижка и укладка волос", services: [] },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Зал ногтевой эстетики",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Маникюр",
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Педикюр",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Макияж",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
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
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Брови и ресницы",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
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
    selectName: "Косметология",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Пилинги",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
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
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "SPA процедуры",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
];

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
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Педикюр",
        services: [],
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
        services: [],
      },
    ],
  },
];

export const childRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [{ id: uuidv4(), subCategorie: "Стрижка", services: [] }],
  },
];
