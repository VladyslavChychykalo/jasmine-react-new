import { v4 as uuidv4 } from "uuid";

import NatashaNailsPhoto from "../assets/images/team/team1.jpg";
import SergeyMassagePhoto from "../assets/images/team/team2.jpg";
import MarinaNailsPhoto from "../assets/images/team/team3.jpg";
import AlenaNailsPhoto from "../assets/images/team/team4.jpg";
import MashaHairPhoto from "../assets/images/team/team5.jpg";
import NatashaCosmetologyPhoto from "../assets/images/team/team6.jpg";
import RitaHairPhoto from "../assets/images/team/team7.jpg";
import KatyaHairPhoto from "../assets/images/team/team8.jpg";
import OlyaHairPhoto from "../assets/images/team/team9.jpg";

const teamContainer = [
  {
    id: uuidv4(),
    selectName: "Перукарі",
    team: [
      {
        id: uuidv4(),
        src: RitaHairPhoto,
        experience: 5,
        name: "Рита",
        profession: "Майстер перукарського мистецтва",
        alt: "RitaHair",
      },
      {
        id: uuidv4(),
        src: KatyaHairPhoto,
        experience: 4,
        name: "Катя",
        profession: "Майстер перукарського мистецтва",
        alt: "KatyaHair",
      },
      {
        id: uuidv4(),
        src: OlyaHairPhoto,
        experience: 12,
        name: "Оля",
        profession: "Майстер перукарського мистецтва",
        alt: "OlyaHair",
      },
      {
        id: uuidv4(),
        src: MashaHairPhoto,
        experience: 9,
        name: "Маша",
        profession: "Майстер перукарського мистецтва",
        alt: "MashaHair",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Нігтьовий сервіс",
    team: [
      {
        id: uuidv4(),
        src: AlenaNailsPhoto,
        experience: 9,
        name: "Алена",
        profession: "Майстер нігтьового сервісу та депіляції (воском)",
        alt: "AlenaNails",
      },
      {
        id: uuidv4(),
        src: NatashaNailsPhoto,
        experience: 10,
        name: "Наташа",
        profession: "Майстер нігтьового сервісу",
        alt: "NatashaNails",
      },
      {
        id: uuidv4(),
        src: MarinaNailsPhoto,
        experience: 15,
        name: "Марина",
        profession: "Майстер нігтьового сервісу (+ нарощування нігтів)",
        alt: "MarinaNails",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Масажисти",
    team: [
      {
        id: uuidv4(),
        src: SergeyMassagePhoto,
        experience: 5,
        name: "Сергей",
        profession: "Масажист",
        alt: "SergeyMassage",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Косметологія",
    team: [
      {
        id: uuidv4(),
        src: NatashaCosmetologyPhoto,
        experience: 8,
        name: "Наташа",
        profession: "Косметолог та майстер з шугарингу",
        alt: "NatashaCosmetolog",
      },
    ],
  },
];

export default teamContainer;
