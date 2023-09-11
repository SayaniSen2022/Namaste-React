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
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card" style={styleResCard}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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

const resList = [
  {
    info: {
      id: "83199",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Harbour Road",
      areaName: "Paschim Barisha",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "83199",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-harbour-road-paschim-barisha-kolkata-83199",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "13038",
      name: "Haji Saheb Behala",
      cloudinaryImageId: "bedbbaa7543c3d70d7a01b02046ee86e",
      locality: "Behala",
      areaName: "Behala",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Chinese", "Mughlai"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "13038",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "92680",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haji-saheb-behala-behala-kolkata-13038",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38945",
      name: "Domino's Pizza",
      cloudinaryImageId: "lfs3zzjsmz8ijfe3hvlr",
      locality: "Diamond Harbour Road",
      areaName: "New Alipore",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "38945",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 02:57:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-diamond-harbour-road-new-alipore-kolkata-38945",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10359",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Near HDFC Bank",
      areaName: "New Alipore",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "10359",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-near-hdfc-bank-new-alipore-kolkata-10359",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "152874",
      name: "Wow! Momo",
      cloudinaryImageId: "0984acc0ed7b914206dbbcb90297becc",
      locality: "Ghosal lane",
      areaName: "Behala",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "152874",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "1776",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wow-momo-ghosal-lane-behala-kolkata-152874",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "421567",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Muchipara Behala",
      areaName: "Behala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "421567",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-muchipara-behala-kolkata-421567",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "54741",
      name: "Cakes Gariahat",
      cloudinaryImageId: "otsr1m2octbkcnwxcsiv",
      areaName: "Gariahat",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "54741",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7300,
      },
      parentId: "375071",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakes-gariahat-gariahat-kolkata-54741",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3072",
      name: "Jai Hind Dhaba-Hazra",
      cloudinaryImageId: "896745a05d49c4135a8a60d69c94fe97",
      locality: "Hazra",
      areaName: "Hazra",
      costForTwo: "₹500 for two",
      cuisines: [
        "North Indian",
        "Indian",
        "Tandoor",
        "Kebabs",
        "Punjabi",
        "Home Food",
        "Chinese",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "3072",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5600,
      },
      parentId: "1928",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jai-hind-dhaba-hazra-hazra-kolkata-3072",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12951",
      name: "Zeeshan Deshapriya",
      cloudinaryImageId: "c4ebd411f8427e8b095e2fd6af302f09",
      locality: "Near Deshapriya More",
      areaName: "Kalighat",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Mughlai", "Indian", "Tandoor"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "12951",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5600,
      },
      parentId: "229811",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/zeeshan-deshapriya-near-deshapriya-more-kalighat-kolkata-12951",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5251",
      name: "Bachan's Dhaba",
      cloudinaryImageId: "ggez5y5emtvp50kbtd8s",
      locality: "Near Kalighat Metro, Rash Behari Avenue",
      areaName: "Kalighat",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "5251",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "6136",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bachans-dhaba-near-metro-rash-behari-avenue-kalighat-kolkata-5251",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "287923",
      name: "Kathleen",
      cloudinaryImageId: "e40c5b9a0187a3666d7936275ebf020a",
      locality: "Alipore",
      areaName: "Behala",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Bakery", "Snacks", "Continental"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "287923",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "10674",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kathleen-alipore-behala-kolkata-287923",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355055",
      name: "Machhli Baba Fries",
      cloudinaryImageId: "qgbmghvgrbyufp0ergm3",
      locality: "Behala",
      areaName: "Barisha",
      costForTwo: "₹500 for two",
      cuisines: ["Bengali"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "355055",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4413",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/machhli-baba-fries-behala-barisha-kolkata-355055",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "326359",
      name: "6 Ballygunge Place Takeaway",
      cloudinaryImageId: "pzgkckwm68sg0b8ou5dl",
      locality: "Behala",
      areaName: "Purba Barisha",
      costForTwo: "₹800 for two",
      cuisines: ["Bengali"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "326359",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "1243",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/6-ballygunge-place-takeaway-behala-purba-barisha-kolkata-326359",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "283326",
      name: "Dariole",
      cloudinaryImageId: "zoxf0tryewfgkemg65ux",
      locality: "Behala",
      areaName: "Behala",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "283326",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "6960",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dariole-behala-kolkata-283326",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67723",
      name: "Kookie Jar",
      cloudinaryImageId: "qyjuy6vquw3dvk14bvhz",
      locality: "Enclave, Ground Floor",
      areaName: "Alipore",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Snacks", "Bakery"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "67723",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4800,
      },
      parentId: "5550",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 20:35:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kookie-jar-enclave-ground-floor-alipore-kolkata-67723",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "173855",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "MAHATMA GANDHI ROAD",
      areaName: "Thakurpukur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "173855",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4100,
      },
      parentId: "21809",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 22:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mahatma-gandhi-road-thakurpukur-kolkata-173855",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "243486",
      name: "Haka",
      cloudinaryImageId: "unopsyd4fj393adgugyu",
      locality: "Behala",
      areaName: "Behala",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Seafood"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "243486",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "92713",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/haka-behala-kolkata-243486",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58091",
      name: "Cakes,New Alipore",
      cloudinaryImageId: "xix8ty6bf17qm4w2fhb3",
      locality: " Diamond Harbour Road",
      areaName: "New Alipore",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "58091",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4200,
      },
      parentId: "4861",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 20:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakes-new-alipore-diamond-harbour-road-new-alipore-kolkata-58091",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25624",
      name: "Barista Coffee",
      cloudinaryImageId: "02731f6bd73f982bc74a522edd9c1b01",
      locality: "175 Block G",
      areaName: "New Alipore",
      costForTwo: "₹350 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "25624",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3700,
      },
      parentId: "2359",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barista-coffee-175-block-g-new-alipore-kolkata-25624",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "304051",
      name: "Mama Mia! - Italian Ice Creams & Cakes",
      cloudinaryImageId: "6c689815912468b32c212ff18b8cb813",
      locality: "Behala",
      areaName: "Barisha",
      costForTwo: "₹250 for two",
      cuisines: ["Ice Cream", "Desserts", "Bakery"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "304051",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "621",
      avgRatingString: "4.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-behala-barisha-kolkata-304051",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
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
