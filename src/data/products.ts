export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    price: "$100",
    image: "https://i.ibb.co/MykyxvWJ/doron-men-1778229211-3892389294329649413-3615955564.jpg",
    category: "Shirts"
  },
  {
    id: 2,
    name: "Architectural Wool Shirt",
    price: "$100",
    image: "https://i.ibb.co/BHWYyNs0/doron-men-1777877645-3889442036801964912-3615955564.jpg",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Structured Utility Shirt",
    price: "$100",
    image: "https://i.ibb.co/5Wnpdygv/doron-men-1775594018-3870285517200133347-3615955564.jpg",
    category: "Shirts"
  },
  {
    id: 4,
    name: "Minimalist Linen Shirt",
    price: "$100",
    image: "https://i.ibb.co/W4PCc1ft/doron-men-1775155680-3866538460366775729-3615955564.jpg",
    category: "Shirts"
  },
  {
    id: 5,
    name: "Drape Front Technical Shirt",
    price: "$100",
    image: "https://i.ibb.co/Pzz5VhKp/doron-men-1774866663-3864183951569299230-3615955564.jpg",
    category: "Shirts"
  },
  {
    id: 6,
    name: "Sculptural Tailored Shirt",
    price: "$100",
    image: "https://i.ibb.co/kVnDK9xZ/doron-men-1762424400-3759811301645000659-3615955564-Edited.jpg",
    category: "Shirts"
  },
  {
    id: 7,
    name: "Oversized Canvas Shirt",
    price: "$100",
    image: "https://i.ibb.co/RTcGcxPD/doron-men-1772045241-3840511448288453018-3615955564-Edited.jpg",
    category: "Shirts"
  },
  {
    id: 8,
    name: "Modular Layering Shirt",
    price: "$100",
    image: "https://i.ibb.co/VYkFXBw2/doron-men-1751232041-3665922523724606307-3615955564-Edited.jpg",
    category: "Shirts"
  }
];
