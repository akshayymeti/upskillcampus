import { NextResponse } from "next/server"

const products = [
  // Fruits & Vegetables
  {
    id: "f1",
    name: "Organic Bananas",
    description: "Sweet and fresh organic bananas, perfect for smoothies",
    price: 89,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&q=80",
    category: "fruits-vegetables",
    stock: 50,
    unit: "dozen",
  },
  {
    id: "f2",
    name: "Organic Avocados",
    description: "Ripe and creamy Hass avocados",
    price: 299,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
    category: "fruits-vegetables",
    stock: 30,
    unit: "pack of 2",
  },
  {
    id: "f3",
    name: "Fresh Spinach",
    description: "Organic baby spinach leaves",
    price: 49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80",
    category: "fruits-vegetables",
    stock: 40,
    unit: "250g",
  },

  // Indian Staples
  {
    id: "is1",
    name: "Organic Basmati Rice",
    description: "Premium long-grain aromatic basmati rice",
    price: 299,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
    category: "indian-staples",
    stock: 100,
    unit: "1kg",
  },
  {
    id: "is2",
    name: "Organic Toor Dal",
    description: "High-quality organic yellow split pigeon peas",
    price: 159,
    image: "https://images.unsplash.com/photo-1585996746473-3a5e7c7d1b6b?w=800&q=80",
    category: "indian-staples",
    stock: 80,
    unit: "500g",
  },

  // Spices & Masalas
  {
    id: "sp1",
    name: "Organic Turmeric Powder",
    description: "Pure organic turmeric powder",
    price: 89,
    image: "https://images.unsplash.com/photo-1615485500704-8e990c871563?w=800&q=80",
    category: "spices-masalas",
    stock: 60,
    unit: "100g",
  },
  {
    id: "sp2",
    name: "Garam Masala",
    description: "Freshly ground authentic garam masala",
    price: 129,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    category: "spices-masalas",
    stock: 45,
    unit: "100g",
  },

  // Dairy & Paneer
  {
    id: "d1",
    name: "Fresh Paneer",
    description: "Soft and fresh organic paneer",
    price: 199,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    category: "dairy-paneer",
    stock: 25,
    unit: "200g",
  },
  {
    id: "d2",
    name: "Organic Ghee",
    description: "Pure desi cow ghee",
    price: 549,
    image: "https://images.unsplash.com/photo-1631452180775-8b4e4aa9276b?w=800&q=80",
    category: "dairy-paneer",
    stock: 40,
    unit: "500g",
  },

  // Snacks
  {
    id: "sn1",
    name: "Organic Khakhra",
    description: "Crispy whole wheat khakhra",
    price: 79,
    image: "https://images.unsplash.com/photo-1599749011927-9a72b2c03e99?w=800&q=80",
    category: "snacks",
    stock: 30,
    unit: "200g",
  },
  {
    id: "sn2",
    name: "Roasted Makhana",
    description: "Fox nuts roasted with herbs",
    price: 149,
    image: "https://images.unsplash.com/photo-1612155690984-e7c4e71b4b8b?w=800&q=80",
    category: "snacks",
    stock: 35,
    unit: "100g",
  },

  // Beverages
  {
    id: "bv1",
    name: "Organic Green Tea",
    description: "Pure Darjeeling green tea",
    price: 249,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&q=80",
    category: "beverages",
    stock: 50,
    unit: "100g",
  },
  {
    id: "bv2",
    name: "Coconut Water",
    description: "Fresh organic coconut water",
    price: 79,
    image: "https://images.unsplash.com/photo-1625604029887-45f9c2f7cbc9?w=800&q=80",
    category: "beverages",
    stock: 30,
    unit: "200ml",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  const filteredProducts = category ? products.filter((product) => product.category === category) : products

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(filteredProducts)
}

