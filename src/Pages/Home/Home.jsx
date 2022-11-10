import React from "react";
import Button from "../../Components/Button/Button";
import { ReactComponent as ArrowUpRight } from "../../Assets/raw/iconArrowUpRight.svg";
import iconPaw from "../../Assets/raw/iconPaw.svg";
import waves from "../../Assets/raw/illusWaves.svg";
import bDb from "../../Assets/raw/banner-dog-big.png";
import bDs from "../../Assets/raw/banner-dog-small.png";
import IconAndText from "../../Components/IconAndText/IconAndText";
import IconPhone from "../../Assets/icons/IconPhone";
import PetAvatar from "../../Components/PetAvatar/PetAvatar";
import catPet from "../../Assets/raw/cat-pet-1.png";
import { ReactComponent as Sticker } from "../../Assets/raw/iconListSticker.svg";

import { capsules as CAPSULES } from "../../Assets/data";
import { about } from "../../Assets/data";
import Capsule from "../../Components/Capsule/Capsule";

import "./style.scss";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container flex justify-sb">
          <div className="banner__content">
            <h2>WE Take care of</h2>
            <h1>Your Little Pets</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod.
            </p>
            <div className="flex gap-48">
              <Button text="Our Service" icon={<ArrowUpRight />} />
              <button>
                <IconAndText
                  text="Schedule a call"
                  icon={<IconPhone width={36} height={36} />}
                />
              </button>
            </div>
          </div>
          <div className="banner__images">
            <img src={bDs} alt="" />
            <img src={bDb} alt="" />
          </div>
        </div>
        <img src={iconPaw} alt="" className="paw" />
        <img src={waves} alt="" className="waves" />
      </section>

      <section className="about">
        <div className="container round-110 shadow-1">
          <h2 className="about__heading">About Us</h2>
          <div className="flex justify-sb">
            <div className="about__left">
              <h3>About us</h3>
              <p>
                Lorem ipsum dolor sit amet, daf consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliquaef.
                Lorem ipsum dolor sit amet, huo consectetur adipiscing elit, sed
                do eiusmod tempor.
              </p>
              <Button text="Out Service" />
            </div>
            <div className="about__right">
              {about.map((el, i) => {
                return (
                  <PetAvatar
                    img={el.img}
                    title={el.title}
                    text={el.text}
                    className="avt-small"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="flex justify-sb">
            <img src={catPet} alt="" />
            <div className="services__content">
              <h4>Our Services</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <ul>
                <li>
                  <Sticker />
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>
                  <Sticker /> Duis aute irure dolor in reprehenderit
                </li>
                <li>
                  <Sticker />
                  Excepteur sint occaecat cupidatat non
                </li>
                <li>
                  <Sticker />
                  Nemo enim ipsam voluptatem voluptas
                </li>
              </ul>
            </div>
          </div>
          <div className="services__capsules">
            {CAPSULES.map((el, i) => (
              <Capsule text={el.text} icon={el.icon} color={el.color} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
