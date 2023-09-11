import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  // const { deliveryTime } = resData?.info?.sla;

  const styleResCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleResCard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
