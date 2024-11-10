import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { homeDetails } from "../../constant";
import { lazy, Suspense } from "react";

const OneSlideGroup = lazy(() => import("./OneSlideGroup"));

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
      {homeDetails.map((el, ind) => (
        <div key={ind}>
          <p style={slidestyle}>
            <Suspense fallback={"Loading................."}>
              <OneSlideGroup item={el.parentSlide} />
            </Suspense>
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCrousel;
