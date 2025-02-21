import { NextResponse } from "next/server"

const recipes = [
  {
    id: "r1",
    title: "Paneer Butter Masala",
    description: "Rich and creamy restaurant-style paneer butter masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
    prepTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Main Course",
    ingredients: ["500g paneer", "2 onions", "4 tomatoes", "2 tbsp butter", "2 tbsp cream", "Spices and herbs"],
    instructions: [
      "Prepare the tomato-onion gravy",
      "Add spices and cook",
      "Add paneer and simmer",
      "Finish with cream and butter",
    ],
  },
  {
    id: "r2",
    title: "Masala Dosa",
    description: "Crispy South Indian dosa with spiced potato filling",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
    prepTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Breakfast",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
    instructions: ["Prepare potato filling", "Heat dosa tawa", "Spread batter and cook", "Add filling and serve"],
  },
  {
    id: "r3",
    title: "Mango Lassi",
    description: "Refreshing yogurt drink with sweet mangoes",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
    prepTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Beverages",
    ingredients: ["2 ripe mangoes", "2 cups yogurt", "Sugar to taste", "Cardamom powder"],
    instructions: ["Peel and chop mangoes", "Blend with yogurt", "Add sugar and cardamom", "Chill and serve"],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  const filteredRecipes = category
    ? recipes.filter((recipe) => recipe.category.toLowerCase() === category.toLowerCase())
    : recipes

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(filteredRecipes)
}

