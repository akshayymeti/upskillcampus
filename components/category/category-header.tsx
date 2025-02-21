import Image from "next/image"

export function CategoryHeader() {
  return (
    <section className="mb-12">
      <div className="relative h-64 rounded-lg overflow-hidden mb-8">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=80"
          alt="Fresh produce"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
            <p className="text-lg">Explore our wide selection of organic products</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white font-semibold text-lg text-center px-2">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const categories = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
  },
  {
    id: "indian-staples",
    name: "Indian Staples",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
  },
  {
    id: "spices-masalas",
    name: "Spices & Masalas",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
  },
  {
    id: "dairy-paneer",
    name: "Dairy & Paneer",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  },
  {
    id: "snacks",
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1599749011927-9a72b2c03e99?w=800&q=80",
  },
  {
    id: "beverages",
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1544252890-c3e95e867798?w=800&q=80",
  },
]

