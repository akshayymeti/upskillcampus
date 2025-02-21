import { ProductGrid } from "@/components/product/product-grid"
import { CategoryFilter } from "@/components/product/category-filter"
import { SearchBar } from "@/components/product/search-bar"
import { CategoryHeader } from "@/components/category/category-header"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryHeader />

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64">
          <CategoryFilter />
        </aside>

        <div className="flex-1">
          <SearchBar />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}

