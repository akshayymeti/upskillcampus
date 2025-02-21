import { RecipeGrid } from "@/components/recipe/recipe-grid"
import { RecipeFilter } from "@/components/recipe/recipe-filter"
import { SearchBar } from "@/components/product/search-bar"

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Healthy Recipes</h1>
        <p className="text-muted-foreground">Discover delicious and nutritious recipes using our organic ingredients</p>
      </section>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64">
          <RecipeFilter />
        </aside>

        <div className="flex-1">
          <SearchBar />
          <RecipeGrid />
        </div>
      </div>
    </div>
  )
}

