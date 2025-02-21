"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  servings: number
  difficulty: string
  category: string
  ingredients: string[]
  instructions: string[]
}

export function RecipeGrid() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("/api/recipes")
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="group rounded-lg border overflow-hidden">
          <div className="relative h-48">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <Badge className="absolute top-2 right-2">{recipe.category}</Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{recipe.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{recipe.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {recipe.prepTime}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {recipe.servings} servings
              </div>
            </div>
            <Link href={`/recipes/${recipe.id}`}>
              <Button className="w-full">View Recipe</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

