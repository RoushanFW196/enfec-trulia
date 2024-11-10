import "./body.css";
import { Button, Input, Space, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import HomeSlides from "./HomeSlides";

const { Title } = Typography;
const Body = () => {
  return (
    <div className="body-container">
      <div className="body-image-container-large">
        <img src="/public/assets/extraLarge.webp" alt="no img" />
      </div>
      <div className="body-image-text">
        <Title
          level={1}
          style={{ color: "white", fontWeight: "700", textAlign: "center" }}
        >
          {" "}
          Discover a place
          <br />
          you&#39;ll love to live{" "}
        </Title>

        <ul className="image-items-container">
          <li className="image-items">Buy</li>
          <li className="image-items">Rent</li>
          <li className="image-items">Sold</li>
        </ul>

        <div style={{ paddingTop: "8px", borderRadius: "8px" }}>
          <Space.Compact
            style={{
              width: "100%",
              height: "30px",
            }}
          >
            <Input
              defaultValue="San Fransisco, CA"
              placeholder="Search for City, Neighbourhood, Zip, Country, School "
              style={{ padding: "24px", fontSize: "16px", width: "500px" }}
            />
            <Button
              style={{
                color: "white",
                backgroundColor: "red",
                height: "50px",
                padding: "24px",
                fontSize: "32px",
              }}
            >
              <SearchOutlined />
            </Button>
          </Space.Compact>
        </div>
      </div>

      <HomeSlides />
    </div>
  );
};

export default Body;
