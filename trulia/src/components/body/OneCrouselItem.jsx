const OneCrouselItem = ({ item , height}) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        width: "280px",
        height: height || "430px",
        border: "1px solid black",
        borderRadius: "8px",
       // margin:'10px 0px'
      }}
    >
      <h1>{item}</h1>
    </div>
  );
};

export default OneCrouselItem;
