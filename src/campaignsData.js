import product1Image from "./images/product1.jpg";
import product2Image from "./images/product2.jpg";
import product3Image from "./images/product3.jpg";
import product4Image from "./images/product4.jpg";

export const campaigns = [
  {
    id: 1,
    name: "Arbuck coffee",
    status: "open",
    image: product1Image,
    quantity: 19,
    initialQuantity: 20,
    audience: 729,
    note: ""
  },
  {
    id: 2,
    name: "LifeSters Memory Box",
    status: "open",
    image: product2Image,
    quantity: 3,
    initialQuantity: 4,
    audience: 234,
    note: "Only 3 left!"
  },
  {
    id: 3,
    name: "LifeSters SnapCam III",
    status: "draft",
    image: product3Image,
    quantity: 3,
    initialQuantity: 3,
    audience: 872,
    note: ""
  },
  {
    id: 4,
    name: "Pink! Watch - Summer Edition II",
    status: "closed",
    image: product4Image,
    quantity: 0,
    initialQuantity: 5,
    audience: 5,
    note: "Sold out in 3 days!"
  }
];
