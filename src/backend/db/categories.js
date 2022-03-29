import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indie",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/Category-indie2_sIX1POKgm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546097472"
  },
  {
    _id: uuid(),
    categoryName: "Pop",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/Category-pop_wBiHfSA_AV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546098640"
  },
  {
    _id: uuid(),
    categoryName: "Background",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/category-background_pdthMKpMi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546096643"
  },
  {
    _id: uuid(),
    categoryName: "Instrumental",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/category-instrumental_3iCeFQRSW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546097745"
  },
  {
    _id: uuid(),
    categoryName: "Hip Hop",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/category-hiphop_km7NJotML.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546096688"
  },
  {
    _id: uuid(),
    categoryName: "Live",
    imageUrl: "https://ik.imagekit.io/avavya/VideoLib/category-live__2ImeO3la.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546098289"
  }
];
