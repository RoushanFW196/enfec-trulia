import "./homeslide.css";

import { lazy, Suspense } from "react";

const HomeCrousel = lazy(() => import("./HomeCrousel"));

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
        <Suspense fallback={"Loading................"}>
          <HomeCrousel />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeSlides;
