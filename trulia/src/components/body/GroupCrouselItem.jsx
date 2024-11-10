import OneCrouselItem from "./OneCrouselItem";

const GroupCrouselItem = ({ columnstyle, doublerow }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columnstyle,
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "10px",
        margin: "auto",
      }}
    >
      {doublerow ? (
        <>
          <OneCrouselItem item="hello2" height="215px" />
          <OneCrouselItem item="hello3" height="215px" />
          <OneCrouselItem item="hello4" height="215px" />
          <OneCrouselItem item="hello5" height="215px" />
        </>
      ) : (
        <>
          <OneCrouselItem item="hello2" height="215px" />
          <OneCrouselItem item="hello3" height="215px" />
        </>
      )}
    </div>
  );
};

export default GroupCrouselItem;
