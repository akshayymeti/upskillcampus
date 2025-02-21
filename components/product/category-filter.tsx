"use client"

import { useState } from "react"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  {
    id: "fruits-vegetables",
    label: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
  },
  {
    id: "indian-staples",
    label: "Indian Staples",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
  },
  {
    id: "spices-masalas",
    label: "Spices & Masalas",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
  },
  {
    id: "dairy-paneer",
    label: "Dairy & Paneer",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  },
  {
    id: "snacks",
    label: "Snacks",
    image: "https://images.unsplash.com/photo-1599749011927-9a72b2c03e99?w=800&q=80",
  },
  {
    id: "beverages",
    label: "Beverages",
    image: "https://images.unsplash.com/photo-1544252890-c3e95e867798?w=800&q=80",
  },
]

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const handleCategoryChange = (categoryId: string) => {
    const newCategory = selectedCategory === categoryId ? "" : categoryId
    setSelectedCategory(newCategory)
    onCategoryChange?.(newCategory)
  }

  return (
    <div className="space-y-6">
      <h3 className="font-semibold mb-4">Categories</h3>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="space-y-2">
            <div className="relative h-20 rounded-lg overflow-hidden">
              <Image src={category.image || "/placeholder.svg"} alt={category.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategory === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

