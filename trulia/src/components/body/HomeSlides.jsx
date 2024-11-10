import { Carousel } from "antd";
import "./homeslide.css";

const contentStyle = {
  margin: 0,
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  width: "30%",
};

const HomeSlides = () => {
  return (
    <div className="slide-container">
      <div className="slide-text-container">
        <div className="slide-text-heading-container">
          <h2 className="slide-text-heading">Explore homes on Trulia</h2>
          <p>
            Take a deep dive and browse homes for sale, original neighborhood
            photos,
            <br /> resident reviews and local insights to find what is right for
            you.
          </p>
        </div>
      </div>

      <div className="slide-show-container">
        <Carousel arrows infinite={false} dots={false}>
          <div style={{ display: "flex" }}>
            <h3 style={contentStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              maxime commodi dolorem dolores sunt hic animi maiores eius aliquid
              consequatur illo molestias cumque sapiente, ducimus quos
              voluptatem recusandae. Dolorem id fugiat repudiandae provident
              maiores sequi deserunt quas nam tempora, aliquam error minima
              iusto temporibus non blanditiis accusantium quod, illum dolor.
              Repellat ab quos, ea sint culpa aliquid nam maxime qui asperiores
              sit quia suscipit! Quaerat explicabo iure, accusantium aliquid
              velit laborum doloribus libero, perferendis nostrum, neque culpa
              perspiciatis ut modi harum autem beatae fugit laboriosam
              reprehenderit. Maiores ducimus rem fugit illum eius accusamus
              similique itaque aut quidem ad, consequatur reiciendis?
            </h3>
          </div>

          <div style={{ display: "flex" }}>
            <h3>
              roushan Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ipsum maxime commodi dolorem dolores sunt hic animi maiores eius
              aliquid consequatur illo molestias cumque sapiente, ducimus quos
              voluptatem recusandae. Dolorem id fugiat repudiandae provident
              maiores sequi deserunt quas nam tempora, aliquam error minima
              iusto temporibus non blanditiis accusantium quod, illum dolor.
              Repellat ab quos, ea sint culpa aliquid nam maxime qui asperiores
              sit quia suscipit! Quaerat explicabo iure, accusantium aliquid
              velit laborum doloribus libero, perferendis nostrum, neque culpa
              perspiciatis ut modi harum autem beatae fugit laboriosam
              reprehenderit. Maiores ducimus rem fugit illum eius accusamus
              similique itaque aut quidem ad, consequatur reiciendis?
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlides;
