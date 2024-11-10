import OneSlideGroup from "./OneSlideGroup";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomeCrousel = () => {
  const slidestyle = {
    margin: 0,
    height: "470px",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <Carousel
      infinite={false}
      dots={false}
      arrows
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
    >
      <div>
        <p style={slidestyle}>
          <OneSlideGroup />
        </p>
      </div>

      <div>
        <p style={slidestyle}>
          <OneSlideGroup />
        </p>
      </div>

      <div>
        <p style={slidestyle}>
          <OneSlideGroup />
        </p>
      </div>
    </Carousel>
  );
};

export default HomeCrousel;
