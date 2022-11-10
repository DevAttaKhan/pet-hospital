import p1 from "./raw/pet-1.png";
import p2 from "./raw/pet-2.png";
import p3 from "./raw/pet-3.png";

import { ReactComponent as Syring } from "../Assets/raw/iconSyring.svg";
import { ReactComponent as Tooth } from "../Assets/raw/iconTooth.svg";
import { ReactComponent as Reminder } from "../Assets/raw/iconReminder.svg";
import { ReactComponent as Paw } from "../Assets/raw/iconPaw.svg";
import { ReactComponent as Flask } from "../Assets/raw/iconFlask.svg";
import { ReactComponent as Med } from "../Assets/raw/iconMedicin.svg";

export const about = [
  {
    img: p1,
    title: "30 Years Of Experience",
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  pulvinar dapibus leo.",
  },
  {
    img: p2,
    title: "Animal Lover",
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  pulvinar dapibus leo.",
  },
  {
    img: p3,
    title: "Certified Doctor",
    text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  pulvinar dapibus leo.",
  },
];

export const capsules = [
  {
    text: "Vaccinations",
    color: " #2DDAFC",
    icon: <Syring />,
  },
  {
    text: "Dental Care",
    color: " #FF7E47",
    icon: <Tooth />,
  },

  {
    text: "Emergency Care",
    color: "#FBBB30",
    icon: <Reminder />,
  },
  {
    text: "Illnesses & Disease",
    color: " #9D61FE",
    icon: <Paw />,
  },
  {
    text: "Laboratory Testing",
    color: " #2BED1B",
    icon: <Flask />,
  },
  {
    text: "Medications",
    color: "#FF4E6E",
    icon: <Med />,
  },
];
