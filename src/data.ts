

type FeaturedItem = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: " Haircut ",
    price: "12,000 تومان",
    image: "/service/service-1.jpg",    
    },
    {
    id: 2,
    title: " Treaming",
    price: "15,000 تومان",
    image: "/service/service-2.jpg",
    },
    {   
    id: 3,
    title: "SHAVING",
    price: "20,000 تومان",
    image: "/service/service-3.jpg",
    },
    {
    id: 4,
    title: "  Coloring",
    price: "25,000 تومان",
    image: "/service/service-4.jpg",
    },
    
];
type CustomerItem = {
  id: number;
  
  image: string;
};
export const customerItems: CustomerItem[] = [
  {
    id: 1,
    
    image: "/portfolio/portfolio-1.jpg",    
    },
    {
    id: 2,
    
    image: "/portfolio/portfolio-2.jpg",
    },
    {   
    id: 3,
    
    image: "/portfolio/portfolio-3.jpg",
    },
    {
    id: 4,
    
    image: "/portfolio/portfolio-4.jpg",
    },
    {
    id: 5,
    
    image: "/portfolio/portfolio-5.jpg",
    },
    {
    id: 6,
    image: "/portfolio/portfolio-6.jpg",
    },
    {
    id: 7,
    image: "/portfolio/portfolio-7.jpg",
    },
    {
    id: 8,
    image: "/portfolio/portfolio-8.jpg",
    },
];
