import "./truliacard.css";


const TruliaCards = () => {
  const cardDetails = [
    {
      icon: "https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg",
      title: "Buy a home",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
      btntext: "Find a home",
    },

    {
      icon: "https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg",
      title: "Rent a home",
      description:
        "With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.",

      btntext: "Find a rental",
    },

    {
      icon: "https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg",
      title: "See neighborhoods",
      description:
        "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
      btntext: "Learn More",
    },
  ];

  return (
    <div className="trulia-container">
      <div className="trulia-content">
        <h1>See how Trulia can help</h1>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {cardDetails.map((el, ind) => (
            <div key={ind}>
              <img src={el.icon} style={{ width: "128px", height: "128px" }} />
              <h2 style={{ marginBottom: "8px" }}>{el.title}</h2>
              <p>{el.description}</p>
              <button className="truliabtn-items">{el.btntext}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TruliaCards;
