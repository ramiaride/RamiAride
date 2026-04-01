import React from "react";
import Product from "./components/productdesign-com/product";
import Topbar from "../components/TopBar";

// Domenico
import D1 from "/assets/interiors/Domenico/kitchen1.jpg";
import D2 from "/assets/interiors/Domenico/kitchen2.jpg";
import D3 from "/assets/interiors/Domenico/sala1.jpg";
import D4 from "/assets/interiors/Domenico/sala2.jpg";

//WONDER
import W1 from "/assets/interiors/Wonder/GENERAL.png";
import W2 from "/assets/interiors/Wonder/LAB 2.jpg";
import W3 from "/assets/interiors/Wonder/PLANETARY 11.jpg";
import W4 from "/assets/interiors/Wonder/recepytion 1.jpg";
import W5 from "/assets/interiors/Wonder/theater 22.jpg";

//TORRE DIVINA
import T1 from "/assets/interiors/TorreDivina/gf3croped.jpg";
import T2 from "/assets/interiors/TorreDivina/gf2.jpg";
import T3 from "/assets/interiors/TorreDivina/gf 1.jpg";
import T4 from "/assets/interiors/TorreDivina/ff2.jpg";
import T5 from "/assets/interiors/TorreDivina/BIG SF.png";
import T6 from "/assets/interiors/TorreDivina/sf 1.jpg";
import T7 from "/assets/interiors/TorreDivina/terrace 1.jpg";
import T8 from "/assets/interiors/TorreDivina/terrace222.jpg";

// TONBO
import TB1 from "/assets/interiors/tonbo/1.jpg";
import TB2 from "/assets/interiors/tonbo/3.jpg";
import TB3 from "/assets/interiors/tonbo/4.png";

// BENGASI
import B1 from "/assets/interiors/bengasi/1.jpg";
import B2 from "/assets/interiors/bengasi/2.jpg";
import B3 from "/assets/interiors/bengasi/3.jpg";
import B4 from "/assets/interiors/bengasi/4.jpg";
import B5 from "/assets/interiors/bengasi/frontal.jpg";
import B6 from "/assets/interiors/bengasi/RIGHT SIDE.jpg";
import B7 from "/assets/interiors/bengasi/socket 123.jpg";

import useWindowSize from "../components/useWindowSize";
function InteriorDesign() {
  const { width } = useWindowSize();

  const descwidth = width < 768 ? "80%" : "65%";
  return (
    <div style={{ padding: "40px 20px" }}>
      <Product
        title="Bengasi"
        subtitle="2026"
        description="This project is located in Turin, in the Bengasi area.
        
The main challenge in designing these two spaces was dealing with their very small dimensions and particularly limited space.
The project was developed through numerous revisions together with the homeowners, with a shared selection of materials and colors. The bathroom was conceived as an elegant and luxurious space, characterized by a strong color contrast: the main beige wall interacts with a black-and-gold marble-effect surface, giving the space refinement and character.
  The kitchen, on the other hand, is designed using exclusively light and bright colors, with the aim of bringing more vibrancy to the space and visually enhancing the perception of spaciousness."
        carouselImages={[
          { src: B1, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: B2, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: B5, className: "carousel-img-fill-lg" },
          { src: B3, className: "carousel-img-fill-lg" },
          { src: B4, className: "carousel-img-fill" },
          { src: B6, className: "carousel-img-fill" },
          { src: B7, className: "carousel-img-fill" },
        ]}
        DescMaxWidth={descwidth}
      />
      <Product
        title="Tonbo Cafe"
        subtitle="2025"
        description="“Tonbo”, which in Japanese means dragonfly, was created in Israel.
The space is designed as a concept for a café, with particular attention to minimalism and artificial lighting, which gives the environment a modern and contemporary feel.
The main goal is to create a place that is elegant yet welcoming, suitable for all kinds of people. The project also aims to make the most of the available space by including as many tables as possible, while maintaining privacy and comfort for customers as a fundamental requirement."
        carouselImages={[
          { src: TB1, className: "carousel-img-fill" },
          { src: TB2, className: "carousel-img-fill" },
          { src: TB3, className: "carousel-img-fill" },
        ]}
        DescMaxWidth={descwidth}
      />

      <Product
        title="KITCHEN AND DINING"
        subtitle="2025"
        description="A project that is a concept for a kitchen with dining room designed for a man in Florence, Italy , is it the first project outside university program. It is a small space in an apartement connected by a window in the middle, the choice of colors and materials is all light and bright colors, to give the space more life and simplicity. The chosen style in minimalist as the client requested, with the addition of few elements to complete the elegance of the project. ."
        carouselImages={[
          { src: D1, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: D2, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: D3, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: D4, style: { transform: "scale(1.1) translate(0px, 0px)" } },
        ]}
        DescMaxWidth={descwidth}
      />

      <Product
        title="THE WONDER "
        subtitle="2025"
        description="A kids space for the purposes of both fun and education, combining both eutopia and madagascar movie themes and their color pallettes,  One of it’s main aims is to give the sense of being outside while being inside, which is the play with the colors and shapes of the project and the choice of funiture inspired by the jungle elements, and others are so organic to give the eutopia sense. The materials are covered with sheets that look cartoonish to give the sense of being in the movie which can be more attractive to the kids. The floor is divided into different parts which are reception, seating area, playroom, laboratory, theater and planetary. ."
        descMarginTop={80}
        carouselImages={[
          { src: W1, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: W4, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: W2, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: W5, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: W3, style: { transform: "scale(1.1) translate(0px, 0px)" } },
        ]}
        DescMaxWidth={descwidth}
      />

      <Product
        title="TORRE DIVINA "
        subtitle="2024"
        description="Torre divina is a concept of a winery that could be made in the historical tower San Niccolò in Florence, Italy. This project is divided into four floors with four different aims for each floor, the ground floor is a history exhibition for Chianti wine bottles, to be followed with the first floor which is the wine tasting area, and info point, then second floor has the bar and seating area, while the last one is a terrace where people can sit by the pool and enjoy their drink and food with fresh air. the project is inspired by both modern and classic styles with the combination of nature and wine color pallettes."
        carouselImages={[
          { src: T1, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: T2, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: T3, style: { transform: "scale(1.6) translate(0px, -50px)" } },
          { src: T4, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: T5, style: { transform: "scale(1.1) translate(0px, 0px)" } },
          { src: T6, style: { transform: "scale(1.9) translate(0px, -50px)" } },
          { src: T7, style: { transform: "scale(1.9) translate(0px, -30px)" } },
          { src: T8, style: { transform: "scale(1.1) translate(0px, 0px)" } },
        ]}
        descMarginTop={70}
        DescMaxWidth={descwidth}
      />

      {/* Add more <Product /> components here with different props as needed */}
    </div>
  );
}

export default InteriorDesign;
