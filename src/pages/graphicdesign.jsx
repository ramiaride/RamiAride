import React from "react";
import ShowcaseItem from "./components/Graphic-comp/ShowcaseItem";
import "./styles/graphicdesign.css";

import A1 from "/assets/graphic/2025/acai.png";
import A2 from "/assets/graphic/2025/let-the-taste-speak.png";
import A3 from "/assets/graphic/2025/RAH.png";
import A4 from "/assets/graphic/2025/logzRA.png";
import A5 from "/assets/graphic/2025/12.png";
import A6 from "/assets/graphic/2025/sf1.jpg";
import A7 from "/assets/graphic/2025/sf2.png";
import A8 from "/assets/graphic/2025/sf3.jpg";
import A9 from "/assets/graphic/2025/OMAR6.png";
import A10 from "/assets/graphic/2025/OMARNIGHT.png";
import A11 from "/assets/graphic/2025/letsplay3.jpg";

import B1 from "/assets/graphic/2024/1.png";
import B2 from "/assets/graphic/2024/amarina.png";
import B3 from "/assets/graphic/2024/muggy.png";
import B4 from "/assets/graphic/2024/BP LOGO.png";
import B5 from "/assets/graphic/2024/Lailaw.png";
import B6 from "/assets/graphic/2024/Asset 2.png";
import B7 from "/assets/graphic/2024/Artboard 1-100.jpg";
import B8 from "/assets/graphic/2024/TORRE.png";
import Flyer1 from "/assets/graphic/flyers/flyer.jpg";

import useWindowSize from "../components/useWindowSize";

function GraphicDesign() {
  const { width } = useWindowSize();
  const mobilelimit = 800;

  function ifm(a, b) {
    return width < mobilelimit ? b : a;
  }

  const businessCards = [
    {
      src: A6,
      title: "SANTO FALAFEL BUSINESS CARD",
      width: ifm(500, 265),
      height: ifm(300, 160),
    },
    { src: A7, title: "", width: ifm(500, 265), height: ifm(300, 160) },
    { src: A8, title: "", width: ifm(500, 265), height: ifm(300, 160) },
  ];

  const flyers = [
    {
      src: Flyer1,
      title: "FLYER",
      width: ifm(200, 107),
      height: ifm(300, 160),
    },
  ];

  const logos = [
    {
      src: A5,
      title: "TWELVE DESIGN LOGO",
      width: ifm(200, 107),
      height: ifm(300, 160),
    },
    {
      src: B7,
      title: "TORRE DIVINA LOGO",
      width: ifm(200, 107),
      height: ifm(300, 160),
    },
    { src: B8, title: "", width: ifm(200, 107), height: ifm(300, 160) },
  ];

  const digitalPosters = [
    {
      src: A2,
      title: "ACAI SANTO SPIRITO",
      width: ifm(500, 265),
      height: ifm(300, 160),
    },
    { src: A1, title: "", width: ifm(200, 107), height: ifm(300, 160) },
    {
      src: B2,
      title: "PERFUME POSTER",
      width: ifm(200, 107),
      height: ifm(300, 160),
    },
    {
      src: B4,
      title: "BLACK PEPPER POSTER",
      width: ifm(200, 107),
      height: ifm(300, 160),
    },
  ];

  const wallPosters = [
    {
      src: A9,
      title: "BEDROOM POSTER",
      width: ifm(280, 150),
      height: ifm(300, 160),
    },
    { src: A10, title: "", width: ifm(280, 150), height: ifm(300, 160) },
    { src: A11, title: "", width: ifm(500, 265), height: ifm(300, 160) },
    {
      src: B1,
      title: "ACCADEMIA ITALIANA ENTRANCE WALLPAPER",
      width: ifm(1200, 640),
      height: ifm(300, 160),
    },
  ];

  return (
    <div className="GraphicD">
      <ShowcaseItem title="Business Cards" carouselImages={businessCards} />
      {flyers.length > 0 && (
        <ShowcaseItem title="Flyers" carouselImages={flyers} />
      )}
      <ShowcaseItem title="Logos" carouselImages={logos} />
      <ShowcaseItem title="Digital Posters" carouselImages={digitalPosters} />
      <ShowcaseItem title="Wall Posters" carouselImages={wallPosters} />
    </div>
  );
}

export default GraphicDesign;
