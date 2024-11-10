import GroupCrouselItem from "./GroupCrouselItem";
import OneCrouselItem from "./OneCrouselItem";

const OneSlideGroup = ({ item }) => {
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
      {Array.isArray(item) &&
        item.length > 0 &&
        item.map((el, ind) => {
          if (
            el?.hasOwnProperty("childrenhavingColumns") &&
            !el.childrenhavingColumns
          ) {
            return <OneCrouselItem item={el} key={el.id} />;
          } else if (
            el?.hasOwnProperty("childrenhavingColumns") &&
            el.childrenhavingColumns &&
            el.childrenhavingTwoColumns
          ) {
            return (
              <GroupCrouselItem
                doublerow={true}
                key={Date.now()}
                data={el.children}
              />
            );
          } else if (
            el?.hasOwnProperty("childrenhavingColumns") &&
            el?.hasOwnProperty("childrenhavingTwoColumns") &&
            el.childrenhavingColumns &&
            !el.childrenhavingTwoColumns
          ) {
            return (
              <GroupCrouselItem
                doublerow={false}
                data={el.children}
                key={Date.now()}
              />
            );
          }
        })}
    </div>
  );
};

export default OneSlideGroup;
