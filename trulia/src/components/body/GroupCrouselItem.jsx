import OneCrouselItem from "./OneCrouselItem";

const GroupCrouselItem = ({ data, doublerow }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: doublerow ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "10px",
        margin: "auto",
      }}
    >
  

      {data &&
        data.length > 0 &&
        data.map((el) => <OneCrouselItem item={el} key={Date.now()}  height='215px'/>)}
    </div>
  );
};

export default GroupCrouselItem;
