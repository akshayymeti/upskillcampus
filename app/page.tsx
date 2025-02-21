"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product/product-grid"
import { CategoryFilter } from "@/components/product/category-filter"
import { SearchBar } from "@/components/product/search-bar"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Fresh Organic Groceries</h1>
        <p className="text-muted-foreground">Shop fresh, organic produce and groceries delivered to your door</p>
      </section>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64">
          <CategoryFilter onCategoryChange={setSelectedCategory} />
        </aside>

        <div className="flex-1">
          <SearchBar />
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

