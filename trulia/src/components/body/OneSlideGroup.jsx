import GroupCrouselItem from "./GroupCrouselItem";
import OneCrouselItem from "./OneCrouselItem";

const OneSlideGroup = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "10px",
        margin: "auto",
      }}
    >
      <OneCrouselItem item="hello1" />
      <GroupCrouselItem columnstyle="repeat(2, 1fr)" doublerow={true} />
      <OneCrouselItem item="hello6" />
      <GroupCrouselItem columnstyle="repeat(1, 1fr)" doublerow={false} />
    </div>
  );
};

export default OneSlideGroup;
