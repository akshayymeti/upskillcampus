"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "healthy", label: "Healthy" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "dessert", label: "Dessert" },
]

const difficulties = [
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
]

export function RecipeFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() =>
                  setSelectedCategories((prev) =>
                    prev.includes(category.id) ? prev.filter((c) => c !== category.id) : [...prev, category.id],
                  )
                }
              />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Difficulty</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <div key={difficulty.id} className="flex items-center space-x-2">
              <Checkbox
                id={difficulty.id}
                checked={selectedDifficulties.includes(difficulty.id)}
                onCheckedChange={() =>
                  setSelectedDifficulties((prev) =>
                    prev.includes(difficulty.id) ? prev.filter((d) => d !== difficulty.id) : [...prev, difficulty.id],
                  )
                }
              />
              <Label htmlFor={difficulty.id}>{difficulty.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

