

import { RightOutlined } from "@ant-design/icons";



const OneCrouselItem = ({ item, height }) => {
  return (
    <div
      style={{
        width: "280px",
        height: height || "441px",
        border: "1px solid black",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

  
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "10px",

          color: "#fff",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        
        }}
      >
        <h1 style={{ margin: 0 }}>{item?.title}</h1>
        <p>{item.description}</p>
      </div>

      
      {item?.showViewbtn && (
        <div
          style={{
            position: "absolute",
            bottom: 13,
            left: 25,
            width: "100%",
            padding: "10px",
            display: "flex",
            justifyContent: "flex-start",

            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            View Homes <RightOutlined />
          </button>
        </div>
      )}
    </div>
  );
};

export default OneCrouselItem;
