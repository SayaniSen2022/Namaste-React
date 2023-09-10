import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *        - Image
 *        - Star rating, name of res, cuisine, time for delivery
 * Footer
 *  - Links
 *  - Copyright
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJ7CBZpGO0w58fuzfGwZf0sPkfK-KIAI_56W5-SKN&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleResCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleResCard}>
      <img
        src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00="
        alt="res-logo"
        className="res-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>38 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName={"Kolkata 34"}
          cuisine={"Biriyani, North Inidian"}
          rating="4.4 stars"
        />
        <RestaurantCard
          resName={"Oudh 1590"}
          cuisine={"Awadhi, North Inidian"}
          rating="4.2 stars"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
